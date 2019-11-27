"use strict";
// ready translated locales
//Vue.http.headers.common['Access-Control-Allow-Origin'] = 'https://tss-be.med.uottawa.ca/';
//Vue.http.headers.common['Access-Control-Request-Method'] = 'GET,PUT,POST,DELETE';
//Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';

// Make the application configuarable - later, this should happen during the build and be transparent to the programmer.
// Later, this will be imported, and a different version of the file will be used for each build.

var env = 'prod';

var envs = {
  'prod': {
    'fomsso': 'https://fomsso.med.uottawa.ca/',
    'uniweb': 'https://uniweb-service.med.uottawa.ca/',
    'be': 'https://tss-be.med.uottawa.ca/'
  },
  'staging': {
    'fomsso': 'https://sfomsso.ca',
    'uniweb': 'https://suniweb.ca',
    'be': 'https://sbe.ca'
  }
};

// Assign to variables to use in the code
var be_url = envs[env].be;
var uniweb_url = envs[env].uniweb;
var fomsso_url = envs[env].fomsso;

var locales = {
  en: {
    message: {
      "ADMINMESSAGE": "Message",
      "ADMITTED-INTO": "Admitted into:",
      "ADMITTED": "Have you been admitted into a graduate program at Faculty of Medicine of the University of Ottawa?",
      "ARTICLE-TITLE": "Article title:",
      "ASSISTANCE": "Need assistance? Visit",
      "ATTACH-ANOTHER": "attach another",
      "ATTACH": "attach",
      "AVAILABLE-TO-SUPERVISE": "Available to supervise ",
      "BELOW": "Below you will see a list of faculty members who are currently accepting students to supervise. Enter keywords to narrow down the list.",
      "BIOGRAPHY": "Biography",
      "CANCEL": "Cancel",
      "CHANGE-AVAILABILITY": "Change availability",
      "CHANGE-PW": "Change your password",
      "CHECK-INBOX": "Please check your inbox.",
      "CHOOSE-PW": "Please click the following link to choose a new password:",
      "CLEAR": "Clear",
      "CLOSE": "Close",
      "CODE": "Verification code:",
      "CONFERENCE-DATE": "Conference Date:",
      "CONFERENCE-NAME": "Conference Name:",
      "CONFERENCE-PUBLICATIONS": "Conference Publications",
      "CONT-CREATE": " where you may continue creating your account.",
      "CONT-RESET": " where you may continue resetting your password.",
      "CONTACT-CONVERSATIONS": "View conversation with ",
      "CONTACT": "Contact",
      "CONTINUE-CREATING-ACCOUNT": "Please click the following link to continue creating your account:",
      "CONTINUE": "Continue",
      "CONV-WITH": "Conversation with",
      "CONVERSATIONS": "Conversations",
      "CREATE-ACCOUNT": "Create account",
      "CREATE-ACCOUNT-FAILED": "We have failed to create your account, please verify that the information entered is correct.",
      "CREATE-PW": "Enter password:",
      "CREATE-YOUR-ACCOUNT": "Create your account",
      "CREATE-YOUR-PROFILE": "Create your profile",
      "CURRENTLY-AVAILABLE": "Currently available to supervise ",
      "CV-WORD-PDF": "(Microsoft Word or PDF format):",
      "CV": "CV",
      "DEVELOPPED-BY": " - Developed by Medtech ",
      "DO-HAVE": "I have a uOttawa username",
      "DONT-FORGET": "Don’t forget to:",
      "DONT-HAVE": "I do not have a uOttawa username",
      "EDIT-AVAILABILITY": "Edit availability",
      "EDIT-NAME": "Edit name",
      "EDIT-ORGANIZATION-TYPE": "Edit Organization Type",
      "EDIT-PROFILE": "Edit your profile",
      "EMAIL-SENT-VERIFICATION-CODE": " which contains a verification code needed to continue with creating your account.",
      "EMAIL-SENT": "An email message has been sent to ",
      "EMAIL": "Email address:",
      "EMAILED-LINK": "We’ve emailed you a link at",
      "ENGLISH": "English",
      "ENTER-EMAIL-ADDRESS": "enter your email address",
      "ENTER-EMAIL-INSTRUCTIONS": "Enter your email address and press Continue, and we will check to see if an account exists for that email address.",
      "ENTER-EMAIL": "Enter your email:",
      "ENTER-MESSAGE": "Enter your message below.",
      "ENTER-NAME": "enter name",
      "ENTER-NEW-PW": "Please enter your new password.",
      "ENTER-PASSWORD": "Please enter your password",
      "ENTER-PW": ". Please enter your password.",
      "ENTER-VERIFICATION-CODE": "enter your verification code",
      "ENTER-YOUR-PASSWORD": "enter your password",
      "ERROR": "An error occurred while loading the researchers!",
      "EXISTING-ACCOUNT": "Not certain whether you have an existing account?",
      "EXT": "ext:",
      "FACULTY-ADDRESS": "Faculty of Medicine <br> Roger Guindon Hall<br> Room<br> 451 Smyth Road <br>Ottawa, ON K1H 8M5",
      "FACULTY-OF-MEDICINE": "Faculty of Medicine",
      "FILTER-INTERESTS": "Filter Interests:",
      "FILTERED-INTERESTS": "Filtered Interests:",
      "FOR-ASSISTANCE": " For assistance, please contact",
      "FORGOT-PW": "Forgot password",
      "FUNDING-CLINICAL-RESEARCH": "Clinical research project: ",
      "FUNDING-END-DATE": "End date: ",
      "FUNDING-GRANT-TYPE": "Grant type: ",
      "FUNDING-TITLE": "Title: ",
      "FUNDING-PROJECT-DESCRIPTION": "Project description: ",
      "FUNDING-PROGRAM-NAME": "Program name: ",
      "FUNDING-PROGRAM-ORGANIZATION": "Program organization: ",
      "FUNDING-START-DATE": "Start date: ",
      "FUNDING-TYPE": "Funding type: ",
      "FREE-TEXT": "Free text search:",
      "FRENCH": "Français",
      "GO": "Go",
      "GRAD-STUDIES": "Graduate and Postdoctoral Studies",
      "GRAD-STUDIES-OFFICE": "Graduate and Postdoctoral Studies Office",
      "GRANT": "Grants",
      "HAVE-OR-CREATE": ", you must have or create an account. Not certain whether you have an existing account?",
      "HELP-DESK": "<a href='http://www.med.uottawa.ca/medtech/help/' target='_blank'>Help desk</a>.",
      "HELP-URL": "http://www.med.uottawa.ca/medtech/help/",
      "HIDE-PW": "Hide password",
      "HOME": "Home",
      "HOURS-DATE-SUMMER": "June 1st to August 31st <br> Monday to Friday <br> 9 a.m. to 3:30 p.m",
      "HOURS-DATE": "September 1st to May 31st <br> Monday to Friday <br> 9 a.m. to 4:30 p.m. ",
      "HOURS-DAY": "Monday to Friday",
      "HOURS-TIME-SUMMER": "9 a.m. to 3:30 p.m",
      "HOURS-TIME": "9 a.m. to 4:30 p.m.",
      "HOURS": "Hours of Operation",
      "IF-COPY-PASTE": "If you copied and pasted a link from an email, please make sure you didn’t miss any characters, and try again.",
      "IF-DONT-RECEIVE": "If you do not receive the email within an hour, we can",
      "IN-ORDER-TO-CONTACT-RESEARCHER": "In order to contact a researcher,",
      "IN-ORDER-TO-CONTACT": "In order to contact ",
      "INCLUDE-INFO": "Include information on your research experience and academic background",
      "INITIAL": "Initial communication with",
      "INTRODUCE": "Introduce yourself.",
      "INVALID-KEY": "Invalid key",
      "IS-INVALID": " is invalid.",
      "JOURNAL-ARTICLES": "Journal Articles",
      "LANGUAGE-DISCLAIMER": "English version not available. French version follows:",
      "LANGUAGE-SELECTION": "Language selection",
      "LEVEL": "Level applying for:",
      "LINK-AND-CODE": "A link and verification code have been sent to you at",
      "LOG-IN-FAILED": "The login failed with the credentials provided. Please reenter and try again.",
      "LOG-IN-FAILED-RESET": "The login failed with the credentials provided.",
      "LOG-IN-OR-CREATE": " please log in (or create an account)",
      "LOG-IN": "Log in",
      "LOG-OUT": "Log out",
      "LOGIN-RESEARCHER": "You must login to view your conversations",
      "MARK-READ": "Mark as read",
      "MESSAGE-FOLLOWS": "Message from student follows. Write ABOVE THIS LINE to reply.",
      "MESSAGE": "Message:",
      "MSC": "M.Sc.",
      "NAME": "Name:",
      "NEW-MESSAGES": " new messages",
      "NEW-PW": "Welcome back to Thesis Supervisor Search. We recently received a request for a new password for this email address.",
      "NEW-UNREAD-MESSAGES": "You have new unread messages from ",
      "NO-NEW-UNREAD-MESSAGES": "You have no new messages from ",
      "NO": "No",
      "NOT-ADMITTED-YET": "Not currently accepted into a program",
      "NOT-CURRENTLY-AVAILABLE": "I am not currently available to supervise",
      "NOT-LOGGED-IN": "You are not logged in",
      "NOT-MONITORED": "Please note this account is not monitored. If you have questions, please visit",
      "OTTAWA": "Ottawa, ON K1H 8M5",
      "PASSWORD": "Password:",
      "PHD": "Ph.D.",
      "PROFILE": "Profile",
      "PROGRAM": "Program:",
      "PROOFREAD": "Proofread.",
      "PROVIDE-INFO": "Please provide some information about yourself.",
      "PUBLICATION-DATE": "Publication date:",
      "PUBLICATION-TITLE": "Publication title:",
      "PUBLICATIONS": "Publications",
      "PW": "Password:",
      "REMEMBER-ME": "Remember me",
      "REMOVE": "remove",
      "RESEARCH-DESCRIPTION": "Research Description",
      "RESEARCH-INTERESTS": "Research interests",
      "RESEARCHER-PROFILE": "Researcher profile",
      "RESEND-EMAIL": "Resend Email",
      "RESEND": "resend it to you",
      "RESET-IT": "Reset it ",
      "RESULTS": " results",
      "RGN": "Roger Guindon Hall",
      "ROOM": "Room",
      "SAVE-MESSAGE": "Save Message",
      "SAVE": "Save",
      "SEARCH": "Search",
      "SEE-ATTACHED": "see attached",
      "SELECT-PROGRAM": "Select program",
      "SELECT-RESEARCH": "Select research interests:",
      "SELECT": "Select",
      "SEND-MESSAGE": "Send Message",
      "SEND": "Send",
      "SENT-ON": "Sent on: ",
      "SENT": "SENT:",
      "SHOWING": "Showing ",
      "SKIP": "Skip to main content",
      "SMYTH": "451 Smyth Road",
      "STARTING-FROM": "as of ",
      "STATE-INTERESTS": "State your interests clearly and how they match with the Faculty member.",
      "STUDENT-PROFILE": "Student profile",
      "THANK-YOU": "Thank you for your interest in the University of Ottawa. At the Faculty of Medicine of the University of Ottawa, we teach to heal.",
      "THE-KEY": "A problem has occurred: the key ",
      "THIS-ADDRESS-NOT-EXIST": " does not exist in our records. To proceed, click \"Create account\".",
      //"THIS-ADDRESS-NOT-EXIST": " does not exist in our records. To proceed, click \"Create account\". A confirmation will be sent to this address.",
      "THIS-ADDRESS": "This address ",
      "THIS-MESSAGE": "This message will be visible to administrators of the Graduate and Postdoctoral Studies Office of the Faculty of Medicine.",
      "THIS-PROFILE": "This profile will be visible to researchers you communicate with, as well as administrators of the Graduate and Postdoctoral Studies Office of the Faculty of Medicine.",
      "THIS-WILL-BE-USERNAME": "This will be your username.",
      "TIPS": "Tips",
      "TO-CONTACT": "To contact",
      "TO-RESET-PASSWORD": "To reset your password, please enter your new password.",
      "TOGGLE-NAVIGATION": "Toggle navigation",
      "TRANSCRIPTS-WORD-PDF": "(Microsoft Word or PDF format. Unofficial transcripts are acceptable):",
      "TRANSCRIPTS": "Transcripts",
      "TRY-AGAIN": ", and try again.",
      "TSS": "Thesis Supervisor Search",
      "TY": "Thank You.",
      "UNREAD": "Unread ",
      "USERNAME": "Username:",
      "VERIFICATION": "Verification code:",
      "VIEW-CONV": "View conversation online:",
      "VIEW-CONVERSATIONS": "View conversations",
      "VIEW-MESSAGES": "View older messages",
      "VIEW-PROFILE": "View profile",
      "VIEW-PW": "View password",
      "VIEWED-ON": "Viewed on: ",
      "VIEWED-UNREAD": "VIEWED: UNREAD",
      "VIEWED": "Viewed:",
      "VISIBLE": "Replies will be visible to administrators of the Graduate and Postdoctoral Studies Office of the Faculty of Medicine.",
      "VISIT-WEBSITE": "Visit website ",
      "WE-WILL-GUIDE": "We will guide you through the search for your thesis supervisor.",
      "WE-WILL": "We will guide you through the search for your thesis supervisor.",
      "WELCOME-BACK": "Welcome back",
      "WELCOME-TO": "Welcome to Thesis Supervisor Search ",
      "WELCOME": "Welcome",
      "WHICH": "Which one?",
      "YES": "Yes",
      "YOU-HAVE": "You have ",
      "YOUR-CODE": "Your verification code is"
    }
  },
  fr: {
    message: {
      "ADMINMESSAGE": "Message",
      "ADMITTED-INTO": "Admis en :",
      "ADMITTED": "Avez-vous été admis dans un programme d’études supérieures à la Faculté de médecine de l’Université d’Ottawa?",
      "ARTICLE-TITLE": "Le titre de l'article :",
      "ASSISTANCE": "Besoin d’aide? Visitez le",
      "ATTACH-ANOTHER": "joindre un autre relevé",
      "ATTACH": "joindre",
      "AVAILABLE-TO-SUPERVISE": "Disponible pour superviser ",
      "BELOW": "Vous trouverez ci-dessous une liste des membres du corps professoral qui sont disponible pour diriger des étudiants. Entrez des mots-clés pour cibler votre recherche.",
      "BIOGRAPHY": "Biographie",
      "CANCEL": "Annuler",
      "CHANGE-AVAILABILITY": "Changer votre disponibilité",
      "CHANGE-PW": "Modifier votre mot de passe",
      "CHECK-INBOX": "Veuillez vérifier votre boîte de réception.",
      "CHOOSE-PW": "Cliquez sur le lien suivant pour choisir un nouveau mot de passe :",
      "CLEAR": "Effacer",
      "CLOSE": "Fermer",
      "CODE": "Code de vérification :",
      "CONFERENCE-DATE": "Date de la conférence :",
      "CONFERENCE-NAME": "Nom de la conférence:",
      "CONFERENCE-PUBLICATIONS": "Articles de conférence",
      "CONT-CREATE": ". Vous pourrez poursuivre la création de votre compte.",
      "CONT-RESET": ". Vous pourrez poursuivre la réinitialisation de votre mot de passe.",
      "CONTACT-CONVERSATIONS": "Voir la discussion avec ",
      "CONTACT": "Contacter",
      "CONTINUE-CREATING-ACCOUNT": "Cliquez sur le lien suivant pour poursuivre la création de votre compte :",
      "CONTINUE": "Continuer",
      "CONV-WITH": "Conversation avec",
      "CONVERSATIONS": "Conversations",
      "CREATE-ACCOUNT": "Créer un compte",
      "CREATE-ACCOUNT-FAILED": "Nous n'avons pas réussi à créer votre compte, vérifiez que les informations saisies sont correctes.",
      "CREATE-PW": "Entrer un mot de passe :",
      "CREATE-YOUR-ACCOUNT": "Créer un compte",
      "CREATE-YOUR-PROFILE": "Créez votre profil",
      "CURRENTLY-AVAILABLE": "Je suis actuellement disponible pour superviser ",
      "CV-WORD-PDF": "(format Microsoft Word ou PDF) :",
      "CV": "CV",
      "DEVELOPPED-BY": " - Développé par Medtech",
      "DO-HAVE": "J’ai un nom d’utilisateur uOttawa",
      "DONT-FORGET": "N’oubliez pas de :",
      "DONT-HAVE": "Je n’ai pas de nom d’utilisateur uOttawa",
      "EDIT-AVAILABILITY": "Modifier la disponibilité",
      "EDIT-NAME": "modifier votre nom",
      "EDIT-ORGANIZATION-TYPE": "Modifier le type d'organisation",
      "EDIT-PROFILE": "Modifier votre profil",
      "EMAIL-SENT-VERIFICATION-CODE": " qui contient un code de vérification nécessaire pour poursuivre la création de votre compte.",
      "EMAIL-SENT": "Un courriel a été envoyé à ",
      "EMAIL": "Adresse courriel :",
      "EMAILED-LINK": "Nous avons envoyé un lien à",
      "ENGLISH": "English",
      "ENTER-EMAIL-ADDRESS": "entrer votre adresse courriel",
      "ENTER-EMAIL-INSTRUCTIONS": "Entrez votre adresse courriel et appuyez sur continuer, et nous allons vérifier pour voir si un compte existe pour cette adresse courriel.",
      "ENTER-EMAIL": "Entrez votre adresse courriel :",
      "ENTER-MESSAGE": "Inscrivez votre message ci-dessous.",
      "ENTER-NAME": "entrez le nom",
      "ENTER-NEW-PW": "Entrer votre nouveau mot de passe.",
      "ENTER-PASSWORD": "Entrez votre mot de passe",
      "ENTER-PW": ". Entrez votre mot de passe.",
      "ENTER-VERIFICATION-CODE": "entrer votre code de vérification",
      "ENTER-YOUR-PASSWORD": "entrer votre mot de passe",
      "ERROR": "Une erreur est survenue lors du chargement des chercheurs!",
      "EXISTING-ACCOUNT": "Vous ne savez pas si vous avez un compte?",
      "EXT": "poste :",
      "FACULTY-ADDRESS": "Faculty of Medicine <br> Roger Guindon Hall<br> Room<br> 451 Smyth Road <br>Ottawa, ON K1H 8M5",
      "FACULTY-OF-MEDICINE": "Faculté de médecine",
      "FILTER-INTERESTS": "Filtrer les intérêts :",
      "FILTERED-INTERESTS": "Les intérêts filtrés:",
      "FOR-ASSISTANCE": "Pour de l'aide, s'il vous plaît contacter",
      "FORGOT-PW": "J’ai oublié mon mot de passe",
      "FREE-TEXT": "Recherche en texte libre :",
      "FRENCH": "Français",
      "FUNDING-CLINICAL-RESEARCH": "Projet de recherche clinique : ",
      "FUNDING-END-DATE": "Date de fin : ",
      "FUNDING-GRANT-TYPE": "Type de subvention : ",
      "FUNDING-TITLE": "Titre : ",
      "FUNDING-PROJECT-DESCRIPTION": "Description du projet : ",
      "FUNDING-PROGRAM-NAME": "Nom du programme : ",
      "FUNDING-PROGRAM-ORGANIZATION": "Organisation du programme : ",
      "FUNDING-START-DATE": "Date de début : ",
      "FUNDING-TYPE": "Type de financement : ",
      "GO": "Allez-y",
      "GRAD-STUDIES": "Bureau des études supérieures et postdoctorales",
      "GRAD-STUDIES-OFFICE": "Bureau des études supérieures et postdoctorales",
      "GRANT": "Subventions",
      "HAVE-OR-CREATE": ", vous devez posséder un compte ou en créer un.",
      "HELP-DESK": "<a href='http://www.med.uottawa.ca/medtech/help/' target='_blank'>Help desk</a>",
      "HIDE-PW": "cacher le mot de passe",
      "HOME": "Accueil",
      "HOURS-DATE-SUMMER": "du 1 Juin au 31 août <br> du lundi au vendredi <br> de 9h à 15h30",
      "HOURS-DATE": "du 1 septembre au 31 mai <br> du lundi au vendredi <br> de 9h à 16h30",
      "HOURS-DAY": "du lundi au vendredi",
      "HOURS-TIME-SUMMER": "de 9h à 15h30",
      "HOURS-TIME": "de 9h à 16h30",
      "HOURS": "Heures d'ouverture",
      "IF-COPY-PASTE": "Si vous avez copié-collé le lien depuis un courriel, veuillez vérifier si vous avez sélectionné tous les caractères, puis réessayez.",
      "IF-DONT-RECEIVE": "Si vous ne recevez pas le courriel dans l’heure qui suit, nous pouvons vous",
      "IN-ORDER-TO-CONTACT-RESEARCHER": "Pour communiquer avec des professeurs, ",
      "IN-ORDER-TO-CONTACT": "Pour communiquer avec ",
      "INCLUDE-INFO": "ajouter des informations sur votre expérience de recherche et votre formation universitaire;",
      "INITIAL": "Communication initiale avec",
      "INTRODUCE": "vous presenter;",
      "INVALID-KEY": "Clé non valide",
      "IS-INVALID": "» n’est pas valide.",
      "JOURNAL-ARTICLES": "Articles de revue",
      "LANGUAGE-DISCLAIMER": "Version française non disponible. Version anglaise suit :",
      "LANGUAGE-SELECTION": "Sélection de la langue",
      "LEVEL": "Niveau d’études demandé :",
      "LINK-AND-CODE": "Un lien et un code de vérification ont été envoyés à",
      "LOG-IN-FAILED": "La connexion a échoué avec les informations d'identification que vous avez fournies. S'il vous plaît re entrer et essayer à nouveau.",
      "LOG-IN-FAILED-RESET": "La connexion a échoué avec les informations d'identification que vous avez fournies.",
      "LOG-IN-OR-CREATE": "ouvrez une session (ou créez-vous un compte)",
      "LOG-IN": "Ouvrez une session",
      "LOG-OUT": "Se déconnecter",
      "LOGIN-RESEARCHER": "Vous devez vous connecter pour voir vos conversations",
      "MARK-READ": "Marqué comme lu",
      "MESSAGE-FOLLOWS": "Le message d’un étudiant suit. Répondez SOUS CETTE LIGNE.",
      "MESSAGE": "Message :",
      "MSC": "M. Sc.",
      "NAME": "Nom :",
      "NEW-MESSAGES": " nouveaux messages",
      "NEW-PW": "Bienvenue dans l’outil de recherche d’un directeur de thèse. Nous avons reçu récemment une demande de nouveau mot de passe à cette adresse courriel.",
      "NEW-UNREAD-MESSAGES": "Vous avez de nouveaux messages non lus de ",
      "NO-NEW-UNREAD-MESSAGES": "Vous n'avez pas de nouveaux messages non lus de ",
      "NO": "Non",
      "NOT-ADMITTED-YET": "Pas actuellement admis à un programme.",
      "NOT-CURRENTLY-AVAILABLE": "Je ne suis pas actuellement disponible pour superviser",
      "NOT-LOGGED-IN": "Vous n'êtes pas connecté",
      "NOT-MONITORED": "Veuillez noter que ce compte n’est pas surveillé. Si vous avez des questions, visitez le",
      "OTTAWA": "Ottawa, ON K1H 8M5",
      "PASSWORD": "Mot de passe :",
      "PHD": "Ph. D.",
      "PROFILE": "Profil",
      "PROGRAM": "Programme :",
      "PROOFREAD": "Passer en revue votre demande.",
      "PROVIDE-INFO": "Veuillez fournir des informations sur vous.",
      "PUBLICATION-DATE": "Date de la publication :",
      "PUBLICATION-TITLE": "Titre de la publication :",
      "PUBLICATIONS": "Publications",
      "PW": "Mot de passe :",
      "REMEMBER-ME": "Se souvenir de moi",
      "REMOVE": "supprimer",
      "RESEARCH-DESCRIPTION": "Description de la recherche",
      "RESEARCH-INTERESTS": "Intérêts de recherche",
      "RESEARCHER-PROFILE": "Profil du superviseur ",
      "RESEND-EMAIL": "Envoyer le courriel à nouveau",
      "RESEND": "l’envoyer à nouveau",
      "RESET-IT": "Réinitialiser le ",
      "RESULTS": " résultats",
      "RGN": "Pavillon Roger Guindon",
      "ROOM": "Pièce",
      "SAVE": "Sauvegarder",
      "SEARCH": "Recherche",
      "SEE-ATTACHED": "voir ci-joint",
      "SELECT-PROGRAM": "Sélectionnez un programme",
      "SELECT-RESEARCH": "Sélectionnez des intérêts de recherche :",
      "SELECT": "Sélectionnez",
      "SEND-MESSAGE": "Envoyer le message",
      "SEND": "Envoyer",
      "SENT-ON": "Envoyé le : ",
      "SENT": "ENVOYÉ :",
      "SHOWING": "Affichage de ",
      "SKIP": "Passer au contenu principal",
      "SMYTH": "451 chemin smyth",
      "STARTING-FROM": "à partir de : ",
      "STATE-INTERESTS": "indiquer clairement vos intérêts et leur lien avec le professeur ou la professeure;",
      "STUDENT-PROFILE": "Profil de l’étudiant",
      "THANK-YOU": "Nous vous remercions de l’intérêt que vous témoignez envers l’Université d’Ottawa. À la Faculté de médecine de l’Université d’Ottawa, nous enseignons à guérir.",
      "THE-KEY": "Un problème est survenu : la clé «",
      "THIS-ADDRESS-NOT-EXIST": " n’apparaît pas dans nos dossiers. Pour continuer, cliquez sur « Créer un compte ».",
      //"THIS-ADDRESS-NOT-EXIST": " n’apparaît pas dans nos dossiers. Pour continuer, cliquez sur « Créer un compte ». Un message de confirmation sera envoyé à cette adresse.",
      "THIS-ADDRESS": "Cette adresse ",
      "THIS-MESSAGE": "Ce message sera visible pour les administrateurs du Bureau des études supérieures et postdoctorales de la Faculté de médecine.",
      "THIS-PROFILE": "Ce profil sera visible pour les chercheurs avec lesquels vous communiquerez, de même que pour les administrateurs du Bureau des études supérieures et postdoctorales de la Faculté de médecine.",
      "THIS-WILL-BE-USERNAME": "Ce sera votre nom d’utilisateur.",
      "TIPS": "Conseils",
      "TO-CONTACT": "Pour communiquer avec",
      "TO-RESET-PASSWORD": "S'il vous plaît entrer votre nouveau mot de passe afain de réinitialisation de votre mot de passe.",
      "TOGGLE-NAVIGATION": "Basculer la navigation",
      "TRANSCRIPTS-WORD-PDF": "(format Microsoft Word ou PDF. Les relevés de notes non officiels sont acceptés) :",
      "TRANSCRIPTS": "Relevés de notes",
      "TRY-AGAIN": ", essayez de nouveau.",
      "TSS": "Recherche d’un directeur de thèse",
      "TY": "Merci.",
      "UNREAD": "Non lus ",
      "USERNAME": "Nom d’utilisateur :",
      "VERIFICATION": "Code de vérification :",
      "VIEW-CONV": "Lisez la conversation en ligne :",
      "VIEW-CONVERSATIONS": "Voir les conversations",
      "VIEW-MESSAGES": "Voir anciens messages",
      "VIEW-PROFILE": "Voir le profil",
      "VIEW-PW": "voir le mot de passe",
      "VIEWED-ON": "Lu le : ",
      "VIEWED": "Viewed:",
      "VISIBLE": "Les réponses seront visibles pour les administrateurs du Bureau des études supérieures et postdoctorales de la Faculté de médecine.",
      "VISIT-WEBSITE": "Visitez le site internet ",
      "WE-WILL-GUIDE": "Nous vous guiderons au long du processus de recherche d’un directeur de thèse.",
      "WE-WILL": "Nous vous guiderons au long du processus de recherche d’un directeur de thèse.",
      "WELCOME-BACK": "Bienvenue",
      "WELCOME-TO": "Bienvenue dans l’outil de recherche d’un directeur de thèse",
      "WELCOME": "Bienvenue",
      "WHICH": "Lequel?",
      "YES": "Oui",
      "YOU-HAVE": "Vous avez ",
      "YOUR-CODE": "Votre code de vérification est"
    }
  }
};

