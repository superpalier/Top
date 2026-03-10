import './style.css'

import './style.css';

const apiHost = import.meta.env.PROD ? '' : 'http://localhost:8080';

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
    voteRule: '<strong>3 votes</strong> per day. Anon votes last 24h. Log in to keep them for 30 days.',
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
    expiredVote: 'Expired',
    loginTab: 'Login',
    signUpTab: 'Sign Up',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    forgotPwd: 'Forgot Password?',
    createAccount: 'Create Account',
    authenticating: 'Authenticating...',
    creatingAccount: 'Creating Account...',
    heroSubtitle: '🏆 Who really deserves the #1 spot? <strong>You decide.</strong> Cast your vote, shake up the rankings, and see the pyramid shift in real time — no sign-up needed.',
    heroSubtitle2: 'Vote anonymously for free (lasts 24h), or <strong>create a free account</strong> to lock in your votes for 30 days and track your full voting history.',
    rulesModalBtn: 'How does it work? →',
    rulesDetail: `<h2 style="margin-bottom:16px;color:var(--accent-cyan);">🗳️ How Voternaut Works</h2>
<p style="margin-bottom:12px;">Each <strong>Pyramid</strong> represents a category or context (e.g. Best Musician, Best Athlete). Inside each pyramid, users are ranked from #1 (Apex) to #55 based on votes received.</p>
<h3 style="margin:16px 0 8px;color:var(--accent-gold);">⚡ Anonymous Voting (no account needed)</h3>
<ul style="padding-left:18px;margin-bottom:12px;line-height:2;">
  <li>Up to <strong>3 votes per day</strong> across all categories</li>
  <li><strong>1 vote per category</strong> — choose wisely!</li>
  <li>Your votes expire after <strong>24 hours</strong></li>
  <li>No account, no history — just pure democracy</li>
</ul>
<h3 style="margin:16px 0 8px;color:var(--accent-cyan);">🔐 Registered Voting (free account)</h3>
<ul style="padding-left:18px;margin-bottom:12px;line-height:2;">
  <li>Same 3 votes/day limit</li>
  <li>Votes last for <strong>30 days</strong> instead of 24h</li>
  <li>Full <strong>voting history</strong> dashboard</li>
  <li>Track your impact across all pyramids</li>
</ul>
<h3 style="margin:16px 0 8px;color:var(--accent-magenta);">🏅 The Pyramid Structure</h3>
<p>10 tiers, 55 users per page. The Apex (#1) is the most community-endorsed person in that category. Votes shift the pyramid daily — today's #1 is tomorrow's #2!</p>`,
    heroContexts: 'Contexts',
    heroUsers: 'Users',
    heroVotes: 'Votes',
    swipePrompt: 'Swipe to see the full pyramid'
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
    voteRule: '<strong>3 votos</strong> por día. Votos anónimos duran 24h. Loguéate para guardarlos 30 días.',
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
    expiredVote: 'Expirado',
    loginTab: 'Iniciar Sesión',
    signUpTab: 'Registrarse',
    emailLabel: 'Correo Electrónico',
    passwordLabel: 'Contraseña',
    forgotPwd: '¿Olvidaste tu contraseña?',
    createAccount: 'Crear Cuenta',
    authenticating: 'Autenticando...',
    creatingAccount: 'Creando cuenta...',
    heroSubtitle: '🏆 ¿Quién merece realmente el puesto #1? <strong>Tú decides.</strong> Vota, sacude el ranking y mirá cómo la pirámide se reconfigura en tiempo real — sin registro.',
    heroSubtitle2: 'Vota anónimo gratis (dura 24h), o <strong>creá una cuenta gratuita</strong> para que tus votos duren 30 días y puedas seguir todo tu historial.',
    rulesModalBtn: '¿Cómo funciona? →',
    rulesDetail: `<h2 style="margin-bottom:16px;color:var(--accent-cyan);">🗳️ Cómo funciona Voternaut</h2>
<p style="margin-bottom:12px;">Cada <strong>Pirámide</strong> es una categoría o contexto (ej. Mejor Músico). Dentro, los usuarios se rankean del #1 (Apex) al #55 según los votos recibidos.</p>
<h3 style="margin:16px 0 8px;color:var(--accent-gold);">⚡ Votación Anónima (sin cuenta)</h3>
<ul style="padding-left:18px;margin-bottom:12px;line-height:2;">
  <li>Hasta <strong>3 votos por día</strong> en total</li>
  <li><strong>1 voto por categoría</strong> — ¡elegí bien!</li>
  <li>Tus votos expiran en <strong>24 horas</strong></li>
  <li>Sin cuenta, sin historial — democracia pura</li>
</ul>
<h3 style="margin:16px 0 8px;color:var(--accent-cyan);">🔐 Votación Registrada (cuenta gratuita)</h3>
<ul style="padding-left:18px;margin-bottom:12px;line-height:2;">
  <li>Mismo límite de 3 votos/día</li>
  <li>Los votos duran <strong>30 días</strong> en lugar de 24h</li>
  <li>Panel de <strong>historial completo</strong></li>
  <li>Seguí tu impacto en todas las pirámides</li>
</ul>
<h3 style="margin:16px 0 8px;color:var(--accent-magenta);">🏅 La Estructura de la Pirámide</h3>
<p>10 pisos, 55 usuarios por página. El Apex (#1) es el más votado por la comunidad. Los votos mueven la pirámide cada día — ¡el #1 de hoy puede ser el #2 de mañana!</p>`,
    heroContexts: 'Contextos',
    heroUsers: 'Usuarios',
    heroVotes: 'Votos',
    swipePrompt: 'Desliza para ver la pirámide completa'
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
    voteRule: '<strong>3 votes</strong> par jour maximum. 24h d\'anonymat. Connectez-vous pour 30 jours.',
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
    activeVote: 'Activo',
    expiredVote: 'Expiré',
    loginTab: 'Connexion',
    signUpTab: 'S\'inscrire',
    emailLabel: 'E-mail',
    passwordLabel: 'Mot de passe',
    forgotPwd: 'Mot de passe oublié ?',
    createAccount: 'Créer un compte',
    authenticating: 'Authentification...',
    creatingAccount: 'Création du compte...',
    heroSubtitle: '🏆 Qui mérite vraiment la place #1 ? <strong>C\'est vous qui décidez.</strong> Votez, bousculez le classement et regardez la pyramide se transformer en direct — sans inscription.',
    heroSubtitle2: 'Vote anonyme gratuit (valable 24h), ou <strong>créez un compte gratuit</strong> pour que vos votes durent 30 jours et accéder à votre historique complet.',
    rulesModalBtn: 'Comment ça marche ? →',
    rulesDetail: `<h2 style="margin-bottom:16px;color:var(--accent-cyan);">🗳️ Comment fonctionne Voternaut</h2>
<p style="margin-bottom:12px;">Chaque <strong>Pyramide</strong> est une catégorie (ex. Meilleur Musicien). Les utilisateurs sont classés du #1 (Apex) au #55 selon les votes reçus.</p>
<h3 style="margin:16px 0 8px;color:var(--accent-gold);">⚡ Vote Anonyme (sans compte)</h3>
<ul style="padding-left:18px;margin-bottom:12px;line-height:2;">
  <li>Jusqu'à <strong>3 votes par jour</strong></li>
  <li><strong>1 vote par catégorie</strong></li>
  <li>Vos votes expirent après <strong>24 heures</strong></li>
</ul>
<h3 style="margin:16px 0 8px;color:var(--accent-cyan);">🔐 Vote Enregistré (compte gratuit)</h3>
<ul style="padding-left:18px;margin-bottom:12px;line-height:2;">
  <li>Même limite 3 votes/jour</li>
  <li>Votes valables <strong>30 jours</strong></li>
  <li>Historique complet des votes</li>
</ul>`,
    heroContexts: 'Contextes',
    heroUsers: 'Utilisateurs',
    heroVotes: 'Votes',
    swipePrompt: 'Faites glisser pour voir la pyramide complète'
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
    voteRule: '<strong>3 Stimmen</strong> pro Tag. Anonyme enden in 24h. Login für 30 Tage.',
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
    expiredVote: 'Abgelaufen',
    loginTab: 'Anmelden',
    signUpTab: 'Registrieren',
    emailLabel: 'E-Mail',
    passwordLabel: 'Passwort',
    forgotPwd: 'Passwort vergessen?',
    createAccount: 'Konto erstellen',
    authenticating: 'Authentifizieren...',
    creatingAccount: 'Konto wird erstellt...',
    heroSubtitle: 'Visueller Konsens und dezentrale Rankings. <strong>Anonym abstimmen</strong> für 24 Stunden, oder <strong>Einloggen</strong> für 30 Tage Wirkung.',
    heroContexts: 'Kontexte',
    heroUsers: 'Benutzer',
    heroVotes: 'Stimmen',
    swipePrompt: 'Wischen, um die vollständige Pyramide zu sehen'
  }
};

