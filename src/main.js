import './style.css'

import './style.css';
import { db } from './firebase.js';
import { doc, onSnapshot, setDoc, deleteDoc, increment, collection } from 'firebase/firestore';

// i18n Dictionary
const i18n = {
  en: {
    dashboard: 'Dashboard',
    allContexts: 'All Contexts',
    join: 'Join',
    contexts: 'Contexts',
    topRank: 'Top Rank',
    votes: 'Votes',
    trendingContexts: 'Trending Contexts',
    users: 'Users',
    voted: 'Voted',
    voteRule: 'Each person can cast <strong>3 votes</strong> per day (1 per context).',
    votedInCat: 'Voted in this context',
    expiresIn: 'Expires 24h',
    votesAvail: (rem) => `${rem} Votes Left Today`,
    joinPyramida: 'Join Pyramida',
    chooseUser: 'Choose a Username',
    placeholderUser: 'e.g. capcris',
    enterPyramid: 'Enter the Pyramid',
    tapToVote: 'Tap on any user to cast a vote and alter the pyramid structure.',
    alreadyVotedAlert: 'You have already voted in this context!',
    limitReachedAlert: 'Daily limit of 3 votes reached. Come back tomorrow!',
    adminPanel: 'Admin Panel',
    addNewContext: 'Add New Context',
    contextId: 'Context ID',
    iconClass: 'Phosphor Icon Class (e.g. ph-star)',
    titleEn: 'Title (English)',
    titleEs: 'Title (Spanish)',
    titleFr: 'Title (French)',
    titleDe: 'Title (German)',
    createContext: 'Create Context',
    register: 'Register',
    backToHome: 'Back to Home',
    bornOn: 'Born',
    vote: 'Vote',
    close: 'Close',
    votesCount: 'Votes',
    prev55: 'Prev 55',
    next55: 'Next 55',
    top1: 'Top 1',
    suggestCat: 'Suggest Category',
    suggestDesc: 'Have an idea for a new Pyramid context? Submit it here for Admin review!',
    titleEnInput: 'Category Title (English)',
    parentOptional: 'Parent Category (Optional)',
    submitSug: 'Submit Suggestion',
    makeApex: 'View as Top',
    voteHistory: 'Voting History',
    activeVote: 'Active',
    expiredVote: 'Expired'
  },
  es: {
    dashboard: 'Inicio',
    allContexts: 'Todos los Contextos',
    join: 'Unirse',
    contexts: 'Contextos',
    topRank: 'Mejor Rango',
    votes: 'Votos',
    trendingContexts: 'Contextos Populares',
    users: 'Usuarios',
    voted: 'Votado',
    voteRule: 'Cada persona tiene <strong>3 votos</strong> por día (1 por contexto).',
    votedInCat: 'Votaste en este contexto',
    expiresIn: 'Expira en 24h',
    votesAvail: (rem) => `${rem} Votos Restantes`,
    joinPyramida: 'Únete a Pyramida',
    chooseUser: 'Ingresa un Username',
    placeholderUser: 'ej. capcris',
    enterPyramid: 'Entrar a la Pirámide',
    tapToVote: 'Toca a cualquier usuario para votar y alterar la estructura.',
    alreadyVotedAlert: '¡Ya votaste en este contexto!',
    limitReachedAlert: 'Límite de 3 votos diarios alcanzado. ¡Vuelve mañana!',
    adminPanel: 'Panel de Admin',
    addNewContext: 'Añadir Nuevo Contexto',
    contextId: 'ID del Contexto',
    iconClass: 'Clase de Icono (ej. ph-star)',
    titleEn: 'Título (Inglés)',
    titleEs: 'Título (Español)',
    titleFr: 'Título (Francés)',
    titleDe: 'Título (Alemán)',
    createContext: 'Crear Contexto',
    register: 'Registro',
    backToHome: 'Volver al Inicio',
    bornOn: 'Nacido en',
    vote: 'Votar',
    close: 'Cerrar',
    votesCount: 'Votos',
    prev55: 'Ant 55',
    next55: 'Sig 55',
    top1: 'Top 1',
    suggestCat: 'Sugerir Categoría',
    suggestDesc: '¿Tienes una idea para un nuevo contexto? ¡Envíala para revisión de los administradores!',
    titleEnInput: 'Título (Inglés)',
    parentOptional: 'Categoría Padre (Opcional)',
    submitSug: 'Enviar Sugerencia',
    makeApex: 'Ver como Top',
    voteHistory: 'Historial de Votos',
    activeVote: 'Activo',
    expiredVote: 'Expirado'
  },
  fr: {
    dashboard: 'Accueil',
    allContexts: 'Tous les Contextes',
    join: 'Rejoindre',
    contexts: 'Contextes',
    topRank: 'Meilleur Rang',
    votes: 'Votes',
    trendingContexts: 'Contextes Tendances',
    users: 'Utilisateurs',
    voted: 'Voté',
    voteRule: '<strong>3 votes</strong> par jour maximum (1 par contexte).',
    votedInCat: 'Voté dans ce contexte',
    expiresIn: 'Expire 24h',
    votesAvail: (rem) => `${rem} Votes Restants`,
    joinPyramida: 'Rejoindre Pyramida',
    chooseUser: 'Choisir un Pseudo',
    placeholderUser: 'ex. capcris',
    enterPyramid: 'Entrer dans la Pyramide',
    tapToVote: 'Appuyez sur un utilisateur pour voter.',
    alreadyVotedAlert: 'Vous avez déjà voté ici !',
    limitReachedAlert: 'Limite quotidienne de 3 votes atteinte.',
    adminPanel: 'Panneau d\'Admin',
    addNewContext: 'Ajouter un Contexte',
    contextId: 'ID du Contexte',
    iconClass: 'Classe d\'Icône (ex. ph-star)',
    titleEn: 'Titre (Anglais)',
    titleEs: 'Titre (Espagnol)',
    titleFr: 'Titre (Français)',
    titleDe: 'Titre (Allemand)',
    createContext: 'Créer Contexte',
    register: 'S\'inscrire',
    backToHome: 'Retour à l\'Accueil',
    bornOn: 'Né(e) le',
    vote: 'Voter',
    close: 'Fermer',
    votesCount: 'Votes',
    prev55: 'Préc 55',
    next55: 'Suiv 55',
    top1: 'Top 1',
    suggestCat: 'Suggérer une Catégorie',
    suggestDesc: 'Une idée pour un nouveau contexte ? Soumettez-la ici pour évaluation !',
    titleEnInput: 'Titre (Anglais)',
    parentOptional: 'Catégorie Parente (Optionnel)',
    submitSug: 'Soumettre la suggestion',
    makeApex: 'Voir comme Sommet',
    voteHistory: 'Historique des Votes',
    activeVote: 'Actif',
    expiredVote: 'Expiré'
  },
  de: {
    dashboard: 'Dashboard',
    allContexts: 'Alle Kontexte',
    join: 'Beitreten',
    contexts: 'Kontexte',
    topRank: 'Höchster Rang',
    votes: 'Stimmen',
    trendingContexts: 'Angesagte Kontexte',
    users: 'Benutzer',
    voted: 'Gevotet',
    voteRule: '<strong>3 Stimmen</strong> pro Tag maximal (1 pro Kontext).',
    votedInCat: 'In diesem Kontext abgestimmt',
    expiresIn: 'Ablauf 24h',
    votesAvail: (rem) => `${rem} Stimmen Übrig`,
    joinPyramida: 'Pyramida Beitreten',
    chooseUser: 'Wählen Sie einen Namen',
    placeholderUser: 'z.B. capcris',
    enterPyramid: 'Die Pyramide Betreten',
    tapToVote: 'Tippen Sie auf einen Benutzer, um abzustimmen.',
    alreadyVotedAlert: 'Sie haben hier bereits abgestimmt!',
    limitReachedAlert: 'Tageslimit von 3 Stimmen erreicht.',
    adminPanel: 'Admin-Bereich',
    addNewContext: 'Neuen Kontext Hinzufügen',
    contextId: 'Kontext-ID',
    iconClass: 'Icon-Klasse (z.B. ph-star)',
    titleEn: 'Titel (Englisch)',
    titleEs: 'Titel (Spanisch)',
    titleFr: 'Titel (Französisch)',
    titleDe: 'Titel (Deutsch)',
    createContext: 'Kontext Erstellen',
    register: 'Registrieren',
    backToHome: 'Zurück zur Startseite',
    bornOn: 'Geboren am',
    vote: 'Abstimmen',
    close: 'Schließen',
    votesCount: 'Stimmen',
    prev55: 'Zurück 55',
    next55: 'Vor 55',
    top1: 'Top 1',
    suggestCat: 'Kategorie vorschlagen',
    suggestDesc: 'Idee für einen neuen Kontext? Hier zur Admin-Prüfung einreichen!',
    titleEnInput: 'Titel (Englisch)',
    parentOptional: 'Übergeordnete Kategorie (Optional)',
    submitSug: 'Vorschlag einreichen',
    makeApex: 'Als Spitze Ansehen',
    voteHistory: 'Abstimmungsverlauf',
    activeVote: 'Aktiv',
    expiredVote: 'Abgelaufen'
  }
};

