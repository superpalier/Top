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
    // --- ENTERTAINMENT ---
    { id: 'entertainment', titles: { en: 'Entertainment', es: 'Entretenimiento', fr: 'Divertissement', de: 'Unterhaltung' }, icon: 'ph-popcorn', parentId: null },
    { id: 'music', titles: { en: 'Music', es: 'Música', fr: 'Musique', de: 'Musik' }, icon: 'ph-music-notes', parentId: 'entertainment' },
    { id: 'rock', titles: { en: 'Rock', es: 'Rock', fr: 'Rock', de: 'Rock' }, icon: 'ph-guitar', parentId: 'music' },
    { id: 'classic_rock', titles: { en: 'Classic Rock', es: 'Rock Clásico', fr: 'Rock Classique', de: 'Classic Rock' }, icon: 'ph-vinyl', parentId: 'rock' },
    { id: 'indie_rock', titles: { en: 'Indie Rock', es: 'Rock Indie', fr: 'Rock Indie', de: 'Indie Rock' }, icon: 'ph-guitar', parentId: 'rock' },
    { id: 'metal', titles: { en: 'Metal', es: 'Metal', fr: 'Metal', de: 'Metal' }, icon: 'ph-skull', parentId: 'rock' },
    { id: 'electronic', titles: { en: 'Electronic', es: 'Electrónica', fr: 'Électronique', de: 'Elektronik' }, icon: 'ph-speaker-hifi', parentId: 'music' },
    { id: 'techno', titles: { en: 'Techno', es: 'Techno', fr: 'Techno', de: 'Techno' }, icon: 'ph-vinyl', parentId: 'electronic' },
    { id: 'house', titles: { en: 'House', es: 'House', fr: 'House', de: 'House' }, icon: 'ph-waves', parentId: 'electronic' },
    { id: 'synthwave', titles: { en: 'Synthwave', es: 'Synthwave', fr: 'Synthwave', de: 'Synthwave' }, icon: 'ph-sun-horizon', parentId: 'electronic' },
    { id: 'pop', titles: { en: 'Pop', es: 'Pop', fr: 'Pop', de: 'Pop' }, icon: 'ph-star', parentId: 'music' },
    { id: 'jazz', titles: { en: 'Jazz', es: 'Jazz', fr: 'Jazz', de: 'Jazz' }, icon: 'ph-trumpet', parentId: 'music' },
    { id: 'hiphop', titles: { en: 'Hip Hop', es: 'Hip Hop', fr: 'Hip Hop', de: 'Hip Hop' }, icon: 'ph-microphone-stage', parentId: 'music' },
    { id: 'cinema', titles: { en: 'Cinema', es: 'Cine', fr: 'Cinéma', de: 'Kino' }, icon: 'ph-film-strip', parentId: 'entertainment' },
    { id: 'scifi', titles: { en: 'Sci-Fi', es: 'Ciencia Ficción', fr: 'Sci-Fi', de: 'Sci-Fi' }, icon: 'ph-rocket-launch', parentId: 'cinema' },
    { id: 'horror', titles: { en: 'Horror', es: 'Terror', fr: 'Horreur', de: 'Horror' }, icon: 'ph-skull', parentId: 'cinema' },
    { id: 'animation', titles: { en: 'Animation', es: 'Animación', fr: 'Animation', de: 'Animation' }, icon: 'ph-palette', parentId: 'cinema' },
    { id: 'anime', titles: { en: 'Anime', es: 'Anime', fr: 'Anime', de: 'Anime' }, icon: 'ph-shooting-star', parentId: 'animation' },
    { id: 'gaming', titles: { en: 'Gaming', es: 'Videojuegos', fr: 'Jeux Vidéo', de: 'Gaming' }, icon: 'ph-game-controller', parentId: 'entertainment' },
    { id: 'rpg', titles: { en: 'RPG', es: 'RPG', fr: 'RPG', de: 'RPG' }, icon: 'ph-castle-turret', parentId: 'gaming' },
    { id: 'fps', titles: { en: 'FPS', es: 'FPS', fr: 'FPS', de: 'FPS' }, icon: 'ph-crosshair', parentId: 'gaming' },
    { id: 'moba', titles: { en: 'MOBA', es: 'MOBA', fr: 'MOBA', de: 'MOBA' }, icon: 'ph-sword', parentId: 'gaming' },

    // --- TECHNOLOGY ---
    { id: 'tech', titles: { en: 'Technology', es: 'Tecnología', fr: 'Technologie', de: 'Technologie' }, icon: 'ph-cpu', parentId: null },
    { id: 'ai', titles: { en: 'Artificial Intelligence', es: 'IA', fr: 'IA', de: 'KI' }, icon: 'ph-robot', parentId: 'tech' },
    { id: 'genai', titles: { en: 'Generative AI', es: 'IA Generativa', fr: 'IA Générative', de: 'Generative KI' }, icon: 'ph-magic-wand', parentId: 'ai' },
    { id: 'ml', titles: { en: 'Machine Learning', es: 'Aprendizaje Automático', fr: 'ML', de: 'ML' }, icon: 'ph-brain', parentId: 'ai' },
    { id: 'robotics', titles: { en: 'Robotics', es: 'Robótica', fr: 'Robotique', de: 'Robotik' }, icon: 'ph-armchair', parentId: 'ai' },
    { id: 'dev', titles: { en: 'Development', es: 'Desarrollo', fr: 'Développement', de: 'Entwicklung' }, icon: 'ph-code', parentId: 'tech' },
    { id: 'webdev', titles: { en: 'Web Dev', es: 'Desarrollo Web', fr: 'Dév Web', de: 'Webentwicklung' }, icon: 'ph-browser', parentId: 'dev' },
    { id: 'react_dev', titles: { en: 'React', es: 'React', fr: 'React', de: 'React' }, icon: 'ph-atom', parentId: 'webdev' },
    { id: 'backend', titles: { en: 'Backend', es: 'Backend', fr: 'Backend', de: 'Backend' }, icon: 'ph-database', parentId: 'webdev' },
    { id: 'cybersec', titles: { en: 'Cybersecurity', es: 'Ciberseguridad', fr: 'Cybersécurité', de: 'Cybersicherheit' }, icon: 'ph-shield-checkered', parentId: 'tech' },
    { id: 'hardware', titles: { en: 'Hardware', es: 'Hardware', fr: 'Hardware', de: 'Hardware' }, icon: 'ph-circuit-board', parentId: 'tech' },
    { id: 'gpus', titles: { en: 'GPUs', es: 'GPUs', fr: 'GPUs', de: 'GPUs' }, icon: 'ph-image', parentId: 'hardware' },

    // --- SCIENCE ---
    { id: 'science', titles: { en: 'Science', es: 'Ciencia', fr: 'Science', de: 'Wissenschaft' }, icon: 'ph-atom', parentId: null },
    { id: 'space', titles: { en: 'Space', es: 'Espacio', fr: 'Espace', de: 'Weltraum' }, icon: 'ph-planet', parentId: 'science' },
    { id: 'astronomy', titles: { en: 'Astronomy', es: 'Astronomía', fr: 'Astronomie', de: 'Astronomie' }, icon: 'ph-telescope', parentId: 'space' },
    { id: 'physics', titles: { en: 'Physics', es: 'Física', fr: 'Physique', de: 'Physik' }, icon: 'ph-magnet', parentId: 'science' },
    { id: 'quantum', titles: { en: 'Quantum Physics', es: 'Física Cuántica', fr: 'Physique Quantique', de: 'Quantenphysik' }, icon: 'ph-sparkle', parentId: 'physics' },
    { id: 'biology', titles: { en: 'Biology', es: 'Biología', fr: 'Biologie', de: 'Biologie' }, icon: 'ph-dna', parentId: 'science' },
    { id: 'genetics', titles: { en: 'Genetics', es: 'Genética', fr: 'Génétique', de: 'Genetik' }, icon: 'ph-fingerprint', parentId: 'biology' },

    // --- SPORTS ---
    { id: 'sports', titles: { en: 'Sports', es: 'Deportes', fr: 'Sports', de: 'Sport' }, icon: 'ph-trophy', parentId: null },
    { id: 'football', titles: { en: 'Football', es: 'Fútbol', fr: 'Football', de: 'Fußball' }, icon: 'ph-soccer-ball', parentId: 'sports' },
    { id: 'basketball', titles: { en: 'Basketball', es: 'Baloncesto', fr: 'Basket', de: 'Basketball' }, icon: 'ph-basketball', parentId: 'sports' },
    { id: 'nba', titles: { en: 'NBA', es: 'NBA', fr: 'NBA', de: 'NBA' }, icon: 'ph-crown', parentId: 'basketball' },
    { id: 'tennis', titles: { en: 'Tennis', es: 'Tenis', fr: 'Tennis', de: 'Tennis' }, icon: 'ph-tennis-ball', parentId: 'sports' },
    { id: 'f1', titles: { en: 'Formula 1', es: 'Fórmula 1', fr: 'F1', de: 'Formel 1' }, icon: 'ph-steering-wheel', parentId: 'sports' },
    { id: 'esports', titles: { en: 'eSports', es: 'eSports', fr: 'eSports', de: 'eSports' }, icon: 'ph-game-controller', parentId: 'sports' },

    // --- LIFESTYLE ---
    { id: 'lifestyle', titles: { en: 'Lifestyle', es: 'Estilo de Vida', fr: 'Mode de vie', de: 'Lifestyle' }, icon: 'ph-heartbeat', parentId: null },
    { id: 'travel', titles: { en: 'Travel', es: 'Viajes', fr: 'Voyages', de: 'Reisen' }, icon: 'ph-airplane-tilt', parentId: 'lifestyle' },
    { id: 'gastronomy', titles: { en: 'Gastronomy', es: 'Gastronomía', fr: 'Gastronomie', de: 'Gastronomie' }, icon: 'ph-cooking-pot', parentId: 'lifestyle' },
    { id: 'vegan', titles: { en: 'Vegan', es: 'Vegano', fr: 'Végan', de: 'Vegan' }, icon: 'ph-leaf', parentId: 'gastron gastronomy' },
    { id: 'wellness', titles: { en: 'Wellness', es: 'Bienestar', fr: 'Bien-être', de: 'Wellness' }, icon: 'ph-feather', parentId: 'lifestyle' },
    { id: 'fashion', titles: { en: 'Fashion', es: 'Moda', fr: 'Mode', de: 'Mode' }, icon: 'ph-t-shirt', parentId: 'lifestyle' },
    { id: 'pets', titles: { en: 'Pets', es: 'Mascotas', fr: 'Animaux', de: 'Haustiere' }, icon: 'ph-cat', parentId: 'lifestyle' },
    { id: 'dogs', titles: { en: 'Dogs', es: 'Perros', fr: 'Chiens', de: 'Hunde' }, icon: 'ph-dog', parentId: 'pets' },

    // --- BUSINESS ---
    { id: 'business', titles: { en: 'Business', es: 'Negocios', fr: 'Affaires', de: 'Geschäft' }, icon: 'ph-briefcase', parentId: null },
    { id: 'finance', titles: { en: 'Finance', es: 'Finanzas', fr: 'Finance', de: 'Finanzen' }, icon: 'ph-chart-line-up', parentId: 'business' },
    { id: 'crypto', titles: { en: 'Crypto', es: 'Cripto', fr: 'Crypto', de: 'Krypto' }, icon: 'ph-currency-eth', parentId: 'finance' },
    { id: 'bitcoin', titles: { en: 'Bitcoin', es: 'Bitcoin', fr: 'Bitcoin', de: 'Bitcoin' }, icon: 'ph-currency-btc', parentId: 'crypto' },
    { id: 'startups', titles: { en: 'Startups', es: 'Startups', fr: 'Startups', de: 'Startups' }, icon: 'ph-rocket', parentId: 'business' },
    { id: 'marketing', titles: { en: 'Marketing', es: 'Marketing', fr: 'Marketing', de: 'Marketing' }, icon: 'ph-megaphone', parentId: 'business' },

    // --- ART ---
    { id: 'art', titles: { en: 'Art', es: 'Arte', fr: 'Art', de: 'Kunst' }, icon: 'ph-palette', parentId: null },
    { id: 'photography', titles: { en: 'Photography', es: 'Fotografía', fr: 'Photographie', de: 'Fotografie' }, icon: 'ph-camera', parentId: 'art' },
    { id: 'architecture', titles: { en: 'Architecture', es: 'Arquitectura', fr: 'Architecture', de: 'Architektur' }, icon: 'ph-office-building', parentId: 'art' },
    { id: 'digital_art', titles: { en: 'Digital Art', es: 'Arte Digital', fr: 'Art Numérique', de: 'Digitale Kunst' }, icon: 'ph-pen-nib', parentId: 'art' },

    // --- KNOWLEDGE ---
    { id: 'knowledge', titles: { en: 'Knowledge', es: 'Conocimiento', fr: 'Connaissance', de: 'Wissen' }, icon: 'ph-books', parentId: null },
    { id: 'history', titles: { en: 'History', es: 'Historia', fr: 'Histoire', de: 'Geschichte' }, icon: 'ph-hourglass', parentId: 'knowledge' },
    { id: 'philosophy', titles: { en: 'Philosophy', es: 'Filosofía', fr: 'Philosophie', de: 'Philosophie' }, icon: 'ph-brain', parentId: 'knowledge' },
    { id: 'stoicism', titles: { en: 'Stoicism', es: 'Estoicismo', fr: 'Stoïcisme', de: 'Stoizismus' }, icon: 'ph-person', parentId: 'philosophy' },
    { id: 'psychology', titles: { en: 'Psychology', es: 'Psicología', fr: 'Psychologie', de: 'Psychologie' }, icon: 'ph-headset', parentId: 'knowledge' },
    { id: 'languages', titles: { en: 'Languages', es: 'Idiomas', fr: 'Langues', de: 'Sprachen' }, icon: 'ph-translate', parentId: 'knowledge' },

    // --- SOCIETY ---
    { id: 'society', titles: { en: 'Society', es: 'Sociedad', fr: 'Société', de: 'Gesellschaft' }, icon: 'ph-users-three', parentId: null },
    { id: 'politics', titles: { en: 'Politics', es: 'Política', fr: 'Politique', de: 'Politik' }, icon: 'ph-gavel', parentId: 'society' },
    { id: 'economics', titles: { en: 'Economics', es: 'Economía', fr: 'Économie', de: 'Wirtschaft' }, icon: 'ph-bank', parentId: 'society' },

    // --- NATURE ---
    { id: 'nature', titles: { en: 'Nature', es: 'Naturaleza', fr: 'Nature', de: 'Natur' }, icon: 'ph-tree', parentId: null },
    { id: 'environment', titles: { en: 'Environment', es: 'Medio Ambiente', fr: 'Environnement', de: 'Umwelt' }, icon: 'ph-leaf', parentId: 'nature' },
    { id: 'wildlife', titles: { en: 'Wildlife', es: 'Vida Silvestre', fr: 'Vie Sauvage', de: 'Wildtiere' }, icon: 'ph-paw-print', parentId: 'nature' },
    { id: 'oceans', titles: { en: 'Oceans', es: 'Océanos', fr: 'Océans', de: 'Ozeane' }, icon: 'ph-waves', parentId: 'nature' },

    // --- Extra Sub-Sub-Categories to reach 100+ ---
    { id: 'heavy_metal', titles: { en: 'Heavy Metal', es: 'Heavy Metal', fr: 'Heavy Metal', de: 'Heavy Metal' }, icon: 'ph-skull', parentId: 'metal' },
    { id: 'psytrance', titles: { en: 'Psytrance', es: 'Psytrance', fr: 'Psytrance', de: 'Psytrance' }, icon: 'ph-eye', parentId: 'electronic' },
    { id: 'kpop', titles: { en: 'K-Pop', es: 'K-Pop', fr: 'K-Pop', de: 'K-Pop' }, icon: 'ph-heart', parentId: 'pop' },
    { id: 'indie_dev', titles: { en: 'Indie Dev', es: 'Desarrollo Indie', fr: 'Dév Indie', de: 'Indie-Entwicklung' }, icon: 'ph-joystick', parentId: 'gamedev' },
    { id: 'cloud', titles: { en: 'Cloud Computing', es: 'Computación en la Nube', fr: 'Cloud', de: 'Cloud' }, icon: 'ph-cloud', parentId: 'tech' },
    { id: 'smart_home', titles: { en: 'Smart Home', es: 'Hogar Inteligente', fr: 'Maison Connectée', de: 'Smart Home' }, icon: 'ph-house-line', parentId: 'tech' },
    { id: 'mars', titles: { en: 'Mars Mission', es: 'Misión a Marte', fr: 'Mission Mars', de: 'Marsmission' }, icon: 'ph-planet', parentId: 'space' },
    { id: 'climate_change', titles: { en: 'Climate Change', es: 'Cambio Climático', fr: 'Changement Climatique', de: 'Klimawandel' }, icon: 'ph-thermometer-hot', parentId: 'environment' },
    { id: 'premiership', titles: { en: 'Premier League', es: 'Premier League', fr: 'Premier League', de: 'Premier League' }, icon: 'ph-shield', parentId: 'football' },
    { id: 'wimbledon', titles: { en: 'Wimbledon', es: 'Wimbledon', fr: 'Wimbledon', de: 'Wimbledon' }, icon: 'ph-trophy', parentId: 'tennis' },
    { id: 'japan_travel', titles: { en: 'Japan', es: 'Japón', fr: 'Japon', de: 'Japan' }, icon: 'ph-map-pin', parentId: 'travel' },
    { id: 'meditation', titles: { en: 'Meditation', es: 'Meditación', fr: 'Méditation', de: 'Meditation' }, icon: 'ph-drop', parentId: 'wellness' },
    { id: 'real_estate_investing', titles: { en: 'Real Estate', es: 'Inversión Inmobiliaria', fr: 'Immobilier', de: 'Immobilien' }, icon: 'ph-house', parentId: 'finance' },
    { id: 'street_photography', titles: { en: 'Street Photography', es: 'Fotografía Callejera', fr: 'Photo de Rue', de: 'Straßenfotografie' }, icon: 'ph-camera', parentId: 'photography' },
    { id: 'ancient_rome', titles: { en: 'Ancient Rome', es: 'Roma Antigua', fr: 'Rome Antique', de: 'Altes Rom' }, icon: 'ph-columns', parentId: 'history' },
    { id: 'existentialism', titles: { en: 'Existentialism', es: 'Existencialismo', fr: 'Existentialisme', de: 'Existenzialismus' }, icon: 'ph-mask-sad', parentId: 'philosophy' },
    { id: 'renewable_energy', titles: { en: 'Renewable Energy', es: 'Energía Renovable', fr: 'Énergie Renouvelable', de: 'Erneuerbare Energien' }, icon: 'ph-sun', parentId: 'nature' },
    
    // --- NEW DIVERSE CATEGORIES ---
    { id: 'supercars', titles: { en: 'Supercars', es: 'Superdeportivos', fr: 'Supercars', de: 'Supersportwagen' }, icon: 'ph-car', parentId: 'f1' },
    { id: 'cyberpunk', titles: { en: 'Cyberpunk Aesthetic', es: 'Estética Cyberpunk', fr: 'Cyberpunk', de: 'Cyberpunk' }, icon: 'ph-lightning', parentId: 'digital_art' },
    { id: 'coffee', titles: { en: 'Coffee Culture', es: 'Cultura del Café', fr: 'Café', de: 'Kaffeekultur' }, icon: 'ph-coffee', parentId: 'lifestyle' },
    { id: 'origami', titles: { en: 'Origami', es: 'Origami', fr: 'Origami', de: 'Origami' }, icon: 'ph-bird', parentId: 'art' },
    { id: 'ocean_depths', titles: { en: 'Deep Ocean', es: 'Océano Profundo', fr: 'Abysses', de: 'Tiefsee' }, icon: 'ph-fish', parentId: 'oceans' },
    { id: 'vintage_tech', titles: { en: 'Vintage Tech', es: 'Tecnología Vintage', fr: 'Vieux Tech', de: 'Vintage Tech' }, icon: 'ph-monitor', parentId: 'tech' },
    { id: 'mediterranean', titles: { en: 'Mediterranean Cuisine', es: 'Cocina Mediterránea', fr: 'Méditerranéenne', de: 'Mediterran' }, icon: 'ph-bowl-food', parentId: 'gastronomy' },
    { id: 'urban_exploration', titles: { en: 'Urban Exploration', es: 'Exploración Urbana', fr: 'Urbex', de: 'Urban Exploration' }, icon: 'ph-flashlight', parentId: 'lifestyle' },
    { id: 'jazz_vocals', titles: { en: 'Jazz Vocals', es: 'Jazz Vocal', fr: 'Jazz Vocal', de: 'Jazzgesang' }, icon: 'ph-microphone-stage', parentId: 'jazz' }
];

