import './style.css';
import { initAscensionCanvas } from './canvas-bg.js';

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

const getEffectiveImageUrl = (ctx) => {
  if (FLAGSHIP_IMAGES[ctx.id]) return FLAGSHIP_IMAGES[ctx.id];
  return ctx.imageUrl || ctx.image_url || '';
};

// Boot Project Ascension Systems
initAscensionCanvas();

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
    joinDate: 'Joined',
    rankLabel: 'Rank',
    votesStatLabel: 'Votes',
    emailInUse: 'Email already in use.',
    trendingContexts: 'Trending Contexts',
    users: 'Users',
    voted: 'Voted',
    voteRule: '<strong>3 votes</strong> per day. Anon votes last 24h. Log in to keep them for 30 days.',
    votedInCat: 'Voted in this context',
    expiresIn: 'Expires 24h',
    votesAvail: (rem) => `${rem} Votes Left Today`,
    joinVotenaut: 'Join Votenaut',
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
    heroSubtitle: 'Who rules the Pyramid?<span style="display:block; margin-top:20px; color:var(--accent-cyan);">You decide.</span>',
    heroSubtitle2: '<span style="display:block; margin-bottom:12px;">Vote anonymously</span><span style="display:block; margin-bottom:12px;">or forge an account</span><span style="display:block;">to seal your legacy.</span>',
    rulesModalBtn: 'How does it work? →',
    rulesDetail: `<h2 style="margin-bottom:16px;color:var(--accent-cyan);">🗳️ How Votenaut Works</h2>
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
    swipePrompt: 'Swipe to see the full pyramid',
    voteCast: '✓ Vote cast! Good choice.',
    voteFailed: 'Failed to submit vote. Try again.',
    networkError: 'Network error. Please check your connection.',
    dailyLimitLabel: 'Daily limit reached',
    noNotifications: 'No new notifications',
    subcategories: 'Subcategories',
    enterContext: 'Enter Pyramid',
    backToFamily: '← Back',
    dbSeeded: 'Database Seeded Successfully with Hierarchies!',
    confirmDelete: 'Are you sure you want to delete this context?',
    ctxDeleted: 'Context deleted',
    deleteFailed: 'Failed to delete',
    loginReq: 'Please enter email and password',
    loginSuccess: 'Logged in successfully!',
    credsInvalid: 'Invalid credentials or user not found.',
    resetReq: 'Enter your email in the field to reset password.',
    resetSent: 'Password reset email sent!',
    resetError: 'Error sending reset email.',
    fillAllFields: 'Fill all fields. Password > 6 chars.',
    regSuccess: 'Account created successfully!',
    regFailed: 'Registration failed.',
    enterTitlePrompt: 'Please enter a title',
    sugSubmitted: 'Suggestion submitted for review!',
    sugError: 'Error submitting suggestion',
    ctxIdReq: 'Context ID is required',
    ctxCreated: 'Context created successfully!',
    ctxUpdated: 'Context updated successfully!',
    ctxSaveError: 'Error saving context',
    sugApproved: 'Suggestion Approved!',
    sugRejected: 'Suggestion Rejected.',
    editContext: 'Edit Context',
    updateContext: 'Update Context',
    cancelEdit: 'Cancel Edit',
    activeContexts: (count) => `Active Contexts (${count})`,
    pendingSuggestions: (count) => `Pending Suggestions (${count})`,
    suggestedBy: 'Suggested by:',
    approve: 'Approve',
    reject: 'Reject',
    edit: 'Edit',
    delete: 'Delete',
    contextIdLabel: 'Context ID (e.g. unique_string)',
    iconClassLabel: 'Icon Class (e.g. ph-star)',
    parentCatOptional: 'Parent Category (Optional Subfamily)',
    imageUrlOptional: 'Image URL (Optional)',
    noneTopLevel: '-- None (Top Level) --',
    noContextsFound: 'No contexts found.',
    myProfile: 'My Profile',
    logout: 'Logout',
    noVotesYet: 'No votes cast yet.',
    votedFor: 'Voted for',
    category: 'Category',
    date: 'Date'
  },
  es: {
    dashboard: 'Inicio',
    allContexts: 'Todos los Contextos',
    join: 'Unirse',
    contexts: 'Contextos',
    topRank: 'Mejor Rango',
    votes: 'Votos',
    joinDate: 'Miembro desde',
    rankLabel: 'Rango',
    votesStatLabel: 'Votos',
    emailInUse: 'Este correo ya está en uso.',
    trendingContexts: 'Contextos Populares',
    users: 'Usuarios',
    voted: 'Votado',
    voteRule: '<strong>3 votos</strong> por día. Votos anónimos duran 24h. Inicia sesión para guardarlos 30 días.',
    votedInCat: 'Has votado en este contexto',
    expiresIn: 'Expira en 24h',
    votesAvail: (rem) => `${rem} Votos Restantes`,
    joinVotenaut: 'Únete a Votenaut',
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
    heroSubtitle: '¿Quién domina la Pirámide?<span style="display:block; margin-top:20px; color:var(--accent-cyan);">Tú decides.</span>',
    heroSubtitle2: '<span style="display:block; margin-bottom:12px;">Vota en el anonimato</span><span style="display:block; margin-bottom:12px;">o forja una cuenta</span><span style="display:block;">para sellar tu legado.</span>',
    rulesModalBtn: '¿Cómo funciona? →',
    rulesDetail: `<h2 style="margin-bottom:16px;color:var(--accent-cyan);">🗳️ Cómo funciona Votenaut</h2>
<p style="margin-bottom:12px;">Cada <strong>Pirámide</strong> es una categoría o contexto (ej. Mejor Músico). Dentro, los usuarios se rankean del #1 (Apex) al #55 según los votos recibidos.</p>
<h3 style="margin:16px 0 8px;color:var(--accent-gold);">⚡ Votación Anónima (sin cuenta)</h3>
<ul style="padding-left:18px;margin-bottom:12px;line-height:2;">
  <li>Hasta <strong>3 votos por día</strong> en total</li>
  <li><strong>1 voto por categoría</strong> — ¡elige bien!</li>
  <li>Tus votos expiran en <strong>24 horas</strong></li>
  <li>Sin cuenta, sin historial — democracia pura</li>
</ul>
<h3 style="margin:16px 0 8px;color:var(--accent-cyan);">🔐 Votación Registrada (cuenta gratuita)</h3>
<ul style="padding-left:18px;margin-bottom:12px;line-height:2;">
  <li>Mismo límite de 3 votos/día</li>
  <li>Los votos duran <strong>30 días</strong> en lugar de 24h</li>
  <li>Panel de <strong>historial completo</strong></li>
  <li>Sigue tu impacto en todas las pirámides</li>