// Developer Seeding Tool
const seedDatabase = async () => {
  const seedData = [
    // PARENT CATEGORIES
    {
      id: 'tech_parent', parentId: null, icon: 'ph-cpu', participants: 153, createdAt: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
      titles: { en: 'Technology', es: 'Tecnología', fr: 'Technologie', de: 'Technologie' }
    },
    {
      id: 'biz_parent', parentId: null, icon: 'ph-briefcase', participants: 153, createdAt: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      titles: { en: 'Business', es: 'Negocios', fr: 'Entreprise', de: 'Geschäft' }
    },
    {
      id: 'creative_parent', parentId: null, icon: 'ph-palette', participants: 153, createdAt: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop',
      titles: { en: 'Creative & Art', es: 'Creatividad y Arte', fr: 'Créatif et Art', de: 'Kreativität & Kunst' }
    },

    // TECH CHILDREN
    {
      id: 'top_dev', parentId: 'tech_parent', icon: 'ph-code', participants: 153, createdAt: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
      titles: { en: 'Top Developer', es: 'Mejor Desarrollador', fr: 'Meilleur Développeur', de: 'Top-Entwickler' }
    },
    {
      id: 'ninja_back', parentId: 'tech_parent', icon: 'ph-database', participants: 153, createdAt: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
      titles: { en: 'Backend Ninja', es: 'Ninja Backend', fr: 'Ninja Backend', de: 'Backend-Ninja' }
    },
    {
      id: 'ai_expl', parentId: 'tech_parent', icon: 'ph-robot', participants: 153, createdAt: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop',
      titles: { en: 'AI Explorer', es: 'Explorador IA', fr: 'Explorateur IA', de: 'KI-Forscher' }
    },

    // BUSINESS CHILDREN
    {
      id: 'master_strat', parentId: 'biz_parent', icon: 'ph-chess-knight', participants: 153, createdAt: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      titles: { en: 'Master Strategist', es: 'Estratega Maestro', fr: 'Maître Stratège', de: 'Meisterstratege' }
    },
    {
      id: 'sales_crush', parentId: 'biz_parent', icon: 'ph-chart-line-up', participants: 153, createdAt: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
      titles: { en: 'Sales Crusher', es: 'Triturador de Ventas', fr: 'Broyeur de Ventes', de: 'Verkaufscrusher' }
    },

    // CREATIVE CHILDREN
    {
      id: 'design_arch', parentId: 'creative_parent', icon: 'ph-pen-nib', participants: 153, createdAt: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
      titles: { en: 'Design Architect', es: 'Arquitecto de Diseño', fr: 'Architecte en Design', de: 'Design-Architekt' }
    },
    {
      id: 'mago_front', parentId: 'creative_parent', icon: 'ph-magic-wand', participants: 153, createdAt: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop',
      titles: { en: 'Frontend Wizard', es: 'Mago Frontend', fr: 'Sorcier Frontend', de: 'Frontend-Zauberer' }
    }
  ];

  for (const item of seedData) {
    await setDoc(doc(db, 'base_contexts', item.id), item, { merge: true });
  }
  showToast('Database Seeded Successfully with Hierarchies!', 'ph-check-circle');
};

let contexts = [];

// Listen to Firestore for real-time Contexts updates (Created by Admin)
onSnapshot(collection(db, 'base_contexts'), (snapshot) => {
  contexts = snapshot.docs.map(doc => doc.data());
  // Sort by id or createdAt if needed, here we just keep db order.

  // Re-render the app to show new contexts (especially in sidebar/home)
  if (document.getElementById('main-content')) {
    render();
  }
});

// Real-time listener for voting history of the active session
let voteHistoryLedger = [];
onSnapshot(collection(db, 'votes_history'), (snapshot) => {
  voteHistoryLedger = snapshot.docs.map(doc => doc.data());

  if (loggedInUser) {
    const today = new Date();
    // Re-evaluate limits based strictly on the user's active votes
    const userActiveVotes = voteHistoryLedger.filter(v =>
      v.voterUsername === loggedInUser.name &&
      v.status === 'active'
    );

    // Auto-Expire votes older than 30 days
    userActiveVotes.forEach(async (v) => {
      const expiry = new Date(v.expiresAt);
      if (today > expiry) {
        await setDoc(doc(db, 'votes_history', v.id), { status: 'expired' }, { merge: true });
      }
    });

    // Check if daily limit reached
    const todaysVotes = userActiveVotes.filter(v => {
      const castDate = new Date(v.castAt);
      return castDate.toDateString() === today.toDateString();
    });

    globalVotes.count = todaysVotes.length;

    // Map active contexts to disable repetitive voting
    let newContextMap = {};
    userActiveVotes.forEach(v => {
      newContextMap[v.contextId] = v.targetUserId;
    });
    globalVotes.byContext = newContextMap;

    if (document.getElementById('main-content')) render();
  }
});

let suggestions = [];
onSnapshot(collection(db, 'category_recommendations'), (snapshot) => {
  suggestions = snapshot.docs.map(doc => doc.data());
  if (currentView === 'admin' && document.getElementById('main-content')) {
    renderAdminView(document.getElementById('main-content'));
  }
});

let notifications = [];
onSnapshot(collection(db, 'notifications'), (snapshot) => {
  notifications = snapshot.docs.map(doc => doc.data()).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (document.getElementById('main-content')) render(); // Update badge
});

// Base Users pool (1000+ users simulated)
const baseNames = ['Alex', 'Jordan', 'Sam', 'Taylor', 'Casey', 'Morgan', 'Riley', 'Avery', 'Quinn', 'Reese', 'Drew', 'Blake', 'Devin', 'Harper', 'Finley', 'Robin', 'Kelly', 'Jamie', 'Skyler', 'Ash', 'Rowan'];
const baseBios = [
  "Passionate about creating impact through visual arts.",
  "Tech enthusiast and weekend hiker.",
  "Loves coffee, code, and continuous learning.",
  "Driven by innovation and community building.",
  "Avid reader and occasional amateur chef.",
  "Exploring the intersection of design and technology.",
  "Optimist, problem solver, and team player."
];