// install plugin
Vue.use(VueI18n);

// set lang
var defaultLanguage = $('html').attr('lang');
Vue.config.lang = defaultLanguage;

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang]);
});

Vue.component("researcher-component", {
  template: "<h2 role='heading' aria-level='2'>Researcher area</h2>",
  props: ["role"]
});

Vue.component("conversation-component", {
  template: "<h2 role='heading' aria-level='2'>Conversations</h2>",
  props: ["conversations"]
});

Vue.component('admin-component', {
  template: '\
    <div v-once>\
      <h2 role="heading" aria-level="2">Thesis Supervisor Search</h2>\
      <h3 role="heading" aria-level="3">Student Reports</h3>\
      <table class="sorttable table table-sm">\
      <caption>Profiles Created, by month (last 12 months)</caption>\
      <thead>\
      <th>Apr 2015</th>\
      <th>May 2015</th>\
      <th>Jun 2015</th>\
      <th>Jul 2015</th>\
      <th>Aug 2015</th>\
      <th>Sep 2015</th>\
      <th>Oct 2015</th>\
      <th>Nov 2015</th>\
      <th>Dec 2015</th>\
      <th>Jan 2016</th>\
      <th>Feb 2016</th>\
      <th>Mar 2016</th>\
      </thead>\
      <tbody>\
      <td>8</td>\
      <td>3</td>\
      <td>12</td>\
      <td>0</td>\
      <td>3</td>\
      <td>2</td>\
      <td>5</td>\
      <td>1</td>\
      <td>9</td>\
      <td>2</td>\
      <td>6</td>\
      <td>8</td>\
      </tbody>\
      </table>\
      <table class="sorttable table table-sm">\
      <caption>Students in the system</caption>\
      <thead>\
      <tr>\
      <th>Profile Creation</th>\
      <th>Name</th>\
      <th>Email</th>\
      <th>Student Number</th>\
      <th>Masters Ph.D.</th>\
      <th>Talked with...</th>\
      <th>Message Sent</th>\
      </tr>\
      </thead>\
      <tbody>\
      <tr>\
      <td>2016-03-20</td>\
      <td>Sam Lacroix</td>\
      <td>slacroix@gmail.com</td>\
      <td></td>\
      <td>Ph.D.</td>\
      <td>Lena Hunger</td>\
      <td>2</td>\
      </tr>\
      <tr>\
      <td>2016-03-17</td>\
      <td>Kenneth Frinst</td>\
      <td>frinst@hotmail.com</td>\
      <td></td>\
      <td>Ms.C.</td>\
      <td>Francine Prudhomme</td>\
      <td>6</td>\
      </tr>\
      <tr>\
      <td>2016-03-29</td>\
      <td>Sally Anders</td>\
      <td>sanders@uottawa.ca</td>\
      <td>81229339</td>\
      <td>Ph.D.</td>\
      <td>LenaHunger, Francine Prudhomme</td>\
      <td>3</td>\
      </tr>\
      <tr>\
      <td colspan="3">Total Averages</td>\
      <td>1 internal, 2 externals</td>\
      <td>1 M.Sc., 2 Ph.D.</td>\
      <td>Mean: 1.3 researchers,  Median: 2 researchers, </td>\
      <td>Mean: 3.7, Median: 3</td>\
      </tr>\
      </tbody>\
      </table>\
      <hr>\
      <h3 role="heading" aria-level="3">Supervisor Reports</h3>\
      <table class="sorttable table table-sm">\
      <caption>Responses</caption>\
      <thead>\
      <th>Name</th>\
      <th>Mean Response Time (days)</th>\
      <th>Median Response Time (days)</th>\
      <th>Unreturned Contacts</th>\
      </thead>\
      <tbody>\
      <tr>\
      <td>Shawn Aaron</td>\
      <td>2.6</td>\
      <td>2</td>\
      <td>0</td>\
      </tr>\
      <tr>\
      <td>Steffany Bennett</td>\
      <td>2.2</td>\
      <td>2</td>\
      <td>5</td>\
      </tr>\
      <tr>\
      <td>Jacques Bradwejn</td>\
      <td>193.5</td>\
      <td>102</td>\
      <td>15</td>\
      </tr>\
      <tr>\
      <td>Paul Bragg</td>\
      <td>3.5</td>\
      <td>3</td>\
      <td>2</td>\
      </tr>\
      </tbody>\
      </table>\
    </div>\
  '
});

