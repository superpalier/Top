import express from 'express';
import cors from 'cors';
import pg from 'pg';
const { Pool } = pg;
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 8080;
const SECRET_KEY = process.env.JWT_SECRET || 'gcp-cloud-run-pyramida-secret-key';

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

        // Map the snake_case DB fields to the camelCase expected by the frontend
        // Inject dynamic unique premium backgrounds if missing from DB
        const mappedContexts = result.rows.map(row => {
            let imgUrl = row.image_url;
            if (!imgUrl) {
                if (row.id === 'ctx_1') imgUrl = '/ctx_bg_1.png';
                else if (row.id === 'ctx_2') imgUrl = '/ctx_bg_2.png';
                else if (row.id === 'ctx_3') imgUrl = '/ctx_bg_3.png';
                else imgUrl = `https://api.dicebear.com/9.x/shapes/svg?seed=${row.id}&backgroundColor=050507&shape1Color=00f0ff,ff0055,7000ff&shape2Color=00f0ff,ff0055,7000ff&shape3Color=00f0ff,ff0055,7000ff`;
            }

            return {
                id: row.id,
                titles: row.titles,
                icon: row.icon,
                participants: row.participants,
                imageUrl: imgUrl,
                createdAt: row.created_at
            };
        });

        res.json(mappedContexts);
    } catch (err) {
        console.warn('DB Error:', err.message);
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
app.get('/api/', (req, res) => {
    res.status(200).send('Pyramida Express API running horizontally on Vercel Serverless!');
});

// Vercel Serverless Export
initDb().catch(console.error);
export default app;