// Generate 3000 base users dynamically to simulate massive crowds
const baseUsers = Array.from({ length: 3000 }).map((_, i) => {
  const name = baseNames[i % baseNames.length] + (i > baseNames.length ? ` ${i}` : '');
  const rDay = Math.floor(Math.random() * 28) + 1;
  const rMonth = Math.floor(Math.random() * 12) + 1;
  const rYear = Math.floor(Math.random() * (2005 - 1980 + 1)) + 1980;

  const generateHandle = (base) => base.toLowerCase().replace(/\s/g, '') + Math.floor(Math.random() * 999);

  return {
    id: `u${i}`,
    name: name,
    img: `https://i.pravatar.cc/150?u=${i}`,
    dob: `${rYear}-${String(rMonth).padStart(2, '0')}-${String(rDay).padStart(2, '0')}`,
    bio: baseBios[i % baseBios.length],
    socials: {
      linkedin: Math.random() > 0.3 ? `https://linkedin.com/in/${generateHandle(name)}` : null,
      instagram: Math.random() > 0.2 ? `https://instagram.com/${generateHandle(name)}` : null,
      tiktok: Math.random() > 0.4 ? `https://tiktok.com/@${generateHandle(name)}` : null
    }
  };
});

// Generate deterministic fake votes per context for the users to simulate them being in multiple contexts
const generatePyramidData = (contextId) => {
  // Hash the string contextId to generate a predictable seed
  let seed = 0;
  for (let i = 0; i < contextId.length; i++) {
    seed = (seed << 5) - seed + contextId.charCodeAt(i);
    seed |= 0;
  }
  seed = Math.abs(seed) || 1;

  const usersWithVotes = baseUsers.map((u, i) => {
    // Generate a pseudo-random vote count based on user index and context ID
    const randomFactor = Math.sin(seed * (i + 1)) * 10000;
    const baseVotes = Math.floor(Math.abs(randomFactor - Math.floor(randomFactor)) * 5000);
    const realVotes = firebaseVotesCache[u.id] || 0;
    return { ...u, votes: baseVotes + realVotes };
  }).sort((a, b) => b.votes - a.votes);

  // Assign explicit ranking based on absolute position
  usersWithVotes.forEach((u, index) => {
    u.rank = index + 1;
  });

  // Handle Dynamic Focus and Pagination
  // We take exactly 153 users starting from the current pyramidOffsetIndex
  let visibleUsers = usersWithVotes.slice(pyramidOffsetIndex, pyramidOffsetIndex + 153);

  // Group into exactly 17 visible tiers (1 + 2 + ... + 17 = 153)
  const tiersCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const data = [];
  let userIndex = 0;

  for (let i = 0; i < tiersCount.length; i++) {
    const tierSize = tiersCount[i];
    const tierUsers = [];
    for (let j = 0; j < tierSize; j++) {
      if (userIndex < visibleUsers.length) {
        tierUsers.push(visibleUsers[userIndex]);
        userIndex++;
      }
    }
    if (tierUsers.length > 0) {
      data.push(tierUsers);
    }
  }
  return { data, totalLength: usersWithVotes.length };
};

// Function to detect supported language
const getInitialLang = () => {
  const browserLang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2).toLowerCase();
  const supported = ['en', 'es', 'fr', 'de'];
  return supported.includes(browserLang) ? browserLang : 'en';
};

// State
let currentLang = getInitialLang();
let currentView = 'home';
let previousView = '';
let loggedInUser = null;
let searchQuery = ''; // Global search state
let pyramidOffsetIndex = 0; // Pagination/offset index for the pyramid apex
let forceScrollReset = false; // Flag to discard previous scroll positions
const MAX_DAILY_VOTES = 3;
let globalVotes = { count: 0, byContext: {} }; // Tracks user's session votes { byContext: { ctxId: userId } }

// Firebase syncing state
let firebaseVotesCache = {};
let activeSnapshotUnsubscribe = null;

const app = document.querySelector('#app');

// Render App
const render = () => {
  const t = i18n[currentLang];

  // Capture current scroll to prevent jumpiness on realtime updates
  let lastScrollX = null, lastScrollY = null;
  const vp = document.getElementById('pyramid-viewport');
  if (vp) { lastScrollX = vp.scrollLeft; lastScrollY = vp.scrollTop; }

  // Manage Realtime subscriptions
  if (currentView !== previousView) {
    if (activeSnapshotUnsubscribe) {
      activeSnapshotUnsubscribe();
      activeSnapshotUnsubscribe = null;
    }
    if (currentView.startsWith('pyramid-')) {
      const ctxId = currentView.split('-')[1];
      activeSnapshotUnsubscribe = onSnapshot(doc(db, 'contexts', ctxId), (snap) => {
        if (snap.exists()) {
          firebaseVotesCache = snap.data().votes || {};
          render(); // Trigger re-render with new data
        } else {
          firebaseVotesCache = {}; // No votes yet
        }
      });
    }
    previousView = currentView;
  }

  app.innerHTML = `
    <header>
      <div style="display: flex; align-items: center; gap: 15px;">
        <button class="hamburger-btn" id="mobile-menu-btn"><i class="ph ph-list"></i></button>
        <div style="display: flex; flex-direction: column;">
          <div class="logo">Pyramida</div>
          <div style="font-size: 0.65rem; color: var(--text-secondary); font-weight: 600; letter-spacing: 1px; margin-top: -4px;">v1.1.0-neon</div>
        </div>
      </div>
      <div class="header-controls">
        <div class="custom-lang-dropdown" id="lang-dropdown">
          <div class="lang-selected" id="lang-selected">${currentLang.toUpperCase()} <i class="ph ph-caret-down"></i></div>
          <div class="lang-options" id="lang-options">
            <div class="lang-option" data-val="en">EN</div>
            <div class="lang-option" data-val="es">ES</div>
            <div class="lang-option" data-val="fr">FR</div>
            <div class="lang-option" data-val="de">DE</div>
          </div>
        </div>
        
        ${loggedInUser && loggedInUser.role === 'admin' ? `
          <button class="btn-outline-gold" id="btn-nav-admin" style="padding: 6px 12px; font-size: 0.8rem;"><i class="ph ph-shield-check"></i> ${t.adminPanel}</button>
        ` : ''}

        ${loggedInUser ? `
          <div style="display:flex; align-items:center; gap:16px;">
            <div class="notifications-btn" id="notif-btn" style="position:relative; cursor:pointer; color:var(--text-secondary); font-size:1.4rem;">
              <i class="ph ph-bell"></i>
              ${notifications.filter(n => n.targetUser === loggedInUser.name && !n.read).length > 0 ? `<span style="position:absolute; top:-4px; right:-4px; background:var(--accent-magenta); color:white; font-size:0.6rem; padding:2px 4px; border-radius:50%; font-weight:bold;">${notifications.filter(n => n.targetUser === loggedInUser.name && !n.read).length}</span>` : ''}
            </div>
            <div class="user-profile" id="profile-btn" style="cursor: pointer;">
              <div class="avatar">${loggedInUser.name.substring(0, 2).toUpperCase()}</div>
            </div>
          </div>
        ` : `
          <div style="display: flex; gap: 8px;">
            <button class="btn-outline-gold" id="btn-login">${t.join}</button>
          </div>
        `}
      </div>
    </header>
    <div class="app-container">
      <nav class="lateral-sidebar" id="sidebar">
        <div class="sidebar-title" style="display:flex; justify-content:space-between; align-items:center;">
          ${t.allContexts}
          <div class="search-container-small" style="position:relative; width: 60%;">
            <i class="ph ph-magnifying-glass" style="position:absolute; left:8px; top:50%; transform:translateY(-50%); color:var(--text-secondary); font-size:0.8rem;"></i>
            <input type="text" id="sidebar-search" autocomplete="off" placeholder="Search..." value="${searchQuery}" style="width:100%; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:4px; padding:4px 8px 4px 24px; color:var(--text-primary); font-size:0.75rem; outline:none;">
          </div>
        </div>
        <a class="sidebar-item ${currentView === 'home' ? 'active' : ''}" data-target="home">
          <i class="ph ph-squares-four"></i> ${t.dashboard}
        </a>
        <div id="sidebar-contexts-list" style="overflow-y:auto; flex:1; display:flex; flex-direction:column; gap:4px;">
          ${contexts.filter(ctx => ctx.titles[currentLang].toLowerCase().includes(searchQuery.toLowerCase())).map(ctx => `
            <a class="sidebar-item ${currentView === `pyramid-${ctx.id}` ? 'active' : ''}" data-target="pyramid-${ctx.id}" ${ctx.parentId ? 'style="padding-left: 36px; font-size: 0.85rem; border-left: 1px dashed rgba(255,255,255,0.1);"' : ''}>
              <i class="${ctx.icon}"></i> ${ctx.titles[currentLang]}
            </a>
          `).join('')}
        </div>
        ${loggedInUser ? `
        <div style="padding: 16px; border-top: 1px solid var(--border-light); margin-top: auto;">
          <button class="btn-secondary" id="suggest-cat-btn" style="width:100%; font-size: 0.8rem; padding: 10px;"><i class="ph ph-lightbulb"></i> ${t.suggestCat}</button>
        </div>
        ` : ''}
      </nav>
      <main id="main-content"></main>
    </div>
    
    <!-- Profile Modal Overlay -->
    <div class="profile-modal" id="profile-modal">
      <div class="profile-card">
        <div class="profile-card-header">
          <img src="" alt="Avatar" class="profile-card-avatar" id="pm-avatar">
        </div>
        <div class="profile-card-body">
          <div class="profile-name" id="pm-name">Name</div>
          <div class="profile-dob"><i class="ph ph-calendar-blank"></i> <span id="pm-dob">Date</span></div>
          <div class="profile-description" id="pm-bio">Bio description...</div>
          
          <div class="profile-socials" id="pm-socials">
             <!-- Social links injected dynamically here -->
          </div>

          <div class="profile-actions" style="flex-wrap: wrap;">
            <button class="btn-outline-gold" id="pm-make-top-btn" style="width:100%; margin-bottom:12px; border-color:var(--text-secondary); color:var(--text-secondary);"><i class="ph ph-arrow-arc-left"></i> Make Apex</button>
            <button class="btn-vote" id="pm-vote-btn"></button>
            <button class="btn-close" id="pm-close-btn"></button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Custom Toast Container -->
    <div id="toast-container"></div>
  `;

  const mainContent = document.getElementById('main-content');

  if (currentView === 'home') {
    renderHomeView(mainContent);
  } else if (currentView === 'suggest') {
    renderSuggestView(mainContent);
  } else if (currentView.startsWith('pyramid-')) {
    const contextId = currentView.split('-')[1];
    const contextInfo = contexts.find(c => c.id === contextId);
    if (contextInfo) renderPyramidView(mainContent, contextInfo);
    else { currentView = 'home'; render(); }
  } else if (currentView === 'register') {
    renderRegisterView(mainContent);
  } else if (currentView === 'admin') {
    renderAdminView(mainContent);
  }

  attachGlobalEvents();

  // Restore scroll position after DOM rebuild
  const newVp = document.getElementById('pyramid-viewport');
  if (newVp && lastScrollX !== null) {
    if (forceScrollReset) {
      newVp.scrollLeft = (newVp.scrollWidth - newVp.clientWidth) / 2;
      newVp.scrollTop = 0;
      forceScrollReset = false;
    } else {
      newVp.scrollLeft = lastScrollX;
      newVp.scrollTop = lastScrollY;
    }
  }
};

