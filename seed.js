import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3DNX9fLVXkTyIUlLzrH5Peb9HFnFG9c8",
    authDomain: "topce-5bc6f.firebaseapp.com",
    projectId: "topce-5bc6f",
    storageBucket: "topce-5bc6f.firebasestorage.app",
    messagingSenderId: "178473671409",
    appId: "1:178473671409:web:6246297486d661a9896750"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
    console.log("Seeding 20 contexts to Firestore...");
    for (let i = 0; i < defaultContextNames.length; i++) {
        const contextId = `ctx_${i + 1}`;
        const docRef = doc(db, "base_contexts", contextId);

        await setDoc(docRef, {
            id: contextId,
            titles: defaultContextNames[i],
            icon: baseIcons[i % baseIcons.length],
            participants: Math.floor(Math.random() * 800) + 100,
            imageUrl: "", // empty for now to be updated via admin crud
            createdAt: new Date().toISOString()
        });

        console.log(`Successfully wrote ${contextId} to Firestore.`);
    }
    console.log("Seeding complete!");
    process.exit(0);
}

seedContexts().catch(console.error);
