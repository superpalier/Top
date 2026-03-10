import dotenv from 'dotenv';
import pg from 'pg';
const { Pool } = pg;
dotenv.config();

// We need to pass the connection string manually since it's not in a local .env file yet
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.error("Please export DATABASE_URL before running this script.");
    console.error("Example: set DATABASE_URL=postgresql://... && node seed.js");
    process.exit(1);
}

const pool = new Pool({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
});

const baseIcons = ['ph-code', 'ph-lightbulb', 'ph-palette', 'ph-users-three', 'ph-smiley', 'ph-briefcase', 'ph-star', 'ph-rocket-launch', 'ph-planet', 'ph-cpu', 'ph-leaf', 'ph-drop'];

const defaultContextNames = [
    { en: 'Top Developer', es: 'Mejor Desarrollador', fr: 'Meilleur Développeur', de: 'Top-Entwickler' },
    { en: 'Most Innovative', es: 'Más Innovador', fr: 'Plus Innovant', de: 'Am innovativsten' },
    { en: 'Design Guru', es: 'Gurú del Diseño', fr: 'Gourou du Design', de: 'Design-Guru' },
    { en: 'Community Leader', es: 'Líder Comunitario', fr: 'Leader Communautaire', de: 'Community-Leader' },
    { en: 'Funniest Member', es: 'El Más Divertido', fr: 'Membre le plus Drôle', de: 'Lustigstes Mitglied' },
    { en: 'Best Manager', es: 'Mejor Gerente', fr: 'Meilleur Manager', de: 'Bester Manager' },
    { en: 'Rising Star', es: 'Estrella en Ascenso', fr: 'Étoile Montante', de: 'Aufgehender Stern' },
    { en: 'Tech Visionary', es: 'Visionario Tech', fr: 'Visionnaire Tech', de: 'Tech-Visionär' },
    { en: 'Top Storyteller', es: 'Mejor Orador', fr: 'Meilleur Conteur', de: 'Bester Geschichtenerzähler' },
    { en: 'Best Analyst', es: 'Mejor Analista', fr: 'Meilleur Analyste', de: 'Bester Analyst' },
    { en: 'Master Strategist', es: 'Estratega Maestro', fr: 'Maître Stratège', de: 'Meisterstratege' },
    { en: 'Bug Hunter', es: 'Cazador de Bugs', fr: 'Chasseur de Bugs', de: 'Bugjäger' },
    { en: 'Frontend Wizard', es: 'Mago Frontend', fr: 'Sorcier Frontend', de: 'Frontend-Zauberer' },
    { en: 'Backend Ninja', es: 'Ninja Backend', fr: 'Ninja Backend', de: 'Backend-Ninja' },
    { en: 'Design Architect', es: 'Arquitecto de Diseño', fr: 'Architecte en Design', de: 'Designarchitekt' },
    { en: 'Data Virtuoso', es: 'Virtuoso de Datos', fr: 'Virtuose des Données', de: 'Datenvirtuose' },
    { en: 'AI Explorer', es: 'Explorador IA', fr: 'Explorateur IA', de: 'KI-Entdecker' },
    { en: 'Product Champion', es: 'Campeón de Producto', fr: 'Champion du Produit', de: 'Produktchampion' },
    { en: 'Sales Crusher', es: 'Triturador de Ventas', fr: 'Broyeur de Ventes', de: 'Verkaufs-Crusher' },
    { en: 'Customer Hero', es: 'Héroe del Cliente', fr: 'Héros du Client', de: 'Kundenheld' }
];

async function seedContexts() {
    console.log("Connecting to Supabase PostgreSQL...");
    const client = await pool.connect();

    try {
        console.log("Creating 'base_contexts' table if it doesn't exist...");
        await client.query(`
            CREATE TABLE IF NOT EXISTS base_contexts (
                id VARCHAR(255) PRIMARY KEY,
                titles JSONB NOT NULL,
                icon VARCHAR(255),
                participants INTEGER DEFAULT 0,
                image_url VARCHAR(255),
                created_at TIMESTAMP NOT NULL
            );
        `);

        console.log("Seeding 20 contexts to Supabase...");
        const contextImages = ['/ctx_bg_1.png', '/ctx_bg_2.png', '/ctx_bg_3.png'];

        for (let i = 0; i < defaultContextNames.length; i++) {
            const contextId = `ctx_${i + 1}`;
            const titles = JSON.stringify(defaultContextNames[i]);
            const icon = baseIcons[i % baseIcons.length];
            const participants = Math.floor(Math.random() * 800) + 100;
            const contextImgUrl = contextImages[i % contextImages.length];
            const createdAt = new Date().toISOString();

            await client.query(
                `INSERT INTO base_contexts (id, titles, icon, participants, image_url, created_at)
                 VALUES ($1, $2, $3, $4, $5, $6)
                 ON CONFLICT (id) DO UPDATE SET titles = EXCLUDED.titles, icon = EXCLUDED.icon, image_url = EXCLUDED.image_url`,
                [contextId, titles, icon, participants, contextImgUrl, createdAt]
            );

            console.log(`Successfully wrote ${contextId} to Supabase.`);
        }
        console.log("Seeding complete! You can now see contexts in the app.");
    } catch (err) {
        console.error("Error during seeding:", err);
    } finally {
        client.release();
        pool.end();
    }
}

seedContexts();