const renderHomeView = (container) => {
  const t = i18n[currentLang];

  // Filter based on search
  const filteredContexts = contexts.filter(ctx => ctx.titles[currentLang].toLowerCase().includes(searchQuery.toLowerCase()));

  // Group by Parent Hierarchy
  const parents = filteredContexts.filter(c => !c.parentId);

  let contextHTML = '';
  if (parents.length === 0) {
    contextHTML = `<div style="color:var(--text-secondary); padding: 20px;">No contexts found.</div>`;
  } else {
    parents.forEach(p => {
      const children = filteredContexts.filter(c => c.parentId === p.id);

      contextHTML += `
        <div class="hierarchy-group" style="margin-bottom: 40px;">
          <h3 style="font-family: var(--font-display); color: var(--accent-gold); margin-bottom: 15px; display:flex; align-items:center; gap:8px; font-size: 1.4rem;">
            <i class="${p.icon}"></i> ${p.titles[currentLang]}
          </h3>
          <div class="context-grid">
            <div class="context-card main-parent-card" data-id="${p.id}" ${p.imageUrl ? `style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(10,0,15,0.95)), url('${p.imageUrl}'); background-size: cover; background-position: center;"` : ''}>
               <i class="${p.icon} context-icon" style="opacity: 0.5;"></i>
               <div class="context-title" style="font-size: 1.5rem;">${p.titles[currentLang]} (Principal)</div>
               <div class="context-stats"><i class="ph ph-users"></i> ${p.participants} ${t.users}</div>
            </div>
            ${children.map(ctx => `
              <div class="context-card child-card" data-id="${ctx.id}" ${ctx.imageUrl ? `style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(10,0,15,0.95)), url('${ctx.imageUrl}'); background-size: cover; background-position: center; min-height: 120px;"` : 'style="min-height: 120px;"'}>
                <i class="${ctx.icon} context-icon" style="font-size: 1.5rem;"></i>
                <div class="context-title" style="font-size: 1.1rem;">${ctx.titles[currentLang]}</div>
                <div class="context-stats"><i class="ph ph-users"></i> ${ctx.participants} ${t.users}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });
  }

  // Generate Voting History HTML if user is logged in
  let historyHTML = '';
  if (loggedInUser) {
    const myHistory = voteHistoryLedger.filter(v => v.voterUsername === loggedInUser.name).sort((a, b) => new Date(b.castAt) - new Date(a.castAt));
    if (myHistory.length > 0) {
      historyHTML = `
        <div style="margin-top: 50px;">
          <h2 class="section-title"><i class="ph ph-clock-counter-clockwise"></i> ${t.voteHistory}</h2>
          <div style="background: var(--bg-card); padding: 16px; border-radius: 8px; border: 1px solid var(--border-light); overflow-x: auto;">
            <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 0.85rem;">
              <thead>
                <tr style="border-bottom: 1px solid var(--border-light); color: var(--text-secondary);">
                  <th style="padding: 10px;">Context</th>
                  <th style="padding: 10px;">Voted For</th>
                  <th style="padding: 10px;">Date Cast</th>
                  <th style="padding: 10px;">Expires</th>
                  <th style="padding: 10px;">Status</th>
                </tr>
              </thead>
              <tbody>
                ${myHistory.map(v => {
        const ctxInfo = contexts.find(c => c.id === v.contextId);
        const uInfo = baseUsers.find(u => u.id === v.targetUserId);
        const isExp = v.status === 'expired' || new Date() > new Date(v.expiresAt);
        return `
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                      <td style="padding: 10px; color: var(--accent-cyan);">${ctxInfo ? ctxInfo.titles[currentLang] : v.contextId}</td>
                      <td style="padding: 10px;">${uInfo ? uInfo.name : v.targetUserId}</td>
                      <td style="padding: 10px; color: var(--text-secondary);">${new Date(v.castAt).toLocaleDateString()}</td>
                      <td style="padding: 10px; color: var(--text-secondary);">${new Date(v.expiresAt).toLocaleDateString()}</td>
                      <td style="padding: 10px;">
                        <span style="padding: 4px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 600; background: ${isExp ? 'rgba(255,68,68,0.1)' : 'rgba(0,200,83,0.1)'}; color: ${isExp ? '#ff4444' : '#00e676'};">
                          ${isExp ? t.expiredVote : t.activeVote}
                        </span>
                      </td>
                    </tr>
                  `;
      }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }
  }

  container.innerHTML = `
    <div class="view-container">
      <div class="home-hero">
        <h1 class="hero-title">Pyramida</h1>
        <p class="hero-subtitle">Visual consensus and decentralized rankings.<br>Every vote permanently alters the hierarchy stack.</p>
        
        <div class="stats-row">
          <div class="stat-item">
            <div class="stat-value">${contexts.filter(c => !c.parentId).length}</div>
            <div class="stat-label">${t.contexts}</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${baseUsers.length}</div>
            <div class="stat-label">${t.users}</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">4.2k</div>
            <div class="stat-label">${t.votes}</div>
          </div>
        </div>
      </div>
      
      <h2 class="section-title">${t.trendingContexts}</h2>
      <div class="hierarchy-container">
        ${contextHTML}
      </div>
      
      ${historyHTML}
    </div>
  `;

  // Attach card clicks
  document.querySelectorAll('.context-card').forEach(card => {
    card.addEventListener('click', () => {
      pyramidOffsetIndex = 0; // Reset focus on fresh context enter
      currentView = `pyramid-${card.dataset.id}`;
      render();
    });
  });
};

const renderPyramidView = (container, contextInfo) => {
  const t = i18n[currentLang];
  const pyramidObj = generatePyramidData(contextInfo.id);
  const pyramidData = pyramidObj.data;
  const totalUsersInContext = pyramidObj.totalLength;
  const hasVoted = globalVotes.byContext[contextInfo.id];

  // Generating tiers HTML
  let tiersHTML = pyramidData.map((tier, tIndex) => {
    const zIndex = 50 - tIndex; // Higher tiers are visually "above"

    // Scale node sizes descending from Tier 0 to Tier 9
    // Substantially increased sizes to proportionally fill the area. Apex is large (160px), base is solid (80px).
    const sizeScale = [160, 150, 140, 130, 120, 110, 100, 90, 85, 80];
    const nodeSize = sizeScale[tIndex] || 80;

    const usersHTML = tier.map(user => `
      <div class="user-node ${hasVoted && hasVoted === user.id ? 'voted' : ''}" 
           data-id="${user.id}" 
           data-votes="${user.votes} ${t.votesCount}" 
           data-voted-text="&#x2713; ${t.voted}">
        <div class="node-rank">#${user.rank}</div>
        <img src="${user.img}" alt="${user.name}">
        <div class="node-overlay">
          <div class="node-name" style="font-size: 0.65rem; font-weight: 700; color: #fff; text-shadow: 0 1px 3px rgba(0,0,0,0.8); line-height: 1.1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; text-align: center;">${user.name}</div>
          <div class="node-votes" style="font-size: 0.55rem; font-weight: 600; color: var(--accent-gold); display: flex; align-items: center; gap: 2px;"><i class="ph-fill ph-star"></i> ${user.votes}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="pyramid-tier tier-${tIndex}" style="--z-index: ${zIndex}; --node-size: ${nodeSize}px;">
        ${usersHTML}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="view-container">
      <div class="pyramid-header">
        <button class="back-btn" id="back-btn"><i class="ph ph-arrow-left"></i></button>
        <div class="pyramid-context-title">
          <i class="${contextInfo.icon}" style="color: var(--accent-cyan); margin-right: 8px;"></i>
          ${contextInfo.titles[currentLang]}
        </div>
        <div class="pyramid-controls" style="margin-left: auto; display:flex; gap: 8px;">
          ${pyramidOffsetIndex > 0 ? `<button class="btn-outline-gold" id="prev-apex-btn" style="padding: 6px 14px; font-size: 0.8rem; display:flex; align-items:center; gap:6px; color:var(--text-primary); border-color:var(--text-secondary);"><i class="ph ph-caret-up"></i> ${t.prev55}</button>` : ''}
          ${pyramidOffsetIndex + 55 < totalUsersInContext ? `<button class="btn-outline-gold" id="next-apex-btn" style="padding: 6px 14px; font-size: 0.8rem; display:flex; align-items:center; gap:6px; color:var(--text-primary); border-color:var(--text-secondary);"><i class="ph ph-caret-down"></i> ${t.next55}</button>` : ''}
          ${pyramidOffsetIndex > 0 ? `<button class="btn-outline-gold" id="reset-apex-btn" style="padding: 6px 14px; font-size: 0.8rem; display:flex; align-items:center; gap:6px; color:var(--text-primary); border-color:var(--text-secondary);"><i class="ph ph-arrows-out-line-vertical"></i> ${t.top1}</button>` : ''}
        </div>
      </div>
      
      <div class="voting-info">
        <div class="voting-rule">${t.voteRule}</div>
        <div class="voting-status ${globalVotes.byContext[contextInfo.id] ? 'voted' : ''}">
          ${globalVotes.byContext[contextInfo.id] ? `
            <i class="ph-fill ph-check-circle"></i> ${t.votedInCat}
            <div class="expiring-tag">${t.expiresIn}</div>
          ` : `
            <i class="ph-fill ph-plus-circle"></i> ${t.votesAvail(MAX_DAILY_VOTES - globalVotes.count)}
          `}
        </div>
      </div>

      <div class="pyramid-viewport" id="pyramid-viewport">
        <div class="pyramid-wrapper">
          <div class="pyramid-bg"></div>
          ${tiersHTML}
        </div>
      </div>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    pyramidOffsetIndex = 0;
    currentView = 'home';
    render();
  });

  const nextApexBtn = document.getElementById('next-apex-btn');
  if (nextApexBtn) {
    nextApexBtn.addEventListener('click', () => {
      pyramidOffsetIndex += 55;
      forceScrollReset = true;
      render();
    });
  }

  const prevApexBtn = document.getElementById('prev-apex-btn');
  if (prevApexBtn) {
    prevApexBtn.addEventListener('click', () => {
      pyramidOffsetIndex = Math.max(0, pyramidOffsetIndex - 55);
      forceScrollReset = true;
      render();
    });
  }

  const resetApexBtn = document.getElementById('reset-apex-btn');
  if (resetApexBtn) {
    resetApexBtn.addEventListener('click', () => {
      pyramidOffsetIndex = 0;
      render();
    });
  }

  // Adding simulated user profile open logic
  const profileModal = document.getElementById('profile-modal');
  const pmVoteBtn = document.getElementById('pm-vote-btn');
  const pmCloseBtn = document.getElementById('pm-close-btn');

  pmCloseBtn.innerText = t.close;

  if (pmCloseBtn) {
    // clear listeners
    const newClose = pmCloseBtn.cloneNode(true);
    pmCloseBtn.parentNode.replaceChild(newClose, pmCloseBtn);
    newClose.addEventListener('click', () => {
      profileModal.classList.remove('active');
    });
  }

  document.querySelectorAll('.user-node').forEach(node => {
    node.addEventListener('click', function () {
      const userId = this.getAttribute('data-id');
      const userObj = baseUsers.find(u => u.id === userId);

      if (!userObj) return;

      // Populate profile modal
      document.getElementById('pm-avatar').src = userObj.img;
      document.getElementById('pm-name').innerText = userObj.name;
      document.getElementById('pm-dob').innerText = `${t.bornOn} ${userObj.dob}`;
      document.getElementById('pm-bio').innerText = userObj.bio;

      // Populate Socials
      const socialsContainer = document.getElementById('pm-socials');
      socialsContainer.innerHTML = ''; // clear previous

      if (userObj.socials) {
        if (userObj.socials.linkedin) {
          socialsContainer.innerHTML += `<a href="${userObj.socials.linkedin}" target="_blank" class="social-link" title="LinkedIn"><i class="ph ph-linkedin-logo"></i></a>`;
        }
        if (userObj.socials.instagram) {
          socialsContainer.innerHTML += `<a href="${userObj.socials.instagram}" target="_blank" class="social-link instagram" title="Instagram"><i class="ph ph-instagram-logo"></i></a>`;
        }
        if (userObj.socials.tiktok) {
          socialsContainer.innerHTML += `<a href="${userObj.socials.tiktok}" target="_blank" class="social-link" title="TikTok"><i class="ph ph-tiktok-logo"></i></a>`;
        }
      }

      // Setup VOTE button in modal
      const vBtn = document.getElementById('pm-vote-btn');

      if (globalVotes.byContext[contextInfo.id]) {
        vBtn.innerText = globalVotes.byContext[contextInfo.id] === userId ? t.voted : t.votedInCat;
        vBtn.className = 'btn-vote disabled';
        vBtn.disabled = true;
        vBtn.onclick = null; // Do nothing or dismiss
      } else if (globalVotes.count >= MAX_DAILY_VOTES) {
        vBtn.innerText = 'Daily Limit Reached';
        vBtn.className = 'btn-vote disabled';
        vBtn.disabled = true;
        vBtn.onclick = null;
      } else {
        vBtn.innerText = t.vote;
        vBtn.className = 'btn-vote';
        vBtn.disabled = false;
        vBtn.onclick = async () => {
          if (!loggedInUser) {
            currentView = 'register';
            render();
            return;
          }

          const now = new Date();
          const expires = new Date();
          expires.setDate(now.getDate() + 30); // 30-day life loop

          const voteRecord = {
            id: `vote_${Date.now()}`,
            voterUsername: loggedInUser.name,
            targetUserId: userId,
            contextId: contextInfo.id,
            castAt: now.toISOString(),
            expiresAt: expires.toISOString(),
            status: 'active'
          };

          try {
            await setDoc(doc(db, 'votes_history', voteRecord.id), voteRecord);
            // Also increment the cache instantly for visual jump
            firebaseVotesCache[userId] = (firebaseVotesCache[userId] || 0) + 1;
            showToast('Vote successfully cast!', 'ph-check-circle');
          } catch (e) { console.error(e); }

          profileModal.classList.remove('active');
        };
      }

      // Make Top Button Focus
      const pmMakeTopBtn = document.getElementById('pm-make-top-btn');
      if (pmMakeTopBtn) {
        pmMakeTopBtn.innerText = t.makeApex;
        pmMakeTopBtn.onclick = () => {
          // Find the absolute rank of this user to set it as the new offset
          // userObj.rank is 1-indexed. offset is 0-indexed.
          // Wait, userObj doesn't have rank natively since it comes from baseUsers.
          // Let's recalculate or find index. The easiest way is to recalculate the sorted array here, 
          // but we can also rely on the clicked node's visual data, which has rank!
          const rankText = node.querySelector('.node-rank').innerText.replace('#', '');
          const absRank = parseInt(rankText, 10);

          pyramidOffsetIndex = absRank - 1; // 0-indexed offset
          forceScrollReset = true;
          profileModal.classList.remove('active');
          setTimeout(() => render(), 200);
        };
      }

      profileModal.classList.add('active');
    });
  });

  // Attach Drag-to-Pan logic for viewport
  const viewport = document.getElementById('pyramid-viewport');
  if (viewport) {
    let isDown = false;
    let startX, startY, scrollLeft, scrollTop;

    const onDown = (e) => {
      // Allow dragging but don't block clicks on nodes/buttons
      if (e.target.closest('.user-node') || e.target.closest('button')) return;
      isDown = true;
      const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
      const pageY = e.type.includes('mouse') ? e.pageY : e.touches[0].pageY;
      startX = pageX - viewport.offsetLeft;
      startY = pageY - viewport.offsetTop;
      scrollLeft = viewport.scrollLeft;
      scrollTop = viewport.scrollTop;
    };

    const onLeaveOrUp = () => isDown = false;

    const onMove = (e) => {
      if (!isDown) return;
      e.preventDefault(); // prevents highlighting text while dragging
      const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
      const pageY = e.type.includes('mouse') ? e.pageY : e.touches[0].pageY;
      const walkX = (pageX - viewport.offsetLeft - startX) * 1.5;
      const walkY = (pageY - viewport.offsetTop - startY) * 1.5;
      viewport.scrollLeft = scrollLeft - walkX;
      viewport.scrollTop = scrollTop - walkY;
    };

    viewport.addEventListener('mousedown', onDown);
    viewport.addEventListener('mouseleave', onLeaveOrUp);
    viewport.addEventListener('mouseup', onLeaveOrUp);
    viewport.addEventListener('mousemove', onMove);

    viewport.addEventListener('touchstart', onDown, { passive: true });
    viewport.addEventListener('touchend', onLeaveOrUp);
    viewport.addEventListener('touchmove', onMove, { passive: false });

    // Subtly auto-center the pyramid on initial load
    setTimeout(() => {
      viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
      viewport.scrollTop = viewport.scrollHeight;
    }, 50);
  }
};

