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

const defaultContexts = [
    // Top-level
    { id: 'music', titles: { en: 'Music', es: 'Música', fr: 'Musique', de: 'Musik' }, icon: 'ph-music-notes', parentId: null },
    { id: 'tech', titles: { en: 'Technology', es: 'Tecnología', fr: 'Technologie', de: 'Technologie' }, icon: 'ph-cpu', parentId: null },
    { id: 'sports', titles: { en: 'Sports', es: 'Deportes', fr: 'Sports', de: 'Sport' }, icon: 'ph-trophy', parentId: null },
    { id: 'gaming', titles: { en: 'Gaming', es: 'Videojuegos', fr: 'Jeux Vidéo', de: 'Gaming' }, icon: 'ph-game-controller', parentId: null },
    { id: 'cinema', titles: { en: 'Cinema', es: 'Cine', fr: 'Cinéma', de: 'Kino' }, icon: 'ph-film-strip', parentId: null },
    { id: 'science', titles: { en: 'Science', es: 'Ciencia', fr: 'Science', de: 'Wissenschaft' }, icon: 'ph-atom', parentId: null },
    { id: 'art', titles: { en: 'Art', es: 'Arte', fr: 'Art', de: 'Kunst' }, icon: 'ph-palette', parentId: null },

    // Sub-levels Music
    { id: 'rock', titles: { en: 'Rock', es: 'Rock', fr: 'Rock', de: 'Rock' }, icon: 'ph-guitar', parentId: 'music' },
    { id: 'electronic', titles: { en: 'Electronic', es: 'Electrónica', fr: 'Électronique', de: 'Elektronik' }, icon: 'ph-speaker-hifi', parentId: 'music' },

    // Sub-sub-levels Music
    { id: 'techno', titles: { en: 'Techno', es: 'Techno', fr: 'Techno', de: 'Techno' }, icon: 'ph-vinyl', parentId: 'electronic' },
    { id: 'progressive', titles: { en: 'Progressive Rock', es: 'Rock Progresivo', fr: 'Rock Progressif', de: 'Progressive Rock' }, icon: 'ph-guitar', parentId: 'rock' },

    // Sub-levels Tech
    { id: 'ai', titles: { en: 'Artificial Intelligence', es: 'IA', fr: 'IA', de: 'KI' }, icon: 'ph-robot', parentId: 'tech' },
    { id: 'web', titles: { en: 'Web Development', es: 'Desarrollo Web', fr: 'Dév Web', de: 'Webentwicklung' }, icon: 'ph-browser', parentId: 'tech' },

    // Sub-sub-levels Tech
    { id: 'genai', titles: { en: 'Generative AI', es: 'IA Generativa', fr: 'IA Générative', de: 'Generative KI' }, icon: 'ph-sparkle', parentId: 'ai' },
    { id: 'react', titles: { en: 'React Ecosystem', es: 'Ecosistema React', fr: 'React', de: 'React' }, icon: 'ph-atom', parentId: 'web' },

    // Sub-levels Sports
    { id: 'football', titles: { en: 'Football', es: 'Fútbol', fr: 'Football', de: 'Fußball' }, icon: 'ph-soccer-ball', parentId: 'sports' },
    { id: 'basketball', titles: { en: 'Basketball', es: 'Baloncesto', fr: 'Basket', de: 'Basketball' }, icon: 'ph-basketball', parentId: 'sports' },

    // Sub-sub-levels Sports
    { id: 'champions', titles: { en: 'Champions League', es: 'Champions League', fr: 'Champions League', de: 'Champions League' }, icon: 'ph-star', parentId: 'football' },
    { id: 'nba', titles: { en: 'NBA', es: 'NBA', fr: 'NBA', de: 'NBA' }, icon: 'ph-shield', parentId: 'basketball' },

    // Sub-levels Gaming
    { id: 'rpg', titles: { en: 'RPG', es: 'RPG', fr: 'RPG', de: 'RPG' }, icon: 'ph-castle-turret', parentId: 'gaming' },
    { id: 'fps', titles: { en: 'FPS', es: 'FPS', fr: 'FPS', de: 'FPS' }, icon: 'ph-target', parentId: 'gaming' },

    // Sub-sub-levels Gaming
    { id: 'openworld', titles: { en: 'Open World RPG', es: 'RPG de Mundo Abierto', fr: 'RPG Open World', de: 'Open World RPG' }, icon: 'ph-mountains', parentId: 'rpg' },

    // Sub-levels Cinema
    { id: 'scifi', titles: { en: 'Sci-Fi', es: 'Ciencia Ficción', fr: 'Sci-Fi', de: 'Sci-Fi' }, icon: 'ph-rocket-launch', parentId: 'cinema' },
    { id: 'horror', titles: { en: 'Horror', es: 'Terror', fr: 'Horreur', de: 'Horror' }, icon: 'ph-skull', parentId: 'cinema' },

    // Sub-levels Science
    { id: 'space', titles: { en: 'Space Exploration', es: 'Exploración Espacial', fr: 'Espace', de: 'Raumfahrt' }, icon: 'ph-planet', parentId: 'science' }
];