Vue.component("student-component", {
  template: "<h2 role='heading' aria-level='2'>Student area</h2>",
  props: ["role"]
});

Vue.component("student-profile-component", {
  template: "<h2 role='heading' aria-level='2'>Student Profile</h2>",
  props: ["profile"]
});

// var selint = new Vue();

Vue.component("interests-component", {
  template: '<li><label><input type="checkbox"  @click="toggle"> {{ myInterests }}<span class="counter"></span></label></li>',
  props: ['myInterests'],
  // props: {
  //   name: 'myInterests',
  //   model: Object
  // },
  methods: {
    toggle: function toggle(e) {
      // console.log('checked');

    }
  }
});

// Text truncation function, found at http://codereview.stackexchange.com/questions/92801/truncating-text-with-jquery-but-keep-the-html-formatting
function cutKeepingTags(elem, reqCount) {
  var grabText = '',
      missCount = reqCount;
  $(elem).contents().each(function () {
    switch (this.nodeType) {
      case Node.TEXT_NODE:
        // Get node text, limited to missCount.
        grabText += this.data.substr(0, missCount);
        missCount -= Math.min(this.data.length, missCount);
        break;
      case Node.ELEMENT_NODE:
        // Explore current child:
        var childPart = cutKeepingTags(this, missCount);
        grabText += childPart.text;
        missCount -= childPart.count;
        break;
    }
    if (missCount == 0) {
      // We got text enough, stop looping.
      return false;
    }
  });
  return {
    text:
    // Wrap text using current elem tag.
    elem.outerHTML.match(/^<[^>]+>/m)[0] + grabText + '</' + elem.localName + '>',
    count: reqCount - missCount
  };
}

Vue.component('short-description', {
  props: ['desc', 'lang'],
  template: '<div v-html=shortdesc></div>',

  computed: {
    shortdesc: function shortdesc() {
      var returnval = void 0;
      if (this.lang === 'fr') {
        if (this.desc.fr) {
          returnval = this.truncate(this.desc.fr, 300);
        } else {
          returnval = '<div class="disclaimer">' + this.$t("message.LANGUAGE-DISCLAIMER") + '</div>' + this.truncate(this.desc.en, 300);
        }
      } else {
        if (this.desc.en) {
          returnval = this.truncate(this.desc.en, 300);
        } else {
          returnval = '<div class="disclaimer">' + this.$t("message.LANGUAGE-DISCLAIMER") + '</div>' + this.truncate(this.desc.fr, 300);
        }
      }
      return returnval;
    }
  },

  methods: {
    truncate: function truncate(inputText, reqCount) {
      var elem = $("<div>" + inputText + "</div>")[0]; // Convert string into JQuery object
      var truncated = cutKeepingTags(elem, reqCount);
      var outputText = $(truncated.text).html();
      if (truncated.count == reqCount) {
        // Text was (probably) truncated
        return outputText + "&hellip;";
      } else {
        return outputText;
      }
    }
  }
});