</ul>
<h3 style="margin:16px 0 8px;color:var(--accent-magenta);">🏅 La Estructura de la Pirámide</h3>
<p>10 pisos, 55 usuarios por página. El Apex (#1) es el más votado por la comunidad. Los votos mueven la pirámide cada día — ¡el #1 de hoy puede ser el #2 de mañana!</p>`,
    heroContexts: 'Contextos',
    heroUsers: 'Usuarios',
    heroVotes: 'Votos',
    swipePrompt: 'Desliza para ver la pirámide completa',
    voteCast: '✓ Voto registrado. ¡Buena elección!',
    voteFailed: 'Error al votar. Intenta de nuevo.',
    networkError: 'Error de red. Verifica tu conexión.',
    dailyLimitLabel: 'Límite diario alcanzado',
    noNotifications: 'Sin notificaciones nuevas',
    subcategories: 'Subcategorías',
    enterContext: 'Entrar a la Pirámide',
    backToFamily: '← Volver',
    dbSeeded: '¡Base de datos sembrada con éxito!',
    confirmDelete: '¿Estás seguro de que quieres eliminar este contexto?',
    ctxDeleted: 'Contexto eliminado',
    deleteFailed: 'Error al eliminar',
    loginReq: 'Por favor, ingresa correo y contraseña',
    loginSuccess: '¡Sesión iniciada con éxito!',
    credsInvalid: 'Credenciales inválidas o usuario no encontrado.',
    resetReq: 'Ingresa tu correo para restablecer la contraseña.',
    resetSent: '¡Correo de restablecimiento enviado!',
    resetError: 'Error al enviar el correo de restablecimiento.',
    fillAllFields: 'Completa todos los campos. Contraseña > 6 chars.',
    regSuccess: '¡Cuenta creada con éxito!',
    regFailed: 'Error en el registro.',
    enterTitlePrompt: 'Por favor, ingresa un título',
    sugSubmitted: '¡Sugerencia enviada para revisión!',
    sugError: 'Error al enviar la sugerencia',
    ctxIdReq: 'El ID del contexto es obligatorio',
    ctxCreated: '¡Contexto creado con éxito!',
    ctxUpdated: '¡Contexto actualizado con éxito!',
    ctxSaveError: 'Error al guardar el contexto',
    sugApproved: '¡Sugerencia aprobada!',
    sugRejected: 'Sugerencia rechazada.',
    editContext: 'Editar Contexto',
    updateContext: 'Actualizar Contexto',
    cancelEdit: 'Cancelar Edición',
    activeContexts: (count) => `Contextos Activos (${count})`,
    pendingSuggestions: (count) => `Sugerencias Pendientes (${count})`,
    suggestedBy: 'Sugerido por:',
    approve: 'Aprobar',
    reject: 'Rechazar',
    edit: 'Editar',
    delete: 'Eliminar',
    contextIdLabel: 'ID del Contexto (ej. único_string)',
    iconClassLabel: 'Clase de Icono (ej. ph-star)',
    parentCatOptional: 'Categoría Padre (Opcional)',
    imageUrlOptional: 'URL de Imagen (Opcional)',
    noneTopLevel: '-- Ninguna (Nivel Superior) --',
    noContextsFound: 'No se encontraron contextos.',
    myProfile: 'Mi Perfil',
    logout: 'Cerrar Sesión',
    noVotesYet: 'Aún no has votado.',
    votedFor: 'Votó por',
    category: 'Categoría',
    date: 'Fecha'
  },
  fr: {
    dashboard: 'Accueil',
    allContexts: 'Tous les Contextes',
    join: 'Rejoindre',
    contexts: 'Contextes',
    topRank: 'Meilleur Rang',
    votes: 'Votes',
    joinDate: 'Membre depuis',
    rankLabel: 'Rang',
    votesStatLabel: 'Votes',
    emailInUse: 'Email déjà utilisé.',
    trendingContexts: 'Contextes Tendances',
    users: 'Utilisateurs',
    voted: 'Voté',
    voteRule: '<strong>3 votes</strong> par jour maximum. 24h d\'anonymat. Connectez-vous pour 30 jours.',
    votedInCat: 'Voté dans ce contexte',
    expiresIn: 'Expire 24h',
    votesAvail: (rem) => `${rem} Votes Restants`,
    joinVotenaut: 'Rejoindre Votenaut',
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
    rulesDetail: `<h2 style="margin-bottom:16px;color:var(--accent-cyan);">🗳️ Comment fonctionne Votenaut</h2>
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
    swipePrompt: 'Faites glisser pour voir la pyramide complète',
    voteCast: '✓ Vote enregistré !',
    voteFailed: 'Échec du vote. Réessayez.',
    networkError: 'Erreur réseau. Vérifiez votre connexion.',
    dailyLimitLabel: 'Limite quotidienne atteinte',
    noNotifications: 'Aucune nouvelle notification',
    subcategories: 'Sous-catégories',
    enterContext: 'Entrer dans la Pyramide',
    backToFamily: '← Retour',
    dbSeeded: 'Base de données initialisée avec succès !',
    confirmDelete: 'Êtes-vous sûr de vouloir supprimer ce contexte ?',
    ctxDeleted: 'Contexte supprimé',
    deleteFailed: 'Échec de la suppression',
    loginReq: 'Veuillez entrer votre e-mail et votre mot de passe',
    loginSuccess: 'Connexion réussie !',
    credsInvalid: 'Identifiants invalides ou utilisateur non trouvé.',
    resetReq: 'Entrez votre e-mail pour réinitialiser le mot de passe.',
    resetSent: 'E-mail de réinitialisation envoyé !',
    resetError: 'Erreur lors de l\'envoi de l\'e-mail.',
    fillAllFields: 'Remplissez tous les champs. MDP > 6 caract.',
    regSuccess: 'Compte créé avec succès !',
    regFailed: 'Échec de l\'inscription.',
    enterTitlePrompt: 'Veuillez entrer un titre',
    sugSubmitted: 'Suggestion soumise pour examen !',
    sugError: 'Erreur lors de la soumission de la suggestion',
    ctxIdReq: 'L\'ID du contexte est requis',
    ctxCreated: 'Contexte créé avec succès !',
    ctxUpdated: 'Contexte mis à jour avec succès !',
    ctxSaveError: 'Erreur lors de l\'enregistrement du contexte',
    sugApproved: 'Suggestion approuvée !',
    sugRejected: 'Suggestion rejetée.',
    editContext: 'Modifier le contexte',
    updateContext: 'Mettre à jour le contexte',
    cancelEdit: 'Annuler les modifications',
    activeContexts: (count) => `Contextes actifs (${count})`,
    pendingSuggestions: (count) => `Suggestions en attente (${count})`,
    suggestedBy: 'Suggéré par :',
    approve: 'Approuver',
    reject: 'Rejeter',
    edit: 'Modifier',
    delete: 'Supprimer',
    contextIdLabel: 'ID du contexte (ex. chaine_unique)',
    iconClassLabel: 'Classe d\'icône (ex. ph-star)',
    parentCatOptional: 'Catégorie parente (Optionnel)',
    imageUrlOptional: 'URL de l\'image (Optionnel)',
    noneTopLevel: '-- Aucun (Niveau supérieur) --',
    noContextsFound: 'Aucun contexte trouvé.',
    myProfile: 'Mon Profil',
    logout: 'Déconnexion',
    noVotesYet: 'Aucun vote pour l\'instant.',
    votedFor: 'A voté pour',
    category: 'Catégorie',
    date: 'Date'
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
    joinVotenaut: 'Votenaut Beitreten',
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
    swipePrompt: 'Wischen, um die vollständige Pyramide zu sehen',
    voteCast: '✓ Stimme abgegeben!',
    voteFailed: 'Abstimmung fehlgeschlagen. Erneut versuchen.',
    networkError: 'Netzwerkfehler. Bitte Verbindung prüfen.',
    dailyLimitLabel: 'Tageslimit erreicht',
    noNotifications: 'Keine neuen Benachrichtigungen',
    subcategories: 'Unterkategorien',
    enterContext: 'Pyramide betreten',
    backToFamily: '← Zurück',
    dbSeeded: 'Datenbank erfolgreich initialisiert!',
    confirmDelete: 'Sind Sie sicher, dass Sie diesen Kontext löschen möchten?',
    ctxDeleted: 'Kontext gelöscht',
    deleteFailed: 'Löschen fehlgeschlagen',
    loginReq: 'Bitte E-Mail und Passwort eingeben',
    loginSuccess: 'Erfolgreich eingeloggt!',
    credsInvalid: 'Ungültige Zugangsdaten oder Benutzer nicht gefunden.',
    resetReq: 'Geben Sie Ihre E-Mail ein, um das Passwort zurückzusetzen.',
    resetSent: 'Passwort-Reset-E-Mail gesendet!',
    resetError: 'Fehler beim Senden der Reset-E-Mail.',
    fillAllFields: 'Alle Felder ausfüllen. Passwort > 6 Zeichen.',
    regSuccess: 'Konto erfolgreich erstellt!',
    regFailed: 'Registrierung fehlgeschlagen.',
    enterTitlePrompt: 'Bitte geben Sie einen Titel ein',
    sugSubmitted: 'Vorschlag zur Überprüfung eingereicht!',
    sugError: 'Fehler beim Einreichen des Vorschlags',
    ctxIdReq: 'Kontext-ID ist erforderlich',
    ctxCreated: 'Kontext erfolgreich erstellt!',
    ctxUpdated: 'Kontext erfolgreich aktualisiert!',
    ctxSaveError: 'Fehler beim Speichern des Kontexts',
    sugApproved: 'Vorschlag genehmigt!',
    sugRejected: 'Vorschlag abgelehnt.',
    editContext: 'Kontext bearbeiten',
    updateContext: 'Kontext aktualisieren',
    cancelEdit: 'Bearbeiten abbrechen',
    activeContexts: (count) => `Aktive Kontexte (${count})`,
    pendingSuggestions: (count) => `Ausstehende Vorschläge (${count})`,
    suggestedBy: 'Vorgeschlagen von:',
    approve: 'Genehmigen',
    reject: 'Ablehnen',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    contextIdLabel: 'Kontext-ID (z. B. unique_string)',
    iconClassLabel: 'Icon-Klasse (z. B. ph-star)',
    parentCatOptional: 'Übergeordnete Kategorie (Optional)',
    imageUrlOptional: 'Bild-URL (Optional)',
    noneTopLevel: '-- Keine (Oberste Ebene) --',
    noContextsFound: 'Keine Kontexte gefunden.',
    myProfile: 'Mein Profil',
    logout: 'Abmelden',
    noVotesYet: 'Noch keine Stimmen abgegeben.',
    votedFor: 'Gestimmt für',
    category: 'Kategorie',
    date: 'Datum'
  }
};

// Developer Seeding Tool
const seedDatabase = async () => {
  const t = i18n[currentLang];
  // Simplified for HTTP backend mapping. 
  // Base contexts are hardcoded for now until full DB context integration in server.js
  showToast(t.dbSeeded, 'ph-check-circle');
};

const t_api = (msg) => {
  const t = i18n[currentLang];
  if (!msg) return t.voteFailed || 'Error';

  // Normalize message: trim and remove trailing period for more robust matching
  const norm = msg.trim().replace(/\.$/, '');

  const mapping = {
    'Daily limit reached': t.dailyLimitLabel,
    'Invalid credentials or user not found': t.credsInvalid,
    'Email already in use': t.emailInUse,
    'Missing fields': t.fillAllFields,
    'Internal server error': t.networkError
  };
  return mapping[norm] || msg;
};

let contexts = [];
let voteHistoryLedger = [];
let suggestions = [];
let notifications = [];
let initialDataFetched = false;

const defaultContexts = [
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

  { id: 'science', titles: { en: 'Science', es: 'Ciencia', fr: 'Science', de: 'Wissenschaft' }, icon: 'ph-atom', parentId: null },
  { id: 'space', titles: { en: 'Space', es: 'Espacio', fr: 'Espace', de: 'Weltraum' }, icon: 'ph-planet', parentId: 'science' },
  { id: 'astronomy', titles: { en: 'Astronomy', es: 'Astronomía', fr: 'Astronomie', de: 'Astronomie' }, icon: 'ph-telescope', parentId: 'space' },
  { id: 'physics', titles: { en: 'Physics', es: 'Física', fr: 'Physique', de: 'Physik' }, icon: 'ph-magnet', parentId: 'science' },
  { id: 'quantum', titles: { en: 'Quantum Physics', es: 'Física Cuántica', fr: 'Physique Quantique', de: 'Quantenphysik' }, icon: 'ph-sparkle', parentId: 'physics' },
  { id: 'biology', titles: { en: 'Biology', es: 'Biología', fr: 'Biologie', de: 'Biologie' }, icon: 'ph-dna', parentId: 'science' },
  { id: 'genetics', titles: { en: 'Genetics', es: 'Genética', fr: 'Génétique', de: 'Genetik' }, icon: 'ph-fingerprint', parentId: 'biology' },

  { id: 'sports', titles: { en: 'Sports', es: 'Deportes', fr: 'Sports', de: 'Sport' }, icon: 'ph-trophy', parentId: null },
  { id: 'football', titles: { en: 'Football', es: 'Fútbol', fr: 'Football', de: 'Fußball' }, icon: 'ph-soccer-ball', parentId: 'sports' },
  { id: 'basketball', titles: { en: 'Basketball', es: 'Baloncesto', fr: 'Basket', de: 'Basketball' }, icon: 'ph-basketball', parentId: 'sports' },
  { id: 'nba', titles: { en: 'NBA', es: 'NBA', fr: 'NBA', de: 'NBA' }, icon: 'ph-crown', parentId: 'basketball' },
  { id: 'tennis', titles: { en: 'Tennis', es: 'Tenis', fr: 'Tennis', de: 'Tennis' }, icon: 'ph-tennis-ball', parentId: 'sports' },
  { id: 'f1', titles: { en: 'Formula 1', es: 'Fórmula 1', fr: 'F1', de: 'Formel 1' }, icon: 'ph-steering-wheel', parentId: 'sports' },
  { id: 'esports', titles: { en: 'eSports', es: 'eSports', fr: 'eSports', de: 'eSports' }, icon: 'ph-game-controller', parentId: 'sports' },

  { id: 'lifestyle', titles: { en: 'Lifestyle', es: 'Estilo de Vida', fr: 'Mode de vie', de: 'Lifestyle' }, icon: 'ph-heartbeat', parentId: null },
  { id: 'travel', titles: { en: 'Travel', es: 'Viajes', fr: 'Voyages', de: 'Reisen' }, icon: 'ph-airplane-tilt', parentId: 'lifestyle' },
  { id: 'gastronomy', titles: { en: 'Gastronomy', es: 'Gastronomía', fr: 'Gastronomie', de: 'Gastronomie' }, icon: 'ph-cooking-pot', parentId: 'lifestyle' },
  { id: 'vegan', titles: { en: 'Vegan', es: 'Vegano', fr: 'Végan', de: 'Vegan' }, icon: 'ph-leaf', parentId: 'gastronomy' },
  { id: 'wellness', titles: { en: 'Wellness', es: 'Bienestar', fr: 'Bien-être', de: 'Wellness' }, icon: 'ph-feather', parentId: 'lifestyle' },
  { id: 'fashion', titles: { en: 'Fashion', es: 'Moda', fr: 'Mode', de: 'Mode' }, icon: 'ph-t-shirt', parentId: 'lifestyle' },
  { id: 'pets', titles: { en: 'Pets', es: 'Mascotas', fr: 'Animaux', de: 'Haustiere' }, icon: 'ph-cat', parentId: 'lifestyle' },
  { id: 'dogs', titles: { en: 'Dogs', es: 'Perros', fr: 'Chiens', de: 'Hunde' }, icon: 'ph-dog', parentId: 'pets' },

  { id: 'business', titles: { en: 'Business', es: 'Negocios', fr: 'Affaires', de: 'Geschäft' }, icon: 'ph-briefcase', parentId: null },
  { id: 'finance', titles: { en: 'Finance', es: 'Finanzas', fr: 'Finance', de: 'Finanzen' }, icon: 'ph-chart-line-up', parentId: 'business' },
  { id: 'crypto', titles: { en: 'Crypto', es: 'Cripto', fr: 'Crypto', de: 'Krypto' }, icon: 'ph-currency-eth', parentId: 'finance' },
  { id: 'bitcoin', titles: { en: 'Bitcoin', es: 'Bitcoin', fr: 'Bitcoin', de: 'Bitcoin' }, icon: 'ph-currency-btc', parentId: 'crypto' },
  { id: 'startups', titles: { en: 'Startups', es: 'Startups', fr: 'Startups', de: 'Startups' }, icon: 'ph-rocket', parentId: 'business' },
  { id: 'marketing', titles: { en: 'Marketing', es: 'Marketing', fr: 'Marketing', de: 'Marketing' }, icon: 'ph-megaphone', parentId: 'business' },

  { id: 'art', titles: { en: 'Art', es: 'Arte', fr: 'Art', de: 'Kunst' }, icon: 'ph-palette', parentId: null },
  { id: 'photography', titles: { en: 'Photography', es: 'Fotografía', fr: 'Photographie', de: 'Fotografie' }, icon: 'ph-camera', parentId: 'art' },
  { id: 'architecture', titles: { en: 'Architecture', es: 'Arquitectura', fr: 'Architecture', de: 'Architektur' }, icon: 'ph-office-building', parentId: 'art' },
  { id: 'digital_art', titles: { en: 'Digital Art', es: 'Arte Digital', fr: 'Art Numérique', de: 'Digitale Kunst' }, icon: 'ph-pen-nib', parentId: 'art' },

  { id: 'knowledge', titles: { en: 'Knowledge', es: 'Conocimiento', fr: 'Connaissance', de: 'Wissen' }, icon: 'ph-books', parentId: null },
  { id: 'history', titles: { en: 'History', es: 'Historia', fr: 'Histoire', de: 'Geschichte' }, icon: 'ph-hourglass', parentId: 'knowledge' },
  { id: 'philosophy', titles: { en: 'Philosophy', es: 'Filosofía', fr: 'Philosophie', de: 'Philosophie' }, icon: 'ph-brain', parentId: 'knowledge' },
  { id: 'stoicism', titles: { en: 'Stoicism', es: 'Estoicismo', fr: 'Stoïcisme', de: 'Stoizismus' }, icon: 'ph-person', parentId: 'philosophy' },
  { id: 'psychology', titles: { en: 'Psychology', es: 'Psicología', fr: 'Psychologie', de: 'Psychologie' }, icon: 'ph-headset', parentId: 'knowledge' },
  { id: 'languages', titles: { en: 'Languages', es: 'Idiomas', fr: 'Langues', de: 'Sprachen' }, icon: 'ph-translate', parentId: 'knowledge' },

  { id: 'society', titles: { en: 'Society', es: 'Sociedad', fr: 'Société', de: 'Gesellschaft' }, icon: 'ph-users-three', parentId: null },
  { id: 'politics', titles: { en: 'Politics', es: 'Política', fr: 'Politique', de: 'Politik' }, icon: 'ph-gavel', parentId: 'society' },
  { id: 'economics', titles: { en: 'Economics', es: 'Economía', fr: 'Économie', de: 'Wirtschaft' }, icon: 'ph-bank', parentId: 'society' },

  { id: 'nature', titles: { en: 'Nature', es: 'Naturaleza', fr: 'Nature', de: 'Natur' }, icon: 'ph-tree', parentId: null },
  { id: 'environment', titles: { en: 'Environment', es: 'Medio Ambiente', fr: 'Environnement', de: 'Umwelt' }, icon: 'ph-leaf', parentId: 'nature' },
  { id: 'wildlife', titles: { en: 'Wildlife', es: 'Vida Silvestre', fr: 'Vie Sauvage', de: 'Wildtiere' }, icon: 'ph-paw-print', parentId: 'nature' },
  { id: 'oceans', titles: { en: 'Oceans', es: 'Océanos', fr: 'Océans', de: 'Ozeane' }, icon: 'ph-waves', parentId: 'nature' },

  { id: 'heavy_metal', titles: { en: 'Heavy Metal', es: 'Heavy Metal', fr: 'Heavy Metal', de: 'Heavy Metal' }, icon: 'ph-skull', parentId: 'metal' },
  { id: 'psytrance', titles: { en: 'Psytrance', es: 'Psytrance', fr: 'Psytrance', de: 'Psytrance' }, icon: 'ph-eye', parentId: 'electronic' },
  { id: 'kpop', titles: { en: 'K-Pop', es: 'K-Pop', fr: 'K-Pop', de: 'K-Pop' }, icon: 'ph-heart', parentId: 'pop' },
  { id: 'indie_dev', titles: { en: 'Indie Dev', es: 'Desarrollo Indie', fr: 'Dév Indie', de: 'Indie-Entwicklung' }, icon: 'ph-joystick', parentId: 'dev' },
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
  { id: 'renewable_energy', titles: { en: 'Renewable Energy', es: 'Energía Renovable', fr: 'Énergie Renouvelable', de: 'Erneuerbare Energien' }, icon: 'ph-sun', parentId: 'nature' }
];

// HTTP Polling for Real-time UX (Free Cloud Run Alternative to WebSockets/Snapshots)
const pollData = async () => {
  try {
    console.log(`[Votenaut] Polling data from ${apiHost}/api/contexts...`);
    const ctxRes = await fetch(`${apiHost}/api/contexts`);

    if (ctxRes.ok) {
      const fetchedCtx = await ctxRes.json();
      contexts = fetchedCtx.length > 0 ? fetchedCtx : defaultContexts;
      console.log(`[Votenaut] Successfully loaded ${contexts.length} contexts.`);
    } else {
      console.error(`[Votenaut] API Error: ${ctxRes.status} ${ctxRes.statusText}`);
      if (contexts.length === 0) contexts = defaultContexts;
    }

    // Fetch non-critical data
    fetch(`${apiHost}/api/votes`).then(res => res.ok ? res.json() : []).then(data => {
      const oldVotesLength = voteHistoryLedger.length;
      voteHistoryLedger = data;
      if (oldVotesLength !== voteHistoryLedger.length && currentView.startsWith('pyramid-')) {
        render();
      }
    }).catch(e => console.warn('[Votenaut] Votes fetch failed:', e));

    fetch(`${apiHost}/api/suggestions`).then(res => res.ok ? res.json() : []).then(data => {
      suggestions = data;
    }).catch(e => console.warn('[Votenaut] Suggestions fetch failed:', e));

    // Handle user limits and session logic
    const today = new Date();
    let localVotesMap = {};
    let localVotesCount = 0;

    if (loggedInUser) {
      const userActiveVotes = voteHistoryLedger.filter(v =>
        v.voter_username === loggedInUser.name &&
        v.status === 'active'
      );
      const todaysVotes = userActiveVotes.filter(v => {
        const castDate = new Date(v.cast_at);
        return castDate.toDateString() === today.toDateString();
      });
      localVotesCount = todaysVotes.length;
      userActiveVotes.forEach(v => {
        localVotesMap[v.context_id] = v.target_user_id;
      });
    } else {
      const anonVotes = JSON.parse(localStorage.getItem('votenaut_anon_votes') || '[]');
      const todaysAnon = anonVotes.filter(v => {
        const castDate = new Date(v.castAt);
        return castDate.toDateString() === today.toDateString() && (new Date() - castDate) < (24 * 60 * 60 * 1000);
      });
      localVotesCount = todaysAnon.length;
      anonVotes.forEach(v => {
        const castDate = new Date(v.castAt);
        if ((new Date() - castDate) < (24 * 60 * 60 * 1000)) {
          localVotesMap[v.contextId] = v.targetUserId;
        }
      });
    }

    globalVotes.count = localVotesCount;
    globalVotes.byContext = localVotesMap;

    // Trigger re-render for active Admin View during polling
    if (document.getElementById('main-content') && currentView === 'admin') {
      renderAdminView(document.getElementById('main-content'));
    }
  } catch (err) {
    console.error('[Votenaut] Critical Polling Error:', err);
    if (!initialDataFetched) showToast('Network Error: Could not reach API.', 'ph-warning');
  } finally {
    if (!initialDataFetched) {
      initialDataFetched = true;
      console.log('[Votenaut] Initial data fetch attempt complete. Rendering UI.');
      if (document.getElementById('main-content')) {
        render(); // Force initial full render to clear skeleton
      }
    }
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
  const token = localStorage.getItem('votenaut_token');
  const storedUser = localStorage.getItem('votenaut_user');

  if (token && storedUser) {
    try {
      loggedInUser = JSON.parse(storedUser);
      if (document.getElementById('main-content')) render();
    } catch (e) {
      localStorage.removeItem('votenaut_token');
      localStorage.removeItem('votenaut_user');
    }
  }
};
restoreSession();
let pyramidOffsetIndex = 0; // Pagination/offset index for the pyramid apex
let forceScrollReset = false; // Flag to discard previous scroll positions
const MAX_DAILY_VOTES = 3;
let globalVotes = { count: 0, byContext: {} }; // Tracks user's session votes { byContext: { ctxId: userId } }
let expandedContexts = new Set(); // Tracks which parent contexts are expanded in the sidebar

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
    forceScrollReset = true;
    previousView = currentView;
  }

  app.innerHTML = `
    <header>
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="hamburger-btn" id="mobile-menu-btn"><i class="ph ph-list"></i></button>
        <a href="#" id="logo-home-link" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
          <img src="/votenaut_logo.png" alt="Votenaut Logo" style="height: 38px; width: 38px; object-fit: contain; filter: drop-shadow(0 0 6px rgba(200,169,126,0.4));">
          <div class="logo" style="font-size: 1.3rem; letter-spacing: -0.5px;">Votenaut<span style="color: var(--accent-magenta); font-size: 0.85rem; font-weight: 400;">.com</span></div>
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
            <input type="text" id="sidebar-search" autocomplete="off" placeholder="${currentLang === 'es' ? 'Buscar...' : 'Search...'}" value="${searchQuery}" style="width:100%; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:4px; padding:4px 8px 4px 24px; color:var(--text-primary); font-size:0.75rem; outline:none;">
          </div>
        </div>
        <a class="sidebar-item ${currentView === 'home' ? 'active' : ''}" data-target="home">
          <i class="ph ph-squares-four"></i> ${t.dashboard}
        </a>
        <div id="sidebar-contexts-list" style="overflow-y:auto; flex:1; display:flex; flex-direction:column; gap:2px; padding: 0 4px;">
        ${renderSidebarTree()}
        </div>
        ${loggedInUser ? `
        <div style="border-top: 1px solid var(--border-light); padding: 8px 0; margin-top: 5px;">
          <a class="sidebar-item ${currentView === 'profile' ? 'active' : ''}" data-target="profile">
            <i class="ph ph-user-circle"></i> ${t.myProfile}
          </a>
        </div>
        <div style="padding: 16px; margin-top: auto;">
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
          <div class="profile-joined" id="pm-joined" style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 8px;"><i class="ph ph-clock"></i> <span>Joined Date</span></div>
          <div class="profile-description" id="pm-bio">Bio description...</div>
          
          <div class="profile-stats-row" style="display:flex; justify-content:center; gap:20px; margin: 12px 0; padding: 12px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="text-align:center;">
              <div style="font-size:0.7rem; color:var(--text-secondary); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;" id="pm-rank-label">Rank</div>
              <div id="pm-rank" style="font-size:1.2rem; font-weight:700; color:var(--accent-cyan);">#1</div>
            </div>
            <div style="text-align:center; border-left: 1px solid rgba(255,255,255,0.1); padding-left:20px;">
              <div style="font-size:0.7rem; color:var(--text-secondary); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;" id="pm-votes-label">Votes</div>
              <div id="pm-votes" style="font-size:1.2rem; font-weight:700; color:var(--accent-gold);">★ 0</div>
            </div>
          </div>
          
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
    
    <div id="logout-confirm-modal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:9999; align-items:center; justify-content:center; padding:20px;">
       <div style="max-width:400px; width:100%; background:var(--bg-card); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:30px; text-align:center;">
          <i class="ph ph-sign-out" style="font-size:3rem; color:var(--accent-magenta); margin-bottom:20px;"></i>
          <h2 style="margin-bottom:12px; color:var(--text-primary);">¿Cerrar sesión?</h2>
          <p style="color:var(--text-secondary); margin-bottom:24px;">Tus votos locales se sincronizarán la próxima vez que ingreses.</p>
          <div style="display:flex; gap:12px;">
             <button id="confirm-logout-btn" class="btn-primary" style="background:var(--accent-magenta); border:none;">Sí, Salir</button>
             <button onclick="document.getElementById('logout-confirm-modal').style.display='none'" class="btn-outline-gold" style="border-color:rgba(255,255,255,0.2); color:var(--text-secondary);">Cancelar</button>
          </div>
       </div>
    </div>
  `;

  const mainContent = document.getElementById('main-content');

  if (currentView === 'home') {
    renderHomeView(mainContent);
  } else if (currentView === 'suggest') {
    renderSuggestView(mainContent);
  } else if (currentView.startsWith('family-')) {
    const contextId = currentView.replace('family-', '');
    const contextInfo = contexts.find(c => c.id === contextId);
    if (contextInfo) renderFamilyView(mainContent, contextInfo);
    else { currentView = 'home'; render(); }
  } else if (currentView.startsWith('pyramid-')) {
    const contextId = currentView.split('-')[1];
    const contextInfo = contexts.find(c => c.id === contextId);
    if (contextInfo) renderPyramidView(mainContent, contextInfo);
    else { currentView = 'home'; render(); }
  } else if (currentView === 'register') {
    renderRegisterView(mainContent);
  } else if (currentView === 'admin') {
    renderAdminView(mainContent);
  } else if (currentView === 'profile') {
    renderProfileView(mainContent);
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

  // Project Ascension: Holographic 3D Physics
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('.context-card, .user-node, .history-item'), {
      max: 12,
      speed: 600,
      glare: true,
      "max-glare": 0.15,
      scale: 1.02,
      perspective: 1000
    });
  }
};

