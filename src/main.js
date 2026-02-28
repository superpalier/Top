import './style.css'

import './style.css';
import { db } from './firebase.js';
import { doc, onSnapshot, setDoc, increment } from 'firebase/firestore';

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
    votesCount: 'Votes'
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
    votesCount: 'Votos'
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
    votesCount: 'Votes'
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
    votesCount: 'Stimmen'
  }
};

// Dynamically Generate 1000 Contexts
const baseIcons = ['ph-code', 'ph-lightbulb', 'ph-palette', 'ph-users-three', 'ph-smiley', 'ph-briefcase', 'ph-star', 'ph-rocket-launch', 'ph-planet', 'ph-cpu', 'ph-leaf', 'ph-drop'];
const defaultContextNames = [
  { en: 'Top Developer', es: 'Mejor Desarrollador', fr: 'Meilleur Développeur', de: 'Top-Entwickler' },
  { en: 'Most Innovative', es: 'Más Innovador', fr: 'Plus Innovant', de: 'Am innovativsten' },
  { en: 'Design Guru', es: 'Gurú del Diseño', fr: 'Gourou du Design', de: 'Design-Guru' },
  { en: 'Community Leader', es: 'Líder Comunitario', fr: 'Leader Communautaire', de: 'Community-Leader' },
  { en: 'Funniest Member', es: 'El Más Divertido', fr: 'Membre le plus Drôle', de: 'Lustigstes Mitglied' },
  { en: 'Best Manager', es: 'Mejor Gerente', fr: 'Meilleur Manager', de: 'Bester Manager' },
  { en: 'Rising Star', es: 'Estrella en Ascenso', fr: 'Étoile Montante', de: 'Aufgehender Stern' },
  { en: 'Tech Visionary', es: 'Visionario Tech', fr: 'Visionnaire Tech', de: 'Tech-Visionär' }
];

const contexts = Array.from({ length: 1000 }).map((_, i) => {
  const isDefault = i < defaultContextNames.length;
  const icon = baseIcons[i % baseIcons.length];
  const participants = Math.floor(Math.random() * 800) + 100; // 100 to 900 users per context

  return {
    id: `${i + 1}`,
    icon,
    participants,
    titles: isDefault ? defaultContextNames[i] : {
      en: `Arena Context #${i + 1}`,
      es: `Arena Contexto #${i + 1}`,
      fr: `Arène Contexte #${i + 1}`,
      de: `Kontext Arena #${i + 1}`
    }
  };
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
  const seed = parseInt(contextId);
  const usersWithVotes = baseUsers.map((u, i) => {
    // Generate a pseudo-random vote count based on user index and context ID
    const randomFactor = Math.sin(seed * (i + 1)) * 10000;
    const baseVotes = Math.floor(Math.abs(randomFactor - Math.floor(randomFactor)) * 5000);
    const realVotes = firebaseVotesCache[u.id] || 0;
    return { ...u, votes: baseVotes + realVotes };
  }).sort((a, b) => b.votes - a.votes);

  // Group into tiers based on descending logic (Strict visual pyramid)
  // Scaling up to hold hundreds of users:
  const tiersCount = [1, 2, 3, 5, 7, 9, 12, 16, 21, 28, 38, 50, 65, 85];
  const data = [];
  let userIndex = 0;

  for (let i = 0; i < tiersCount.length; i++) {
    const tierSize = tiersCount[i];
    const tierUsers = [];
    for (let j = 0; j < tierSize; j++) {
      if (userIndex < usersWithVotes.length) {
        tierUsers.push(usersWithVotes[userIndex]);
        userIndex++;
      }
    }
    if (tierUsers.length > 0) {
      data.push(tierUsers);
    }
  }
  return data;
};

// State
let currentLang = 'en';
let currentView = 'home';
let previousView = '';
let loggedInUser = null;
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
        <div class="logo">Pyramida</div>
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
          <div class="user-profile" id="profile-btn" style="cursor: pointer;">
            <div class="avatar">${loggedInUser.name.substring(0, 2).toUpperCase()}</div>
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
        <div class="sidebar-title">${t.allContexts}</div>
        <a class="sidebar-item ${currentView === 'home' ? 'active' : ''}" data-target="home">
          <i class="ph ph-squares-four"></i> ${t.dashboard}
        </a>
        ${contexts.map(ctx => `
          <a class="sidebar-item ${currentView === `pyramid-${ctx.id}` ? 'active' : ''}" data-target="pyramid-${ctx.id}">
            <i class="${ctx.icon}"></i> ${ctx.titles[currentLang]}
          </a>
        `).join('')}
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

          <div class="profile-actions">
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
    newVp.scrollLeft = lastScrollX;
    newVp.scrollTop = lastScrollY;
  }
};