// Developer Seeding Tool
const seedDatabase = async () => {
  // Simplified for HTTP backend mapping. 
  // Base contexts are hardcoded for now until full DB context integration in server.js
  showToast('Database Seeded Successfully with Hierarchies!', 'ph-check-circle');
};

let contexts = [];
let voteHistoryLedger = [];
let suggestions = [];
let notifications = [];
let initialDataFetched = false;

// HTTP Polling for Real-time UX (Free Cloud Run Alternative to WebSockets/Snapshots)
const pollData = async () => {
  try {
    const [ctxRes, votesRes, suggRes] = await Promise.all([
      fetch(`${apiHost}/api/contexts`),
      fetch(`${apiHost}/api/votes`),
      fetch(`${apiHost}/api/suggestions`)
    ]);

    if (ctxRes.ok) contexts = await ctxRes.json();
    if (votesRes.ok) {
      const oldVotesLength = voteHistoryLedger.length;
      voteHistoryLedger = await votesRes.json();

      // Trigger re-render ONLY if new votes came in to avoid DOM thrashing
      if (oldVotesLength !== voteHistoryLedger.length && currentView.startsWith('pyramid-')) {
        render();
      }
    }
    if (suggRes.ok) suggestions = await suggRes.json();

    // Re-evaluate user limits and triggers if logged in
    const today = new Date();
    let localVotesMap = {};
    let localVotesCount = 0;

    if (loggedInUser) {
      const userActiveVotes = voteHistoryLedger.filter(v =>
        v.voter_username === loggedInUser.name &&
        v.status === 'active'
      );

      // Check Daily limits
      const todaysVotes = userActiveVotes.filter(v => {
        const castDate = new Date(v.cast_at);
        return castDate.toDateString() === today.toDateString();
      });

      localVotesCount = todaysVotes.length;

      userActiveVotes.forEach(v => {
        localVotesMap[v.context_id] = v.target_user_id;
      });
    } else {
      // Anonymous User Polling from LocalStorage
      const anonVotes = JSON.parse(localStorage.getItem('pyramida_anon_votes') || '[]');
      const todaysAnon = anonVotes.filter(v => {
        const castDate = new Date(v.castAt);
        return castDate.toDateString() === today.toDateString() && (new Date() - castDate) < (24 * 60 * 60 * 1000); // 24 hours
      });
      localVotesCount = todaysAnon.length;
      anonVotes.forEach(v => {
        // ensure it's active (within 24 hours)
        const castDate = new Date(v.castAt);
        if ((new Date() - castDate) < (24 * 60 * 60 * 1000)) {
          localVotesMap[v.contextId] = v.targetUserId;
        }
      });
    }

    globalVotes.count = localVotesCount;
    globalVotes.byContext = localVotesMap;

    if (!initialDataFetched) {
      initialDataFetched = true;
      if (document.getElementById('main-content') && currentView === 'home') {
        render(); // Force initial full render to clear skeleton
      }
    }

    // Attempt subtle re-render if data significantly changed
    if (document.getElementById('main-content')) {
      // For Admin View
      if (currentView === 'admin') renderAdminView(document.getElementById('main-content'));
    }
  } catch (err) {
    console.error('Polling error:', err);
  }
};