const voteAction = async (node, contextId) => {
  const userId = node.getAttribute('data-id');
  const t = i18n[currentLang];

  // Restrict to 1 vote per context
  if (globalVotes.byContext[contextId]) {
    showToast(t.alreadyVotedAlert, 'ph-warning-circle');
    return;
  }

  // Restrict to global daily limit of 3 across all contexts
  if (globalVotes.count >= MAX_DAILY_VOTES) {
    showToast(t.limitReachedAlert, 'ph-prohibit');
    return;
  }

  // Register user's global limit locally
  globalVotes.byContext[contextId] = userId;
  globalVotes.count++;

  // Sync to Firestore Realtime DB immediately
  const contextRef = doc(db, 'contexts', contextId);
  try {
    await setDoc(contextRef, {
      votes: { [userId]: increment(1) }
    }, { merge: true });
    showToast('Vote successfully cast and synced to cloud!', 'ph-cloud-check');
  } catch (err) {
    console.error("Firebase write error: ", err);
    showToast('Offline mode: Vote simulated.', 'ph-warning');
  }

  // UI updates automatically via the onSnapshot listener, but we ensure one immediate local render
  render();
};

const renderRegisterView = (container) => {
  const t = i18n[currentLang];
  container.innerHTML = `
    <div class="view-container" style="max-width: 400px; margin: 40px auto; width: 100%;">
      <div class="pyramid-header" style="justify-content: center; margin-bottom: 40px;">
        <div class="pyramid-context-title">${t.register}</div>
      </div>
      
      <div class="modal-content" style="transform: none; position: relative; width: 100%; box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
        <h2 style="margin-bottom: 20px; font-family: var(--font-display); text-align: center;">${t.joinPyramida}</h2>
        <div class="form-group">
          <label>${t.chooseUser}</label>
          <input type="text" class="form-input" id="username-input" placeholder="${t.placeholderUser}">
        </div>
        <button class="btn-primary" id="signup-btn" style="margin-bottom: 15px;">${t.enterPyramid}</button>
        <button class="btn-primary" id="back-home-btn" style="background: transparent; border: 1px solid var(--border-light); box-shadow: none;">${t.backToHome}</button>
      </div>
    </div>
  `;

  document.getElementById('back-home-btn').addEventListener('click', () => { currentView = 'home'; render(); });

  const handleSignup = () => {
    const val = document.getElementById('username-input').value.trim();
    if (val) {
      loggedInUser = { name: val, role: val.toLowerCase() === 'admin' ? 'admin' : 'user' };
      currentView = 'home';
      render();
    }
  };

  document.getElementById('signup-btn').addEventListener('click', handleSignup);
  document.getElementById('username-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSignup();
  });
};

