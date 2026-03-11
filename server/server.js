import express from 'express';
import cors from 'cors';
import pg from 'pg';
const { Pool } = pg;
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const app = express();
const PORT = process.env.PORT || 8080;
const SECRET_KEY = process.env.JWT_SECRET || 'votenaut-secret-key-prod-2026';

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
// In GCP Cloud Run, this will naturally connect to Cloud SQL using environment variables
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Initialize Database Tables
const initDb = async () => {
    try {
        const client = await pool.connect();
        console.log('Connected to PostgreSQL Database.');

        await client.query(`
      CREATE TABLE IF NOT EXISTS contexts (
        id VARCHAR(255) PRIMARY KEY,
        icon VARCHAR(255) DEFAULT 'ph ph-star',
        titles JSONB NOT NULL DEFAULT '{}',
        parent_id VARCHAR(255),
        image_url VARCHAR(255),
        createdAt TIMESTAMP NOT NULL
      );

      CREATE TABLE IF NOT EXISTS users (
        uid VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        img VARCHAR(255),
        role VARCHAR(50) DEFAULT 'user',
        votes_count INTEGER DEFAULT 0,
        createdAt TIMESTAMP NOT NULL
      );

      CREATE TABLE IF NOT EXISTS votes_history (
        id VARCHAR(255) PRIMARY KEY,
        voter_username VARCHAR(255) NOT NULL,
        target_user_id VARCHAR(255) NOT NULL,
        context_id VARCHAR(255) NOT NULL,
        cast_at TIMESTAMP NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        status VARCHAR(50) DEFAULT 'active'
      );

      CREATE TABLE IF NOT EXISTS category_recommendations (
        id VARCHAR(255) PRIMARY KEY,
        title_en VARCHAR(255) NOT NULL,
        parent_id VARCHAR(255),
        suggested_by VARCHAR(255) NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        createdAt TIMESTAMP NOT NULL
      );
    `);

        console.log('PostgreSQL Tables scaffolded.');
        client.release();
    } catch (err) {
        if (process.env.DATABASE_URL) {
            console.error('Error initializing DB:', err.message);
        } else {
            console.log('No DATABASE_URL provided. Skipping DB Init (Local Mock Mode).');
        }
    }
};