new Vue({
  el: '#app',
  data: {
    allConversations: [],
    allUnreadCount: 0,
    alpha: [],
    alphaButtonArray: [],
    alphabuttons: [],
    availableDate: null,
    body: [],
    clickedLoginBtn: false,
    clickedResearcher: [],
    clickedResearcherAcademicUnit: '',
    clickedResearcherId: '',
    clickedResearcherName: '',
    clickedResearcherPositionTitle: '',
    clickedResearcherUsername: '',
    contactedResearcherId: '',
    conversationResearchers: [],
    createAccountFailed: false,
    cv: {},
    cvFiles: '',
    cvStudent: {},
    email: null,
    fileName: '',
    filteredResearchers: [],
    filteredResearchersAvailability: [],
    freeText: '',
    hasConversations: false,
    interestsChoices: [],
    internal: false,
    isAvailable: false,
    isSelected: false,
    isUnAvailable: false,
    key: '12345',
    levelOfInstruction: '',
    loading: true,
    loggedIn: false,
    loginFailed: false,
    loginState: 'notStarted',
    message: '',
    messageList: [],
    model: Object,
    name: '',
    noReply: false,
    password: '',
    profile: false,
    programCode: '',
    programName: '',
    programs: [],
    rememberMe: false,
    researcherAvailability: {},
    researcherAvailabilityArr: [],
    researcherAvailableId: null,
    researcherConversations: [],
    researcherInterests: [],
    researcherIsAvailable: false,
    researcherName: '',
    researchers: null,
    result: {},
    role: 'unknown',
    selectedInterestLeaf: [],
    selectedInterests: [],
    selectedResearcherConversations: [],
    student_profile_array: [],
    student_profile: null,
    studentConversations: [],
    studentCv: [],
    studentHasCv: false,
    studentHasTranscripts: false,
    studentID: '',
    studentName: '',
    studentProfile: [],
    students: null,
    studentTranscripts: [],
    theName: '',
    theResearcherTalkedToStudent: false,
    theSelectedLanguage: 'en',
    token: {},
    transcripts: {},
    transcriptsStudent: {},
    unread: false,
    uoUser: false,
    user: { "role": "unknown" },
    userGuid: '',
    userId: '',
    username: '',
    userName: '',
    userRole: [],
    verificationCode: '',
    viewPasswordClicked: false

  },
  created: function created() {

    this.name = this.retrieve('name', this.name);
    this.email = this.retrieve('email', this.email);
    this.role = this.retrieve('role', this.role);
    this.userId = this.retrieve('userId', this.userId);
    this.username = this.retrieve('username', this.userName);
    console.log('this.username created ' + this.username);
    this.internal = this.retrieve('internal', this.internal) === 'true'; // Convert to boolean. Coerce types if necessary.
    this.loggedIn = this.retrieve('loggedIn', this.loggedIn) === 'true'; // Convert to boolean. Coerce types if necessary.
    this.loginState = this.retrieve('loginState', this.loginState);
    this.profile = this.retrieve('profile', this.profile) === 'true'; // Convert to boolean. Coerce types if necessary.
    // var studentProfileString = this.retrieve('studentProfile',this.studentProfile.join());
    // this.studentProfile = studentProfileString.split(',');
    this.hasConversations = this.retrieve('hasConversations', this.hasConversations) === 'true'; // Convert to boolean. Coerce types if necessary.
    this.allUnreadCount = this.retrieve('allUnreadCount', this.allUnreadCount);
    this.rememberMe = this.retrieve('rememberMe', this.rememberMe);
    this.theSelectedLanguage = this.retrieve('theSelectedLanguage', this.theSelectedLanguage);

    // set lang
    $('html').attr('lang', this.theSelectedLanguage);
    Vue.config.lang = this.theSelectedLanguage;
    document.title = 'uOttawa ' + this.$t('message.FACULTY-OF-MEDICINE') + ' ' + this.$t('message.TSS'); // Keep this synchronized with the actual <title> element please

    this.getResearchers();
    this.getPrograms();
  },
  methods: {

    store: function store(storeVariable, localVariable) {
      sessionStorage.setItem(storeVariable, localVariable);
      if (this.rememberMe) {
        localStorage.setItem(storeVariable, localVariable);
      }
    },

    retrieve: function retrieve(retrieveVariable, localVariable) {
      var retrieveValue = localStorage.getItem(retrieveVariable);
      if (retrieveValue === null) {
        retrieveValue = sessionStorage.getItem(retrieveVariable);
        if (retrieveValue === null) {
          retrieveValue = localVariable;
        }
      }
      return retrieveValue;
    },

    viewProfile: function viewProfile(event) {
      event.preventDefault();
      $('#editName').removeClass('in');
      $('#modalStudentProfile').modal('show');
    },
    viewConversations: function viewConversations(event) {
      event.preventDefault();
      $('#modalConversations').modal('show');
    },
    uploadCv: function uploadCv(username, event) {
      var _this = this;

      event.preventDefault();
      //var students_id = parseInt(userId);
      var student_username = username;
      var files = event.target.files;
      var file = new FormData();
      file.append('cv', files[0]);
      //var url = 'https://tss-be.med.uottawa.ca/';
      var url = be_url;
      //var url = "https://tss-be.med.uottawa.ca/";
      var modelRoute = 'students/' + student_username + '/cvs';
      var fileUrl = url + modelRoute;

      this.$http.post(fileUrl, file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        // success callback

        //this.$nextTick(function () {
        _this.getCv(student_username);
        //})

      }, function (response) {
        //error callback
        // console.log('error uploading your cv ' + response.status);
        // console.log(response);
        // console.log(response.headers);
      });
    },
    viewStudentProfile: function viewStudentProfile(studentUsername) {
      console.log('view student profile clicked');
      console.log('studentUsername ' + studentUsername);
      this.getStudentProfile(studentUsername);
    },
    hidePassword: function hidePassword(event) {
      event.preventDefault();
      $('.pass').find('input[type="text"]').attr("type", "password");
      this.viewPasswordClicked = false;
    },
    viewPassword: function viewPassword(event) {
      event.preventDefault();
      $('.pass').find('input[type="password"]').attr("type", "text");
      this.viewPasswordClicked = true;
    },
    getCv: function getCv(username, event) {
      var _this2 = this;

      //var students_id = userId;
      var student_username = username;
      //var url = 'https://tss-be.med.uottawa.ca/';
      var url = be_url;

      //var url = "https://tss-be.med.uottawa.ca/";
      var modelRoute = 'students/' + student_username + '/cvs/';
      var urlRoute = url + modelRoute;

      this.$http.get(urlRoute).then(function (response) {
        // success callback
        _this2.studentCv = response;
        _this2.processCv();
      }, function (response) {
        //error callback
        // console.log('error getting cv ' + response.status);
      });
    },
    processCv: function processCv() {

      var file = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.studentCv.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var cv = _step.value;

          var name = cv;
          var filename = cv;
          var fileObj = { filename: filename };
          file.push(filename);
          this.studentHasCv = true;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.cvStudent = file;
    },
    deleteCv: function deleteCv(username, filename, event) {
      var _this3 = this;

      //// console.log('use clicked delete cv');
      //var students_id = userId;
      var student_username = username;
      console.log('this.username ' + this.username);
      console.log('student_username ' + student_username);
      var fileName;
      fileName = encodeURIComponent(filename);
      //var url = 'https://tss-be.med.uottawa.ca/';
      //var url = "https://tss-be.med.uottawa.ca/";
      var url = be_url;
      var file = 'students/' + student_username + '/cvs/' + fileName;
      var fileUrl = url + file;

      this.$http.delete(fileUrl).then(function (response) {
        // success callback
        // set studentHasCv to false
        _this3.studentHasCv = false;
      }, function (response) {
        //error callback
        // console.log('error deleting cv ' + response.status);
      });
    },
    uploadTranscripts: function uploadTranscripts(username, event) {
      var _this4 = this;

      event.preventDefault();
      //var students_id = parseInt(userId);
      var student_username = username;
      var files = event.target.files;
      var file = new FormData();
      file.append('transcript', files[0]);
      //var url = 'https://tss-be.med.uottawa.ca/';
      var url = "https://tss-be.med.uottawa.ca/";
      var modelRoute = 'students/' + student_username + '/transcripts';
      var fileUrl = url + modelRoute;

      this.$http.post(fileUrl, file).then(function (response) {
        // success callback
        _this4.getTranscripts(student_username);
      }, function (response) {
        //error callback
        // console.log('error uploading your transcripts ' + response.status);
        // console.log(response);
      });
    },
    getTranscripts: function getTranscripts(username, event) {
      var _this5 = this;

      //var students_id = userId;
      var student_username = username;
      //var url = 'https://tss-be.med.uottawa.ca/';
      //var url = "https://tss-be.med.uottawa.ca/";
      var url = be_url;
      var modelRoute = 'students/' + student_username + '/transcripts';
      var urlRoute = url + modelRoute;

      this.$http.get(urlRoute).then(function (response) {
        // success callback
        _this5.studentTranscripts = response;
        _this5.processTranscripts();
      }, function (response) {
        //error callback
        // console.log('error posting availability ' + response.status);
      });
    },
    processTranscripts: function processTranscripts() {
      var files = [];

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.studentTranscripts.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var transcript = _step2.value;

          var name = transcript;
          files.push(name);
          this.studentHasTranscripts = true;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.transcriptsStudent = { files: files };
    },
    deleteTranscript: function deleteTranscript(username, filename, event) {
      var _this6 = this;

      var clickedTranscript = event.target;
      //var students_id = userId;
      var student_username = username;
      console.log('this.username ' + this.username);
      console.log('student_username ' + student_username);
      var fileName;
      fileName = encodeURIComponent(filename);
      //var url = 'https://tss-be.med.uottawa.ca/';
      var url = be_url;
      // var url = "https://tss-be.med.uottawa.ca/";
      var file = 'students/' + student_username + '/transcripts/' + fileName;
      var fileUrl = url + file;

      this.$http.delete(fileUrl).then(function (response) {

        _this6.getTranscripts(student_username);
      }, function (response) {
        //       //error callback
        // console.log('error deleting cv ' + response.status);
      });
    },
    viewResearcherProfile: function viewResearcherProfile(id, event) {

      event.preventDefault;
      console.log('clickedresearcher');
      console.log(this.clickedResearcher);
      var researcherPositionTitle;
      var researcherAcademicUnit;
      var researcherId;
      var researcherName;
      var selectedResearcherId = id;
      this.clickedResearcherId = selectedResearcherId;
      this.clickedResearcher = [];

      $('#newmessage').val('');

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.researchers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var selR = _step3.value;


          if (selR.id === selectedResearcherId) {
            // // console.log(selR.membership_information.first_name + ' ' + selR.membership_information.last_name);
            this.clickedResearcher.push(selR);
            console.log('this.clickedResearcher');
            console.log(this.clickedResearcher);
            this.clickedResearcherName = selR.membership_information.first_name + ' ' + selR.membership_information.last_name;
            //this.clickedResearcherUsername = selR.membership_information.email.match(/.+?(?=@uottawa.ca)/g);
            //console.log('this.clickedResearcherUsername ' + this.clickedResearcherUsername);      
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (this.clickedResearcher.length == 0) {
        // console.log ("Researcher [" + selectedResearcherId + "] not found");
      } else {

        $('#modalResearcherProfile').modal('show');

        if (this.role !== '') {
          //user logged in
          //check if user has a profile
          if (this.profile === true) {
            $('#modalResearcherProfile').modal('show');
            //check if user has started a conversation with researcher
            this.checkStudentTalkedToResearcher();
          } else {
            $('#modalStudentProfile').modal('show');
          }
        } else {
          //user not logged in
          $('#modalResearcherProfile').modal('show');
        }
      }
    },
    checkStudentTalkedToResearcher: function checkStudentTalkedToResearcher() {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {

        for (var _iterator4 = this.studentConversations[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var student = _step4.value;
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {

            for (var _iterator5 = student.talkedWith[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var researcher = _step5.value;


              var clickedResearcherId = parseInt(this.clickedResearcherId);

              if (researcher.researcherid === clickedResearcherId) {
                this.theResearcherTalkedToStudent = true;
                break;
              } else {
                this.theResearcherTalkedToStudent = false;
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    },
    login: function login(event) {
      event.preventDefault();
      // this.clickedResearcher;
      this.clickedLoginBtn = true;
      this.clickedResearcher = [];
      this.clickedResearcherName = '';

      console.log('this.clickedLoginBtn ' + this.clickedLoginBtn);
      $('#email').val('');
      $('#thePassword').val('');
      $('#username').val('');
      $('#password').val('');
      $('#modalLogin').modal('show');
    },
    contactResearcher: function contactResearcher(event) {
      $('#modalLogin').modal('show');
    },
    getResearcherAvailability: function getResearcherAvailability(researcherId) {
      var _this7 = this;

      var theUrl = 'https://tss-be.med.uottawa.ca';
      var modelRoute = '/researchers/' + researcherId;

      var urlRoute = theUrl + modelRoute;

      this.$http.get(urlRoute).then(function (response) {
        // success callback
        _this7.researcherAvailability = response;
        console.log('this.researcherAvailability');
        console.log(_this7.researcherAvailability);
        var availableDate = _this7.researcherAvailability.data.available_date;
        console.log('availableDate ' + availableDate);
        var today = new Date();
        today = _this7.formatDate(today);
        console.log('today ' + today);
        if (availableDate > today) {
          _this7.processResearcherAvailability(researcherId, availableDate);
        }
      });
    },
    checkResearcherSelected: function checkResearcherSelected(researcher) {
      return researcher.selected == true;
    },
    findGrantTitle: function findGrantTitle(researcher) {
      return researcher.funding_title;
    },
    processResearcherAvailability: function processResearcherAvailability(researcherId, availableDate) {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {

        for (var _iterator6 = this.researchers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var researcher = _step6.value;

          console.log('process availability for loop');
          if (researcher.id == researcherId) {
            console.log('process availability condition if');
            researcher.available_date = availableDate;
            console.log('process availability researcher.available_date ' + researcher.available_date);
            console.log('process availability availableDate ' + availableDate);
            console.log('researcher');
            console.log(researcher);
            console.log(' in loop this.researchers');
            console.log(this.researchers);
            break;
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      console.log('this.researchers');
      console.log(this.researchers);
    },
    saveAvailability: function saveAvailability(id, event) {
      var _this8 = this;

      var userId = id;
      var availableDate = $('#date').val().trim();
      var availabilityContent = {};
      var researcherAvailable = $('#availability').find('input:checked').val();
      if (researcherAvailable === 'Available') {
        this.researcherIsAvailable = true;
      } else {
        this.researcherIsAvailable = false;
      }

      var isAvailable = this.researcherIsAvailable;
      availabilityContent = { userId: userId, isAvailable: isAvailable, availableDate: availableDate };
      //var url = 'http://10.80.128.37:4002';
      var url = be_url;
      var urlRoute = url;

      this.$http.post(urlRoute, availabilityContent).then(function (response) {
        // success callback
        _this8.researcherIsAvailable = true;
        return _this8.researcherIsAvailable;
      }, function (response) {
        //error callback
        _this8.researcherIsAvailable = false;
        return _this8.researcherIsAvailable;
      });
    },
    saveMessage: function saveMessage(event) {
      var _this9 = this;

      var userId = this.userId; //researcher of student
      var student_username = this.username;
      console.log('student_username ' + student_username);
      var body = $('#newmessage').val();
      var messageContent = {};
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var guid = this.userGuid;
      var researcher_uniweb_number = this.clickedResearcherId;
      var researcher_username = this.clickedResearcherUsername;
      console.log('researcher_username ' + researcher_username);
      var researcher_name = this.clickedResearcherName;
      var students_id = parseInt(userId);
      var student_name = this.name;
      var is_from_student;
      if (this.role === 'student') {
        is_from_student = true;
      } else {
        is_from_student = false;
      }

      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }

      var sentDT = dd + '/' + mm + '/' + yyyy;
      messageContent = { researcher_name: researcher_name, researcher_username: researcher_username, student_username: student_username, student_name: student_name, body: body, is_from_student: is_from_student }; //isFromStudent boolean
      //var url = 'https://tss-be.med.uottawa.ca/'; // (staging)
      //var url = "https://tss-be.med.uottawa.ca/";
      var url = be_url;
      var modelRoute = 'messages/';
      var fileUrl = url + modelRoute;

      this.$http.post(fileUrl, messageContent).then(function (response) {
        // success callback
        _this9.$nextTick(function () {
          if (this.role === 'student') {
            this.hasConversations = true;
            this.store('hasConversations', this.hasConversations);
            return this.hasConversations;
          } else if (this.role === 'researcher') {
            this.hasConversations = true;
            this.store('hasConversations', this.hasConversations);
            return this.hasConversations;
          } else {
            return;
          }
        });
      }, function (response) {
        //error callback
        _this9.hasConversations = false;
        _this9.store('hasConversations', _this9.hasConversations);
        return _this9.hasConversations;
      });
    },

    messageRead: function messageRead(id, researcherId, researcherName, studentUsername, studentName, body, isFromStudent, event) {
      var _this10 = this;

      // console.log('mark message as read');
      event.preventDefault();

      var researcher_uniweb_number = parseInt(researcherId);
      var researcher_name = researcherName;
      //var students_id = parseInt(studentId);
      var student_name = studentName;
      var student_username = studentUsername;
      console.log('student_username ' + student_username);
      var read_date;
      var today = new Date();
      var read_date;
      console.log('message id ' + id);
      read_date = today.toISOString();

      var body = body;

      var is_from_student = isFromStudent;

      var content = { researcher_uniweb_number: researcher_uniweb_number, researcher_name: researcher_name, student_username: student_username, student_name: student_name, body: body, is_from_student: is_from_student, read_date: read_date };

      //var url = 'https://tss-be.med.uottawa.ca/'; // (staging)
      //var url = "https://tss-be.med.uottawa.ca/";
      var url = be_url;
      var modelRoute = 'messages/' + id;
      var fileUrl = url + modelRoute;

      this.$http.put(fileUrl, content).then(function (response) {
        // success callback

        _this10.$nextTick(function () {
          this.unread = false;
          this.getMessageList();
          //$('#modalConversations').modal('hide');
          return this.unread;
        });
      }, function (response) {
        //error callback
        // console.log('error saving message ' + response.status);
        // console.log('response');
        // console.log(response);
        _this10.unread = true;
        return _this10.unread;
      });
    },
    sendInitialMessage: function sendInitialMessage(id, studentUsername, studentName, event) {
      var _this11 = this;

      var userId = this.userId; //researcher or student
      var body = $('#newmessage').val();
      console.log('body');
      console.log(body);
      var messageContent = {};
      var is_from_student;
      var researcher_uniweb_number;
      var position_title;
      var academic_unit;
      var researcher_name;
      var students_id;
      var student_name = studentName;
      var id = id;
      var student_username;

      if (this.role === 'student') {

        is_from_student = true;

        if (this.clickedResearcherId === '') {
          researcher_uniweb_number = id;
          console.log('researcher_uniweb_number' + researcher_uniweb_number);
        } else {
          researcher_uniweb_number = this.clickedResearcherId;
          console.log('researcher_uniweb_number' + researcher_uniweb_number);
        }

        if (this.clickedResearcherName === '') {
          researcher_name = $('#researcherName').val().trim();
          console.log('researcher_name' + researcher_name);
        } else {
          researcher_name = this.clickedResearcherName;
          console.log('researcher_name' + researcher_name);
        }

        position_title = this.clickedResearcherPositionTitle;
        academic_unit = this.clickedResearcherAcademicUnit;
        students_id = parseInt(userId);
        student_name = studentName;
        console.log('student_name' + student_name);
        student_username = studentUsername;
        console.log('student_username' + student_username);
      } else {

        is_from_student = false;
        researcher_uniweb_number = this.userId;
        researcher_name = this.name;
        //students_id = parseInt(studentId);
        student_username = studentUsername;
        student_name = studentName;
      }

      researcher_uniweb_number = parseInt(researcher_uniweb_number);
      messageContent = { researcher_uniweb_number: researcher_uniweb_number, researcher_name: researcher_name, student_username: student_username, student_name: student_name, body: body, is_from_student: is_from_student }; //isFromStudent boolean
      console.log('messageContent');
      console.log(messageContent);
      //var url = 'https://tss-be.med.uottawa.ca:4101/'; // (staging)
      var url = be_url;
      //var url = "https://tss-be.med.uottawa.ca/";
      var modelRoute = 'messages/';
      var fileUrl = url + modelRoute;

      this.$http.post(fileUrl, messageContent).then(function (response) {
        // success callback
        _this11.$nextTick(function () {
          if (this.role === 'student') {
            this.hasConversations = true;
            this.store('hasConversations', this.hasConversations);
            this.theResearcherTalkedToStudent = true;
            $('#modalResearcherProfile').modal('hide');
            console.log('HIDE MODAL RESEARCHER PROFILE IF ROLE IS STUDENT');
            $('#modalConversations').modal('hide');

            this.getMessageList();
            return this.theResearcherTalkedToStudent, this.hasConversations;
          } else if (this.role === 'researcher') {

            this.hasConversations = true;
            this.store('hasConversations', this.hasConversations);
            this.theResearcherTalkedToStudent = true;
            $('#modalResearcherProfile').modal('hide');
            console.log('HIDE MODAL RESEARCHER PROFILE IF ROLE RESEARCHER');
            $('#modalConversations').modal('hide');
            this.getMessageList();
            return this.theResearcherTalkedToStudent, this.hasConversations;
          } else {
            return;
          }
        });
      }, function (response) {
        //error callback
        // console.log('error saving message ' + response.status);
        // console.log('response');
        // console.log(response);
        _this11.theResearcherTalkedToStudent = false;
        _this11.hasConversations = false;
        _this11.store('hasConversations', _this11.hasConversations);
        return _this11.theResearcherTalkedToStudent, _this11.hasConversations;
      });
    },
    sendMessage: function sendMessage(studentUserId, id, studentUsername, studentName, event) {
      var _this12 = this;

      var userId = this.userId; //researcher or student
      var textareaId = '#newmessage-' + studentUserId;
      console.log(textareaId);
      var body = $(textareaId).val();
      console.log('body');
      console.log(body);
      var messageContent = {};
      var is_from_student;
      var researcher_uniweb_number;
      var position_title;
      var academic_unit;
      var researcher_name;
      var students_id;
      var student_name = studentName;
      var id = id;
      var student_username;

      if (this.role === 'student') {

        is_from_student = true;

        if (this.clickedResearcherId === '') {
          researcher_uniweb_number = id;
          console.log('researcher_uniweb_number' + researcher_uniweb_number);
        } else {
          researcher_uniweb_number = this.clickedResearcherId;
          console.log('researcher_uniweb_number' + researcher_uniweb_number);
        }

        if (this.clickedResearcherName === '') {
          researcher_name = $('#researcherName').val().trim();
          console.log('researcher_name' + researcher_name);
        } else {
          researcher_name = this.clickedResearcherName;
          console.log('researcher_name' + researcher_name);
        }

        position_title = this.clickedResearcherPositionTitle;
        academic_unit = this.clickedResearcherAcademicUnit;
        students_id = parseInt(userId);
        student_name = studentName;
        console.log('student_name' + student_name);
        student_username = studentUsername;
        console.log('student_username' + student_username);
      } else {

        is_from_student = false;
        researcher_uniweb_number = this.userId;
        researcher_name = this.name;
        //students_id = parseInt(studentId);
        student_username = studentUsername;
        console.log('student_username ' + student_username);
        student_name = studentName;
        console.log('student_name ' + student_name);
      }

      researcher_uniweb_number = parseInt(researcher_uniweb_number);
      messageContent = { researcher_uniweb_number: researcher_uniweb_number, researcher_name: researcher_name, student_username: student_username, student_name: student_name, body: body, is_from_student: is_from_student }; //isFromStudent boolean
      console.log('messageContent');
      console.log(messageContent);
      //var url = 'https://tss-be.med.uottawa.ca:4101/'; // (staging)
      //var url = "https://tss-be.med.uottawa.ca/";
      var url = be_url;
      var modelRoute = 'messages/';
      var fileUrl = url + modelRoute;

      this.$http.post(fileUrl, messageContent).then(function (response) {
        // success callback
        _this12.$nextTick(function () {
          if (this.role === 'student') {
            this.hasConversations = true;
            this.store('hasConversations', this.hasConversations);
            this.theResearcherTalkedToStudent = true;

            //$('#modalConversations').modal('hide');
            $('#modalConversations textarea').val('');
            this.getMessageList();
            return this.theResearcherTalkedToStudent, this.hasConversations;
          } else if (this.role === 'researcher') {

            this.hasConversations = true;
            this.store('hasConversations', this.hasConversations);
            this.theResearcherTalkedToStudent = true;
            //$('#modalConversations').modal('hide');
            $('#modalConversations textarea').val('');
            this.getMessageList();
            return this.theResearcherTalkedToStudent, this.hasConversations;
          } else {
            return;
          }
        });
      }, function (response) {
        //error callback
        // console.log('error saving message ' + response.status);
        // console.log('response');
        // console.log(response);
        _this12.theResearcherTalkedToStudent = false;
        _this12.hasConversations = false;
        _this12.store('hasConversations', _this12.hasConversations);
        return _this12.theResearcherTalkedToStudent, _this12.hasConversations;
      });
    },
    updateProfile: function updateProfile(username, event) {
      var _this13 = this;

      var profileContent = {};
      var name = $('#name').val().trim();
      console.log('var name ' + name);
      this.name = name;
      this.store('name', this.name);
      //var name = this.retrieve('name', this.name);
      console.log('name ' + this.name);
      var email = this.email;
      this.username = this.retrieve('username', this.username);
      console.log('update profile username ' + this.username);

      var level_of_instruction = this.levelOfInstruction;
      console.log('level_of_instruction ' + level_of_instruction);

      var program_code = $('#StudentProfile .showSelectMenu select option:selected').val();
      var parsed_program_code = parseInt(program_code);
      console.log('parsed_program_code ' + parsed_program_code);
      console.log('isNaN(parsed_program_code ' + isNaN(parsed_program_code));
      if (isNaN(parsed_program_code)) {
        parsed_program_code = 0;
      }
      //  $('#StudentProfile .showSelectMenu select').find("option[value=" + program_code +"]").attr('selected', true);
      // console.log("select "+  $('#StudentProfile .showSelectMenu select').find("option[value=" + program_code +"]").val());
      profileContent = { name: name, email: email, level_of_instruction: level_of_instruction, program_code: parsed_program_code }; //cv  transcript  path

      console.log(profileContent);

      //var theurl = 'https://tss-be.med.uottawa.ca/'
      //var theurl = 'https://tss-be.med.uottawa.ca/'
      var theurl = be_url;

      var modelRoute = 'students/' + username;
      var url = theurl + modelRoute;

      this.$http.put(url, profileContent).then(function (response) {

        // success callback
        _this13.$nextTick(function () {
          console.log('this.username ' + this.username);
          this.getStudent(this.username);
        });
      }, function (response) {
        //error callback
        console.log('error saving profile ' + response.status);
      });
    },
    createProfile: function createProfile(username, event) {
      var _this14 = this;

      // console.log('save profile clicked');
      //this.userId = id;

      var profileContent = {};
      //var name = $('#StudentProfile').find('#name').val().trim();
      this.name = this.retrieve('name', this.name);
      var name = this.name;
      console.log('name ' + this.name);
      this.username = username;
      console.log('username ' + this.username);

      this.store('username', this.username);

      //this.retrieve('name',this.name);

      var application = 'TSS';
      var email = this.email;
      var level_of_instruction = $('#StudentProfile .active').find('input[name="level_of_instruction"]').val();
      console.log('level_of_instruction ' + level_of_instruction);

      var program_code = $('#StudentProfile .showSelectMenu select option:selected').val();
      var parsed_program_code = parseInt(program_code);
      if (isNaN(parsed_program_code)) {
        parsed_program_code = 0;
      }
      // console.log("progcode "+program_code);
      program_code = parseInt(program_code);
      if (isNaN(program_code)) {
        program_code = 0;
      }

      profileContent = { name: name, email: email, username: username, level_of_instruction: level_of_instruction, program_code: program_code }; //cv  transcript  path
      //var url = 'https://tss-be.med.uottawa.ca';
      //var url = 'https://tss-be.med.uottawa.ca/'
      var url = be_url;

      var modelRoute = 'students';
      var fileUrl = url + modelRoute;

      this.$http.post(fileUrl, profileContent).then(function (response) {
        // success callback

        if (_this14.internal === true) {

          _this14.loggedIn = true;
          _this14.store('loggedIn', _this14.loggedIn);

          _this14.$nextTick(function () {
            this.readUserRole(email);
          });
        } else {

          console.log('external students');
          var url = fomsso_url + "register";
          var credentials = { 'username': _this14.username, 'password': _this14.password, 'application': application, 'name': _this14.name };
          _this14.$http.post(url, credentials).then(function (response) {
            // success
            console.log('credentials');
            console.log(credentials);
            _this14.token = response.headers('token');
            console.log('this.token');
            console.log(_this14.token);
            _this14.user = _this14.parseJwt(_this14.token);
            var email = _this14.user.email;
            _this14.loggedIn = true;
            _this14.store('loggedIn', _this14.loggedIn);
            _this14.createAccountFailed = false;

            //hide profile modal
            $('#modalStudentProfile').modal('hide');

            _this14.$nextTick(function () {
              this.readUserRole(email);
            });
          }, function (response) {
            //error callback   
            console.log(response);
            console.log(response.status);
            _this14.updateStateEngine('EmailFound');
          });
        }
      }, function (response) {
        //error callback
        console.log(response);
        console.log('error saving profile ' + response.status);
      });
    },
    buttonClickUpdateChecked: function buttonClickUpdateChecked(value, event) {
      // called when an interest is selected in treeview/list

      this.isSelected = false;
      var theValue = value;
      var theIndex;
      // theValue = theValue.toLowerCase();

      if (theValue) {
        console.log('theValue ' + theValue);
        var interestChoicesObj = {};
        this.isSelected = true;
        var isFound = false;

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = this.interestsChoices[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var interestObj = _step7.value;


            console.log('interestObj');
            console.log(interestObj);

            if (interestObj.theValue === theValue) {
              isFound = true;
              break;
            }
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        if (isFound === false) {
          console.log('is value in the interestChoices');
          console.log($.inArray(theValue, this.interestsChoices) == '-1');
          console.log(this.interestsChoices);

          theIndex = $.inArray(theValue, this.selectedInterests);
          interestChoicesObj = { theIndex: theIndex, theValue: theValue };
          this.interestsChoices.push(interestChoicesObj);
          console.log('theIndex ' + theIndex);
          $('#interests-' + theIndex).prop('checked', true);
        }
      } else {
        this.isSelected = false;
        index = $.inArray(theValue, this.selectedInterests);
        index = index.toString;
        $('#interests-' + index).prop('checked', false);
      }

      this.filterResearchers();
      this.extractAlphaFilter();
      this.refreshFilteredList();
    },
    updateChecked: function updateChecked(value, index, event) {
      // called when an interest is selected in treeview/list

      this.isSelected = false;
      var theValue = value;
      var theIndex = index;

      if (event.target.checked) {

        event.target.checked = true;
        $(event.target).prop('checked', true);
        var interestChoicesObj = {};
        this.isSelected = true;

        if ($.inArray(theValue, this.interestsChoices) == '-1') {
          interestChoicesObj = { theIndex: theIndex, theValue: theValue };
          this.interestsChoices.push(interestChoicesObj);
          // console.log(this.interestsChoices);
        }
      } else {
        event.target.checked = false; // set event.target to not selected (false)
        this.isSelected = false; // set this.selected to false

        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = this.interestsChoices[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var choice = _step8.value;

            var indexx = this.interestsChoices.indexOf(choice);

            if (theIndex === choice.theIndex && event.target.checked === false) {
              this.interestsChoices.splice(indexx, 1);

              $('#interests-' + theIndex).prop('checked', false);
            }
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }
      }

      this.filterResearchers();
      this.extractAlphaFilter();
      this.refreshFilteredList();
    },
    createInterestList: function createInterestList() {
      this.selectedInterests = [];
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = this.researchers[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var researcher = _step9.value;


          if (researcher.research_interests != null) {
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {

              for (var _iterator10 = researcher.research_interests[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var anInterest = _step10.value;


                if (anInterest != null) {

                  var leaf = anInterest.interest[1];
                  //var lowercaseLeaf = leaf.toLowerCase();

                  if ($.inArray(leaf, this.selectedInterests) == '-1') {
                    this.selectedInterests.push(leaf);
                  }

                  this.selectedInterests.sort();

                  //  this.selectedInterests.sort(function (a, b) {
                  //       return a.localeCompare(b, 'fr', {'sensitivity': 'base'});
                  //  });

                } else {

                    // console.log('anInterest is null');

                  }
              }
            } catch (err) {
              _didIteratorError10 = true;
              _iteratorError10 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion10 && _iterator10.return) {
                  _iterator10.return();
                }
              } finally {
                if (_didIteratorError10) {
                  throw _iteratorError10;
                }
              }
            }
          } else {
              // console.log('researcher does not have interests');
            }
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9.return) {
            _iterator9.return();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }
    },
    toggleLanguage: function toggleLanguage(event) {
      event.preventDefault();

      if (this.theSelectedLanguage === 'en') {
        var newLang = 'fr';
      } else {
        var newLang = 'en';
      }

      $('html').attr('lang', newLang);
      Vue.config.lang = newLang;
      document.title = 'uOttawa ' + this.$t('message.FACULTY-OF-MEDICINE') + ' ' + this.$t('message.TSS'); // Keep this synchronized with the actual <title> element please
      this.theSelectedLanguage = newLang;
      this.store('theSelectedLanguage', this.theSelectedLanguage);
    },
    getStudents: function getStudents() {
      var _this15 = this;

      var modelRoute = '/students';
      //var url = "https://tss-be.med.uottawa.ca/";
      var url = "https://tss-be.med.uottawa.ca/";
      var fileUrl = url + modelRoute;
      // console.log('fileUrl ' + fileUrl);
      this.username = this.retrieve('username', this.userName);
      console.log('this.username ' + this.username);

      this.$http.get(fileUrl).then(function (response) {
        // success callback

        _this15.students = response.data;;
        _this15.processStudents();

        _this15.$nextTick(function () {
          this.getCv(this.username);
          this.getTranscripts(this.username);
        });
      }, function (response) {
        // error callback
        // console.log('error');
      });
    },
    processStudents: function processStudents() {
      var _this16 = this;

      //check if this.students is empty or not
      //Filter this.students to find a matche for this.userId
      var student = this.students.filter(function (item) {
        return item.id === _this16.userId;
      });
      //check if student with id matches this.userId
      if (student.length > 0) {
        this.getStudent(this.userId);
      } else {
        $('#modalStudentProfile').modal('show');
      }
    },
    getStudentProfile: function getStudentProfile(username) {
      var _this17 = this;

      var student_username = username;
      console.log('getStudent student_username ' + student_username);
      var modelRoute = '/students/' + student_username;
      var theurl = "https://tss-be.med.uottawa.ca";
      var url = theurl + modelRoute;

      this.$http.get(url).then(function (response) {
        // success callback
        _this17.student_profile = response.data;
        console.log('this.student_profile');
        console.log(_this17.student_profile);
        _this17.process_student_profile(student_username);
      }, function (response) {
        // error callback
        console.log('error');
        console.log(response);
        console.log(response.status);
      });
    },
    process_student_profile: function process_student_profile(username) {
      var student_username = username;
      console.log('student_username' + student_username);
      console.log('student_username ' + student_username);
      if (this.student_profile) {
        this.student_profile_array = [];
        this.student_profile_array.push(this.student_profile);
        console.log('this.student_profile_array ' + this.student_profile_array);
        this.getCv(student_username);
        this.getTranscripts(student_username);
        $("#modalViewStudentProfile").modal('show');
      }
    },
    getStudent: function getStudent(username) {
      var _this18 = this;

      var student_username = username;
      console.log('getStudent student_username ' + student_username);

      var modelRoute = '/students/' + student_username;
      //var theurl = "https://tss-be.med.uottawa.ca/";
      var theurl = "https://tss-be.med.uottawa.ca";
      var url = theurl + modelRoute;

      this.$http.get(url).then(function (response) {
        // success callback
        _this18.student = response.data;
        console.log('this.student');
        console.log(_this18.student);
        _this18.processStudentProfile(student_username);
      }, function (response) {
        // error callback
        // console.log('error');
      });
    },
    processStudentProfile: function processStudentProfile(username) {
      var userID = parseInt(this.userId);
      var student_username = username;
      console.log('student_username' + student_username);
      console.log('student_username ' + student_username);

      if (this.student) {
        console.log('this.student !!!!!!!!!');
        console.log(this.student);
        this.profile = true;
        console.log('this.profile ' + this.profile);
        this.studentProfile = [];
        this.store('profile', this.profile);
        this.studentProfile.push(this.student);
        console.log('this.studentProfile');
        console.log(this.studentProfile);
        this.getCv(student_username);
        this.getTranscripts(student_username);

        // this.store('studentProfile',this.studentProfile.join());


        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = this.studentProfile[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var item = _step11.value;

            // TODO: replace with "var item = this.student;"?
            //this.name = item.name;
            //this.store('name',this.name);
            this.name = item.name;
            this.store('name', this.name);

            // console.log('this.name ' + this.name);
            this.levelOfInstruction = item.level_of_instruction;
            if (this.levelOfInstruction === 'msc') {
              //   console.log('level msc');
              //   $('input:radio[name="level_of_instruction"]').filter('[value="msc"]').prop('checked', true);
              //   $('input:radio[name="level_of_instruction"]').filter('[value="phd"]').prop('checked', false);
              $('.r2').addClass('active');
              $('.r1').removeClass('active');

              //   // console.log('msc');
            } else {
              //   console.log('level phd');
              //   $('input:radio[name="level_of_instruction"]').filter('[value="phd"]').prop('checked', true);
              //   $('input:radio[name="level_of_instruction"]').filter('[value="msc"]').prop('checked', false);
              $('.r1').addClass('active');
              $('.r2').removeClass('active');
            }

            $('#StudentProfile').find('.showSelectMenu').hide();

            this.programCode = item.program_code;
            console.log('programCode ' + this.programCode);
            if (this.programCode != 0) {
              console.log('item.program_code  1' + item.program_code);
              //$('#StudentProfile, #viewStudentProfile').find('#yes').prop("checked", true);
              $('.yes').addClass('active');
              $('.no').removeClass('active');
              $('#StudentProfile, #viewStudentProfile').find('.showSelectMenu').show();
              $('#StudentProfile, #viewStudentProfile').find('select').val(this.programCode).change();
              // console.log("code"+item.program_code);
            } else {
              console.log('item.program_code 2' + this.programCode);
              //$('#StudentProfile, #viewStudentProfile').find('#no').prop("checked", true);
              $('.yes').removeClass('active');
              $('.no').addClass('active');
            }
          }

          // console.log('student profile exists');       
        } catch (err) {
          _didIteratorError11 = true;
          _iteratorError11 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion11 && _iterator11.return) {
              _iterator11.return();
            }
          } finally {
            if (_didIteratorError11) {
              throw _iteratorError11;
            }
          }
        }

        if (this.internal === true) {
          console.log('internal student');
          $('#modalStudentProfile').modal('hide');
          $('#modalLogin').modal('hide');
        } else {
          console.log('external student');
          this.updateStateEngine('EmailFound');
        }

        this.getMessageList();
      } else {
        this.profile = false;
        this.store('profile', this.profile);
        $('#modalLogin').modal('hide');
        $('#modalStudentProfile').modal('show');
      }
    },
    getResearchers: function getResearchers() {
      var _this19 = this;

      //var fileUrl = 'app/data/professors.json';
      //var url = 'https://uniweb-service.med.uottawa.ca/professors';
      var url = uniweb_url + "professors";
      //var url = "https://uniweb-service.med.uottawa.ca/"; 
      var theResearchers = [];

      // GET request
      this.$http.get(url).then(function (response) {
        // success callback
        _this19.researchers = response.data;
        //console.log(this.researchers);
        _this19.processUniwebFeed();
      }, function (response) {
        // error callback
        // console.log('error');
      });
    },
    onCreateAccount: function onCreateAccount() {
      this.username = $("#email").val().toLowerCase().trim();
      console.log('this.usernam ' + this.username);
      this.password = $("#thePassword").val().trim();
      this.name = $("#fullname").val().trim();
      this.store('name', this.name);
      console.log('name ' + this.name);
      var email = this.username;
      this.store('username', this.username);

      var application = "TSS";

      if (this.password !== '' && this.username !== '' && this.name !== '') {

        $('#modalLogin').modal('hide');
        $('#modalStudentProfile').modal('show');
      } else {
        //display alert credantial missing
        this.createAccountFailed = true;
        $('#externalcreateAccountFailedAlert').show();
        this.updateStateEngine('EmailNotFound');
        //this.updateStateEngine('EmailFound');
        //return false;
      }
    },
    onVerifyEmail: function onVerifyEmail(event) {
      var email = $('#email').val().toLowerCase().trim();
      console.log('email ' + email);
      this.email = email;
      this.store('email', this.email);
      this.internal = false;
      this.store('internal', this.internal);
      console.log('this.internal' + this.internal);
      this.readUserRole(email);
    },
    onValidateVerificationCode: function onValidateVerificationCode(event) {

      var enteredVerificationCode = $("#verificationCode").val().trim();

      if (enteredVerificationCode === this.key) {

        // console.log('Email is verified');
      } else {
          // console.log('Email is NOT verified');
        }
    },
    onEmailPassword: function onEmailPassword(event) {
      var _this20 = this;

      this.username = $("#email").val().toLowerCase().trim();
      console.log('this.username ' + this.username);
      this.password = $("#thePassword").val().trim();
      var application = "TSS";

      if (this.password !== '' && this.username !== '') {
        // console.log('onEmailPassword');
        var email = this.username;

        $('#modalLogin').modal('hide');

        //var url = "https://fomsso.med.uottawa.ca/auth";

        var url = fomsso_url + "auth";

        var credentials = { 'username': this.username, 'password': this.password, 'application': application };

        this.$http.post(url, credentials).then(function (response) {
          // success callback
          console.log(response.data);
          console.log(response.status);
          console.log(response.headers);
          _this20.token = response.headers('token');
          console.log('this.token');
          console.log(_this20.token);
          _this20.user = _this20.parseJwt(_this20.token);
          var email = _this20.user.email;

          if ($('#fullname').val() !== undefined) {
            _this20.name = $('#fullname').val().trim();
            console.log('name ' + _this20.name);
            _this20.store('name', _this20.name);
          }

          _this20.store('username', _this20.username);
          $('#modalLogin').modal('hide');
          _this20.loggedIn = true;
          _this20.store('loggedIn', _this20.loggedIn);
          console.log('this.loggedIn ' + _this20.loggedIn);
          _this20.loginFailed = false;

          // if (this.role === '') {
          //   this.profile = false;
          //   this.store('profile',this.profile);
          //   $('#modalStudentProfile').modal('show');
          // } else {
          _this20.readUserRole(email);
          //}
        }, function (response) {
          console.log('login failed');
          _this20.loginFailed = true;
          $('#externalLoginFailedAlert').show();
          console.log('this.loginFailed ' + _this20.loginFailed);
          _this20.updateStateEngine('EmailNotFound');
          //return this.loginFailed;
        });
      } else {
        console.log('login failed no username or password');
        this.loginFailed = true;
        console.log('this.loginFailed ' + this.loginFailed);
        return false, this.loginFailed;
      }
    },
    processExternalUser: function processExternalUser() {

      this.userId = "1";
      this.store('userId', this.userId);
      this.name = this.retrieve('name', this.name);
      var email = localStorage.getItem('email'); // should this be "var email = this.email;"?
      this.getStudent(this.userId);

      if (this.userRole === 'student') {
        $('#modalLogin').modal('hide');
      } else {
        $('#modalLogin').modal('hide');
        $('#modalStudentProfile').modal('show');
      }
    },
    updateStateEngine: function updateStateEngine(newState) {
      this.loginState = newState;
      this.store('loginState', this.loginState);
    },
    onTryAgain: function onTryAgain(event) {
      this.updateStateEngine('EmailSent');
    },
    onResendEmail: function onResendEmail() {
      this.updateStateEngine('ResetSent');
    },

    postEmail: function postEmail(email) {
      var modelRoute = '/students';
      var student = { email: 'nancy_f_hebert@hotmail.com' };
      // console.log(student);
    },
    onVerificationCode: function onVerificationCode(event) {
      var verificationCode = $('#verificationCode').val().trim();

      if (verificationCode === this.key) {
        this.updateStateEngine('EmailFound');
      } else {
        this.updateStateEngine('InvalidKey');
      }
    },
    getMessageList: function getMessageList() {
      var _this21 = this;

      var modelRoute = 'messages';
      //var url = 'https://tss-be.med.uottawa.ca/'; //(staging)
      var url = "https://tss-be.med.uottawa.ca/";
      var url = be_url;
      var fileUrl = url + modelRoute;

      this.$http.get(fileUrl).then(function (response) {
        // success callback

        _this21.messageList = response.data;
        console.log('get messagelist this.messageList');
        console.log(_this21.messageList);

        if (_this21.role === 'student') {
          console.log('student messages');
          _this21.getStudentConversations();
        } else if (_this21.role === 'researcher') {
          console.log('researcher message');
          //this.$nextTick(function () {
          _this21.getResearcherConversations();
          //})
        } else {
          return;
        }
      });
    },
    onModalClose: function onModalClose() {
      console.log('click close modal');
      $('#modalStudentProfile').on('[data-dismiss="modal"]', function () {
        console.log('hidden event fired!');
        $('#newmessage').val('');
      });
    },
    getPrograms: function getPrograms() {
      var _this22 = this;

      var modelRoute = 'gs_programs';
      //var url = 'https://tss-be.med.uottawa.ca/';
      //var url = "https://tss-be.med.uottawa.ca/";
      var url = be_url;
      var fileUrl = url + modelRoute;

      this.$http.get(fileUrl).then(function (response) {
        _this22.programs = response.data;
      });
    },
    getResearcherConversations: function getResearcherConversations() {

      this.conversationResearchers = [];

      if (!this.researchers) {
        return;
      }

      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = this.researchers[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var researcher = _step12.value;


          if (researcher.id === this.userId) {

            var researcherID = parseInt(researcher.id);
            var conversations = this.messageList.filter(function (item) {
              return item.researcher_uniweb_number === researcherID;
            });

            if (conversations.length > 0) {
              this.hasConversations = true;
              this.store('hasConversations', this.hasConversations);

              var result = this.groupBy(conversations, function (item) {
                return [item.researcher_uniweb_number, item.student_name];
              });

              var studentname;
              var studentemail;
              var studentUserId;
              var studentusername;
              var studentArr = [];
              var studentObj = {};

              var _iteratorNormalCompletion13 = true;
              var _didIteratorError13 = false;
              var _iteratorError13 = undefined;

              try {
                for (var _iterator13 = result[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                  var oneconversations = _step13.value;
                  var _iteratorNormalCompletion15 = true;
                  var _didIteratorError15 = false;
                  var _iteratorError15 = undefined;

                  try {

                    for (var _iterator15 = oneconversations[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                      var conversation = _step15.value;


                      studentname = conversation.student_name;
                      studentusername = conversation.student_username;
                      studentUserId = studentusername.match(/^[^@]*/g)[0];
                      studentemail = conversation.email;
                      studentObj = { studentUserId: studentUserId, studentname: studentname, studentusername: studentusername, studentemail: studentemail };

                      if (conversation.read_date === null) {
                        this.noReply = true;
                      } else {
                        this.noReply = false;
                      }

                      studentArr.push(studentObj);
                    }

                    //console.log('studentname ' + studentname);
                    //var propertyNameGuid = 'guid';
                    //var propertyValueGuid;
                    //propertyValueGuid = guid;
                    //oneconversations[propertyNameGuid] = propertyValueGuid;

                    //var propertyNameStudentId = 'studentId';
                    //var propertyValueStudentId;
                    //propertyValueStudentId = studentid;
                    //oneconversations[propertyNameStudentId] = propertyValueStudentId;
                  } catch (err) {
                    _didIteratorError15 = true;
                    _iteratorError15 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion15 && _iterator15.return) {
                        _iterator15.return();
                      }
                    } finally {
                      if (_didIteratorError15) {
                        throw _iteratorError15;
                      }
                    }
                  }

                  var propertyNameStudentName = 'name';
                  var propertyValueStudentName;
                  propertyValueStudentName = studentname;
                  oneconversations[propertyNameStudentName] = propertyValueStudentName;

                  var propertyNameStudentUserName = 'username';
                  var propertyValueStudentUserName;
                  propertyValueStudentUserName = studentusername;
                  oneconversations[propertyNameStudentUserName] = propertyValueStudentUserName;

                  var propertyNameStudentId = 'studentUserId';
                  var propertyValueStudentId;
                  propertyValueStudentId = studentUserId;
                  oneconversations[propertyNameStudentId] = propertyValueStudentId;

                  var propertyNameTalkedWith = 'talkedWith';
                  var propertyValueTalkedWith = {};
                  propertyValueTalkedWith = studentObj;
                  oneconversations[propertyNameTalkedWith] = propertyValueTalkedWith;
                }
              } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion13 && _iterator13.return) {
                    _iterator13.return();
                  }
                } finally {
                  if (_didIteratorError13) {
                    throw _iteratorError13;
                  }
                }
              }

              var propertyName = 'conversations';
              var propertyValue = [];
              propertyValue = result;
              researcher[propertyName] = propertyValue;

              var propertyNameTalkedWith = 'talkedWith';
              var propertyValueTalkedWith = [];
              propertyValueTalkedWith = studentArr;
              researcher[propertyNameTalkedWith] = propertyValueTalkedWith;

              this.conversationResearchers.push(researcher);

              var cntr = 0;
              var _iteratorNormalCompletion14 = true;
              var _didIteratorError14 = false;
              var _iteratorError14 = undefined;

              try {
                for (var _iterator14 = conversations[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                  var c = _step14.value;


                  if (c.read_date === null && c.is_from_student === true) {
                    cntr = cntr + 1;
                  }

                  this.allUnreadCount = cntr;
                  this.store('allUnreadCount', this.allUnreadCount);
                }
              } catch (err) {
                _didIteratorError14 = true;
                _iteratorError14 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion14 && _iterator14.return) {
                    _iterator14.return();
                  }
                } finally {
                  if (_didIteratorError14) {
                    throw _iteratorError14;
                  }
                }
              }

              var pNew = 'newCounter';
              researcher[pNew] = cntr;

              if (cntr > 0) {
                researcher.isUnread = true;
                this.unread = true;
              } else {
                researcher.isUnread = false;
                this.unread = false;
              }
            } else {
              researcher.isUnread = false;
              this.unread = false;
            }
          }
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12.return) {
            _iterator12.return();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }
    },
    formatDate: function formatDate(date) {

      var date = new Date(date);
      var year = pad(date.getFullYear());
      var month = pad(date.getMonth() + 1);
      var day = pad(date.getDate());
      var formattedDate = year + '-' + month + '-' + day;

      function pad(numb) {
        return (numb < 10 ? '0' : '') + numb;
      }

      return formattedDate;
    },
    getStudentConversations: function getStudentConversations() {

      var conversations;
      var researcher;
      var userId = parseInt(this.userId);
      var student_username = this.student.username;

      this.studentConversations = [];

      if (this.studentProfile) {
        console.log('has student profile');
        var _iteratorNormalCompletion16 = true;
        var _didIteratorError16 = false;
        var _iteratorError16 = undefined;

        try {
          for (var _iterator16 = this.studentProfile[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
            var student = _step16.value;


            conversations = this.messageList.filter(function (item) {
              return item.student_username === student_username;
            });
            console.log('conversations');
            console.log(conversations);

            if (conversations.length > 0 && this.username === student_username) {
              console.log('we have conversations');

              this.hasConversations = true;
              this.store('hasConversations', this.hasConversations);

              var result = this.groupBy(conversations, function (item) {
                return [item.researcher_uniweb_number];
              });

              var researcherid;
              var researcherArr = [];
              var researcherObj = {};
              var researcherId;
              var researcherName;
              var researcherPositionTitle;
              var researcherAcademicUnit;
              var studentUserId;
              var studentUsername;
              var researcherHasReplied = false;

              var _iteratorNormalCompletion17 = true;
              var _didIteratorError17 = false;
              var _iteratorError17 = undefined;

              try {
                for (var _iterator17 = result[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                  var theconversations = _step17.value;
                  var _iteratorNormalCompletion19 = true;
                  var _didIteratorError19 = false;
                  var _iteratorError19 = undefined;

                  try {

                    for (var _iterator19 = theconversations[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                      var aConversation = _step19.value;


                      researcherid = aConversation.researcher_uniweb_number;

                      studentUsername = aConversation.student_username;
                      studentUserId = studentUsername.match(/^[^@]*/g)[0];

                      if (aConversation.is_from_student === false) {
                        researcherHasReplied = true;
                      }

                      if (aConversation.read_date === null) {
                        this.noReply = true;
                      } else {
                        this.noReply = false;
                      }

                      var _iteratorNormalCompletion20 = true;
                      var _didIteratorError20 = false;
                      var _iteratorError20 = undefined;

                      try {
                        for (var _iterator20 = this.researchers[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                          var researcher = _step20.value;


                          var researcherId = parseInt(researcher.id);
                          if (researcherId === researcherid) {
                            researcherName = researcher.membership_information.first_name + ' ' + researcher.membership_information.last_name;
                            researcherPositionTitle = researcher.membership_information.position_title[1];
                            researcherAcademicUnit = researcher.membership_information.academic_unit[1];
                            researcherObj = { studentUserId: studentUserId, researcherid: researcherid, researcherName: researcherName, researcherPositionTitle: researcherPositionTitle, researcherAcademicUnit: researcherAcademicUnit, researcherHasReplied: researcherHasReplied };
                            researcherArr.push(researcherObj);

                            var propertyNameTalkedWith = 'talkedWith';
                            var propertyValueTalkedWith = {};
                            propertyValueTalkedWith = researcherObj;
                            theconversations[propertyNameTalkedWith] = propertyValueTalkedWith;
                          }
                        }
                      } catch (err) {
                        _didIteratorError20 = true;
                        _iteratorError20 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion20 && _iterator20.return) {
                            _iterator20.return();
                          }
                        } finally {
                          if (_didIteratorError20) {
                            throw _iteratorError20;
                          }
                        }
                      }
                    }
                  } catch (err) {
                    _didIteratorError19 = true;
                    _iteratorError19 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion19 && _iterator19.return) {
                        _iterator19.return();
                      }
                    } finally {
                      if (_didIteratorError19) {
                        throw _iteratorError19;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError17 = true;
                _iteratorError17 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion17 && _iterator17.return) {
                    _iterator17.return();
                  }
                } finally {
                  if (_didIteratorError17) {
                    throw _iteratorError17;
                  }
                }
              }

              var propertyName = 'conversations';
              var propertyValue = [];
              propertyValue = result;
              student[propertyName] = propertyValue;
              // this.store('studentProfile',this.studentProfile.join());

              var propertyNameTalkedWith = 'talkedWith';
              var propertyValueTalkedWith = [];
              propertyValueTalkedWith = researcherArr;
              student[propertyNameTalkedWith] = propertyValueTalkedWith;

              // this.store('studentProfile',this.studentProfile.join());


              this.studentConversations.push(student);
              // console.log('this.studentConversations');
              // console.log(this.studentConversations);

              this.checkStudentTalkedToResearcher();

              var cntr = 0;
              var _iteratorNormalCompletion18 = true;
              var _didIteratorError18 = false;
              var _iteratorError18 = undefined;

              try {
                for (var _iterator18 = conversations[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                  var c = _step18.value;

                  if (c.read_date === null && c.is_from_student === false) {
                    console.log('c.read_date === null && c.is_from_student === false');
                    cntr = cntr + 1;
                  }

                  this.allUnreadCount = cntr;
                  this.store('allUnreadCount', this.allUnreadCount);
                  console.log('this.allUnreadCount ' + this.allUnreadCount);
                }
              } catch (err) {
                _didIteratorError18 = true;
                _iteratorError18 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion18 && _iterator18.return) {
                    _iterator18.return();
                  }
                } finally {
                  if (_didIteratorError18) {
                    throw _iteratorError18;
                  }
                }
              }

              var pNew = 'newCounter';
              student[pNew] = cntr;
              // this.store('studentProfile',this.studentProfile.join());
              if (cntr > 0) {
                console.log('if cntr greater than 0');
                student.isUnread = true;
                // this.store('studentProfile',this.studentProfile.join());
                this.unread = true;
                console.log('this.unread' + this.unread);
              } else {
                console.log('if cntr NOT greater than 0');
                student.isUnread = false;
                // this.store('studentProfile',this.studentProfile.join());
                this.unread = false;
                console.log('this.unread' + this.unread);
              }
            } else {
              console.log('we do not conversations');
              student.isUnread = false;
              // this.store('studentProfile',this.studentProfile.join());
              this.unread = false;
            }
          }
        } catch (err) {
          _didIteratorError16 = true;
          _iteratorError16 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion16 && _iterator16.return) {
              _iterator16.return();
            }
          } finally {
            if (_didIteratorError16) {
              throw _iteratorError16;
            }
          }
        }
      } else {
        console.log('does not have student profile');
        return false;
      }

      console.log('this.studentConversations');
      console.log(this.studentConversations);
    },
    groupBy: function groupBy(array, f) {
      var groups = {};
      array.forEach(function (o) {
        var group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
      });
      return Object.keys(groups).map(function (group) {
        return groups[group];
      });
    },
    radioLevelClick: function radioLevelClick(level) {
      var theLevel = level;
      if (theLevel === 'msc') {
        console.log('level msc');
        $('input:radio[name="level_of_instruction"]').filter('[value="msc"]').prop('checked', true);
        $('input:radio[name="level_of_instruction"]').filter('[value="phd"]').prop('checked', false);
        $('.r2').addClass('active');
        $('.r1').removeClass('active');
      } else {
        console.log('level phd');
        $('input:radio[name="level_of_instruction"]').filter('[value="phd"]').prop('checked', true);
        $('input:radio[name="level_of_instruction"]').filter('[value="msc"]').prop('checked', false);
        $('.r1').addClass('active');
        $('.r2').removeClass('active');
      }
    },
    radioYesClick: function radioYesClick() {
      // console.log('clicked yes');

      $('.showSelectMenu').show();
      $('.yes').addClass('active');
      $('.no').removeClass('active');
    },
    radioNoClick: function radioNoClick() {
      // console.log('clicked no');

      $('.showSelectMenu').hide();
      $('.yes').removeClass('active');
      $('.no').addClass('active');
      $('#StudentProfile .showSelectMenu select option:selected').val("").change();
    },
    processUniwebFeed: function processUniwebFeed() {
      // called once by getResearchers
      //this.filteredResearchers = this.researchers;

      var _iteratorNormalCompletion21 = true;
      var _didIteratorError21 = false;
      var _iteratorError21 = undefined;

      try {
        for (var _iterator21 = this.researchers[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
          var researcher = _step21.value;

          researcher['available_date'] = '';
          researcher['selected'] = true;
          this.getResearcherAvailability(researcher.id);
        }
      } catch (err) {
        _didIteratorError21 = true;
        _iteratorError21 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion21 && _iterator21.return) {
            _iterator21.return();
          }
        } finally {
          if (_didIteratorError21) {
            throw _iteratorError21;
          }
        }
      }

      this.createInterestList();
      this.extractAlphaFilter();
      this.refreshFilteredList();
      this.getMessageList();
      $('#loading-message').remove();
    },
    parseJwt: function parseJwt(jwtToken) {
      var base64Url = jwtToken.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    },
    logout: function logout(event) {
      event.preventDefault();
      localStorage.clear();
      sessionStorage.clear();
      this.token = {};
      this.user.role = '';
      this.role = '';
      this.loggedIn = false;
      this.loginFailed = false;
      this.createAccountFailed = false;
      this.username = '';
      this.profile = false;
      this.name = '';
      this.studentConversations = [];
      this.researcherConversations = [];
      this.studentProfile = [];
      this.studentHasCv = false;
      this.studentHasTranscripts = false;
      this.hasConversations = false;
      this.theResearcherTalkedToStudent = false;
      this.updateStateEngine('notStarted');
    },
    readUserRole: function readUserRole(username) {
      var _this23 = this;

      var theEmail = email;
      var email = this.email;
      console.log(email);
      this.username = username;
      this.store('email', this.email);
      email = encodeURIComponent(this.email);

      //var url = 'https://tss-be.med.uottawa.ca/';
      //var url = 'https://tss-be.med.uottawa.ca/';
      var url = be_url;
      var modelRoute = 'roles/' + username;
      var url = url + modelRoute;

      this.$http.get(url).then(function (response) {
        // success callback
        _this23.userRole = response;
        _this23.processRole();
      }, function (response) {
        //error callback
        // console.log('error getting role ' + response.status);

      });
    },
    processRole: function processRole() {
      console.log('processRole');
      console.log(this.userRole.data);
      this.role = this.userRole.data.role;
      console.log('this.role ' + this.role);
      this.store('role', this.role);

      switch (this.role) {
        case 'student':
          console.log('role is student');
          if (this.internal === true) {
            this.loggedIn = true;
            this.store('loggedIn', this.loggedIn);
            this.getStudent(this.username);
          } else {
            this.username = this.email;
            this.store('username', this.username);
            console.log('this.username ' + this.username);
            this.updateStateEngine('EmailFound');
            this.getStudent(this.username);
          }

          break;
        case 'researcher':
          console.log('role is researcher');
          //test if researcher logged in by clicking contact or login 
          console.log('role is not student');
          $('#modalLogin').modal('hide');

          this.userId = this.userRole.data.id;
          console.log('userId in processRole ' + this.userId);
          this.store('userId', this.userId);

          //this.updateStateEngine('EmailFound');

          this.loggedIn = true;
          this.store('loggedIn', this.loggedIn);

          if (this.clickedLoginBtn === true) {
            console.log('clickedLogin');
            this.getMessageList();
            // if (this.hasConversations === true ) {
            //       //check if researcher has conversations
            //       //hide login modal
            //       $('#modalLogin').modal('hide');
            //       //show conversations modal 
            //       $('#modalConversations').modal('show');
            // } else {
            //       return false;
            // }
          } else {
            return;
          }
          break;
        case 'admin':
          //show admin screen
          console.log('role is admin');
          break;
        default:
          //role is empty
          this.profile = false;
          this.store('profile', this.profile);
          if (this.internal === true) {
            console.log('role is internal student');
            $('#modalLogin').modal('hide');
            $('#modalStudentProfile').modal('show');
          } else {
            console.log('role is external student');
            this.updateStateEngine('EmailNotFound');
          }

      }
      //if role = student. true
      //look up student. 
      //getStudent(username)
      //else if role = researcher. Use is not student, check role is researcher.
      //test if researcher logged in by clicking contact or login 
      //getResearcherConversations
      //check if researcher has conversations
      //hide login modal
      //show conversations modal         
      //else. no conversations.
      //return false.
      //else user is admin.
      //show admin screen


      // if (this.role === '') {

      //       if ( this.uoUser === true) {
      //             this.profile = false;
      //             this.store('profile',this.profile);
      //             $('#modalLogin').modal('hide');
      //             $('#modalStudentProfile').modal('show');

      //       } else { // do we get to this branch?
      //             this.updateStateEngine('EmailNotFound'); 
      //             this.loggedIn = false;
      //             this.store('loggedIn',this.loggedIn);

      //       }

      // } else {

      //       if ( this.uoUser === true) {     
      //             $('#modalLogin').modal('hide');
      //             this.updateStateEngine('EmailFound');
      //             this.loggedIn = true;
      //             this.store('loggedIn',this.loggedIn);    
      //             this.getStudent(this.username); 

      //       } else { // do we get to this branch?
      //           this.updateStateEngine('EmailFound');
      //           this.loggedIn = true;
      //           this.store('loggedIn',this.loggedIn);
      //           this.getStudent(this.username); 
      //       }          
      // }
    },
    authorize: function authorize(username, password) {
      var _this24 = this;

      this.username = $("#username").val().toLowerCase().trim();
      console.log('this.username ' + this.username);
      this.password = $("#password").val().trim();
      var application = "TSS";

      //var url = "https://fomsso.med.uottawa.ca/auth";
      var url = fomsso_url + "auth";
      //var url = "http://10.80.128.44:4005/auth";
      var credentials = { 'username': this.username, 'password': this.password, 'application': application };

      this.$http.post(url, credentials).then(function (response) {
        // success callback
        console.log('success');
        console.log(_this24.username);
        _this24.store('username', _this24.username);
        _this24.userName = _this24.retrieve('username', _this24.username);
        console.log('this.userName ' + _this24.userName);
        _this24.token = response.headers('token');
        console.log('this.token');
        console.log(_this24.token);

        _this24.user = _this24.parseJwt(_this24.token);
        console.log(_this24.user);

        var email = _this24.user.email;
        _this24.email = email;
        _this24.store('email', _this24.email);
        _this24.name = _this24.user.name;
        _this24.store('name', _this24.name);

        _this24.uoUser = true;
        _this24.internal = true;
        _this24.store('internal', _this24.internal);
        _this24.loginFailed = false;

        _this24.readUserRole(_this24.userName);
      }, function (response) {
        //error callback
        _this24.loginFailed = true;
        $('#internalLoginFailedAlert').show();
        _this24.loggedIn = false;
        _this24.store('loggedIn', _this24.loggedIn);
        return _this24.loginFailed, _this24.loggedIn;
      });
      this.rememberMe = $('#rememberMe').checked;
      this.store('rememberMe', this.rememberMe);
    },

    filterResearchers: function filterResearchers() {
      // This function finds the researchers that match the filter - called often


      var _iteratorNormalCompletion22 = true;
      var _didIteratorError22 = false;
      var _iteratorError22 = undefined;

      try {
        for (var _iterator22 = this.researchers[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
          var researcher = _step22.value;


          researcher['selected'] = false;

          // check if we have any interests selected.
          if (this.interestsChoices.length > 0) {

            var myInterests = researcher.research_interests;

            if (myInterests != null) {
              var _iteratorNormalCompletion23 = true;
              var _didIteratorError23 = false;
              var _iteratorError23 = undefined;

              try {

                for (var _iterator23 = this.interestsChoices[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                  var selInterest = _step23.value;
                  var _iteratorNormalCompletion24 = true;
                  var _didIteratorError24 = false;
                  var _iteratorError24 = undefined;

                  try {

                    for (var _iterator24 = myInterests[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                      var anInterest = _step24.value;


                      var theInterest = anInterest.interest[1];

                      if (selInterest.theValue === theInterest) {

                        //if (!_.includes(this.researchers, researcher)) {

                        researcher['selected'] = true;
                        //} 
                        break;
                      }
                    }
                  } catch (err) {
                    _didIteratorError24 = true;
                    _iteratorError24 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion24 && _iterator24.return) {
                        _iterator24.return();
                      }
                    } finally {
                      if (_didIteratorError24) {
                        throw _iteratorError24;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError23 = true;
                _iteratorError23 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion23 && _iterator23.return) {
                    _iterator23.return();
                  }
                } finally {
                  if (_didIteratorError23) {
                    throw _iteratorError23;
                  }
                }
              }
            }
          } else {
            console.log('this.interestsChoices.length < 0)');
            researcher['selected'] = true;
          }
        }
      } catch (err) {
        _didIteratorError22 = true;
        _iteratorError22 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion22 && _iterator22.return) {
            _iterator22.return();
          }
        } finally {
          if (_didIteratorError22) {
            throw _iteratorError22;
          }
        }
      }

      this.extractAlphaFilter();
    },
    refreshFilteredList: function refreshFilteredList() {
      this.extractAlphaFilter();
    },
    extractAlphaFilter: function extractAlphaFilter() {
      // for each researcher
      // extract 1st letter of last name
      // enable corresponding letterbutton in html
      // Creating object listing the letters of the alphabet
      var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var alphabetButtons = {};

      this.alphaButtonArray = [];

      var _iteratorNormalCompletion25 = true;
      var _didIteratorError25 = false;
      var _iteratorError25 = undefined;

      try {
        for (var _iterator25 = alphabet[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
          var letter = _step25.value;

          var letterUppercase = letter.toUpperCase();
          alphabetButtons = { letter: letterUppercase, isAvailable: false };
          this.alphaButtonArray.push(alphabetButtons);
        }
      } catch (err) {
        _didIteratorError25 = true;
        _iteratorError25 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion25 && _iterator25.return) {
            _iterator25.return();
          }
        } finally {
          if (_didIteratorError25) {
            throw _iteratorError25;
          }
        }
      }

      this.researcherLastInitials = [];

      var _iteratorNormalCompletion26 = true;
      var _didIteratorError26 = false;
      var _iteratorError26 = undefined;

      try {
        for (var _iterator26 = this.researchers.filter(this.checkResearcherSelected)[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
          var researcher = _step26.value;

          var firstchar = researcher.membership_information.last_name.charAt(0);

          if (!this.researcherLastInitials.includes(firstchar)) {
            this.researcherLastInitials.push(firstchar);
          }
        }
      } catch (err) {
        _didIteratorError26 = true;
        _iteratorError26 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion26 && _iterator26.return) {
            _iterator26.return();
          }
        } finally {
          if (_didIteratorError26) {
            throw _iteratorError26;
          }
        }
      }

      this.alphabuttons = [];

      var _iteratorNormalCompletion27 = true;
      var _didIteratorError27 = false;
      var _iteratorError27 = undefined;

      try {
        for (var _iterator27 = this.alphaButtonArray[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
          var alphabutton = _step27.value;

          //check if it matches with the researchersLastInitials

          if (this.researcherLastInitials.includes(alphabutton)) {
            alphabutton.isAvailable = true;
            this.alphabuttons.push(alphabutton);
          } else {
            alphabutton.isAvailable = false;
            this.alphabuttons.push(alphabutton);
          }
        }
      } catch (err) {
        _didIteratorError27 = true;
        _iteratorError27 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion27 && _iterator27.return) {
            _iterator27.return();
          }
        } finally {
          if (_didIteratorError27) {
            throw _iteratorError27;
          }
        }
      }

      var _iteratorNormalCompletion28 = true;
      var _didIteratorError28 = false;
      var _iteratorError28 = undefined;

      try {
        for (var _iterator28 = this.alphabuttons[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
          var alphabutton = _step28.value;

          if (_.includes(this.researcherLastInitials, alphabutton.letter)) {
            alphabutton.isAvailable = true;
          }
        }
      } catch (err) {
        _didIteratorError28 = true;
        _iteratorError28 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion28 && _iterator28.return) {
            _iterator28.return();
          }
        } finally {
          if (_didIteratorError28) {
            throw _iteratorError28;
          }
        }
      }
    },
    onFilterFreetext: function onFilterFreetext(event) {
      if (this.freeText) {
        var _iteratorNormalCompletion29 = true;
        var _didIteratorError29 = false;
        var _iteratorError29 = undefined;

        try {

          for (var _iterator29 = this.researchers[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
            var researcher = _step29.value;

            var wasFound = false;
            if (researcher.biography) {
              var bio = researcher.biography.academic_biography.en;
              var isFound = _.includes(bio, this.freeText);
              if (isFound) {
                wasFound = true;

                this.filteredResearchers.push(researcher);
              }
            }

            if (researcher.selected_publications && !wasFound) {

              var art = researcher.selected_publications.journal_articles[0].article_title;
              var isFound = _.includes(art, this.freeText);
              if (isFound) {
                wasFound = true;
                this.filteredResearchers.push(researcher);
              }
            }
          }
        } catch (err) {
          _didIteratorError29 = true;
          _iteratorError29 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion29 && _iterator29.return) {
              _iterator29.return();
            }
          } finally {
            if (_didIteratorError29) {
              throw _iteratorError29;
            }
          }
        }

        this.extractAlphaFilter();
      } else {

        this.filteredResearchers = this.researchers;
        this.refreshFilteredList();
      }
    },
    onFilterFreetextClear: function onFilterFreetextClear(event) {
      this.freeText = '';
      this.filteredResearchers = this.researchers;
      this.extractAlphaFilter();
      this.refreshFilteredList();
    }
  }
});
//# sourceMappingURL=mainEs2015.js.map