const renderHomeView = (container) => {
  const t = i18n[currentLang];

  // Only render the first 40 on the home page dashboard to avoid DOM lag, sidebar has all 1000
  const trendingContexts = contexts.slice(0, 40);

  let contextHTML = trendingContexts.map(ctx => `
    <div class="context-card" data-id="${ctx.id}">
      <i class="${ctx.icon} context-icon"></i>
      <div class="context-title">${ctx.titles[currentLang]}</div>
      <div class="context-stats">${ctx.participants} ${t.users}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="view-container">
      ${loggedInUser ? `
        <div class="user-stats-bar">
          <div class="stat-item">
            <div class="stat-value">5</div>
            <div class="stat-label">${t.contexts}</div>
          </div>
          <div class="stat-item highlight">
            <div class="stat-value">#1</div>
            <div class="stat-label">${t.topRank}</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">4.2k</div>
            <div class="stat-label">${t.votes}</div>
          </div>
        </div>
      ` : ''}
      <h2 class="section-title">${t.trendingContexts}</h2>
      <div class="context-grid">
        ${contextHTML}
      </div>
    </div>
  `;

  // Attach card clicks
  document.querySelectorAll('.context-card').forEach(card => {
    card.addEventListener('click', () => {
      currentView = `pyramid-${card.dataset.id}`;
      render();
    });
  });
};

const renderPyramidView = (container, contextInfo) => {
  const t = i18n[currentLang];
  const pyramidData = generatePyramidData(contextInfo.id);
  const hasVoted = globalVotes.byContext[contextInfo.id];

  // Generating tiers HTML
  let tiersHTML = pyramidData.map((tier, tIndex) => {
    const zIndex = 50 - tIndex; // Higher tiers are visually "above"

    const usersHTML = tier.map(user => `
      <div class="user-node ${hasVoted && hasVoted === user.id ? 'voted' : ''}" 
           data-id="${user.id}" 
           data-votes="${user.votes} ${t.votes}" 
           data-voted-text="&#x2713; ${t.voted}">
        <img src="${user.img}" alt="${user.name}">
      </div>
    `).join('');

    return `
      <div class="pyramid-tier tier-${tIndex}" style="--z-index: ${zIndex}">
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
    currentView = 'home';
    render();
  });

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
        vBtn.innerText = globalVotes.byContext[contextInfo.id] === userId ? t.votedInCat : t.close;
        vBtn.className = 'btn-vote disabled';
        vBtn.onclick = (e) => profileModal.classList.remove('active'); // dismiss
      } else if (globalVotes.count >= MAX_DAILY_VOTES) {
        vBtn.innerText = 'Daily Limit Reached';
        vBtn.className = 'btn-vote disabled';
        vBtn.onclick = (e) => showToast(t.limitReachedAlert, 'ph-prohibit');
      } else {
        vBtn.innerText = t.vote;
        vBtn.className = 'btn-vote';
        vBtn.onclick = (e) => {
          voteAction(this, contextInfo.id);
          profileModal.classList.remove('active');
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
  document.getElementById('signup-btn').addEventListener('click', () => {
    const val = document.getElementById('username-input').value.trim();
    if (val) {
      loggedInUser = { name: val, role: val.toLowerCase() === 'admin' ? 'admin' : 'user' };
      currentView = 'home';
      render();
    }
  });
};

const renderAdminView = (container) => {
  const t = i18n[currentLang];
  container.innerHTML = `
    <div class="view-container" style="max-width: 600px; margin: 20px auto; width: 100%;">
      <div class="pyramid-header">
        <button class="back-btn" id="admin-back-btn"><i class="ph ph-arrow-left"></i></button>
        <div class="pyramid-context-title" style="color: var(--accent-magenta);">${t.adminPanel}</div>
      </div>
      
      <div class="modal-content" style="transform: none; position: relative; width: 100%; max-width: 100%;">
        <h3 style="margin-bottom: 20px; font-family: var(--font-display);">${t.addNewContext}</h3>
        
        <div class="form-group">
          <label>${t.contextId} (e.g. 9)</label>
          <input type="text" class="form-input" id="new-ctx-id">
        </div>
        
        <div class="form-group">
          <label>${t.iconClass}</label>
          <input type="text" class="form-input" id="new-ctx-icon" value="ph-star">
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <div class="form-group">
            <label>${t.titleEn}</label>
            <input type="text" class="form-input" id="new-ctx-en">
          </div>
          <div class="form-group">
            <label>${t.titleEs}</label>
            <input type="text" class="form-input" id="new-ctx-es">
          </div>
          <div class="form-group">
            <label>${t.titleFr}</label>
            <input type="text" class="form-input" id="new-ctx-fr">
          </div>
          <div class="form-group">
            <label>${t.titleDe}</label>
            <input type="text" class="form-input" id="new-ctx-de">
          </div>
        </div>

        <button class="btn-primary" id="create-ctx-btn" style="margin-top: 10px;">${t.createContext}</button>
      </div>
    </div>
  `;

  document.getElementById('admin-back-btn').addEventListener('click', () => { currentView = 'home'; render(); });
  document.getElementById('create-ctx-btn').addEventListener('click', () => {
    const id = document.getElementById('new-ctx-id').value.trim();
    if (!id) return showToast('Context ID is required', 'ph-warning');

    contexts.push({
      id,
      icon: document.getElementById('new-ctx-icon').value.trim() || 'ph-star',
      participants: 0,
      titles: {
        en: document.getElementById('new-ctx-en').value.trim() || 'New Context',
        es: document.getElementById('new-ctx-es').value.trim() || 'Nuevo Contexto',
        fr: document.getElementById('new-ctx-fr').value.trim() || 'Nouveau Contexte',
        de: document.getElementById('new-ctx-de').value.trim() || 'Neuer Kontext'
      }
    });

    currentView = 'home';
    render();
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
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      if (currentView !== target) {
        currentView = target;
        render();
      }
    });
  });

  const profileBtn = document.getElementById('profile-btn');
  if (profileBtn && !loggedInUser) {
    profileBtn.addEventListener('click', () => {
      currentView = 'register';
      render();
    });
  }
};

// Init
render();