// Authentication Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// JWT Authentication Routes
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const uid = 'u_' + Date.now();
        const img = `https://api.dicebear.com/9.x/micah/svg?seed=${name.replace(/\s/g, '')}&backgroundColor=transparent`;
        const role = name.toLowerCase() === 'admin' ? 'admin' : 'user';
        const createdAt = new Date().toISOString();

        const client = await pool.connect();
        await client.query(
            'INSERT INTO users (uid, name, email, password, img, role, createdAt) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [uid, name, email, hashedPassword, img, role, createdAt]
        );
        client.release();

        // Auto-login after register
        const token = jwt.sign({ uid, name, email, role }, SECRET_KEY, { expiresIn: '24h' });
        res.status(201).json({ token, user: { uid, name, email, img, role, votes_count: 0 } });
    } catch (err) {
        if (err.message.includes('unique constraint')) {
            return res.status(400).json({ error: 'Email already in use.' });
        }
        console.error(err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];
        client.release();

        if (!user) return res.status(400).json({ error: 'Invalid credentials or user not found.' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ error: 'Invalid credentials or user not found.' });

        const token = jwt.sign({ uid: user.uid, name: user.name, email: user.email, role: user.role }, SECRET_KEY, { expiresIn: '24h' });

        // Don't send password hash back
        delete user.password;
        res.json({ token, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// App Data Routes
app.get('/api/contexts', async (req, res) => {
    try {
        if (!process.env.DATABASE_URL) return res.json([]);
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM base_contexts ORDER BY id');
        client.release();

        const neonPalettes = [
            "00f0ff,ff0055,7000ff", "00ffaa,00aaff,0000ff", "ffaa00,ff0055,9900ff",
            "ff00ff,00ffff,ffff00", "00ff00,ff00ff,00ffff", "ff3366,33ccff,ffff66",
            "ff6600,ff0066,cc00ff", "00ccff,00ffcc,ccff00", "ff00cc,cc00ff,0055ff",
            "00ffcc,ff00cc,ffcc00", "5500ff,ff0055,00ff55", "ff5500,0055ff,55ff00"
        ];

        const mappedContexts = result.rows.map(row => {
            try {
                // Safely parse titles whether from JSONB (object) or TEXT (string)
                let parsedTitles = row.titles;
                if (typeof row.titles === 'string') {
                    try { parsedTitles = JSON.parse(row.titles); } catch (_) { parsedTitles = { en: row.id }; }
                }
                if (!parsedTitles || typeof parsedTitles !== 'object') parsedTitles = { en: row.id };

                const seedName = parsedTitles.en || row.id;

                // Always generate a unique geometric image unless a custom one is stored
                let imgUrl = row.image_url;
                const isGenerated = imgUrl && imgUrl.includes('dicebear.com');
                const isOldPlaceholder = imgUrl && imgUrl.includes('/ctx_bg_');

                if (!imgUrl || isOldPlaceholder || !isGenerated) {
                    let hash = 0;
                    for (let i = 0; i < seedName.length; i++) hash = seedName.charCodeAt(i) + ((hash << 5) - hash);
                    const colorStops = neonPalettes[Math.abs(hash) % neonPalettes.length];
                    imgUrl = `https://api.dicebear.com/9.x/shapes/svg?seed=${encodeURIComponent(seedName)}&backgroundColor=050507&shape1Color=${colorStops}&shape2Color=${colorStops}&shape3Color=${colorStops}`;
                }

                return {
                    id: row.id,
                    titles: parsedTitles,
                    icon: row.icon,
                    participants: row.participants,
                    imageUrl: imgUrl,
                    parentId: row.parent_id,
                    createdAt: row.created_at
                };
            } catch (rowErr) {
                console.warn('Row mapping error:', rowErr.message, row.id);
                return null; // skip broken row
            }
        }).filter(Boolean);

        res.json(mappedContexts);
    } catch (err) {
        console.warn('DB Error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Forgot Password Route
app.post('/api/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: 'Email is required.' });

        if (!process.env.DATABASE_URL) {
            return res.status(200).json({ message: 'If the email exists, a reset link was sent.' });
        }

        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        client.release();

        if (result.rows.length === 0) {
            // Don't reveal whether the email exists for security
            return res.status(200).json({ message: 'If the email exists, a reset link was sent.' });
        }

        const user = result.rows[0];

        // Generate a short-lived reset token (valid 1 hour)
        const resetToken = jwt.sign({ uid: user.uid, email: user.email, purpose: 'reset' }, SECRET_KEY, { expiresIn: '1h' });
        const resetLink = `https://votenaut.vercel.app/?reset_token=${resetToken}`;

        if (!process.env.RESEND_API_KEY) {
            console.warn('[Votenaut] RESEND_API_KEY not set. Cannot send email.');
            return res.status(500).json({ error: 'Email service not configured.' });
        }

        await resend.emails.send({
            from: 'Votenaut <noreply@votenaut.com>',
            to: [email],
            subject: 'Recupera tu contraseña - Votenaut',
            html: `
                <div style="font-family:sans-serif; max-width:480px; margin:0 auto; padding:32px; background:#0a0e1a; border-radius:16px; color:#e0e0e0;">
                    <h1 style="color:#d4af37; font-size:1.6rem; margin-bottom:8px;">🔐 Recuperar Contraseña</h1>
                    <p style="color:#a0a0b0;">Hola <strong>${user.name}</strong>,</p>
                    <p style="color:#a0a0b0;">Recibimos una solicitud para restablecer tu contraseña en Votenaut.</p>
                    <p style="color:#a0a0b0;">Haz clic en el botón de abajo. El enlace expira en <strong>1 hora</strong>.</p>
                    <a href="${resetLink}" style="display:inline-block; margin:24px 0; padding:14px 28px; background:#d4af37; color:#0a0e1a; font-weight:700; border-radius:10px; text-decoration:none;">Restablecer Contraseña</a>
                    <p style="color:#606070; font-size:0.8rem;">Si no solicitaste esto, ignora este correo. Tu cuenta está segura.</p>
                    <hr style="border-color:#ffffff11; margin:24px 0;">
                    <p style="color:#404050; font-size:0.75rem;">© 2026 Votenaut · <a href="https://votenaut.vercel.app" style="color:#d4af37;">votenaut.vercel.app</a></p>
                </div>
            `
        });

        res.status(200).json({ message: 'If the email exists, a reset link was sent.' });
    } catch (err) {
        console.error('[Votenaut] Forgot password error:', err);
        res.status(500).json({ error: 'Error sending email.' });
    }
});

// Reset Password Route (consume token)
app.post('/api/reset-password', async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        if (!token || !newPassword) return res.status(400).json({ error: 'Token and new password required.' });

        let decoded;
        try {
            decoded = jwt.verify(token, SECRET_KEY);
        } catch (e) {
            return res.status(400).json({ error: 'Token inválido o expirado.' });
        }

        if (decoded.purpose !== 'reset') return res.status(400).json({ error: 'Token inválido.' });

        const hashed = await bcrypt.hash(newPassword, 10);
        const client = await pool.connect();
        await client.query('UPDATE users SET password = $1 WHERE uid = $2', [hashed, decoded.uid]);
        client.release();

        res.status(200).json({ message: 'Contraseña actualizada correctamente.' });
    } catch (err) {
        console.error('[Votenaut] Reset password error:', err);
        res.status(500).json({ error: 'Error al restablecer la contraseña.' });
    }
});

// Contexts CRUD
app.get('/api/contexts', async (req, res) => {
    try {
        if (!process.env.DATABASE_URL) return res.json([]);
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM contexts ORDER BY createdat ASC');
        client.release();
        // Map snake_case DB fields to camelCase for frontend compatibility
        const contexts = result.rows.map(row => ({
            id: row.id,
            icon: row.icon,
            titles: row.titles,
            parentId: row.parent_id,
            imageUrl: row.image_url,
            createdAt: row.createdat
        }));
        res.json(contexts);
    } catch (err) {
        console.warn('Contexts fetch error:', err.message);
        res.json([]);
    }
});

app.post('/api/contexts', async (req, res) => {
    try {
        const { id, icon, titles, parentId, imageUrl } = req.body;
        if (!id || !titles) return res.status(400).json({ error: 'id and titles are required.' });
        const client = await pool.connect();
        await client.query(
            'INSERT INTO contexts (id, icon, titles, parent_id, image_url, createdat) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (id) DO UPDATE SET icon=$2, titles=$3, parent_id=$4, image_url=$5',
            [id, icon || 'ph ph-star', JSON.stringify(titles), parentId || null, imageUrl || null, new Date().toISOString()]
        );
        client.release();
        res.status(201).json({ success: true });
    } catch (err) {
        console.error('Context save error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/contexts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { icon, titles, parentId, imageUrl } = req.body;
        const client = await pool.connect();
        await client.query(
            'UPDATE contexts SET icon=$1, titles=$2, parent_id=$3, image_url=$4 WHERE id=$5',
            [icon || 'ph ph-star', JSON.stringify(titles), parentId || null, imageUrl || null, id]
        );
        client.release();
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/contexts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const client = await pool.connect();
        await client.query('DELETE FROM contexts WHERE id=$1', [id]);
        client.release();
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/votes', async (req, res) => {
    try {
        if (!process.env.DATABASE_URL) return res.json([]);
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM votes_history WHERE status = 'active'");
        client.release();
        res.json(result.rows);
    } catch (err) {
        console.warn('DB Error:', err.message);
        res.json([]);
    }
});

app.get('/api/suggestions', async (req, res) => {
    try {
        if (!process.env.DATABASE_URL) return res.json([]);
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM category_recommendations');
        client.release();
        res.json(result.rows);
    } catch (err) {
        console.warn('DB Error:', err.message);
        res.json([]);
    }
});

// Vote Submission Route (Allows Unauthenticated)
app.post('/api/votes', async (req, res) => {
    try {
        const { targetUserId, contextId } = req.body;
        if (!targetUserId || !contextId) return res.status(400).json({ error: 'Missing fields' });

        // If user is not logged in, we use their IP Address + some salt as a "volatile" ID to enforce the 3 votes per day rule
        let voterId = 'anonymous';

        // Simple authentication check if a token was provided
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token) {
            try {
                const decoded = jwt.verify(token, SECRET_KEY);
                voterId = decoded.name;
            } catch (e) {
                // Token invalid but we allow volatile voting anyway, just track by IP
                voterId = `anon_${req.ip || req.connection.remoteAddress}`;
            }
        } else {
            voterId = `anon_${req.ip || req.connection.remoteAddress}`;
        }

        const client = await pool.connect();

        // Check daily limits for this specific voter ID
        const todayStr = new Date().toISOString().split('T')[0];
        const userVotesParams = [voterId, `${todayStr}%`];
        const limitsCheck = await client.query(
            "SELECT count(*) FROM votes_history WHERE voter_username = $1 AND cast_at::text LIKE $2",
            userVotesParams
        );

        if (parseInt(limitsCheck.rows[0].count) >= 3) {
            client.release();
            return res.status(403).json({ error: 'Daily limit reached.' });
        }

        const voteId = 'v_' + Date.now();
        const castAt = new Date().toISOString();

        // Expires exactly 24 hours for anonymous, 30 days for logged in
        const expiresAtDate = new Date();
        if (voterId.startsWith('anon_')) {
            expiresAtDate.setHours(expiresAtDate.getHours() + 24);
        } else {
            expiresAtDate.setDate(expiresAtDate.getDate() + 30);
        }
        const expiresAt = expiresAtDate.toISOString();

        await client.query(
            `INSERT INTO votes_history (id, voter_username, target_user_id, context_id, cast_at, expires_at, status)
       VALUES ($1, $2, $3, $4, $5, $6, 'active')`,
            [voteId, voterId, targetUserId, contextId, castAt, expiresAt]
        );

        client.release();
        res.status(201).json({ success: true, voteId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Health Check for Vercel
app.get('/', (req, res) => {
    res.status(200).send('Votenaut Express API running horizontally on Vercel Serverless!');
});

// Vercel Serverless Export
initDb().catch(console.error);
export default app;