const renderProfileView = (container) => {
  const t = i18n[currentLang];
  if (!loggedInUser) { currentView = 'home'; render(); return; }

  // Filter votes by this user - search in ledger
  const myVotes = voteHistoryLedger.filter(v => v.voter_username === loggedInUser.name);

  container.innerHTML = `
     <div class="view-container dashboard-fade-in" style="max-width: 900px; margin: 0 auto; padding-top: 20px;">
       <div class="pyramid-header" style="margin-bottom: 30px;">
         <button class="back-btn" data-target="home"><i class="ph ph-arrow-left"></i></button>
         <div class="pyramid-context-title">${t.myProfile}</div>
         <button class="btn-outline-gold" id="btn-logout-trigger" style="margin-left:auto; border-color:var(--accent-magenta); color:var(--accent-magenta); font-size: 0.8rem; padding: 6px 14px;">
           <i class="ph ph-sign-out"></i> ${t.logout}
         </button>
       </div>
 
       <div style="display:grid; grid-template-columns: 1fr 2fr; gap: 30px; align-items: start;" class="dashboard-grid">
         <!-- User Info Card -->
         <div class="profile-card" style="position:relative; width:100%; max-width:none; transform:none; opacity:1; pointer-events:all; box-shadow:0 10px 40px rgba(0,0,0,0.5);">
            <div class="profile-card-header" style="height: 80px; background: var(--accent-gold); opacity: 0.15;"></div>
             <div class="profile-card-body" style="padding-top: 40px;">
               <div class="avatar-large" style="width:160px; height:160px; background:var(--bg-card); border:4px solid var(--accent-gold); border-radius:50%; overflow:hidden; display:flex; align-items:center; justify-content:center; font-size:3rem; font-weight:800; color:var(--accent-gold); margin: -80px auto 20px; position:relative; z-index:2; box-shadow:0 8px 30px rgba(212,175,55,0.4);">
                 ${loggedInUser.img
      ? `<img src="${loggedInUser.img}" alt="${loggedInUser.name}" style="width:100%; height:100%; object-fit:cover; border-radius:50%; filter: none !important; -webkit-filter: none !important;">`
      : loggedInUser.name.substring(0, 2).toUpperCase()
    }
               </div>
              <h2 style="margin-bottom:4px; font-family:var(--font-display); color:var(--text-primary); font-size:1.6rem;">${loggedInUser.name}</h2>
              <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:20px;">${loggedInUser.email}</p>
              
              <div style="text-align:left; border-top: 1px solid rgba(255,255,255,0.05); padding-top:20px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
                   <span style="color:var(--text-secondary); font-size:0.8rem;">${t.joinDate}:</span>
                   <span style="color:var(--text-primary); font-size:0.8rem; font-weight:600;">${new Date(loggedInUser.createdAt).toLocaleDateString()}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
                   <span style="color:var(--text-secondary); font-size:0.8rem;">Total ${t.votesStatLabel}:</span>
                   <span style="color:var(--accent-cyan); font-size:0.8rem; font-weight:600;">${myVotes.length}</span>
                </div>
              </div>
            </div>
         </div>
 
         <!-- History Area -->
         <div class="glass-card" style="padding: 24px;">
           <h3 style="margin-bottom:20px; color:var(--text-primary); font-family:var(--font-display); display:flex; align-items:center; gap:10px;">
             <i class="ph ph-clock-counter-clockwise" style="color:var(--accent-gold);"></i> ${t.voteHistory}
           </h3>
 
           <div class="history-list" style="display:flex; flex-direction:column; gap:12px;">
             ${myVotes.length === 0 ? `<div style="text-align:center; color:var(--text-secondary); padding:40px;">${t.noVotesYet}</div>` :
      myVotes.sort((a, b) => new Date(b.cast_at) - new Date(a.cast_at)).map(vote => {
        const ctx = contexts.find(c => c.id === vote.context_id);
        const ctxTitle = ctx ? (ctx.titles[currentLang] || ctx.titles['en']) : vote.context_id;
        const isExpired = vote.status === 'expired';

        return `
                   <div class="history-item ${isExpired ? 'expired' : ''}" style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:14px; display:flex; align-items:center; gap:15px; position:relative; overflow:hidden;">
                     <div style="width:44px; height:44px; border-radius:10px; background:rgba(212,175,55,0.1); display:flex; align-items:center; justify-content:center; color:var(--accent-gold); font-size:1.2rem; flex-shrink:0;">
                        <i class="${ctx ? ctx.icon : 'ph ph-question'}"></i>
                     </div>
                     <div style="flex:1; min-width:0;">
                        <div style="font-size:0.9rem; font-weight:600; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${ctxTitle}</div>
                        <div style="font-size:0.7rem; color:var(--text-secondary); margin-bottom:4px; font-family:monospace; letter-spacing:0.5px; opacity:0.6;">#${vote.context_id}</div>
                        <div style="font-size:0.75rem; color:var(--text-secondary);">${t.votedFor}: <span style="color:var(--accent-cyan); font-weight:600;">@${vote.target_user_id}</span></div>
                     </div>
                     <div style="text-align:right; flex-shrink:0;">
                        <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:4px;">${new Date(vote.cast_at).toLocaleDateString()}</div>
                        <span class="badge ${isExpired ? 'bg-expired' : 'bg-active'}" style="font-size:0.6rem; padding: 2px 8px; border-radius:6px; text-transform:uppercase; display:inline-block;">${isExpired ? t.expiredVote : t.activeVote}</span>
                     </div>
                   </div>
                 `;
      }).join('')
    }
           </div>
         </div>
       </div>
     </div>
   `;

  document.getElementById('btn-logout-trigger').addEventListener('click', () => {
    const modal = document.getElementById('logout-confirm-modal');
    modal.style.display = 'flex';
  });
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

  // Filter based on search - robust against missing translations
  const filteredContexts = contexts.filter(ctx => {
    const title = (ctx.titles[currentLang] || ctx.titles['en'] || ctx.id || '').toLowerCase();
    return title.includes(searchQuery.toLowerCase());
  });

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
    <div class="hero-container">
      <div class="hero-glow-accent"></div>
      
      <i class="ph-fill ph-target hero-icon"></i>
      
      <p class="hero-title">${t.heroSubtitle}</p>
      <p class="hero-sub">${t.heroSubtitle2}</p>

      <div class="hero-btn-wrapper">
        <button id="open-rules-btn" class="btn-rules-neo">
           ${t.rulesModalBtn || 'How it works →'}
        </button>
      </div>
    </div>
    
    <!-- Stats Row -->
    <div class="stats-container">
        <div class="stat-box">
          <div class="stat-val cyan">${contexts.length}</div>
          <div class="stat-label">${t.heroContexts}</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">3,000+</div>
          <div class="stat-label">${t.heroUsers}</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">4.2k</div>
          <div class="stat-label">${t.heroVotes}</div>
        </div>
    </div>
    
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;">
      <h2 class="section-title" style="font-size:1.4rem;color:var(--text-primary);font-weight:600;">${t.trendingContexts}</h2>
    </div>
  `;

  if (parents.length === 0) {
    contextHTML += `<div style="color:var(--text-secondary); padding: 20px;">${t.noContextsFound}</div>`;
  } else {
    parents.forEach(p => {
      const children = filteredContexts.filter(c => c.parentId === p.id);

      contextHTML += `
        <div class="hierarchy-group" style="margin-bottom: 40px;">
          <h3 style="font-family: var(--font-display); color: var(--accent-cyan); margin-bottom: 20px; display:flex; align-items:center; gap:12px; font-size: 1.5rem; letter-spacing: -0.5px;">
            <div style="background: rgba(212,175,55,0.1); padding: 8px; border-radius: 8px; border: 1px solid rgba(212,175,55,0.2);"><i class="${p.icon}"></i></div>
            ${p.titles[currentLang] || p.titles['en'] || p.id}
          </h3>
          <div class="context-grid">
            ${(() => {
      const top1 = generatePyramidData(p.id).data[0]?.[0];
      const pImg = getEffectiveImageUrl(p);
      return `
              <div class="context-card main-parent-card" data-id="${p.id}" ${pImg ? `style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(10,0,15,0.95)), url('${pImg}'); background-size: cover; background-position: center;"` : ''}>
                 ${top1 ? `
                   <div class="context-top1-preview">
                     <img src="${top1.img}" alt="${top1.name}">
                     <span class="context-top1-crown">👑</span>
                   </div>
                 ` : ''}
                 <i class="${p.icon} context-icon" style="opacity: 0.5;"></i>
                 <div class="context-title" style="font-size: 1.5rem;">${p.titles[currentLang] || p.titles['en'] || p.id}</div>
                 <div class="context-stats"><i class="ph ph-users"></i> ${p.participants} ${t.users}</div>
              </div>
            `;
  })()}
            ${children.map(ctx => {
      const top1 = generatePyramidData(ctx.id).data[0]?.[0];
      const ctxImg = getEffectiveImageUrl(ctx);
      let bgStyle = '';
      if (ctxImg) {
        bgStyle = `style="background-image: linear-gradient(to top, rgba(5,5,7,0.95) 0%, rgba(10,10,15,0.7) 100%), url('${ctxImg}'); background-size: cover; background-position: center; min-height: 120px;"`;
      } else {
        bgStyle = `style="min-height: 120px;"`;
      }
    return `
              <div class="context-card child-card" data-id="${ctx.id}" ${bgStyle}>
                ${top1 ? `
                  <div class="context-top1-preview" style="width:32px; height:32px; right:8px; top:8px; border-width:1px;">
                    <img src="${top1.img}" alt="${top1.name}">
                  </div>
                ` : ''}
                <i class="${ctx.icon} context-icon" style="font-size: 1.5rem;"></i>
                <div class="context-title" style="font-size: 1.1rem;">${ctx.titles[currentLang] || ctx.titles['en'] || ctx.id}</div>
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

  // Attach card clicks — parent contexts with children show family/subcategory view
  document.querySelectorAll('.context-card').forEach(card => {
    card.addEventListener('click', () => {
      const ctxId = card.dataset.id;
      const hasChildren = contexts.some(c => c.parentId === ctxId);
      pyramidOffsetIndex = 0;
      currentView = hasChildren ? `family-${ctxId}` : `pyramid-${ctxId}`;
      render();
    });
  });
};

/* ─ Family / Subcategory View ─────────────────────────── */
const renderFamilyView = (container, parentCtx) => {
  const t = i18n[currentLang];
  const children = contexts.filter(c => c.parentId === parentCtx.id);

  // Get the Top 1 person in the parent context
  const pyramidObj = generatePyramidData(parentCtx.id);
  const top1 = pyramidObj.data[0]?.[0]; // tier 0, first user

  const top1HTML = top1 ? `
    <div class="family-apex-card">
      <div class="family-apex-photo-wrap">
        <img src="${top1.img}" alt="${top1.name}" class="family-apex-photo">
        <span class="family-apex-crown">👑</span>
      </div>
      <div class="family-apex-info">
        <span class="family-apex-rank">#1</span>
        <span class="family-apex-name">${top1.name}</span>
        <span class="family-apex-votes">★ ${top1.votes} ${t.votesCount}</span>
      </div>
      <button class="btn-enter-pyramid" id="enter-parent-pyramid-btn">
        <i class="ph ph-hierarchy"></i> ${t.enterContext || 'Enter Pyramid'}
      </button>
    </div>
  ` : '';

  const childrenHTML = children.length ? `
    <div style="margin-top:28px;">
      <h3 style="font-size:1rem;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;">${t.subcategories || 'Subcategories'}</h3>
      <div class="context-grid">
        ${children.map(child => {
    const childTop1 = generatePyramidData(child.id).data[0]?.[0];
    const childImg = getEffectiveImageUrl(child);
    const bgStyle = childImg
      ? `background-image:linear-gradient(to top,rgba(5,5,7,0.95),rgba(10,10,15,0.6)),url('${childImg}');background-size:cover;background-position:center;`
      : '';
    return `
            <div class="context-card child-card family-child-card" data-id="${child.id}" style="${bgStyle}position:relative;overflow:hidden;">
              ${childTop1 ? `
                <div class="context-top1-preview" style="width:36px; height:36px; right:10px; top:10px; border-width:1px;">
                  <img src="${childTop1.img}" alt="${childTop1.name}">
                  <span class="context-top1-crown" style="font-size:0.7rem; top:-4px; right:-4px;">👑</span>
                </div>
              ` : ''}
              <i class="${child.icon} context-icon" style="font-size:1.4rem;"></i>
              <div class="context-title" style="font-size:1rem;">${child.titles[currentLang] || child.titles['en'] || child.id}</div>
              <div class="context-stats"><i class="ph ph-users"></i> ${child.participants} ${t.users}</div>
            </div>
          `;
  }).join('')}
      </div>
    </div>
  ` : '';

  expandHierarchy(parentCtx.id);
  const breadcrumbsHTML = renderBreadcrumbs(parentCtx.id);

  container.innerHTML = `
    <div class="view-container">
      ${breadcrumbsHTML}
      <div class="pyramid-header context-header">
        <button class="back-btn" id="back-to-home-btn" data-target="${parentCtx.parentId ? `family-${parentCtx.parentId}` : 'home'}"><i class="ph ph-arrow-left"></i></button>
        <div class="pyramid-context-title">
          <i class="${parentCtx.icon}" style="color:var(--accent-cyan);margin-right:6px;"></i>
          ${parentCtx.titles[currentLang] || parentCtx.titles['en'] || parentCtx.id}
        </div>
      </div>

      ${top1HTML}
      ${childrenHTML}
    </div>
  `;

  // Back button click logic handled via global delegation now

  // Enter parent pyramid button
  document.getElementById('enter-parent-pyramid-btn')?.addEventListener('click', () => {
    pyramidOffsetIndex = 0;
    currentView = `pyramid-${parentCtx.id}`;
    render();
  });

  // Child context card clicks
  document.querySelectorAll('.family-child-card').forEach(card => {
    card.addEventListener('click', () => {
      const ctxId = card.dataset.id;
      const hasGrandchildren = contexts.some(c => c.parentId === ctxId);
      pyramidOffsetIndex = 0;
      currentView = hasGrandchildren ? `family-${ctxId}` : `pyramid-${ctxId}`;
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
    // Desktop: apex=154px (balanced) → base=73px. Responsive hierarchy.
    const sizeScale = [154, 128, 119, 110, 101, 93, 85, 80, 76, 73];
    const nodeSize = sizeScale[tIndex] || 73;

    const usersHTML = tier.map(user => `
      <div class="user-node ${hasVoted && hasVoted === user.id ? 'voted' : ''}" 
           data-id="${user.id}" 
           data-votes="${user.votes} ${t.votesCount}" 
           data-voted-text="&#x2713; ${t.voted}"
           style="width:${tIndex === 0 ? 180 : nodeSize}px; height:${tIndex === 0 ? 180 : nodeSize}px;">
        <div class="node-rank">#${user.rank}</div>
        <img src="${user.img}" alt="${user.name}">
        <div class="node-overlay">
          <div class="node-name" style="font-size: 0.65rem; font-weight: 700; color: #fff; text-shadow: 0 1px 3px rgba(0,0,0,0.8); line-height: 1.1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; text-align: center;">${user.name}</div>
          <div class="node-votes" style="font-size: 0.75rem; font-weight: 700; color: var(--accent-gold); display: flex; align-items: center; gap: 2px;"><i class="ph-fill ph-star"></i> ${user.votes}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="pyramid-tier tier-${tIndex}" style="--z-index: ${zIndex}; --node-size: ${nodeSize}px;">
        ${usersHTML}
      </div>
    `;
  }).join('');

  expandHierarchy(contextInfo.id);
  const breadcrumbsHTML = renderBreadcrumbs(contextInfo.id);

  container.innerHTML = `
    <div class="view-container">
      ${breadcrumbsHTML}
      <div class="pyramid-header context-header">
        <button class="back-btn" id="back-btn" data-target="${contextInfo.parentId ? `family-${contextInfo.parentId}` : 'home'}"><i class="ph ph-arrow-left"></i></button>
        <div class="pyramid-context-title">
          <i class="${contextInfo.icon}" style="color:var(--accent-emerald); font-size: 1.6rem;"></i>
          ${contextInfo.titles[currentLang] || contextInfo.titles['en'] || contextInfo.id}
          <span style="font-size: 0.85rem; color: var(--text-secondary); opacity: 0.5; margin-left: auto; font-weight: 500; background: var(--border-light); padding: 4px 10px; border-radius: 20px;">${totalUsersInContext} ${t.users}</span>
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

  // Back button handler via global delegation

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

      // Handle join date (baseUsers are simulated, but we can generate a deterministic date or use a default)
      const joinDate = userObj.createdAt || '2025-01-15'; // Default for base users
      document.getElementById('pm-joined').innerHTML = `<i class="ph ph-clock"></i> ${t.joinDate}: ${new Date(joinDate).toLocaleDateString()}`;

      document.getElementById('pm-bio').innerText = userObj.bio;

      // Localize labels
      document.getElementById('pm-rank-label').innerText = t.rankLabel;
      document.getElementById('pm-votes-label').innerText = t.votesStatLabel;

      // New: Populate stats from node attributes
      const nodeRank = this.querySelector('.node-rank').innerText;
      const nodeVotes = this.querySelector('.node-votes').innerText.trim();
      document.getElementById('pm-rank').innerText = nodeRank;
      document.getElementById('pm-votes').innerText = `★ ${nodeVotes}`;

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
        vBtn.innerText = t.dailyLimitLabel;
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
            const token = localStorage.getItem('votenaut_token');
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
                const localHistory = JSON.parse(localStorage.getItem('votenaut_anon_votes') || '[]');
                localHistory.push({ contextId: contextInfo.id, targetUserId: userId, castAt: new Date().toISOString() });
                localStorage.setItem('votenaut_anon_votes', JSON.stringify(localHistory));
              }

              showToast(t.voteCast, 'ph-check-circle');
              render();
            } else {
              const errData = await response.json();
              showToast(t_api(errData.error), 'ph-x-circle');
            }
          } catch (e) {
            console.error(e);
            showToast(t.networkError, 'ph-wifi-slash');
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
    const localHistory = JSON.parse(localStorage.getItem('votenaut_anon_votes') || '[]');
    localHistory.push({ contextId, targetUserId: userId, castAt: new Date().toISOString() });
    localStorage.setItem('votenaut_anon_votes', JSON.stringify(localHistory));
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
    if (!email || !pass) return showToast(t.loginReq, 'ph-warning');

    loginBtn.innerText = t.authenticating;
    try {
      const resp = await fetch(`${apiHost}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass })
      });
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(t_api(data.error));
      }

      localStorage.setItem('votenaut_token', data.token);
      localStorage.setItem('votenaut_user', JSON.stringify(data.user));
      loggedInUser = data.user;

      showToast(t.loginSuccess, 'ph-check-circle');
      currentView = 'home';
      render();
    } catch (err) {
      console.error(err);
      showToast(err.message, 'ph-warning');
      loginBtn.innerText = t.loginTab;
    }
  });

  // Forgot Password — real API call
  document.getElementById('forgot-pwd-link').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    if (!email) return showToast(t.resetReq, 'ph-warning');
    try {
      const resp = await fetch(`${apiHost}/api/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (resp.ok) {
        showToast(t.resetSent, 'ph-envelope');
      } else {
        const data = await resp.json();
        showToast(data.error || t.resetError, 'ph-warning');
      }
    } catch (err) {
      showToast(t.resetError, 'ph-warning');
    }
  });

  // Sign Up Logic
  const signupBtn = document.getElementById('signup-btn');
  signupBtn.addEventListener('click', async () => {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const pass = document.getElementById('signup-password').value;

    if (!name || !email || pass.length < 6) return showToast(t.fillAllFields, 'ph-warning');

    signupBtn.innerText = t.creatingAccount;
    try {
      const resp = await fetch(`${apiHost}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password: pass })
      });
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(t_api(data.error));
      }

      localStorage.setItem('votenaut_token', data.token);
      localStorage.setItem('votenaut_user', JSON.stringify(data.user));
      loggedInUser = data.user;

      showToast(t.regSuccess, 'ph-check-circle');
      currentView = 'home';
      render();
    } catch (err) {
      console.error(err);
      showToast(err.message, 'ph-warning');
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
    if (!title) return showToast(t.enterTitlePrompt, 'ph-warning');

    const sugId = 'sug_' + Date.now();
    try {
      // Logic for submitting suggestion
      showToast(t.sugSubmitted, 'ph-check-circle');
      currentView = 'home';
      render();
    } catch (e) {
      console.error(e);
      showToast(t.sugError, 'ph-warning');
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
            <h3 style="margin-bottom: 20px; font-family: var(--font-display);" id="admin-form-title">${editingContextId ? t.editContext : t.addNewContext}</h3>
            
            <div class="form-group">
              <label>${t.contextIdLabel}</label>
              <input type="text" class="form-input" id="new-ctx-id" ${editingContextId ? 'disabled' : ''}>
            </div>
            
            <div class="form-group">
              <label>${t.iconClassLabel}</label>
              <input type="text" class="form-input" id="new-ctx-icon" value="ph-star">
            </div>
 
            <div class="form-group">
              <label>${t.parentCatOptional}</label>
              <select class="form-input" id="new-ctx-parent" style="background:var(--bg-dark); color:var(--text-primary); border: 1px solid var(--border-light);">
                <option value="">${t.noneTopLevel}</option>
                ${contexts.filter(c => c.id !== editingContextId && !c.parentId).map(c => `<option value="${c.id}">${c.titles.en}</option>`).join('')}
              </select>
            </div>
            
            <div class="form-group">
              <label>${t.imageUrlOptional}</label>
              <input type="text" class="form-input" id="new-ctx-image" placeholder="https://example.com/image.jpg">
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="form-group"><label>${t.titleEn}</label><input type="text" class="form-input" id="new-ctx-en"></div>
              <div class="form-group"><label>${t.titleEs}</label><input type="text" class="form-input" id="new-ctx-es"></div>
              <div class="form-group"><label>${t.titleFr}</label><input type="text" class="form-input" id="new-ctx-fr"></div>
              <div class="form-group"><label>${t.titleDe}</label><input type="text" class="form-input" id="new-ctx-de"></div>
            </div>
 
            <button class="btn-primary" id="save-ctx-btn" style="margin-top: 10px; padding:10px;">${editingContextId ? t.updateContext : t.createContext}</button>
            ${editingContextId ? `<button class="btn-secondary" id="cancel-edit-btn" style="padding:10px;">${t.cancelEdit}</button>` : ''}
          </div>
          <button id="dev-seed-btn" class="btn-outline-gold" style="margin-top: 40px; border-color: red; color: red;">[DEV] Seed Categories & Hierarchy</button>
       </div>

       <!--Right side: List-- >
  <div class="modal-content" style="transform: none; position: relative; width: 100%; max-width: 100%; padding:20px; max-height: 80vh; overflow-y:auto;">
    <h3 style="margin-bottom: 20px; font-family: var(--font-display);">${t.activeContexts(contexts.length)}</h3>
    ${contextsListHTML}
 
    <div style="margin-top: 40px; border-top: 1px solid var(--border-light); padding-top:20px;">
      <h3 style="margin-bottom: 20px; font-family: var(--font-display); color: var(--accent-cyan);">${t.pendingSuggestions(suggestions.filter(s => s.status === 'pending').length)}</h3>
      ${suggestions.filter(s => s.status === 'pending').map(s => `
                <div style="background:rgba(212, 175, 55, 0.05); padding:12px; border:1px solid rgba(212, 175, 55, 0.2); border-radius:6px; margin-bottom:8px;">
                  <div style="font-weight:600; font-size:0.95rem;">${s.titleEn}</div>
                  <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px;">${t.suggestedBy} ${s.suggestedBy} ${s.parentId ? `| Parent: ${s.parentId}` : ''}</div>
                  <div style="display:flex; gap:8px;">
                    <button class="btn-approve-sug" data-id="${s.id}" style="background:var(--accent-cyan); color:var(--bg-dark); border:none; padding:4px 10px; border-radius:4px; font-size:0.75rem; cursor:pointer; font-weight:600;">${t.approve}</button>
                    <button class="btn-reject-sug" data-id="${s.id}" style="background:transparent; color:#ff4444; border:1px solid #ff4444; padding:4px 10px; border-radius:4px; font-size:0.75rem; cursor:pointer;">${t.reject}</button>
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
    if (!id) return showToast(t.ctxIdReq, 'ph-warning');

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

      showToast(editingContextId ? t.ctxUpdated : t.ctxCreated, 'ph-check-circle');
      editingContextId = null;
      setTimeout(() => renderAdminView(container), 200);
    } catch (e) {
      console.error(e);
      showToast(t.ctxSaveError, 'ph-warning');
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
      if (confirm(t.confirmDelete)) {
        try {
          const resp = await fetch(`${apiHost}/api/contexts/${id}`, { method: 'DELETE' });
          if (!resp.ok) throw new Error('Delete failed');
          showToast(t.ctxDeleted, 'ph-trash');
          setTimeout(() => renderAdminView(container), 200);
        } catch (e) {
          console.error(e);
          showToast(t.deleteFailed, 'ph-warning');
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
        showToast(t.sugApproved, 'ph-check-circle');
        setTimeout(() => renderAdminView(container), 200);
      } catch (e) { console.error(e); }
    });
  });

  document.querySelectorAll('.btn-reject-sug').forEach(btn => {
    btn.addEventListener('click', async () => {
      const sugId = btn.getAttribute('data-id');
      try {
        await fetch(`${apiHost}/api/suggestions/${sugId}/reject`, { method: 'POST' });
        showToast(t.sugRejected, 'ph-trash');
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

// --- Nested Sidebar Logic ---
const buildSidebarTree = () => {
  const tree = [];
  const childrenMap = {};

  contexts.forEach(ctx => {
    childrenMap[ctx.id] = [];
  });

  contexts.forEach(ctx => {
    if (ctx.parentId && childrenMap[ctx.parentId]) {
      childrenMap[ctx.parentId].push(ctx);
    }
  });

  contexts.forEach(ctx => {
    if (!ctx.parentId) {
      const node = { ...ctx, children: getSortedChildren(ctx.id, childrenMap) };
      tree.push(node);
    }
  });

  return tree;
};

const getSortedChildren = (parentId, childrenMap) => {
  return (childrenMap[parentId] || [])
    .map(ctx => ({ ...ctx, children: getSortedChildren(ctx.id, childrenMap) }))
    .sort((a, b) => {
      const aTitle = (a.titles[currentLang] || a.titles['en'] || a.id || '').toLowerCase();
      const bTitle = (b.titles[currentLang] || b.titles['en'] || b.id || '').toLowerCase();
      return aTitle.localeCompare(bTitle);
    });
};

const renderSidebarTree = () => {
  const tree = buildSidebarTree();
  // Filter tree based on search
  const query = searchQuery.toLowerCase();

  const filterTree = (nodes) => {
    return nodes.reduce((acc, node) => {
      const nodeTitle = (node.titles[currentLang] || node.titles['en'] || node.id || '').toLowerCase();
      const matches = nodeTitle.includes(query);
      const filteredChildren = filterTree(node.children);

      if (matches || filteredChildren.length > 0) {
        if (query && filteredChildren.length > 0) expandedContexts.add(node.id);
        acc.push({ ...node, children: filteredChildren });
      }
      return acc;
    }, []);
  };

  const visibleTree = query ? filterTree(tree) : tree;

  const renderNode = (node, depth = 0) => {
    const hasChildren = node.children.length > 0;
    const isExpanded = expandedContexts.has(node.id);
    const isActive = currentView === `pyramid-${node.id}` || currentView === `family-${node.id}`;

    return `
      <div class="sidebar-node-wrapper" style="--depth: ${depth}">
        <div class="sidebar-item ${isActive ? 'active' : ''} ${hasChildren ? 'has-children' : ''}" data-id="${node.id}" data-target="${hasChildren ? `family-${node.id}` : `pyramid-${node.id}`}">
          <div class="sidebar-item-content">
            <i class="${node.icon}"></i>
            <span class="sidebar-item-label">${node.titles[currentLang] || node.titles['en'] || node.id}</span>
          </div>
          ${hasChildren ? `
            <button class="expand-toggle ${isExpanded ? 'expanded' : ''}" data-expand="${node.id}">
              <i class="ph ph-caret-right"></i>
            </button>
          ` : ''}
        </div>
        ${hasChildren && (isExpanded || query) ? `
          <div class="sidebar-sub-menu ${isExpanded ? 'show' : ''}">
            ${node.children.map(child => renderNode(child, depth + 1)).join('')}
          </div>
        ` : ''}
      </div>
    `;
  };

  return visibleTree.map(node => renderNode(node)).join('');
};

const getBreadcrumbs = (ctxId) => {
  const path = [];
  let current = contexts.find(c => c.id === ctxId);
  while (current) {
    path.unshift(current);
    current = contexts.find(c => c.id === current.parentId);
  }
  return path;
};

const renderBreadcrumbs = (ctxId) => {
  const t = i18n[currentLang];
  const path = getBreadcrumbs(ctxId);
  return `
    <nav class="breadcrumb-nav">
      <span class="breadcrumb-item" data-target="home">${t.dashboard}</span>
      ${path.map((node, index) => {
    const isLast = index === path.length - 1;
    const target = contexts.some(c => c.parentId === node.id) ? `family-${node.id}` : `pyramid-${node.id}`;
    return `
          <i class="ph ph-caret-right breadcrumb-separator"></i>
          <span class="breadcrumb-item ${isLast ? 'active' : ''}" data-target="${target}">${node.titles[currentLang] || node.titles['en'] || node.id}</span>
        `;
  }).join('')}
    </nav>
  `;
};

const expandHierarchy = (ctxId) => {
  let current = contexts.find(c => c.id === ctxId);
  while (current && current.parentId) {
    expandedContexts.add(current.parentId);
    current = contexts.find(c => c.id === current.parentId);
  }
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
    if (sidebarItem && !e.target.closest('.expand-toggle')) {
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
    if (notifBtn) {
      if (loggedInUser) {
        const unread = notifications.filter(n => n.targetUser === loggedInUser.name && !n.read);
        if (unread.length > 0) {
          unread.forEach(n => {
            showToast(n.message, 'ph-bell-ringing');
            n.read = true;
          });
        } else {
          showToast(t.noNotifications, 'ph-bell');
        }
      }
    }

    // Nested Toggle handler
    const expandBtn = e.target.closest('.expand-toggle');
    if (expandBtn) {
      e.stopPropagation();
      const id = expandBtn.getAttribute('data-expand');
      if (expandedContexts.has(id)) expandedContexts.delete(id);
      else expandedContexts.add(id);
      render();
    }

    // Breadcrumb or Back Button click logic
    const clickable = e.target.closest('.breadcrumb-item, .btn-back, .back-btn');
    if (clickable) {
      const target = clickable.getAttribute('data-target');
      if (target) {
        if (currentView !== target) {
          pyramidOffsetIndex = 0;
          currentView = target;
          render();
        }
      }
    }
  });

  const profileBtn = document.getElementById('profile-btn');
  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      if (loggedInUser) {
        currentView = 'profile';
        render();
      } else {
        currentView = 'register';
        render();
      }
    });
  }

  // Logout confirmation handler — always re-attached on render
  const confirmLogoutBtn = document.getElementById('confirm-logout-btn');
  if (confirmLogoutBtn) {
    confirmLogoutBtn.addEventListener('click', () => {
      localStorage.removeItem('votenaut_token');
      localStorage.removeItem('votenaut_user');
      loggedInUser = null;
      const logoutModal = document.getElementById('logout-confirm-modal');
      if (logoutModal) logoutModal.style.display = 'none';
      currentView = 'home';
      render();
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

// Init — check for password reset token in URL
const urlParams = new URLSearchParams(window.location.search);
const resetToken = urlParams.get('reset_token');

if (resetToken) {
  // Show inline reset password overlay before full app render
  document.getElementById('app').innerHTML = `
    <div style="min-height:100vh; display:flex; align-items:center; justify-content:center; padding:20px; background:var(--bg-dark);">
      <div style="max-width:400px; width:100%; background:var(--bg-card); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:36px; text-align:center;">
        <div style="font-size:2.5rem; margin-bottom:12px;">🔐</div>
        <h2 style="color:var(--accent-gold); margin-bottom:8px; font-family:var(--font-display);">Nueva Contraseña</h2>
        <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:24px;">Ingresa tu nueva contraseña. El enlace expira en 1 hora.</p>
        <input type="password" id="new-pwd-input" class="form-input" placeholder="Nueva contraseña (min 6 chars)" style="margin-bottom:12px;">
        <input type="password" id="new-pwd-confirm" class="form-input" placeholder="Confirmar contraseña" style="margin-bottom:20px;">
        <button id="do-reset-btn" class="btn-primary" style="width:100%;">Restablecer Contraseña</button>
        <div id="reset-msg" style="margin-top:16px; font-size:0.85rem; color:var(--text-secondary);"></div>
      </div>
    </div>
  `;
  document.getElementById('do-reset-btn').addEventListener('click', async () => {
    const newPwd = document.getElementById('new-pwd-input').value;
    const confirm = document.getElementById('new-pwd-confirm').value;
    const msgEl = document.getElementById('reset-msg');
    if (newPwd.length < 6) { msgEl.textContent = 'La contraseña debe tener al menos 6 caracteres.'; return; }
    if (newPwd !== confirm) { msgEl.textContent = 'Las contraseñas no coinciden.'; return; }
    document.getElementById('do-reset-btn').textContent = 'Guardando...';
    try {
      const resp = await fetch(`${apiHost}/api/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: resetToken, newPassword: newPwd })
      });
      const data = await resp.json();
      if (resp.ok) {
        msgEl.style.color = '#00f0ff';
        msgEl.textContent = '✓ Contraseña actualizada. Redirigiendo...';
        setTimeout(() => { window.location.href = '/'; }, 2000);
      } else {
        msgEl.textContent = data.error || 'Error al restablecer la contraseña.';
        document.getElementById('do-reset-btn').textContent = 'Restablecer Contraseña';
      }
    } catch (err) {
      msgEl.textContent = 'Error de red. Intenta de nuevo.';
      document.getElementById('do-reset-btn').textContent = 'Restablecer Contraseña';
    }
  });
} else {
  render();
}