async function seedContexts() {
    console.log("Connecting to Supabase PostgreSQL...");
    const client = await pool.connect();

    try {
        console.log("Ensuring 'base_contexts' table and 'parent_id' column exist...");
        await client.query(`
            CREATE TABLE IF NOT EXISTS base_contexts (
                id VARCHAR(255) PRIMARY KEY,
                titles JSONB NOT NULL,
                icon VARCHAR(255),
                participants INTEGER DEFAULT 0,
                image_url VARCHAR(255),
                created_at TIMESTAMP NOT NULL
            );
            ALTER TABLE base_contexts ADD COLUMN IF NOT EXISTS parent_id VARCHAR(255);
            -- Clean up old numeric placeholders if they exist to make room for the new elegant hierarchy
            DELETE FROM base_contexts WHERE id ~ '^ctx_[0-9]+$';
        `);

        console.log("Seeding hierarchical contexts to Supabase...");
        for (const ctx of defaultContexts) {
            const contextId = ctx.id;
            const titles = JSON.stringify(ctx.titles);
            const icon = ctx.icon;
            const participants = Math.floor(Math.random() * 800) + 100;
            const seedName = ctx.titles.en;
            let hash = 0;
            for (let j = 0; j < seedName.length; j++) hash = seedName.charCodeAt(j) + ((hash << 5) - hash);
            const neonPalettes = [
                "00f0ff,ff0055,7000ff", "00ffaa,00aaff,0000ff", "ffaa00,ff0055,9900ff",
                "ff00ff,00ffff,ffff00", "00ff00,ff00ff,00ffff", "ff3366,33ccff,ffff66",
                "ff6600,ff0066,cc00ff", "00ccff,00ffcc,ccff00", "ff00cc,cc00ff,0055ff",
                "00ffcc,ff00cc,ffcc00", "5500ff,ff0055,00ff55", "ff5500,0055ff,55ff00"
            ];
            const colorStops = neonPalettes[Math.abs(hash) % neonPalettes.length];
            const contextImgUrl = `https://api.dicebear.com/9.x/shapes/svg?seed=${encodeURIComponent(seedName)}&backgroundColor=050507&shape1Color=${colorStops}&shape2Color=${colorStops}&shape3Color=${colorStops}`;

            const createdAt = new Date().toISOString();

            await client.query(
                `INSERT INTO base_contexts (id, titles, icon, participants, image_url, parent_id, created_at)
                 VALUES ($1, $2, $3, $4, $5, $6, $7)
                 ON CONFLICT (id) DO UPDATE SET titles = EXCLUDED.titles, icon = EXCLUDED.icon, image_url = EXCLUDED.image_url, parent_id = EXCLUDED.parent_id`,
                [contextId, titles, icon, participants, contextImgUrl, ctx.parentId, createdAt]
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