const renderSuggestView = (container) => {
  const t = i18n[currentLang];
  container.innerHTML = `
    <div class="view-container" style="max-width: 500px; margin: 40px auto; width: 100%;">
      <div class="pyramid-header" style="justify-content: center; margin-bottom: 30px; position:relative;">
        <button class="back-btn" id="suggest-back-btn" style="position:absolute; left:0;"><i class="ph ph-arrow-left"></i></button>
        <div class="pyramid-context-title">${t.suggestCat}</div>
      </div>
      
      <div class="modal-content" style="transform: none; position: relative; width: 100%; box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
         <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:20px;">${t.suggestDesc}</p>
         
         <div class="form-group">
           <label>${t.titleEnInput}</label>
           <input type="text" class="form-input" id="suggest-title" placeholder="e.g. Best Sci-Fi Writer">
         </div>
         
         <div class="form-group">
           <label>${t.parentOptional}</label>
           <select class="form-input" id="suggest-parent" style="background:var(--bg-dark); color:var(--text-primary); border: 1px solid var(--border-light);">
             <option value="">-- None (Top Level) --</option>
             ${contexts.filter(c => !c.parentId).map(c => `<option value="${c.id}">${c.titles.en}</option>`).join('')}
           </select>
         </div>
         
         <button class="btn-primary" id="submit-suggest-btn" style="margin-top:10px;">${t.submitSug}</button>
      </div>
    </div>
  `;

  document.getElementById('suggest-back-btn').addEventListener('click', () => { currentView = 'home'; render(); });

  document.getElementById('submit-suggest-btn').addEventListener('click', async () => {
    const title = document.getElementById('suggest-title').value.trim();
    const parentId = document.getElementById('suggest-parent').value;
    if (!title) return showToast('Please enter a title', 'ph-warning');

    const sugId = 'sug_' + Date.now();
    try {
      await setDoc(doc(db, 'category_recommendations', sugId), {
        id: sugId,
        titleEn: title,
        parentId: parentId || null,
        suggestedBy: loggedInUser.name,
        status: 'pending',
        createdAt: new Date().toISOString()
      });
      showToast('Suggestion submitted for review!', 'ph-check-circle');
      currentView = 'home';
      render();
    } catch (e) {
      console.error(e);
      showToast('Error submitting suggestion', 'ph-warning');
    }
  });
};