const FLAGSHIP_IMAGES = {
    'entertainment': '/assets/categories/entertainment.png',
    'tech': '/assets/categories/tech.png',
    'science': '/assets/categories/science.png',
    'sports': '/assets/categories/sports.png',
    'lifestyle': '/assets/categories/lifestyle.png',
    'business': '/assets/categories/business.png',
    'art': '/assets/categories/art.png',
    'knowledge': '/assets/categories/knowledge.png',
    'society': '/assets/categories/society.png',
    'nature': '/assets/categories/nature.png'
};

async function seedContexts() {
    console.log("Connecting to Supabase PostgreSQL...");
    const client = await pool.connect();

    try {
        console.log("Ensuring 'base_contexts' table and all columns exist...");
        await client.query(`
            CREATE TABLE IF NOT EXISTS contexts (
                id VARCHAR(255) PRIMARY KEY,
                titles JSONB NOT NULL,
                icon VARCHAR(255),
                participants INTEGER DEFAULT 0,
                image_url VARCHAR(255),
                parent_id VARCHAR(255),
                created_at TIMESTAMP
            );
            -- Explicitly ensure columns exist for older tables
            ALTER TABLE contexts ADD COLUMN IF NOT EXISTS parent_id VARCHAR(255);
            ALTER TABLE contexts ADD COLUMN IF NOT EXISTS image_url VARCHAR(255);
            ALTER TABLE contexts ADD COLUMN IF NOT EXISTS created_at TIMESTAMP;
            
            -- Clean up old numeric placeholders if they exist
            DELETE FROM contexts WHERE id ~ '^ctx_[0-9]+$';
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
            const keywords = seedName.split(' ');
            const mainKeyword = keywords.length > 1 ? keywords.slice(-2).join(',') : keywords[0]; 
            
            // Priority 1: Flagship hardcoded images 
            // Priority 2: High impact keywords for subcategories
            let conceptualImgUrl = FLAGSHIP_IMAGES[contextId] || 
                `https://loremflickr.com/800/600/${encodeURIComponent(mainKeyword)},vibrant,photography,concept/all?lock=${Math.abs(hash)}`;
            
            // Clean up paths for deployment
            if (conceptualImgUrl.startsWith('/')) {
                // In a production environment, you'd use the full URL or relative path
                // For Vercel/Public folder, /assets/... works if served correctly.
            }

            const createdAt = new Date().toISOString();

            await client.query(
                `INSERT INTO contexts (id, titles, icon, participants, image_url, parent_id, created_at)
                 VALUES ($1, $2, $3, $4, $5, $6, $7)
                 ON CONFLICT (id) DO UPDATE SET titles = EXCLUDED.titles, icon = EXCLUDED.icon, image_url = EXCLUDED.image_url, parent_id = EXCLUDED.parent_id`,
                [contextId, titles, icon, participants, conceptualImgUrl, ctx.parentId, createdAt]
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