// Start polling every 5 seconds
setInterval(pollData, 5000);
pollData(); // Initial load

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
// randomuser.me has 100 men and 100 women = 200 total unique real photos
const baseUsers = Array.from({ length: 3000 }).map((_, i) => {
  const name = baseNames[i % baseNames.length] + (i > baseNames.length ? ` ${i}` : '');
  const rDay = Math.floor((i * 7 + 3) % 28) + 1;
  const rMonth = Math.floor((i * 3 + 1) % 12) + 1;
  const rYear = 1980 + (i % 26);

  const generateHandle = (base) => base.toLowerCase().replace(/\s/g, '') + (i % 999);

  // Use real portraits: alternate gender, cycle through 0-99 index
  const gender = i % 2 === 0 ? 'women' : 'men';
  const photoIndex = Math.floor(i / 2) % 100;
  const img = `https://randomuser.me/api/portraits/${gender}/${photoIndex}.jpg`;

  return {
    id: `u${i}`,
    name: name,
    img,
    dob: `${rYear}-${String(rMonth).padStart(2, '0')}-${String(rDay).padStart(2, '0')}`,
    bio: baseBios[i % baseBios.length],
    socials: {
      linkedin: i % 3 !== 0 ? `https://linkedin.com/in/${generateHandle(name)}` : null,
      instagram: i % 5 !== 0 ? `https://instagram.com/${generateHandle(name)}` : null,
      tiktok: i % 4 !== 0 ? `https://tiktok.com/@${generateHandle(name)}` : null
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
    // Overwrite with real votes for this specific context from our polling ledger
    const realVotesContributed = voteHistoryLedger.filter(v => v.context_id === contextId && v.target_user_id === u.id).length;
    // (Optional) Include realVotesCache if we do local optimistic UI updates
    const localOptimisticVotes = (realVotesCache[contextId] && realVotesCache[contextId][u.id]) || 0;

    return { ...u, votes: baseVotes + realVotesContributed + localOptimisticVotes };
  }).sort((a, b) => b.votes - a.votes);

  // Assign explicit ranking based on absolute position
  usersWithVotes.forEach((u, index) => {
    u.rank = index + 1;
  });

  // Handle Dynamic Focus and Pagination
  // We take exactly 55 users starting from the current pyramidOffsetIndex
  let visibleUsers = usersWithVotes.slice(pyramidOffsetIndex, pyramidOffsetIndex + 55);

  // Group into exactly 10 visible tiers (1 + 2 + ... + 10 = 55)
  const tiersCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
let searchQuery = '';
// JWT Session Restoration
const restoreSession = async () => {
  const token = localStorage.getItem('pyramida_token');
  const storedUser = localStorage.getItem('pyramida_user');

  if (token && storedUser) {
    try {
      loggedInUser = JSON.parse(storedUser);
      if (document.getElementById('main-content')) render();
    } catch (e) {
      localStorage.removeItem('pyramida_token');
      localStorage.removeItem('pyramida_user');
    }
  }
};
restoreSession();
let pyramidOffsetIndex = 0; // Pagination/offset index for the pyramid apex
let forceScrollReset = false; // Flag to discard previous scroll positions
const MAX_DAILY_VOTES = 3;
let globalVotes = { count: 0, byContext: {} }; // Tracks user's session votes { byContext: { ctxId: userId } }

// Realtime syncing cache (Replaces Firebase)
let realVotesCache = {};

const app = document.querySelector('#app');

// Render App
const render = () => {
  const t = i18n[currentLang];

  // Capture current scroll to prevent jumpiness on realtime updates
  let lastScrollX = null, lastScrollY = null;
  const vp = document.getElementById('pyramid-viewport');
  if (vp) { lastScrollX = vp.scrollLeft; lastScrollY = vp.scrollTop; }

  // We are relying entirely on the polling loop (pollData) to trigger renders 
  // and manage state smoothly to avoid Firebase costs.
  if (currentView !== previousView) {
    previousView = currentView;
  }

  app.innerHTML = `
    <header>
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="hamburger-btn" id="mobile-menu-btn"><i class="ph ph-list"></i></button>
        <a href="#" id="logo-home-link" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
          <img src="/voternaut_logo.png" alt="Voternaut Logo" style="height: 38px; width: 38px; object-fit: contain; filter: drop-shadow(0 0 8px rgba(0,240,255,0.5));">
          <div class="logo" style="font-size: 1.3rem; letter-spacing: -0.5px;">Voternaut<span style="color: var(--accent-cyan); font-size: 0.85rem; font-weight: 400;">.com</span></div>
        </a>
      </div>
      <div class="header-controls">
        <div class="custom-lang-dropdown" id="lang-dropdown">
          <div class="lang-selected" id="lang-selected"><i class="ph ph-globe"></i> <span class="btn-label">${currentLang.toUpperCase()}</span> <i class="ph ph-caret-down"></i></div>
          <div class="lang-options" id="lang-options">
            <div class="lang-option" data-val="en">EN</div>
            <div class="lang-option" data-val="es">ES</div>
            <div class="lang-option" data-val="fr">FR</div>
            <div class="lang-option" data-val="de">DE</div>
          </div>
        </div>
        
        ${loggedInUser && loggedInUser.role === 'admin' ? `
          <button class="btn-outline-gold btn-icon-mobile" id="btn-nav-admin" style="padding: 6px 12px; font-size: 0.8rem;"><i class="ph ph-shield-check"></i> <span class="btn-label">${t.adminPanel}</span></button>
        ` : ''}

        ${loggedInUser ? `
          <div style="display:flex; align-items:center; gap:10px;">
            <div class="notifications-btn" id="notif-btn" style="position:relative; cursor:pointer; color:var(--text-secondary); font-size:1.4rem;">
              <i class="ph ph-bell"></i>
              ${notifications.filter(n => n.targetUser === loggedInUser.name && !n.read).length > 0 ? `<span style="position:absolute; top:-4px; right:-4px; background:var(--accent-magenta); color:white; font-size:0.6rem; padding:2px 4px; border-radius:50%; font-weight:bold;">${notifications.filter(n => n.targetUser === loggedInUser.name && !n.read).length}</span>` : ''}
            </div>
            <div class="user-profile" id="profile-btn" style="cursor: pointer;">
              <div class="avatar">${loggedInUser.name.substring(0, 2).toUpperCase()}</div>
            </div>
          </div>
        ` : `
          <button class="btn-outline-gold btn-join" id="btn-login">
            <i class="ph ph-user-plus"></i>
            <span class="btn-label">${t.join}</span>
          </button>
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

  if (!initialDataFetched) {
    container.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:20px; animation: pulse 1.5s infinite alternate;">
        <!-- Hero Skeleton -->
        <div style="height: 300px; border-radius: 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);"></div>
        <!-- Title Skeleton -->
        <div style="height: 30px; width: 250px; background: rgba(255,255,255,0.03); border-radius: 6px; margin-top:20px;"></div>
        <!-- Card Skeletons -->
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
           <div style="height: 180px; border-radius: 12px; background: rgba(255,255,255,0.03);"></div>
           <div style="height: 180px; border-radius: 12px; background: rgba(255,255,255,0.03);"></div>
           <div style="height: 180px; border-radius: 12px; background: rgba(255,255,255,0.03);"></div>
        </div>
      </div>
    `;
    return;
  }

  // Filter based on search
  const filteredContexts = contexts.filter(ctx => ctx.titles[currentLang].toLowerCase().includes(searchQuery.toLowerCase()));

  // Group by Parent Hierarchy
  const parents = filteredContexts.filter(c => !c.parentId);

  let contextHTML = `
    <!-- Rules Modal Overlay -->
    <div id="rules-modal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:9999; overflow-y:auto; padding:40px 20px;" onclick="if(event.target===this)this.style.display='none'">
      <div style="max-width:600px; margin:0 auto; background:rgba(12,12,18,0.98); border:1px solid rgba(0,240,255,0.2); border-radius:20px; padding:36px 32px; position:relative; box-shadow:0 30px 80px rgba(0,0,0,0.8);">
        <button onclick="document.getElementById('rules-modal').style.display='none'" style="position:absolute;top:16px;right:16px;background:transparent;border:none;color:var(--text-secondary);font-size:1.4rem;cursor:pointer;line-height:1;">&times;</button>
        <div id="rules-modal-content" style="color:var(--text-primary);font-size:0.95rem;line-height:1.7;">${t.rulesDetail}</div>
      </div>
    </div>

    <!-- Hero Section -->
    <div style="margin-bottom:40px; padding:36px; border-radius:16px; background:linear-gradient(135deg,rgba(20,20,25,0.8),rgba(10,10,12,0.9)); border:1px solid rgba(212,175,55,0.15); box-shadow:0 20px 50px rgba(0,0,0,0.6),inset 0 1px 0 rgba(255,255,255,0.05); backdrop-filter:blur(20px); position:relative; overflow:hidden;">
      <div style="position:absolute;top:-50%;left:-20%;width:50%;height:200%;background:radial-gradient(circle,rgba(212,175,55,0.08) 0%,transparent 70%);transform:rotate(30deg);pointer-events:none;"></div>
      
      <p style="font-size:1.25rem;font-weight:600;color:var(--text-primary);max-width:700px;line-height:1.55;margin-bottom:14px;">${t.heroSubtitle}</p>
      <p style="font-size:0.95rem;color:var(--text-secondary);max-width:680px;line-height:1.7;margin-bottom:28px;">${t.heroSubtitle2 || ''}</p>

      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:28px;">
        <button id="open-rules-btn" style="background:transparent;border:1px solid rgba(0,240,255,0.4);color:var(--accent-cyan);padding:9px 18px;border-radius:8px;font-size:0.85rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all 0.2s;">
          <i class="ph ph-info"></i> ${t.rulesModalBtn || 'How it works →'}
        </button>
      </div>

      <div style="display:flex;gap:24px;flex-wrap:wrap;">
        <div style="display:flex;flex-direction:column;">
          <span style="font-size:2rem;font-weight:800;color:var(--accent-cyan);font-family:var(--font-display);line-height:1;">${contexts.length}</span>
          <span style="font-size:0.8rem;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1px;margin-top:4px;">${t.heroContexts}</span>
        </div>
        <div style="width:1px;background:rgba(255,255,255,0.1);"></div>
        <div style="display:flex;flex-direction:column;">
          <span style="font-size:2rem;font-weight:800;color:var(--text-primary);font-family:var(--font-display);line-height:1;">3,000+</span>
          <span style="font-size:0.8rem;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1px;margin-top:4px;">${t.heroUsers}</span>
        </div>
        <div style="width:1px;background:rgba(255,255,255,0.1);"></div>
        <div style="display:flex;flex-direction:column;">
          <span style="font-size:2rem;font-weight:800;color:var(--text-primary);font-family:var(--font-display);line-height:1;">4.2k</span>
          <span style="font-size:0.8rem;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1px;margin-top:4px;">${t.heroVotes}</span>
        </div>
      </div>
    </div>
    
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;">
      <h2 class="section-title" style="font-size:1.4rem;color:var(--text-primary);font-weight:600;">${t.trendingContexts}</h2>
    </div>
  `;

  if (parents.length === 0) {
    contextHTML += `<div style="color:var(--text-secondary); padding: 20px;">No contexts found.</div>`;
  } else {
    parents.forEach(p => {
      const children = filteredContexts.filter(c => c.parentId === p.id);

      contextHTML += `
        <div class="hierarchy-group" style="margin-bottom: 40px;">
          <h3 style="font-family: var(--font-display); color: var(--accent-cyan); margin-bottom: 20px; display:flex; align-items:center; gap:12px; font-size: 1.5rem; letter-spacing: -0.5px;">
            <div style="background: rgba(212,175,55,0.1); padding: 8px; border-radius: 8px; border: 1px solid rgba(212,175,55,0.2);"><i class="${p.icon}"></i></div>
            ${p.titles[currentLang]}
          </h3>
          <div class="context-grid">
            <div class="context-card main-parent-card" data-id="${p.id}" ${p.imageUrl ? `style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(10,0,15,0.95)), url('${p.imageUrl}'); background-size: cover; background-position: center;"` : ''}>
               <i class="${p.icon} context-icon" style="opacity: 0.5;"></i>
               <div class="context-title" style="font-size: 1.5rem;">${p.titles[currentLang]} (Principal)</div>
               <div class="context-stats"><i class="ph ph-users"></i> ${p.participants} ${t.users}</div>
            </div>
            ${children.map(ctx => {
        let bgStyle = '';
        if (ctx.imageUrl) {
          bgStyle = `style="background-image: linear-gradient(to top, rgba(5,5,7,0.95) 0%, rgba(10,10,15,0.7) 100%), url('${ctx.imageUrl}'); background-size: cover; background-position: center; min-height: 120px;"`;
        } else {
          bgStyle = `style="min-height: 120px;"`;
        }
        return `
              <div class="context-card child-card" data-id="${ctx.id}" ${bgStyle}>
                <i class="${ctx.icon} context-icon" style="font-size: 1.5rem;"></i>
                <div class="context-title" style="font-size: 1.1rem;">${ctx.titles[currentLang]}</div>
                <div class="context-stats"><i class="ph ph-users"></i> ${ctx.participants} ${t.users}</div>
              </div>
            `;
      }).join('')}
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

    // Scale node sizes proportionally per tier using viewport-friendly values
    // Desktop: apex=110px → base=58px. Faces always visible.
    const sizeScale = [110, 102, 95, 88, 81, 74, 68, 64, 61, 58];
    const nodeSize = sizeScale[tIndex] || 58;

    const usersHTML = tier.map(user => `
      <div class="user-node ${hasVoted && hasVoted === user.id ? 'voted' : ''}" 
           data-id="${user.id}" 
           data-votes="${user.votes} ${t.votesCount}" 
           data-voted-text="&#x2713; ${t.voted}"
           style="width:${nodeSize}px; height:${nodeSize}px;">
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
      <div class="pyramid-header context-header">
        <button class="back-btn" id="back-btn"><i class="ph ph-arrow-left"></i></button>
        <div class="pyramid-context-title">
          <i class="${contextInfo.icon}" style="color:var(--accent-cyan);margin-right:6px;"></i>
          ${contextInfo.titles[currentLang]}
        </div>
        <div class="pyramid-controls">
          ${pyramidOffsetIndex > 0 ? `<button class="pyr-nav-btn" id="prev-apex-btn"><i class="ph ph-caret-up"></i><span class="btn-label">${t.prev55}</span></button>` : ''}
          ${pyramidOffsetIndex + 55 < totalUsersInContext ? `<button class="pyr-nav-btn" id="next-apex-btn"><i class="ph ph-caret-down"></i><span class="btn-label">${t.next55}</span></button>` : ''}
          ${pyramidOffsetIndex > 0 ? `<button class="pyr-nav-btn" id="reset-apex-btn"><i class="ph ph-house"></i><strong>1</strong></button>` : ''}
        </div>
      </div>

      <div class="pyramid-viewport" id="pyramid-viewport" style="position:relative;">
        <!-- Swipe Prompt Overlay -->
        <div id="swipe-prompt" style="position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.6); backdrop-filter: blur(10px); color: var(--text-primary); padding: 12px 24px; border-radius: 30px; border: 1px solid rgba(212,175,55,0.3); font-size: 0.9rem; font-weight: 500; display: flex; align-items: center; gap: 8px; z-index: 100; pointer-events: none; opacity: 1; transition: opacity 0.5s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <i class="ph ph-hand-swipe-up" style="font-size: 1.2rem; color: var(--accent-gold);"></i> ${t.swipePrompt}
        </div>
        
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

  // Add visual flare if context has an image using an inline style for the header background
  const contextHeaderEl = document.querySelector('.context-header');
  if (contextHeaderEl) {
    if (contextInfo.imageUrl) {
      // Apply a darker overlay to ensure text contrast, over the specific image
      contextHeaderEl.style.backgroundImage = `linear-gradient(to right, rgba(5,5,7,0.95) 0%, rgba(10,10,15,0.8) 100%), url('${contextInfo.imageUrl}')`;
      contextHeaderEl.style.backgroundSize = 'cover';
      contextHeaderEl.style.backgroundPosition = 'center';
    } else {
      contextHeaderEl.style.backgroundImage = 'none';
    }
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
          try {
            // Send vote strictly to our backend API
            const headers = { 'Content-Type': 'application/json' };
            const token = localStorage.getItem('pyramida_token');
            if (token) headers['Authorization'] = `Bearer ${token}`;

            const response = await fetch(`${apiHost}/api/votes`, {
              method: 'POST',
              headers,
              body: JSON.stringify({
                targetUserId: userId,
                contextId: contextInfo.id
              })
            });

            if (response.ok) {
              // Optimistic UI Update 
              if (!realVotesCache[contextInfo.id]) realVotesCache[contextInfo.id] = {};
              realVotesCache[contextInfo.id][userId] = (realVotesCache[contextInfo.id][userId] || 0) + 1;
              globalVotes.count++;
              globalVotes.byContext[contextInfo.id] = userId;

              if (!loggedInUser) {
                const localHistory = JSON.parse(localStorage.getItem('pyramida_anon_votes') || '[]');
                localHistory.push({ contextId: contextInfo.id, targetUserId: userId, castAt: new Date().toISOString() });
                localStorage.setItem('pyramida_anon_votes', JSON.stringify(localHistory));
              }

              showToast('Vote successfully cast!', 'ph-check-circle');
              render();
            } else {
              const errData = await response.json();
              showToast(errData.error || 'Failed to submit vote', 'ph-x-circle');
            }
          } catch (e) {
            console.error(e);
            showToast('Network error while voting', 'ph-wifi-slash');
          }

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
    const wrapper = viewport.querySelector('.pyramid-wrapper');
    let scale = 1;
    let isDown = false;
    let startX, startY, scrollLeft, scrollTop;
    let lastPinchDist = null;

    const applyScale = (newScale) => {
      scale = Math.min(3, Math.max(0.4, newScale));
      wrapper.style.transform = `scale(${scale})`;
      wrapper.style.transformOrigin = 'top center';
    };

    const getPinchDist = (touches) => {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    };

    // --- Pan (single finger / mouse) ---
    const onDown = (e) => {
      if (e.touches && e.touches.length === 2) return; // pinch handled separately
      if (e.target.closest('.user-node') || e.target.closest('button')) return;
      isDown = true;
      const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
      const pageY = e.type.includes('mouse') ? e.pageY : e.touches[0].pageY;
      startX = pageX - viewport.offsetLeft;
      startY = pageY - viewport.offsetTop;
      scrollLeft = viewport.scrollLeft;
      scrollTop = viewport.scrollTop;
    };

    const onLeaveOrUp = () => { isDown = false; lastPinchDist = null; };

    const onMove = (e) => {
      // Pinch-to-zoom (two fingers)
      if (e.touches && e.touches.length === 2) {
        e.preventDefault();
        const dist = getPinchDist(e.touches);
        if (lastPinchDist !== null) {
          applyScale(scale * (dist / lastPinchDist));
        }
        lastPinchDist = dist;
        return;
      }
      if (!isDown) return;
      e.preventDefault();
      const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
      const pageY = e.type.includes('mouse') ? e.pageY : e.touches[0].pageY;
      const walkX = (pageX - viewport.offsetLeft - startX) * 1.5;
      const walkY = (pageY - viewport.offsetTop - startY) * 1.5;
      viewport.scrollLeft = scrollLeft - walkX;
      viewport.scrollTop = scrollTop - walkY;
    };

    // --- Mouse Wheel Zoom (Ctrl+scroll or trackpad pinch) ---
    viewport.addEventListener('wheel', (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        applyScale(scale * (e.deltaY < 0 ? 1.1 : 0.9));
      }
    }, { passive: false });

    // Double-click to reset zoom
    viewport.addEventListener('dblclick', () => applyScale(1));

    viewport.addEventListener('mousedown', onDown);
    viewport.addEventListener('mouseleave', onLeaveOrUp);
    viewport.addEventListener('mouseup', onLeaveOrUp);
    viewport.addEventListener('mousemove', onMove);

    viewport.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) lastPinchDist = getPinchDist(e.touches);
      else onDown(e);
    }, { passive: true });
    viewport.addEventListener('touchend', onLeaveOrUp);
    viewport.addEventListener('touchmove', onMove, { passive: false });

    // Auto-center the pyramid on initial load to show the Apex (Top 1)
    setTimeout(() => {
      viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
      viewport.scrollTop = 0;
    }, 50);

    // Hide swipe prompt on first scroll
    viewport.addEventListener('scroll', () => {
      const prompt = document.getElementById('swipe-prompt');
      if (prompt) prompt.style.opacity = '0';
    }, { once: true });
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

  // Store in LocalStorage for anonymous tracking
  if (!loggedInUser) {
    const localHistory = JSON.parse(localStorage.getItem('pyramida_anon_votes') || '[]');
    localHistory.push({ contextId, targetUserId: userId, castAt: new Date().toISOString() });
    localStorage.setItem('pyramida_anon_votes', JSON.stringify(localHistory));
  }

  // Fast UI updates automatically but we ensure one immediate local render
  render();
};

const renderRegisterView = (container) => {
  const t = i18n[currentLang];
  container.innerHTML = `
      <div class="view-container" style="max-width: 400px; margin: 40px auto; width: 100%;">
      <div class="pyramid-header" style="justify-content: center; margin-bottom: 40px;">
        <div class="pyramid-context-title">${t.register}</div>
      </div>
      
      <div class="modal-content auth-container" style="transform: none; position: relative; width: 100%; box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
        
        <!-- Tab Selector -->
        <div style="display:flex; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 25px;">
           <button id="tab-login" style="flex:1; background:transparent; color:var(--text-primary); border:none; padding:15px; border-bottom: 2px solid var(--accent-gold); font-weight:600; cursor:pointer;">${t.loginTab}</button>
           <button id="tab-signup" style="flex:1; background:transparent; color:var(--text-secondary); border:none; padding:15px; border-bottom: 2px solid transparent; cursor:pointer;">${t.signUpTab}</button>
        </div>

        <!-- LOGIN FORM -->
        <div id="login-form-wrapper">
          <div class="form-group">
            <label>${t.emailLabel}</label>
            <input type="email" class="form-input" id="login-email" placeholder="you@example.com">
          </div>
          <div class="form-group">
            <label>${t.passwordLabel}</label>
            <input type="password" class="form-input" id="login-password" placeholder="••••••••">
            <div style="text-align: right; margin-top: 5px;">
               <a href="#" id="forgot-pwd-link" style="color:var(--accent-cyan); font-size: 0.8rem; text-decoration:none;">${t.forgotPwd}</a>
            </div>
          </div>
          <button class="btn-primary" id="login-btn" style="margin-bottom: 15px; width: 100%;">${t.loginTab}</button>
        </div>

        <!-- SIGN UP FORM (Hidden by default) -->
        <div id="signup-form-wrapper" style="display:none;">
          <div class="form-group">
            <label>${t.chooseUser}</label>
            <input type="text" class="form-input" id="signup-name" placeholder="${t.placeholderUser}">
          </div>
          <div class="form-group">
            <label>${t.emailLabel}</label>
            <input type="email" class="form-input" id="signup-email" placeholder="you@example.com">
          </div>
          <div class="form-group">
            <label>${t.passwordLabel}</label>
            <input type="password" class="form-input" id="signup-password" placeholder="min 6 chars">
          </div>
          <button class="btn-primary" id="signup-btn" style="margin-bottom: 15px; width: 100%; background: var(--accent-magenta); color: #fff;">${t.createAccount}</button>
        </div>

        <button class="btn-primary" id="back-home-btn" style="background: transparent; border: 1px solid var(--border-light); box-shadow: none; width: 100%;">${t.backToHome}</button>
      </div>
    </div >
  `;

  document.getElementById('back-home-btn').addEventListener('click', () => { currentView = 'home'; render(); });

  // Tab Logic
  const tabLogin = document.getElementById('tab-login');
  const tabSignup = document.getElementById('tab-signup');
  const loginForm = document.getElementById('login-form-wrapper');
  const signupForm = document.getElementById('signup-form-wrapper');

  tabLogin.addEventListener('click', () => {
    tabLogin.style.color = 'var(--text-primary)';
    tabLogin.style.borderBottomColor = 'var(--accent-gold)';
    tabLogin.style.fontWeight = '600';
    tabSignup.style.color = 'var(--text-secondary)';
    tabSignup.style.borderBottomColor = 'transparent';
    tabSignup.style.fontWeight = '400';
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  });

  tabSignup.addEventListener('click', () => {
    tabSignup.style.color = 'var(--text-primary)';
    tabSignup.style.borderBottomColor = 'var(--accent-magenta)';
    tabSignup.style.fontWeight = '600';
    tabLogin.style.color = 'var(--text-secondary)';
    tabLogin.style.borderBottomColor = 'transparent';
    tabLogin.style.fontWeight = '400';
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
  });

  // Login Firebase Logic
  const loginBtn = document.getElementById('login-btn');
  loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-password').value;
    if (!email || !pass) return showToast('Please enter email and password', 'ph-warning');

    loginBtn.innerText = t.authenticating;
    try {
      const resp = await fetch(`${apiHost}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass })
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error || 'Login failed');

      localStorage.setItem('pyramida_token', data.token);
      localStorage.setItem('pyramida_user', JSON.stringify(data.user));
      loggedInUser = data.user;

      showToast('Logged in successfully!', 'ph-check-circle');
      currentView = 'home';
      render();
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Invalid credentials or user not found.', 'ph-warning');
      loginBtn.innerText = t.loginTab;
    }
  });

  // Forgot Password
  document.getElementById('forgot-pwd-link').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    if (!email) return showToast('Enter your email in the field to reset password.', 'ph-warning');
    try {
      await sendPasswordResetEmail(auth, email);
      showToast('Password reset email sent!', 'ph-envelope');
    } catch (err) { showToast('Error sending reset email.', 'ph-warning'); }
  });

  // Sign Up Firebase Logic
  const signupBtn = document.getElementById('signup-btn');
  signupBtn.addEventListener('click', async () => {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const pass = document.getElementById('signup-password').value;

    if (!name || !email || pass.length < 6) return showToast('Fill all fields. Password > 6 chars.', 'ph-warning');

    signupBtn.innerText = t.creatingAccount;
    try {
      const resp = await fetch(`${apiHost}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password: pass })
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error || 'Registration failed');

      localStorage.setItem('pyramida_token', data.token);
      localStorage.setItem('pyramida_user', JSON.stringify(data.user));
      loggedInUser = data.user;

      showToast('Account created successfully!', 'ph-check-circle');
      currentView = 'home';
      render();
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Registration failed.', 'ph-warning');
      signupBtn.innerText = t.createAccount;
    }
  });
};

const renderSuggestView = (container) => {
  const t = i18n[currentLang];
  container.innerHTML = `
  < div class="view-container" style = "max-width: 500px; margin: 40px auto; width: 100%;" >
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
    </div >
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
  < div style = "display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.02); padding:10px; border-radius:6px; margin-bottom:8px; border:1px solid rgba(255,255,255,0.05);" >
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
    </div >
  `).join('');

  container.innerHTML = `
  < div class="view-container" style = "max-width: 800px; margin: 20px auto; width: 100%; display:grid; grid-template-columns: 1fr 1fr; gap: 20px;" >
      
      < !--Left side: Form-- >
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

       <!--Right side: List-- >
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
    </div >
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
      const resp = await fetch(`${apiHost}/api/contexts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ctxData)
      });
      if (!resp.ok) throw new Error('Failed to save context');

      showToast(`Context ${editingContextId ? 'updated' : 'created'} successfully!`, 'ph-check-circle');
      editingContextId = null;
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
          const resp = await fetch(`${apiHost}/api/contexts/${id}`, { method: 'DELETE' });
          if (!resp.ok) throw new Error('Delete failed');
          showToast('Context deleted', 'ph-trash');
          setTimeout(() => renderAdminView(container), 200);
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
        const resp = await fetch(`${apiHost}/api/suggestions/${sugId}/approve`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(ctxData)
        });
        if (!resp.ok) throw new Error('Approval Failed');
        showToast('Suggestion Approved!', 'ph-check-circle');
        setTimeout(() => renderAdminView(container), 200);
      } catch (e) { console.error(e); }
    });
  });

  document.querySelectorAll('.btn-reject-sug').forEach(btn => {
    btn.addEventListener('click', async () => {
      const sugId = btn.getAttribute('data-id');
      try {
        await fetch(`${apiHost}/api/suggestions/${sugId}/reject`, { method: 'POST' });
        showToast('Suggestion Rejected.', 'ph-trash');
        setTimeout(() => renderAdminView(container), 200);
      } catch (e) { console.error('Error Rejecting:', e); }
    });
  });
};

const showToast = (message, icon = 'ph-info') => {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'custom-toast';

  // Build icon element safely via DOM (no innerHTML needed for icon)
  const iconEl = document.createElement('i');
  iconEl.className = `ph-fill ${icon}`;

  // Use textContent for message so raw HTML never leaks as visible text
  const msgEl = document.createElement('span');
  msgEl.textContent = message;

  toast.appendChild(iconEl);
  toast.appendChild(msgEl);
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
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

  const openRulesBtn = document.getElementById('open-rules-btn');
  if (openRulesBtn) openRulesBtn.addEventListener('click', () => {
    const modal = document.getElementById('rules-modal');
    if (modal) modal.style.display = 'block';
  });

  const btnAdmin = document.getElementById('btn-nav-admin');
  if (btnAdmin) btnAdmin.addEventListener('click', () => { currentView = 'admin'; render(); });

  const logoLink = document.getElementById('logo-home-link');
  if (logoLink) logoLink.addEventListener('click', (e) => { e.preventDefault(); pyramidOffsetIndex = 0; currentView = 'home'; render(); });

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