let editingContextId = null;

const renderAdminView = (container) => {
  const t = i18n[currentLang];

  const contextsListHTML = contexts.map(ctx => `
    <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.02); padding:10px; border-radius:6px; margin-bottom:8px; border:1px solid rgba(255,255,255,0.05);">
        <div style="display:flex; align-items:center; gap:10px;">
            <i class="${ctx.icon} text-cyan"></i>
            <div>
                <div style="font-size:0.9rem; font-weight:600;">${ctx.titles.en}</div>
                <div style="font-size:0.75rem; color:var(--text-secondary);">ID: ${ctx.id}</div>
            </div>
        </div>
        <div style="display:flex; gap:8px;">
            <button class="btn-edit-ctx" data-id="${ctx.id}" style="background:transparent; color:var(--accent-cyan); border:1px solid var(--accent-cyan); padding:4px 8px; border-radius:4px; font-size:0.75rem; cursor:pointer;"><i class="ph ph-pencil-simple"></i> Edit</button>
            <button class="btn-del-ctx" data-id="${ctx.id}" style="background:transparent; color:#ff4444; border:1px solid #ff4444; padding:4px 8px; border-radius:4px; font-size:0.75rem; cursor:pointer;"><i class="ph ph-trash"></i> Delete</button>
        </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="view-container" style="max-width: 800px; margin: 20px auto; width: 100%; display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      
      <!-- Left side: Form -->
      <div>
          <div class="pyramid-header" style="margin-bottom: 20px;">
            <button class="back-btn" id="admin-back-btn"><i class="ph ph-arrow-left"></i></button>
            <div class="pyramid-context-title" style="color: var(--accent-magenta);">${t.adminPanel}</div>
          </div>
          
          <div class="modal-content" style="transform: none; position: relative; width: 100%; max-width: 100%; padding:20px;">
            <h3 style="margin-bottom: 20px; font-family: var(--font-display);" id="admin-form-title">${editingContextId ? 'Edit Context' : t.addNewContext}</h3>
            
            <div class="form-group">
              <label>${t.contextId} (e.g. unique_string)</label>
              <input type="text" class="form-input" id="new-ctx-id" ${editingContextId ? 'disabled' : ''}>
            </div>
            
            <div class="form-group">
              <label>${t.iconClass} (e.g. ph-star)</label>
              <input type="text" class="form-input" id="new-ctx-icon" value="ph-star">
            </div>

            <div class="form-group">
              <label>Parent Category (Optional Subfamily)</label>
              <select class="form-input" id="new-ctx-parent" style="background:var(--bg-dark); color:var(--text-primary); border: 1px solid var(--border-light);">
                <option value="">-- None (Top Level) --</option>
                ${contexts.filter(c => c.id !== editingContextId && !c.parentId).map(c => `<option value="${c.id}">${c.titles.en}</option>`).join('')}
              </select>
            </div>
            
            <div class="form-group">
              <label>Image URL (Optional)</label>
              <input type="text" class="form-input" id="new-ctx-image" placeholder="https://example.com/image.jpg">
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="form-group"><label>${t.titleEn}</label><input type="text" class="form-input" id="new-ctx-en"></div>
              <div class="form-group"><label>${t.titleEs}</label><input type="text" class="form-input" id="new-ctx-es"></div>
              <div class="form-group"><label>${t.titleFr}</label><input type="text" class="form-input" id="new-ctx-fr"></div>
              <div class="form-group"><label>${t.titleDe}</label><input type="text" class="form-input" id="new-ctx-de"></div>
            </div>

            <button class="btn-primary" id="save-ctx-btn" style="margin-top: 10px; padding:10px;">${editingContextId ? 'Update Context' : t.createContext}</button>
            ${editingContextId ? '<button class="btn-secondary" id="cancel-edit-btn" style="padding:10px;">Cancel Edit</button>' : ''}
          </div>
          <button id="dev-seed-btn" class="btn-outline-gold" style="margin-top: 40px; border-color: red; color: red;">[DEV] Seed Categories & Hierarchy</button>
       </div>

       <!-- Right side: List -->
       <div class="modal-content" style="transform: none; position: relative; width: 100%; max-width: 100%; padding:20px; max-height: 80vh; overflow-y:auto;">
           <h3 style="margin-bottom: 20px; font-family: var(--font-display);">Active Contexts (${contexts.length})</h3>
           ${contextsListHTML}
           
           <div style="margin-top: 40px; border-top: 1px solid var(--border-light); padding-top:20px;">
              <h3 style="margin-bottom: 20px; font-family: var(--font-display); color: var(--accent-cyan);">Pending Suggestions (${suggestions.filter(s => s.status === 'pending').length})</h3>
              ${suggestions.filter(s => s.status === 'pending').map(s => `
                <div style="background:rgba(212, 175, 55, 0.05); padding:12px; border:1px solid rgba(212, 175, 55, 0.2); border-radius:6px; margin-bottom:8px;">
                  <div style="font-weight:600; font-size:0.95rem;">${s.titleEn}</div>
                  <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px;">Suggested by: ${s.suggestedBy} ${s.parentId ? `| Parent: ${s.parentId}` : ''}</div>
                  <div style="display:flex; gap:8px;">
                    <button class="btn-approve-sug" data-id="${s.id}" style="background:var(--accent-cyan); color:var(--bg-dark); border:none; padding:4px 10px; border-radius:4px; font-size:0.75rem; cursor:pointer; font-weight:600;">Approve</button>
                    <button class="btn-reject-sug" data-id="${s.id}" style="background:transparent; color:#ff4444; border:1px solid #ff4444; padding:4px 10px; border-radius:4px; font-size:0.75rem; cursor:pointer;">Reject</button>
                  </div>
                </div>
              `).join('')}
           </div>
       </div>
    </div>
  `;

  document.getElementById('admin-back-btn').addEventListener('click', () => {
    editingContextId = null;
    currentView = 'home';
    render();
  });

  // Handle Edit Cancel
  const cancelBtn = document.getElementById('cancel-edit-btn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      editingContextId = null;
      renderAdminView(container);
    });
  }

  // Dev Seeder
  const seedBtn = document.getElementById('dev-seed-btn');
  if (seedBtn) seedBtn.addEventListener('click', seedDatabase);

  // Handle Save (Create/Update)
  document.getElementById('save-ctx-btn').addEventListener('click', async () => {
    const id = document.getElementById('new-ctx-id').value.trim();
    if (!id) return showToast('Context ID is required', 'ph-warning');

    const ctxData = {
      id,
      parentId: document.getElementById('new-ctx-parent').value.trim() || null,
      icon: document.getElementById('new-ctx-icon').value.trim() || 'ph-star',
      imageUrl: document.getElementById('new-ctx-image').value.trim() || '',
      titles: {
        en: document.getElementById('new-ctx-en').value.trim() || 'New Context',
        es: document.getElementById('new-ctx-es').value.trim() || 'Nuevo Contexto',
        fr: document.getElementById('new-ctx-fr').value.trim() || 'Nouveau Contexte',
        de: document.getElementById('new-ctx-de').value.trim() || 'Neuer Kontext'
      }
    };

    if (!editingContextId) {
      ctxData.participants = 0;
      ctxData.createdAt = new Date().toISOString();
    }

    try {
      await setDoc(doc(db, 'base_contexts', id), ctxData, { merge: true });
      showToast(`Context ${editingContextId ? 'updated' : 'created'} successfully!`, 'ph-check-circle');
      editingContextId = null;
      // The onSnapshot listener will catch the change and re-render automatically, 
      // but if we are in admin view, we want to just re-render the admin view.
      // Wait briefly for snapshot to catch up.
      setTimeout(() => renderAdminView(container), 200);
    } catch (e) {
      console.error(e);
      showToast('Error saving context', 'ph-warning');
    }
  });

  // Handle Edits
  document.querySelectorAll('.btn-edit-ctx').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const ctx = contexts.find(c => c.id === id);
      if (ctx) {
        editingContextId = id;
        renderAdminView(container); // Re-render to show edit mode
        // Populate inputs
        setTimeout(() => {
          document.getElementById('new-ctx-id').value = ctx.id;
          document.getElementById('new-ctx-parent').value = ctx.parentId || '';
          document.getElementById('new-ctx-icon').value = ctx.icon || '';
          document.getElementById('new-ctx-image').value = ctx.imageUrl || '';
          document.getElementById('new-ctx-en').value = ctx.titles.en || '';
          document.getElementById('new-ctx-es').value = ctx.titles.es || '';
          document.getElementById('new-ctx-fr').value = ctx.titles.fr || '';
          document.getElementById('new-ctx-de').value = ctx.titles.de || '';
        }, 50);
      }
    });
  });

  // Handle Deletes
  document.querySelectorAll('.btn-del-ctx').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-id');
      if (confirm('Are you sure you want to delete this context?')) {
        try {
          await deleteDoc(doc(db, 'base_contexts', id));
          showToast('Context deleted', 'ph-trash');
        } catch (e) {
          console.error(e);
          showToast('Failed to delete', 'ph-warning');
        }
      }
    });
  });

  // Handle Suggestions Admin Actions
  document.querySelectorAll('.btn-approve-sug').forEach(btn => {
    btn.addEventListener('click', async () => {
      const sugId = btn.getAttribute('data-id');
      const sug = suggestions.find(s => s.id === sugId);
      if (!sug) return;

      const newCtxId = 'ctx_' + Date.now();
      const ctxData = {
        id: newCtxId,
        icon: 'ph-star',
        imageUrl: '',
        parentId: sug.parentId,
        participants: 0,
        createdAt: new Date().toISOString(),
        titles: {
          en: sug.titleEn,
          es: sug.titleEn,
          fr: sug.titleEn,
          de: sug.titleEn
        }
      };

      try {
        await setDoc(doc(db, 'base_contexts', newCtxId), ctxData);
        await setDoc(doc(db, 'category_recommendations', sugId), { status: 'approved', approvedContextId: newCtxId }, { merge: true });

        await setDoc(doc(db, 'notifications', `notif_${Date.now()}`), {
          id: `notif_${Date.now()}`,
          targetUser: sug.suggestedBy,
          message: `Your category suggestion "${sug.titleEn}" was approved!`,
          read: false,
          createdAt: new Date().toISOString()
        });
        showToast('Suggestion Approved!', 'ph-check-circle');
      } catch (e) { console.error(e); }
    });
  });

  document.querySelectorAll('.btn-reject-sug').forEach(btn => {
    btn.addEventListener('click', async () => {
      const sugId = btn.getAttribute('data-id');
      await setDoc(doc(db, 'category_recommendations', sugId), { status: 'rejected' }, { merge: true });
      showToast('Suggestion Rejected.', 'ph-trash');
    });
  });
};

