import './style.css'

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
    voteRule: 'Unregistered users can cast <strong>1 vote</strong> per category.',
    votedInCat: 'Voted in this category',
    expiresIn: 'Expires 7d',
    votesAvail: '1 Vote Available',
    joinPyramida: 'Join Pyramida',
    chooseUser: 'Choose a Username',
    placeholderUser: 'e.g. capcris',
    enterPyramid: 'Enter the Pyramid',
    tapToVote: 'Tap on any user to cast a vote and alter the pyramid structure.',
    alreadyVotedAlert: 'You have already used your 1 vote for this category! Register to vote freely.',
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
    voteRule: 'Usuarios no registrados tienen <strong>1 voto</strong> por categoría.',
    votedInCat: 'Votaste en esta categoría',
    expiresIn: 'Expira 7d',
    votesAvail: '1 Voto Disponible',
    joinPyramida: 'Únete a Pyramida',
    chooseUser: 'Ingresa un Username',
    placeholderUser: 'ej. capcris',
    enterPyramid: 'Entrar a la Pirámide',
    tapToVote: 'Toca a cualquier usuario para votar y alterar la estructura.',
    alreadyVotedAlert: '¡Ya usaste tu único voto en esta categoría! Regístrate para votar libremente.',
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
    voteRule: 'Les invités peuvent voter <strong>1 fois</strong> par catégorie.',
    votedInCat: 'Voté dans cette catégorie',
    expiresIn: 'Expire 7j',
    votesAvail: '1 Vote Dispo',
    joinPyramida: 'Rejoindre Pyramida',
    chooseUser: 'Choisir un Pseudo',
    placeholderUser: 'ex. capcris',
    enterPyramid: 'Entrer dans la Pyramide',
    tapToVote: 'Appuyez sur un utilisateur pour voter.',
    alreadyVotedAlert: 'Vous avez déjà utilisé votre seul vote ! Inscrivez-vous pour voter librement.',
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
    voteRule: 'Gäste haben <strong>1 Stimme</strong> pro Kategorie.',
    votedInCat: 'In dieser Kategorie abgestimmt',
    expiresIn: 'Ablauf 7t',
    votesAvail: '1 Stimme Verfügbar',
    joinPyramida: 'Pyramida Beitreten',
    chooseUser: 'Wählen Sie einen Namen',
    placeholderUser: 'z.B. capcris',
    enterPyramid: 'Die Pyramide Betreten',
    tapToVote: 'Tippen Sie auf einen Benutzer, um abzustimmen.',
    alreadyVotedAlert: 'Sie haben Ihre Stimme bereits verwendet! Bitte registrieren Sie sich.',
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

// Mock Data
const contexts = [
  { id: '1', titles: { en: 'Top Developer', es: 'Mejor Desarrollador', fr: 'Meilleur Développeur', de: 'Top-Entwickler' }, icon: 'ph-code', participants: 142 },
  { id: '2', titles: { en: 'Most Innovative', es: 'Más Innovador', fr: 'Plus Innovant', de: 'Am innovativsten' }, icon: 'ph-lightbulb', participants: 89 },
  { id: '3', titles: { en: 'Design Guru', es: 'Gurú del Diseño', fr: 'Gourou du Design', de: 'Design-Guru' }, icon: 'ph-palette', participants: 210 },
  { id: '4', titles: { en: 'Community Leader', es: 'Líder Comunitario', fr: 'Leader Communautaire', de: 'Community-Leader' }, icon: 'ph-users-three', participants: 56 },
  { id: '5', titles: { en: 'Funniest Member', es: 'El Más Divertido', fr: 'Membre le plus Drôle', de: 'Lustigstes Mitglied' }, icon: 'ph-smiley', participants: 305 },
  { id: '6', titles: { en: 'Best Manager', es: 'Mejor Gerente', fr: 'Meilleur Manager', de: 'Bester Manager' }, icon: 'ph-briefcase', participants: 42 },
  { id: '7', titles: { en: 'Rising Star', es: 'Estrella en Ascenso', fr: 'Étoile Montante', de: 'Aufgehender Stern' }, icon: 'ph-star', participants: 180 },
  { id: '8', titles: { en: 'Tech Visionary', es: 'Visionario Tech', fr: 'Visionnaire Tech', de: 'Tech-Visionär' }, icon: 'ph-rocket-launch', participants: 92 }
];

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

// Generate 1200 users dynamically
const baseUsers = Array.from({ length: 1200 }).map((_, i) => {
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
    const votes = Math.floor(Math.abs(randomFactor - Math.floor(randomFactor)) * 5000);
    return { ...u, votes };
  }).sort((a, b) => b.votes - a.votes);

  // Group into tiers based on descending logic (Strict visual pyramid)
  // 1 at apex, 2 in tier 1, 3 in tier 2, 5 in tier 3, etc.
  const tiersCount = [1, 2, 3, 5, 7, 9];
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
let loggedInUser = null;
let guestVotes = {}; // track votes per category for guest: { contextId: true }