const showToast = (message, icon = 'ph-info') => {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'custom-toast';
  toast.innerHTML = `<i class="ph-fill ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  // trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400); // Wait for transition
  }, 4000);
};

const attachGlobalEvents = () => {
  // Custom Language switcher logic
  const langDropdown = document.getElementById('lang-dropdown');
  const langOptions = document.getElementById('lang-options');
  if (langDropdown && langOptions) {
    document.getElementById('lang-selected').addEventListener('click', (e) => {
      e.stopPropagation();
      langOptions.classList.toggle('show');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        currentLang = e.target.getAttribute('data-val');
        render(); // re-render entire app
      });
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#lang-dropdown')) {
        langOptions.classList.remove('show');
      }
    });
  }

  // Header Nav buttons
  const btnLogin = document.getElementById('btn-login');
  if (btnLogin) btnLogin.addEventListener('click', () => { currentView = 'register'; render(); });

  const btnAdmin = document.getElementById('btn-nav-admin');
  if (btnAdmin) btnAdmin.addEventListener('click', () => { currentView = 'admin'; render(); });

  // Mobile menu logic
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');
  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });

    // Auto-close sidebar on mobile when an item is clicked
    sidebar.addEventListener('click', (e) => {
      if (e.target.closest('.sidebar-item') && window.innerWidth < 768) {
        sidebar.classList.remove('active');
      }
    });
  }

  // Sidebar logic
  document.body.addEventListener('click', (e) => {
    // Sidebar Item click logic handled via global delegation
    const sidebarItem = e.target.closest('.sidebar-item');
    if (sidebarItem) {
      const target = sidebarItem.getAttribute('data-target');
      if (currentView !== target) {
        currentView = target;
        render();
      }
    }

    // Suggest & Notification handlers
    const sugBtn = e.target.closest('#suggest-cat-btn');
    if (sugBtn) {
      currentView = 'suggest';
      render();
    }

    const notifBtn = e.target.closest('#notif-btn');
    if (notifBtn && loggedInUser) {
      const unread = notifications.filter(n => n.targetUser === loggedInUser.name && !n.read);
      if (unread.length > 0) {
        unread.forEach(async (n) => {
          showToast(n.message, 'ph-bell-ringing');
          try {
            await setDoc(doc(db, 'notifications', n.id), { read: true }, { merge: true });
          } catch (e) { console.warn(e); }
        });
      } else {
        showToast('No new notifications', 'ph-bell');
      }
    }
  });

  const profileBtn = document.getElementById('profile-btn');
  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      if (!loggedInUser) {
        currentView = 'register';
        render();
      }
    });
  }

  // Sidebar live search listener
  const sidebarSearch = document.getElementById('sidebar-search');
  if (sidebarSearch) {
    sidebarSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      // Quickly update just the lists to avoid resetting scroll position globally, or do a fast re-render.
      // Fast re-render is safest to maintain sync.
      render();
      // Restore focus to search bar since re-render steals it
      const newSearch = document.getElementById('sidebar-search');
      if (newSearch) {
        newSearch.focus();
        // Move cursor to end
        const val = newSearch.value;
        newSearch.value = '';
        newSearch.value = val;
      }
    });
  }
};

// Init
render();