const app = document.querySelector('#app');

// Render App
const render = () => {
  const t = i18n[currentLang];

  app.innerHTML = `
    <header>
      <div style="display: flex; align-items: center; gap: 15px;">
        <button class="hamburger-btn" id="mobile-menu-btn"><i class="ph ph-list"></i></button>
        <div class="logo">Pyramida</div>
      </div>
      <div class="header-controls">
        <select class="lang-select" id="lang-switcher">
          <option value="en" ${currentLang === 'en' ? 'selected' : ''}>EN</option>
          <option value="es" ${currentLang === 'es' ? 'selected' : ''}>ES</option>
          <option value="fr" ${currentLang === 'fr' ? 'selected' : ''}>FR</option>
          <option value="de" ${currentLang === 'de' ? 'selected' : ''}>DE</option>
        </select>
        <div class="user-profile" id="profile-btn" style="cursor: pointer;">
          <div class="avatar">${loggedInUser ? loggedInUser.name.substring(0, 2).toUpperCase() : '<i class="ph ph-user"></i>'}</div>
        </div>
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
};

const renderHomeView = (container) => {
  const t = i18n[currentLang];
  let contextHTML = contexts.map(ctx => `
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
    
    <!-- Quick admin/register links for demonstration -->
    <div style="margin-top: 40px; display: flex; gap: 10px; justify-content: center; border-top: 1px solid var(--border-light); padding-top: 20px;">
      <button class="btn-primary" id="dev-btn-register" style="width: auto; background: var(--bg-card); border: 1px solid var(--border-light); font-size: 0.8rem;">${t.register}</button>
      <button class="btn-primary" id="dev-btn-admin" style="width: auto; background: var(--bg-card); border: 1px solid var(--border-light); font-size: 0.8rem;">${t.adminPanel}</button>
    </div>
  `;

  // Attach card clicks
  document.querySelectorAll('.context-card').forEach(card => {
    card.addEventListener('click', () => {
      currentView = `pyramid-${card.dataset.id}`;
      render();
    });
  });

  document.getElementById('dev-btn-register').addEventListener('click', () => { currentView = 'register'; render(); });
  document.getElementById('dev-btn-admin').addEventListener('click', () => { currentView = 'admin'; render(); });
};

const renderPyramidView = (container, contextInfo) => {
  const t = i18n[currentLang];
  const pyramidData = generatePyramidData(contextInfo.id);
  const hasVoted = guestVotes[contextInfo.id];

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
        <div class="voting-status ${hasVoted ? 'voted' : ''}">
          ${hasVoted ? `
            <i class="ph-fill ph-check-circle"></i> ${t.votedInCat}
            <div class="expiring-tag">${t.expiresIn}</div>
          ` : `
            <i class="ph-fill ph-plus-circle"></i> ${t.votesAvail}
          `}
        </div>
      </div>

      <div class="pyramid-wrapper">
        <div class="pyramid-bg"></div>
        ${tiersHTML}
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

      if (hasVoted) {
        vBtn.innerText = hasVoted === userId ? t.votedInCat : t.close;
        vBtn.className = 'btn-vote disabled';
        vBtn.onclick = (e) => profileModal.classList.remove('active'); // dismiss
      } else {
        vBtn.innerText = t.vote;
        vBtn.className = 'btn-vote';
        vBtn.onclick = (e) => {
          if (!loggedInUser) {
            guestVotes[contextInfo.id] = userId;
          }
          voteAction(this, contextInfo.id);
          profileModal.classList.remove('active');
        };
      }

      profileModal.classList.add('active');
    });
  });
};

const voteAction = (node, contextId) => {
  const userId = node.getAttribute('data-id');
  const t = i18n[currentLang];

  if (!loggedInUser) {
    if (guestVotes[contextId]) {
      const isVoteForThisUser = guestVotes[contextId] === userId;
      if (!isVoteForThisUser) {
        showToast(t.alreadyVotedAlert, 'ph-warning-circle');
        setTimeout(() => {
          currentView = 'register';
          render();
        }, 2000);
      }
      return;
    }
  }

  // Register the vote
  guestVotes[contextId] = userId;

  // Add votes visually (extract number first)
  const currentSpan = node.getAttribute('data-votes');
  const votes = parseInt(currentSpan) + 1;
  node.setAttribute('data-votes', `${votes} ${t.votes}`);

  // Re-render to show voted state
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
      loggedInUser = { name: val };
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
  // Language switcher logic
  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) {
    langSwitcher.addEventListener('change', (e) => {
      currentLang = e.target.value;
      render(); // re-render entire app in new language
    });
  }

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
