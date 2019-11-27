"use strict";

// Make the application configuarable - later, this should happen during the build and be transparent to the programmer.
// Later, this will be imported, and a different version of the file will be used for each build.

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var env = 'staging';

var envs = {
  'prod': {
    'fomsso': 'https://fomsso.med.uottawa.ca',
    'uniweb': 'https://uniweb-service.med.uottawa.ca',
    'be': 'https://tss-be.med.uottawa.ca'
  },
  'staging': {
    'fomsso': 'https://fomsso.med.uottawa.ca',
    'uniweb': 'https://uniweb-service.med.uottawa.ca',
    'be': 'https://tss-be.med.uottawa.ca'
  }
};

var locales = {
  en: {
    message: {
      // "ADMITTED-INTO": "Admitted into:",
      // "ADMITTED": "Have you been admitted into a graduate program at Faculty of Medicine of the University of Ottawa?",
      "ADMITTED": "Current status:",
      // "ADMITTED-CURRENTLY":"I have been admitted",
      "ADMITTED-STATUS": "Admitted status:",
      // "APPLICATION-IN-PROCESS": "I have an application in process",
      "ARTICLE-TITLE": "Article title:",
      // "ASSISTANCE": "Need assistance? Visit",
      // "ATTACH-ANOTHER": "attach another",
      // "ATTACH": "attach",
      "AVAILABLE-TO-SUPERVISE": "Available to supervise ",
      // "BELOW": "Below you will see a list of faculty members who are currently accepting students to supervise. Enter keywords to narrow down the list.",
      "BIOGRAPHY": "Biography",
      "CANCEL": "Cancel",
      "CANNOT-SEND-MESSAGE-UNTIL-RESEACHER-RESPOND": "You will be able to send another message when the researcher has responded.",
      // "CHANGE-AVAILABILITY": "Change availability",
      // "CHANGE-PW": "Change your password",
      "CHECK-INBOX": "Please check your inbox.",
      // "CHOOSE-PW": "Please click the following link to choose a new password:",
      "CLEAR": "Clear",
      "CLOSE": "Close",
      // "CODE": "Verification code:",
      "COLON": ":",
      "CONFERENCE-DATE": "Conference Date:",
      "CONFERENCE-NAME": "Conference Name:",
      "CONFERENCE-TITLE": "Conference Title",
      "CONFERENCE-PUBLICATIONS": "Conference Publications",
      "CONT-CREATE": " where you may continue creating your account.",
      "CONT-RESET": " where you may continue resetting your password.",
      // "CONTACT-CONVERSATIONS": "View conversation with ",
      "CONTACT": "Contact",
      // "CONTINUE-CREATING-ACCOUNT": "Please click the following link to continue creating your account:",
      "CONTINUE": "Continue",
      // "CONV-WITH": "Conversation with",
      "CONVERSATIONS": "Conversations",
      "CREATE-ACCOUNT": "Create account",
      "CREATE-ACCOUNT-FAILED": "We have failed to create your account, please verify that the information entered is correct.",
      // "CREATE-PW": "Enter a password:",
      "CREATE-NEW-PW": "Create a password:",
      // "CREATE-YOUR-ACCOUNT": "Create your account",
      "CREATE-YOUR-PROFILE": "Create your profile",
      "CURRENTLY-AVAILABLE": "Currently available to supervise ",
      "CV-WORD-PDF": "(Microsoft Word or PDF format):",
      "CV": "CV:",
      "DATE-IN-PAST": "Please choose a date in the future.",
      "DELETE": "Delete",
      "DEVELOPED-BY": "- Developed by Medtech ",
      "DO-HAVE": "I have a uOttawa username",
      "DONT-FORGET": "Don’t forget to:",
      "DONT-HAVE": "I do not have a uOttawa username",
      "EDIT-AVAILABILITY": "Edit availability",
      "EDIT-NAME": "Edit name",
      // "EDIT-ORGANIZATION-TYPE": "Edit Organization Type",
      "EDIT-PROFILE": "Edit your profile",
      // "EMAIL-SENT-VERIFICATION-CODE": " which contains a verification code needed to continue with creating your account.",
      // "EMAIL-SENT": "An email message has been sent to ",
      "EMAIL": "Email address",
      "EMAILED-LINK": "We’ve emailed you a link at",
      "ENGLISH": "English",
      // "ENTER-EMAIL": "Enter your email:",
      // "ENTER-EMAIL-ADDRESS": "enter your email address",
      "ENTER-EMAIL-INSTRUCTIONS": "Enter your email address and press Continue, and we will check to see if an account exists for that email address.",
      "ENTER-MESSAGE": "Enter your message below.",
      // "ENTER-NAME": "enter name",
      // "ENTER-NEW-PW": "Please enter your new password.",
      // "ENTER-PASSWORD": "Please enter your password",
      // "ENTER-PW": ". Please enter your password.",
      // "ENTER-VERIFICATION-CODE": "enter your verification code",
      // "ENTER-YOUR-PASSWORD": "enter your password",
      // "ERROR": "An error occurred while loading the researchers!",
      // "EXISTING-ACCOUNT": "Not certain whether you have an existing account?",
      "EXPORT-EXCEL": "Export to Excel",
      // "EXT": "ext:",
      "EXTERNAL": "external",
      "FACULTY-ADDRESS": "Faculty of Medicine <br> Roger Guindon Hall<br> 451 Smyth Road <br> Room 2016<br> Ottawa, ON K1H 8M5",
      "FACULTY-OF-MEDICINE": "Faculty of Medicine",
      // "FILTER-INTERESTS": "Filter Interests:",
      "FILTERED-INTERESTS": "Filtered Interests:",
      "FOR-ASSISTANCE": " If you experience technical difficulties, please submit an ",
      "FORGOT-PW": "Forgot password",
      "FREE-TEXT": "Free text search:",
      "FRENCH": "Français",
      // "FUNDING-CLINICAL-RESEARCH": "Clinical research project: ",
      "FUNDING-END-DATE": "End date: ",
      "FUNDING-GRANT-TYPE": "Grant type: ",
      "FUNDING-TITLE": "Title: ",
      "FUNDING-PROJECT-DESCRIPTION": "Project description: ",
      "FUNDING-PROGRAM-NAME": "Program name: ",
      "FUNDING-PROGRAM-ORGANIZATION": "Program organization: ",
      "FUNDING-START-DATE": "Start date: ",
      "FUNDING-TYPE": "Funding type: ",
      "GO": "Go",
      "GRAD-STUDIES": "Graduate and Postdoctoral Studies",
      "GRAD-STUDIES-OFFICE": "Graduate and Postdoctoral Studies Office ",
      "GRANT": "Grants",
      // "HAVE-OR-CREATE": ", you must have or create an account. Not certain whether you have an existing account?",
      "HELP-DESK": "online help request",
      "HIDE-PW": "Hide password",
      // "HOME": "Home",
      "HOURS-DATE-SUMMER": "(June 1st to August 31st: <br> 9:00 am to 3:30 pm)",
      "HOURS-DATE": "Monday to Friday <br> 9:00 am to 4:30 pm",
      "HOURS": "Hours of Operation",
      "IF-COPY-PASTE": "If you copied and pasted a link from an email, please make sure you didn’t miss any characters, and try again.",
      "IF-DONT-RECEIVE": "If you do not receive the email within an hour, we can",
      "IF-NECESSARY": "*If necessary, add keywords to narrow down the list.",
      "IN-ORDER-TO-CONTACT-RESEARCHER": "In order to contact a researcher,",
      "IN-ORDER-TO-CONTACT": "In order to contact ",
      "INCLUDE-INFO": "Include information on your research experience and academic background",
      // "INITIAL": "Initial communication with",
      "INTERNAL": "internal",
      "INTRODUCE": "Introduce yourself.",
      // "INVALID-KEY": "Invalid key",
      "IS-INVALID": " is invalid.",
      "JOURNAL-ARTICLES": "Journal Articles",
      "LANGUAGE-DISCLAIMER": "English version not available. French version follows:",
      // "LANGUAGE-SELECTION": "Language selection",
      "LAST-UPDATED": "Last updated: ",
      "LEVEL": "Level of study:",
      // "LINK-AND-CODE": "A link and verification code have been sent to you at",
      "LIST": "To see a list of potential thesis supervisors available to supervise, you must select keywords. If you know the professor’s name, select the first letter of his/her last name.",
      "LOG-IN-FAILED": "The login failed with the credentials provided. Please reenter and try again.",
      // "LOG-IN-FAILED-RESET": "The login failed with the credentials provided.",
      "LOG-IN-OR-CREATE": " please log in (or create an account).",
      "LOG-IN": "Log in",
      "LOG-OUT": "Log out",
      // "LOGIN-RESEARCHER" : "You must login to view your conversations",
      "MANDATORY-FIELDS": "Name and password are required",
      "MARK-READ": "Mark as read",
      "MEAN": "Mean",
      "MEAN-RESPONSE-TIME-DAYS": "Mean response time (days)",
      "MEDIAN": "Median",
      "MEDIAN-RESPONSE-TIME-DAYS": "Median response time (days)",
      // "MESSAGE": "Message:",
      "MESSAGE-SAVED": "Your message has been saved.",
      "MESSAGE-SENT": "Your message was sent successfully.",
      "MESSAGES-SENT": "Messages sent",
      "MSC": "M.Sc.",
      "NAME": "Name",
      // "NEW-MESSAGES": " new messages",
      "NEW-PW": "Welcome back to Thesis Supervisor Search. We recently received a request for a new password for this email address.",
      // "NEW-UNREAD-MESSAGES": "You have new unread messages from ",
      "NEXT": "Next",
      "NO": "No",
      // "NO-NEW-UNREAD-MESSAGES": "You have no new messages from ",
      // "NOT-ADMITTED-YET": "Not currently accepted into a program",
      // "NOT-APPLIED-YET": "I haven’t applied yet, but intend to do so shortly",
      // "NOT-CURRENTLY-AVAILABLE": "I am not currently available to supervise",
      // "NO-DATA-MESSAGE": "No information available at this time.",
      // "NOT-LOGGED-IN": "You are not logged in",
      "OUTDATED-BROWSER-MESSAGE-PARTI": "This application requires JavaScript capabilities that your browser does not support. Please contact us by email",
      "OUTDATED-BROWSER-MESSAGE-PARTII": "or phone (613-562-5215) to learn more about our research.",
      "PASSWORD": "Password:",
      "PASSWORD-RESET": "where you can continue resetting your password. ",
      "PHD": "Ph.D.",
      // "PHOTO-OF": "Photo of ",
      "PLEASE-NOTE": "*Please note that this tool is available in English only.",
      "PREVIOUS": "Previous",
      // "PROFILE": "Profile",
      "PROFILE-CREATED": "Profiles created, by month (last 12 months)",
      "PROFILE-CREATION": "Profile creation",
      "PROFILE-INCOMPLETE": "Your profile is incomplete. Are you sure you want to continue?",
      "PROGRAM": "Program:",
      "PROOFREAD": "Proofread.",
      // "PROVIDE-INFO": "Please provide some information about yourself.",
      "PUBLICATION-DATE": "Publication date:",
      "PUBLICATION-TITLE": "Publication title:",
      "PUBLICATIONS": "Publications",
      // "PW": "Password:",
      "REMEMBER-ME": "Remember me",
      // "REMOVE": "remove",
      "REPORTS": "Reports",
      "RESEARCH-DESCRIPTION": "Research Description",
      "RESEARCH-INTERESTS": "Research interests",
      "RESEARCHER-PROFILE": "Researcher profile",
      "RESEND-EMAIL": "Resend Email",
      "RESEND": "resend it to you",
      // "RESET-IT": "Reset it ",
      "RESULT": " result*",
      "RESULTS": " results*",
      // "RGN": "Roger Guindon Hall",
      // "ROOM": "Room",
      "SAVE": "Save",
      "SAVE-DRAFT": "Save draft",
      // "SEARCH": "Search",
      "SELECT-FIRST-LETTER": "OR Select the first letter of the professor’s last name:",
      "SELECT-KEYWORDS": "Select one or more keywords that best describe your research interest:",
      "SELECT-PROGRAM": "Select program",
      "SELECT-RESEARCH": "Select research interests:",
      "SEND-MESSAGE": "Send Message",
      "SENT-ON": "Sent on: ",
      "SHOWING": "Below is the list of Faculty members - Showing ",
      "SKIP": "Skip to main content",
      // "SMYTH": "451 Smyth Road",
      "STARTING-FROM": "as of ",
      "STATE-INTERESTS": "State your interests clearly and how they match with the Faculty member.",
      "STUDENT-IN-SYSTEM": "Students in the system",
      "STUDENT-PROFILE": "Student profile",
      "SUPERVISOR-RESPONSE": "Supervisor response time",
      "THANK-YOU": "Thank you for your interest in the University of Ottawa!",
      "TALKED-WITH": "Talked with",
      "THE-KEY": "A problem has occurred: the key ",
      "THIS-ADDRESS-NOT-EXIST": " does not exist in our records. To proceed, click \"Create account\".",
      //"THIS-ADDRESS-NOT-EXIST": " does not exist in our records. To proceed, click \"Create account\". A confirmation will be sent to this address.",
      "THIS-ADDRESS": "This address ",
      "THIS-MESSAGE": "This message will be visible to administrators of the Graduate and Postdoctoral Studies Office of the Faculty of Medicine.",
      // "THIS-PROFILE": "This profile will be visible to researchers you communicate with, as well as administrators of the Graduate and Postdoctoral Studies Office of the Faculty of Medicine.",
      // "THIS-WILL-BE-USERNAME": "This will be your username.",
      "TIPS": "Tips",
      "TO-CONTACT": "To contact",
      // "TO-RESET-PASSWORD": "To reset your password, please enter your new password.",
      // "TOGGLE-NAVIGATION": "Toggle navigation",
      "TOP": "Top of the page",
      "TOTALS-AVERAGES": "Totals / averages",
      "TRANSCRIPTS-WORD-PDF": "(Microsoft Word or PDF format. Unofficial transcripts are acceptable):",
      "TRANSCRIPTS": "Transcripts: ",
      // "TRY-AGAIN": ", and try again.",
      "TSS": "Thesis Supervisor Search Tool",
      "TY": "Thank You.",
      "UNREAD": "Unread ",
      "UNRETURNED-CONTACTS": "Unreturned initial contacts",
      "UNSELECT": "Uncheck all",
      "UPLOAD-CV": "Upload a cv",
      "UPLOAD-TRANSCRIPT": "Upload a transcript",
      "USERNAME": "Username:",
      "VERIFICATION": "Verification code:",
      "VERIFICATION-SENT": "A link and verification code have been sent to you at ",
      "VIEW-CONVERSATIONS": "View conversations",
      // "VIEW-MESSAGES": "View older messages",
      "VIEW-PROFILE": "View profile",
      "VIEW-PW": "View password",
      "VIEWED-ON": "Viewed on: ",
      // "VISIBLE": "Replies will be visible to administrators of the Graduate and Postdoctoral Studies Office of the Faculty of Medicine.",
      "VISIT-WEBSITE": "Visit website ",
      // "WE-WILL-GUIDE": "We will guide you through the search for your thesis supervisor.",
      // "WE-WILL": "We will guide you through the search for your thesis supervisor.",
      "WELCOME": "Welcome",
      // "WELCOME-BACK": "Welcome back",
      // "WELCOME-TO": "Welcome to Thesis Supervisor Search ",
      // "WHICH": "Which one?",
      "YES": "Yes"
    }
  },
  fr: {
    message: {
      // "ADMITTED-INTO": "Admis en :",
      // "ADMITTED": "Avez-vous été admis dans un programme d’études supérieures à la Faculté de médecine de l’Université d’Ottawa?",
      "ADMITTED": "Statut actuelle :",
      // "ADMITTED-CURRENTLY":"J'ai été admis",
      "ADMITTED-STATUS": "Statut d'admission :",
      // "APPLICATION-IN-PROCESS": "J'ai une application en cours",
      "ARTICLE-TITLE": "Le titre de l'article :",
      // "ASSISTANCE": "Besoin d’aide? Visitez le",
      // "ATTACH-ANOTHER": "joindre un autre relevé",
      // "ATTACH": "joindre",
      "AVAILABLE-TO-SUPERVISE": "Disponible pour superviser ",
      // "BELOW": "Vous trouverez ci-dessous une liste des membres du corps professoral qui sont disponible pour diriger des étudiants. Entrez des mots-clés pour cibler votre recherche.",
      "BIOGRAPHY": "Biographie",
      "CANCEL": "Annuler",
      "CANNOT-SEND-MESSAGE-UNTIL-RESEACHER-RESPOND": "Vous pourrez envoyer un autre message lorsque le professeur aura répondu.",
      // "CHANGE-AVAILABILITY": "Changer votre disponibilité",
      // "CHANGE-PW": "Modifier votre mot de passe",
      "CHECK-INBOX": "Veuillez vérifier votre boîte de réception.",
      // "CHOOSE-PW": "Cliquez sur le lien suivant pour choisir un nouveau mot de passe :",
      "CLEAR": "Effacer",
      "CLOSE": "Fermer",
      // "CODE": "Code de vérification :",
      "COLON": " :",
      "CONFERENCE-DATE": "Date de la conférence :",
      "CONFERENCE-NAME": "Nom de la conférence :",
      "CONFERENCE-TITLE": "Titre de la conférence :",
      "CONFERENCE-PUBLICATIONS": "Articles de conférence",
      "CONT-CREATE": ". Vous pourrez poursuivre la création de votre compte.",
      "CONT-RESET": ". Vous pourrez poursuivre la réinitialisation de votre mot de passe.",
      // "CONTACT-CONVERSATIONS": "Voir la discussion avec ",
      "CONTACT": "Contacter",
      // "CONTINUE-CREATING-ACCOUNT": "Cliquez sur le lien suivant pour poursuivre la création de votre compte :",
      "CONTINUE": "Continuer",
      // "CONV-WITH": "Conversation avec",
      "CONVERSATIONS": "Conversations",
      "CREATE-ACCOUNT": "Créer un compte",
      "CREATE-ACCOUNT-FAILED": "Nous n'avons pas réussi à créer votre compte, vérifiez que les informations saisies sont correctes.",
      // "CREATE-PW": "Entrer un mot de passe :",
      "CREATE-NEW-PW": "Créer un mot de passe :",
      // "CREATE-YOUR-ACCOUNT": "Créer un compte",
      "CREATE-YOUR-PROFILE": "Créez votre profil",
      "CURRENTLY-AVAILABLE": "Je suis actuellement disponible pour superviser ",
      "CV-WORD-PDF": "(format Microsoft Word ou PDF) :",
      "CV": "CV :",
      "DATE-IN-PAST": "Veuillez choisir une date dans le futur.",
      "DELETE": "Enlever",
      "DEVELOPED-BY": " - Développé par Medtech ",
      "DO-HAVE": "J’ai un nom d’utilisateur uOttawa",
      "DONT-FORGET": "N’oubliez pas de :",
      "DONT-HAVE": "Je n’ai pas de nom d’utilisateur uOttawa",
      "EDIT-AVAILABILITY": "Modifier la disponibilité",
      "EDIT-NAME": "modifier votre nom",
      // "EDIT-ORGANIZATION-TYPE": "Modifier le type d'organisation",
      "EDIT-PROFILE": "Modifier votre profil",
      // "EMAIL-SENT-VERIFICATION-CODE": " qui contient un code de vérification nécessaire pour poursuivre la création de votre compte.",
      // "EMAIL-SENT": "Un courriel a été envoyé à ",
      "EMAIL": "Adresse courriel",
      "EMAILED-LINK": "Nous avons envoyé un lien à",
      "ENGLISH": "English",
      // "ENTER-EMAIL": "Entrez votre adresse courriel :",
      // "ENTER-EMAIL-ADDRESS": "entrer votre adresse courriel",
      "ENTER-EMAIL-INSTRUCTIONS": "Entrez votre adresse courriel et appuyez sur continuer, et nous allons vérifier pour voir si un compte existe pour cette adresse courriel.",
      "ENTER-MESSAGE": "Inscrivez votre message ci-dessous.",
      // "ENTER-NAME": "entrez le nom",
      // "ENTER-NEW-PW": "Entrer votre nouveau mot de passe.",
      // "ENTER-PASSWORD": "Entrez votre mot de passe",
      // "ENTER-PW": ". Entrez votre mot de passe.",
      // "ENTER-VERIFICATION-CODE": "entrer votre code de vérification",
      // "ENTER-YOUR-PASSWORD": "entrer votre mot de passe",
      // "ERROR": "Une erreur est survenue lors du chargement des chercheurs!",
      // "EXISTING-ACCOUNT": "Vous ne savez pas si vous avez un compte?",
      "EXPORT-EXCEL": "Exporter vers Excel (anglais seulement)",
      // "EXT": "poste :",
      "EXTERNAL": "externes",
      "FACULTY-ADDRESS": "Faculté de médecine <br> Pavillon Roger-Guindon <br> 451, ch. Smyth, pièce 2016 <br> Ottawa, ON K1H 8M5",
      "FACULTY-OF-MEDICINE": "Faculté de médecine",
      // "FILTER-INTERESTS": "Filtrer les intérêts :",
      "FILTERED-INTERESTS": "Les intérêts filtrés:",
      "FOR-ASSISTANCE": "Si vous éprouvez des difficultés techniques, veuillez remplir le ",
      "FORGOT-PW": "J’ai oublié mon mot de passe",
      "FREE-TEXT": "Recherche en texte libre :",
      "FRENCH": "Français",
      // "FUNDING-CLINICAL-RESEARCH": "Projet de recherche clinique : ",
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
      // "HAVE-OR-CREATE": ", vous devez posséder un compte ou en créer un.",
      "HELP-DESK": "formulaire de demande d’assistance",
      "HIDE-PW": "cacher le mot de passe",
      // "HOME": "Accueil",
      "HOURS-DATE-SUMMER": "(du 1er juin au 31 août : <br> de 9 h à 15h30)",
      "HOURS-DATE": "du lundi au vendredi <br> de 9 h à 16h30",
      "HOURS": "Heures d'ouverture",
      "IF-COPY-PASTE": "Si vous avez copié-collé le lien depuis un courriel, veuillez vérifier si vous avez sélectionné tous les caractères, puis réessayez.",
      "IF-DONT-RECEIVE": "Si vous ne recevez pas le courriel dans l’heure qui suit, nous pouvons vous",
      "IF-NECESSARY": "*Au besoin, ajouter des mots-clés afin de raffiner votre recherche.",
      "IN-ORDER-TO-CONTACT-RESEARCHER": "Pour communiquer avec des professeurs, ",
      "IN-ORDER-TO-CONTACT": "Pour communiquer avec ",
      "INCLUDE-INFO": "ajouter des informations sur votre expérience de recherche et votre formation universitaire;",
      // "INITIAL": "Communication initiale avec",
      "INTERNAL": "internes",
      "INTRODUCE": "vous presenter;",
      // "INVALID-KEY": "Clé non valide",
      "IS-INVALID": "» n’est pas valide.",
      "JOURNAL-ARTICLES": "Articles de revue",
      "LANGUAGE-DISCLAIMER": "Version française non disponible. Version anglaise suit :",
      // "LANGUAGE-SELECTION": "Sélection de la langue",
      "LAST-UPDATED": "Dernière mise à jour : ",
      "LEVEL": "Niveau d’études :",
      // "LINK-AND-CODE": "Un lien et un code de vérification ont été envoyés à",
      "LIST": "Faites une recherche à l’aide de mots-clés afin de voir la liste des superviseurs disponibles. Si vous connaissez le nom du professeur, faites une recherche en choisissez la première lettre du nom de famille de celui-ci.",
      "LOG-IN-FAILED": "La connexion a échoué avec les informations d'identification que vous avez fournies. S'il vous plaît re entrer et essayer à nouveau.",
      // "LOG-IN-FAILED-RESET": "La connexion a échoué avec les informations d'identification que vous avez fournies.",
      "LOG-IN-OR-CREATE": "ouvrir une session (ou créez-vous un compte).",
      "LOG-IN": "Ouvrez une session",
      "LOG-OUT": "Se déconnecter",
      // "LOGIN-RESEARCHER" : "Vous devez vous connecter pour voir vos conversations",
      "MANDATORY-FIELDS": "Le nom et le mot de passe sont obligatoires.",
      "MARK-READ": "Marqué comme lu",
      "MEAN": "Valeur moyenne",
      "MEAN-RESPONSE-TIME-DAYS": "Temps de réponse moyen (jours)",
      "MEDIAN": "Valeur médiane",
      "MEDIAN-RESPONSE-TIME-DAYS": "Temps de réponse médiane (jours)",
      // "MESSAGE": "Message :",
      "MESSAGE-SAVED": "Votre message a été sauvergadé.",
      "MESSAGE-SENT": "Votre message a bien été envoyé.",
      "MESSAGES-SENT": "Messages envoyés",
      "MSC": "M. Sc.",
      "NAME": "Nom",
      // "NEW-MESSAGES": " nouveaux messages",
      "NEW-PW": "Bienvenue dans l’outil de recherche d’un directeur de thèse. Nous avons reçu récemment une demande de nouveau mot de passe à cette adresse courriel.",
      // "NEW-UNREAD-MESSAGES": "Vous avez de nouveaux messages non lus de ",
      "NEXT": "Suivant",
      "NO": "Non",
      // "NO-NEW-UNREAD-MESSAGES": "Vous n'avez pas de nouveaux messages non lus de ",
      // "NOT-ADMITTED-YET": "Pas actuellement admis à un programme.",
      // "NOT-APPLIED-YET": "Je n'ai pas encore postulé, mais j'ai l'intention de le faire sous peu",
      // "NOT-CURRENTLY-AVAILABLE": "Je ne suis pas actuellement disponible pour superviser",
      // "NO-DATA-MESSAGE": "Aucune information disponible",
      // "NOT-LOGGED-IN": "Vous n'êtes pas connecté",
      "OUTDATED-BROWSER-MESSAGE-PARTI": "Cette application nécessite des fonctionnalités JavaScript que votre navigateur ne prend pas en charge. Contactez-nous par courrier électronique",
      "OUTDATED-BROWSER-MESSAGE-PARTII": "ou par téléphone au 613-562-5215 pour en savoir plus sur notre recherche.",
      "PASSWORD": "Mot de passe :",
      "PASSWORD-RESET": "Vous pourrez dès lors poursuivre la réinitialisation de votre mot de passe. ",
      "PHD": "Ph. D.",
      // "PHOTO-OF": "Photo de ",
      "PLEASE-NOTE": "*Veuillez noter que cet outil est disponible en anglais seulement.",
      "PREVIOUS": "Précédent",
      // "PROFILE": "Profil",
      "PROFILE-CREATED": "Profils créés, par mois (derniers 12 mois)",
      "PROFILE-CREATION": "Création de profil",
      "PROFILE-INCOMPLETE": "Votre profile est incomplet. Êtes-vous certains que vous voulez continuer? ",
      "PROGRAM": "Programme :",
      "PROOFREAD": "Passer en revue votre demande.",
      // "PROVIDE-INFO": "Veuillez fournir des informations sur vous.",
      "PUBLICATION-DATE": "Date de la publication :",
      "PUBLICATION-TITLE": "Titre de la publication :",
      "PUBLICATIONS": "Publications",
      // "PW": "Mot de passe :",
      "REMEMBER-ME": "Se souvenir de moi",
      // "REMOVE": "supprimer",
      "REPORTS": "Rapports",
      "RESEARCH-DESCRIPTION": "Description de la recherche",
      "RESEARCH-INTERESTS": "Intérêts de recherche",
      "RESEARCHER-PROFILE": "Profil du superviseur ",
      "RESEND-EMAIL": "Envoyer le courriel à nouveau",
      "RESEND": "l’envoyer à nouveau",
      // "RESET-IT": "Réinitialiser le ",
      "RESULT": " résultat*",
      "RESULTS": " résultats*",
      // "RGN": "Pavillon Roger-Guindon",
      // "ROOM": "Pièce",
      "SAVE": "Sauvegarder",
      "SAVE-DRAFT": "Sauvegarder un brouillon",
      // "SEARCH": "Recherche",
      "SELECT-FIRST-LETTER": "OU Choisissez la première lettre du nom de famille du professeur:",
      "SELECT-KEYWORDS": "Choisissez un ou des mots-clés* décrivant le mieux vos intérêts de recherche : ",
      "SELECT-PROGRAM": "Sélectionnez un programme",
      "SELECT-RESEARCH": "Sélectionnez des intérêts de recherche :",
      "SEND-MESSAGE": "Envoyer le message",
      "SENT-ON": "Envoyé le : ",
      "SHOWING": "Liste des membres du corps professoral – Affichage de ",
      "SKIP": "Passer au contenu principal",
      // "SMYTH": "451 chemin smyth",
      "STARTING-FROM": "à partir de : ",
      "STATE-INTERESTS": "indiquer clairement vos intérêts et leur lien avec le professeur ou la professeure;",
      "STUDENT-IN-SYSTEM": "Étudiants dans le système",
      "STUDENT-PROFILE": "Profil de l’étudiant",
      "SUPERVISOR-RESPONSE": "Temps de réponse du superviseur",
      "THANK-YOU": "Nous vous remercions de l’intérêt que vous témoignez envers l’Université d’Ottawa!",
      "TALKED-WITH": "A parlé avec",
      "THE-KEY": "Un problème est survenu : la clé «",
      "THIS-ADDRESS-NOT-EXIST": " n’apparaît pas dans nos dossiers. Pour continuer, cliquez sur « Créer un compte ».",
      //"THIS-ADDRESS-NOT-EXIST": " n’apparaît pas dans nos dossiers. Pour continuer, cliquez sur « Créer un compte ». Un message de confirmation sera envoyé à cette adresse.",
      "THIS-ADDRESS": "Cette adresse ",
      "THIS-MESSAGE": "Ce message sera visible pour les administrateurs du Bureau des études supérieures et postdoctorales de la Faculté de médecine.",
      // "THIS-PROFILE": "Ce profil sera visible pour les chercheurs avec lesquels vous communiquerez, de même que pour les administrateurs du Bureau des études supérieures et postdoctorales de la Faculté de médecine.",
      // "THIS-WILL-BE-USERNAME": "Ce sera votre nom d’utilisateur.",
      "TIPS": "Conseils",
      "TO-CONTACT": "Pour communiquer avec",
      // "TO-RESET-PASSWORD": "S'il vous plaît entrer votre nouveau mot de passe afain de réinitialisation de votre mot de passe.",
      // "TOGGLE-NAVIGATION": "Basculer la navigation",
      "TOP": "Haut de la page",
      "TOTALS-AVERAGES": "Totaux / moyennes",
      "TRANSCRIPTS-WORD-PDF": "(format Microsoft Word ou PDF. Les relevés de notes non officiels sont acceptés) :",
      "TRANSCRIPTS": "Relevés de notes :",
      // "TRY-AGAIN": ", essayez de nouveau.",
      "TSS": "Outil de recherche pour trouver un directeur de thèse",
      "TY": "Merci.",
      "UNSELECT": "Décocher tout",
      "UNREAD": "Non lus ",
      "UNRETURNED-CONTACTS": "Messages initiaux non retournés",
      "UPLOAD-CV": "Télécharger un cv",
      "UPLOAD-TRANSCRIPT": "Télécharger un relevés de notes ",
      "USERNAME": "Nom d’utilisateur :",
      "VERIFICATION": "Code de vérification :",
      "VERIFICATION-SENT": "Un lien et un code de vérification ont été envoyés à ",
      "VIEW-CONVERSATIONS": "Voir les conversations",
      // "VIEW-MESSAGES": "Voir anciens messages",
      "VIEW-PROFILE": "Voir le profil",
      "VIEW-PW": "voir le mot de passe",
      "VIEWED-ON": "Lu le : ",
      // "VISIBLE": "Les réponses seront visibles pour les administrateurs du Bureau des études supérieures et postdoctorales de la Faculté de médecine.",
      "VISIT-WEBSITE": "Visitez le site internet ",
      // "WE-WILL-GUIDE": "Nous vous guiderons au long du processus de recherche d’un directeur de thèse.",
      // "WE-WILL": "Nous vous guiderons au long du processus de recherche d’un directeur de thèse.",
      "WELCOME": "Bienvenue",
      // "WELCOME-BACK": "Bienvenue",
      // "WELCOME-TO": "Bienvenue dans l’outil de recherche d’un directeur de thèse",
      // "WHICH": "Lequel?",
      "YES": "Oui"
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

// Text truncation function, found at http://codereview.stackexchange.com/questions/92801/truncating-text-with-jquery-but-keep-the-html-formatting
function cutKeepingTags(elem, reqCount) {
  var grabText = '';
  var missCount = reqCount;
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
      var returnval;
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

function tokenizeString(inputStringMixedCase) {
  //set variable for freeText array
  var inputString = inputStringMixedCase.toLowerCase();
  var terms = inputString.match(/([a-z0-9àâäèéêëîïôœùûüÿç_]|-)+/g);

  var tokens = new Set(terms);
  return tokens;
}

var vm = new Vue({
  el: '#app',

  data: {
    // Assign to variables to use in the code
    be_url: envs[env].be,
    uniweb_url: envs[env].uniweb,
    fomsso_url: envs[env].fomsso,
    admitted: '',
    isAdmitted: [],
    allUnreadCount: 0,
    alphabuttons: [],
    availabledate: null,
    clickedResearcher: null,
    clickedResearcherId: '',
    clickedResearcherName: '',
    code: '',
    conversationResearchers: [],
    conversationsEmail: [],
    createAccountFailed: false,
    cvStudent: {},
    currentDate: null,
    dateInThePast: false,
    email: null,
    emailInProgress: false,
    endDate: null,
    fromEmailLink: false,
    hasConversations: false,
    interestsChoices: [],
    internal: '', // String version of 'false', needed in 'created' method
    isAdmittedToProgram: false,
    isAvailable: false,
    key: '12345',
    levelOfInstruction: '',
    loading: true,
    loggedIn: '', // String version of 'false', needed in 'created' method
    loginFailed: false,
    loginState: 'notStarted',
    message: '',
    messageSent: false,
    name: '',
    nextButtonDisabled: false,
    nextResearcherId: "",
    nextResearcherIndex: 0,
    noNameAndPassword: false,
    password: '',
    passwordSent: false,
    prevButtonDisabled: false,
    prevResearcherId: "",
    prevResearcherIndex: 0,
    profile: '', // String version of 'false', needed in 'created' method
    programs: [],
    rememberMe: false,
    researcherName: '',
    researcherList: new Set(),
    researchersMasterInterestsList: new Set(),
    researchers: [],
    researchersFiltered: [],
    role: '',
    selectedInterests: [],
    startDate: null,
    student: null,
    student_profile_array: [],
    student_profile: null,
    studentConversations: [],
    studentCv: [],
    studentHasCv: false,
    studentHasTranscripts: false,
    studentInSystem: null,
    studentProfilesByMonth: null,
    studentTranscripts: [],
    supervisorsInSystem: null,
    theResearcherTalkedToStudent: false,
    theSelectedLanguage: 'en',
    token: {},
    transcripts: {},
    transcriptsStudent: {},
    updateProfileFailed: false,
    userId: '',
    username: '',
    verificationCode: '',
    viewPasswordClicked: false,
    programAdmitted: 0
  },

  created: function created() {
    this.currentDate = this.getCurrentDate();
    this.name = this.retrieve('name', this.name);
    this.email = this.retrieve('email', this.email);
    this.role = this.retrieve('role', this.role);
    this.code = this.retrieve('verificationCode', this.code);
    this.userId = this.retrieve('userId', this.userId);
    this.username = this.retrieve('username', this.username);
    this.availabledate = this.retrieve('availabledate', this.availabledate);
    this.internal = this.retrieve('internal', this.internal) === 'true'; // Convert to boolean.
    this.loggedIn = this.retrieve('loggedIn', this.loggedIn) === 'true'; // Convert to boolean.
    this.loginState = this.retrieve('loginState', this.loginState);
    this.profile = this.retrieve('profile', this.profile) === 'true'; // Convert to boolean.
    this.hasConversations = this.retrieve('hasConversations', this.hasConversations) === 'true'; // Convert to boolean.
    this.allUnreadCount = this.retrieve('allUnreadCount', this.allUnreadCount);
    this.rememberMe = this.retrieve('rememberMe', this.rememberMe);
    this.theSelectedLanguage = this.retrieve('theSelectedLanguage', this.theSelectedLanguage);
    this.checkedYes = this.retrieve('admittedToProgram', this.checkedYes);
    this.checkedNo = this.retrieve('notAdmittedToProgram', this.checkedNo);
    this.levelOfInstruction = this.retrieve('levelOfInstruction', this.levelOfInstruction);
    this.programAdmitted = this.retrieve('programAdmitted', this.programAdmitted);
    this.admitted = this.retrieve('admitted', this.admitted);
    this.isAdmittedToProgram = this.retrieve('isAdmittedToProgram', this.isAdmittedToProgram);

    this.isAdmitted = [{
      "code": 1,
      "name": "I have been admitted",
      "lang": "en"
    }, {
      "code": 2,
      "name": "I haven’t applied yet, but intend to do so shortly",
      "lang": "en"
    }, {
      "code": 3,
      "name": "I have an application in process",
      "lang": "en"
    }, {
      "code": 1,
      "name": "J'ai été admis",
      "lang": "fr"
    }, {
      "code": 2,
      "name": "Je n'ai pas encore postulé, mais j'ai l'intention de le faire sous peu",
      "lang": "fr"
    }, {
      "code": 3,
      "name": "J'ai une application en cours",
      "lang": "fr"
    }];
    this.programs = [{
      "code": 1,
      "name": "Biochemistry",
      "lang": "en"
    }, {
      "code": 2,
      "name": "Cellular and Molecular Medicine",
      "lang": "en"
    }, {
      "code": 3,
      "name": "Epidemiology",
      "lang": "en"
    }, {
      "code": 4,
      "name": "Microbiology and Immunology",
      "lang": "en"
    }, {
      "code": 5,
      "name": "Neuroscience",
      "lang": "en"
    }, {
      "code": 1,
      "name": "Biochimie",
      "lang": "fr"
    }, {
      "code": 2,
      "name": 'M\xE9decine cellulaire et mol\xE9culaire',
      "lang": "fr"
    }, {
      "code": 3,
      "name": '\xC9pid\xE9miologie',
      "lang": "fr"
    }, {
      "code": 4,
      "name": "Microbiologie et immunologie",
      "lang": "fr"
    }, {
      "code": 5,
      "name": "Neurosciences",
      "lang": "fr"
    }];

    // set lang
    $('html').attr('lang', this.theSelectedLanguage);
    Vue.config.lang = this.theSelectedLanguage;
    document.title = 'uOttawa ' + this.$t('message.FACULTY-OF-MEDICINE') + ' ' + this.$t('message.TSS'); // Keep this synchronized with the actual <title> element please

    if (this.role == 'student') {
      this.getResearchers();
      this.getStudent(this.email); // Includes a call to this.getMessageList()
    } else if (this.role == 'researcher') {
      this.getResearchers();
      this.getMessageList();
    } else if (this.role == 'admin') {
      $('#loading-message').remove();
      this.getStudentsInSystem();
      this.getSupervisors();
      this.getStudentProfileCreated();
      this.checkUrl();
    } else {
      // User not signed in
      this.getResearchers();
      this.checkUrl();
    }
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

    getCurrentDate: function getCurrentDate() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }

      var currentDate = yyyy + '-' + mm + '-' + dd;
      return currentDate;
    },

    findResearcherInList: function findResearcherInList(researcherId) {
      this.researchers.forEach(function (researcher) {
        if (researcher.id == researcherId) {
          return researcher;
        }
      });
    },

    truncate: function truncate(n, len) {
      var ext = n.substring(n.lastIndexOf(".") + 1, n.length).toLowerCase();
      var filename = n.replace('.' + ext, '');
      if (filename.length <= len) {
        return n;
      }
      filename = filename.substr(0, len) + (n.length > len ? '[...]' : '');
      return filename + '.' + ext;
    },

    isValidURL: function isValidURL(str) {
      var a = document.createElement('a');
      a.href = str;
      return a.hostname && a.host != window.location.host;
    },

    changeResearcherAvailability: function changeResearcherAvailability() {
      if (!this.availabledate) {
        this.availabledate = this.findResearcherInList(this.userId).available_date;
        this.store('availabledate', this.availabledate);
      }
      $('#availableDate').val(this.availabledate);

      $("#availableDate").datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        todayHighlight: true,
        startDate: this.currentDate,
        setDate: new Date(this.availabledate)
      }).on("changeDate", function () {
        this.changeDate($('#availableDate').val());
      });

      $('#modalResearcherAvailability').modal('show');
    },

    viewProfile: function viewProfile() {
      $('#modalStudentProfile').modal('show');
    },

    viewConversations: function viewConversations() {
      $('#modalConversations').modal('show');
    },

    uploadCv: function uploadCv(username, event) {
      var student_username = username;
      var files = event.target.files;
      var file = new FormData();
      file.append('cv', files[0]);
      var modelRoute = '/students/' + encodeURIComponent(username) + '/cvs';
      var fileUrl = this.be_url + modelRoute;

      this.$http.post(fileUrl, file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        // success callback
        this.getCv(student_username);
      }, function (response) {
        //error callback
        console.log('error uploading your cv ' + response.status);
        console.log(response);
      });
    },

    hidePassword: function hidePassword() {
      $('.pass').find('input[type="text"]').attr("type", "password");
      this.viewPasswordClicked = false;
    },

    viewPassword: function viewPassword() {
      $('.pass').find('input[type="password"]').attr("type", "text");
      this.viewPasswordClicked = true;
    },

    getCv: function getCv(username, event) {
      var student_username = username;
      var modelRoute = '/students/' + encodeURIComponent(student_username) + '/cvs/';
      var urlRoute = this.be_url + modelRoute;
      this.$http.get(urlRoute).then(function (response) {
        // success callback
        this.studentCv = response;
        this.processCv();
      }, function (response) {
        //error callback
        console.log('error getting cv ' + response.status);
      });
    },

    processCv: function processCv() {
      var file = [];

      this.studentCv.data.forEach(function (cv) {
        var name = cv;
        var filename = cv;
        var fileObj = { filename: filename };
        file.push(filename);
        this.studentHasCv = true;
      });
      this.cvStudent = file;
    },

    deleteCv: function deleteCv(username, filename) {
      var student_username = username;
      var file_route = '/students/' + encodeURIComponent(student_username) + '/cvs/' + encodeURIComponent(filename);
      var fileUrl = this.be_url + file_route;

      this.$http.delete(fileUrl).then(function (response) {
        // success callback
        // set studentHasCv to false
        this.studentHasCv = false;
      }, function (response) {
        //error callback
        console.log('error deleting cv ' + response.status);
      });
    },

    uploadTranscripts: function uploadTranscripts(username, event) {
      var student_username = username;
      var files = event.target.files;
      var file = new FormData();
      file.append('transcript', files[0]);
      var modelRoute = '/students/' + encodeURIComponent(student_username) + '/transcripts';
      var fileUrl = this.be_url + modelRoute;

      this.$http.post(fileUrl, file).then(function (response) {
        // success callback
        this.getTranscripts(student_username);
      }, function (response) {
        //error callback
        console.log('error uploading your transcripts ' + response.status);
        console.log(response);
      });
    },

    getTranscripts: function getTranscripts(username, event) {
      var student_username = username;
      var modelRoute = '/students/' + encodeURIComponent(student_username) + '/transcripts';
      var urlRoute = this.be_url + modelRoute;

      this.$http.get(urlRoute).then(function (response) {
        // success callback
        this.studentTranscripts = response;
        this.processTranscripts();
      }, function (response) {
        //error callback
        console.log('error posting availability ' + response.status);
      });
    },

    processTranscripts: function processTranscripts() {
      var files = [];
      if (this.studentTranscripts.data != undefined) {
        this.studentTranscripts.data.forEach(function (transcript) {
          var name = transcript;
          files.push(name);
          this.studentHasTranscripts = true;
        });
      }

      this.transcriptsStudent = { files: files };
    },

    deleteTranscript: function deleteTranscript(username, filename, event) {
      var clickedTranscript = event.target;
      var file_route = '/students/' + encodeURIComponent(username) + '/transcripts/' + encodeURIComponent(filename);
      var fileUrl = this.be_url + file_route;

      this.$http.delete(fileUrl).then(function (response) {
        this.getTranscripts(username);
      }, function (response) {
        //error callback
        console.log('error deleting cv ' + response.status);
      });
    },

    viewResearcherProfile: function viewResearcherProfile(selectedResearcherId) {
      var researcherPositionTitle;
      var researcherAcademicUnit;
      var researcherId;
      var researcherName;
      this.clickedResearcherId = selectedResearcherId;
      this.clickedResearcher = null;
      $('#newmessage').val('');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.researchers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var selR = _step.value;

          if (selR.id == selectedResearcherId) {
            this.clickedResearcher = selR;
            this.clickedResearcherName = selR.membership_information.first_name + ' ' + selR.membership_information.last_name;
            break;
          }
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

      if (this.clickedResearcher !== null) {
        this.$nextTick(function () {
          // Use nextTick to give Vue a chance to add the modal into the DOM before Bootstrap tries to show it
          $('#modalResearcherProfile').modal('show');

          if (this.role == 'student') {
            //user logged in
            //check if user has a profile
            if (this.profile === true) {
              //check if user has started a conversation with researcher
              this.checkStudentTalkedToResearcher();
            } else {
              $('#modalStudentProfile').modal('show');
            }
          }
        });
      }

      // Set variables for Previous and Next buttons
      // There's probably a slicker way to find where we are in researcherFilteredList, but this does the trick.
      var index = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.researchersFiltered[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var researcher = _step2.value;

          if (researcher.id == selectedResearcherId) {
            break;
          } else {
            index += 1;
          }
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

      if (index > 0) {
        // Current researcher is not first in the list
        this.prevButtonDisabled = false;
        var prevResearcherIndex = index - 1;
        this.prevResearcherId = this.researchersFiltered[prevResearcherIndex]["id"];
      } else {
        // Current researcher is first in the list
        this.prevButtonDisabled = true;
        this.prevResearcherId = "";
      }

      if (index < this.researchersFiltered.length - 1) {
        // Current researcher is not last in the list
        this.nextButtonDisabled = false;
        var nextResearcherIndex = index + 1;
        this.nextResearcherId = this.researchersFiltered[nextResearcherIndex]["id"];
      } else {
        // Current researcher is last in the list
        this.nextButtonDisabled = true;
        this.nextResearcherId = "";
      }
    },

    checkStudentTalkedToResearcher: function checkStudentTalkedToResearcher() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.studentConversations[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var student = _step3.value;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = student.talkedWith[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var researcher = _step4.value;

              var clickedResearcherId = parseInt(this.clickedResearcherId);

              if (researcher.researcherid === clickedResearcherId) {
                this.theResearcherTalkedToStudent = true;
                break;
              } else {
                this.theResearcherTalkedToStudent = false;
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
    },

    login: function login() {
      this.clickedResearcher = null;
      this.clickedResearcherName = '';
      $('#email').val('');
      $('#thePassword').val('');
      $('#username').val('');
      $('#password').val('');
      $('#modalLogin').modal('show');
    },

    contactResearcher: function contactResearcher() {
      $('#modalLogin').modal('show');
    },

    processResearcherAvailability: function processResearcherAvailability(researcherId, available_date) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.researchers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var researcher = _step5.value;

          if (researcher.id == researcherId) {
            this.$set(researcher, 'available_date', available_date);
            break;
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
    },

    changeDate: function changeDate(selectedDate) {
      if (selectedDate >= this.currentDate) {
        $('#modalResearcherAvailability').find('.btn-primary').attr('disabled', false);
        $(".alertPastDate").removeClass('alertPastDate alert alert-danger alert-dismissible fade in').addClass('alertPastDate alert alert-danger alert-dismissible');
        this.dateInThePast = false;
        $('#availableDate').val(selectedDate);
      } else {
        $('#modalResearcherAvailability').find('.btn-primary').attr('disabled', true);
        $(".alertPastDate").removeClass('alertPastDate alert alert-danger alert-dismissible').addClass('alertPastDate alert alert-danger alert-dismissible fade in');
        this.dateInThePast = true;
      }
    },

    saveAvailability: function saveAvailability(id, event) {
      var available_date = $('#availableDate').val();
      var availabilityContent = {
        available_date: available_date
      };
      var urlRoute = this.be_url + '/researchers/' + id;

      this.$http.put(urlRoute, availabilityContent).then(function (response) {
        // success callback
        this.availabledate = available_date;
        this.store('availabledate', this.availabledate);

        this.$forceUpdate();
        this.getResearchers();
      }, function (response) {
        //error callback
        console.log('failed to update availability');
        console.log(response.data);
        console.log(response.status);
      });
    },

    messageRead: function messageRead(id) {
      // Mark message as read, by adding a value for read_date.
      var today = new Date();
      var read_date = today.toISOString();
      var content = { read_date: read_date };
      var modelRoute = '/conversations/' + id;
      var fileUrl = this.be_url + modelRoute;

      this.$http.put(fileUrl, content).then(function (response) {
        // success callback
        this.getMessageList();
      }, function (response) {
        //error callback
        console.log('error saving message ' + response.status);
        console.log('response');
        console.log(response);
      });
    },

    sendInitialMessage: function sendInitialMessage(researcher_uniweb_number, student_username, student_name, level_of_instruction, admitted, program_code) {
      if (!this.emailInProgress) {
        this.emailInProgress = true;
        var body = $('#newmessage').val();
        var messageContent;

        var is_from_student = false;
        if (this.role === 'student') {
          is_from_student = true;

          var researcher_name = this.clickedResearcherName;
          if (this.clickedResearcherName === '') {
            researcher_name = $('#researcherName').val().trim();
          }
        }

        var level_of_instruction_en = locales.en.message[level_of_instruction.toUpperCase()];
        var level_of_instruction_fr = locales.fr.message[level_of_instruction.toUpperCase()];
        var admitted_en = this.findInJson(this.isAdmitted, admitted, "en");
        var admitted_fr = this.findInJson(this.isAdmitted, admitted, "fr");
        var program_code_en = this.findInJson(this.programs, program_code, "en");
        var program_code_fr = this.findInJson(this.programs, program_code, "fr");
        var is_draft = false;

        researcher_uniweb_number = parseInt(researcher_uniweb_number);
        messageContent = {
          researcher_uniweb_number: researcher_uniweb_number,
          researcher_name: researcher_name,
          student_username: student_username,
          student_name: student_name,
          body: body,
          is_from_student: is_from_student,
          level_of_instruction_en: level_of_instruction_en,
          level_of_instruction_fr: level_of_instruction_fr,
          admitted_en: admitted_en,
          admitted_fr: admitted_fr,
          program_code_en: program_code_en,
          program_code_fr: program_code_fr,
          is_draft: is_draft
        }; //isFromStudent boolean
        var modelRoute = '/conversations/';
        var fileUrl = this.be_url + modelRoute;

        this.$http.post(fileUrl, messageContent).then(function (response) {
          // success callback
          this.emailInProgress = false;
          if (this.role === 'student') {
            this.hasConversations = true;
            this.store('hasConversations', this.hasConversations);
            this.theResearcherTalkedToStudent = true;
            this.messageSent = true;
            //$(".alert1").removeClass('alertMessageSent alert alert-success alert-dismissible').addClass('alertMessageSent alert alert-success alert-dismissible fade in');

            window.setTimeout(function () {
              $(".alert2").fadeTo(500, 0).slideUp(500, function () {
                //$(this).remove();
                $(this).hide();
                vm.messageSent = false;
              });
            }, 3000);

            this.getMessageList();
            return this.theResearcherTalkedToStudent, this.messageSent, this.hasConversations;
          } else if (this.role === 'researcher') {

            this.hasConversations = true;
            this.store('hasConversations', this.hasConversations);
            this.theResearcherTalkedToStudent = true;
            $('#modalResearcherProfile').modal('hide');
            $('#modalConversations').modal('hide');
            this.getMessageList();
            return this.theResearcherTalkedToStudent, this.hasConversations;
          } else {
            return;
          }
        }, function (response) {
          //error callback
          this.emailInProgress = false;
          console.log('error saving message ' + response.status);
          console.log('response');
          console.log(response);
          this.theResearcherTalkedToStudent = false;
          this.hasConversations = false;
          this.store('hasConversations', this.hasConversations);
          return this.theResearcherTalkedToStudent, this.hasConversations;
        });
      }
    },

    sendMessageFromStudent: function sendMessageFromStudent(researcher_uniweb_number, researcher_name, student_username, student_name, is_from_student) {
      if (!this.emailInProgress) {
        this.emailInProgress = true;
        var messageId = this.conversationsEmail.id;
        var messageBoxId = '#newmessage-' + messageId;
        var body = $(messageBoxId).val();
        var is_draft = false;

        if (is_from_student == true) {
          is_from_student = false;
        } else {
          is_from_student = true;
        }

        var messageContent = { researcher_uniweb_number: researcher_uniweb_number, researcher_name: researcher_name, student_username: student_username, student_name: student_name, body: body, is_from_student: is_from_student, is_draft: is_draft }; //isFromStudent boolean
        var modelRoute = '/conversations/';
        var fileUrl = this.be_url + modelRoute;

        this.$http.post(fileUrl, messageContent).then(function (response) {
          // success callback
          this.emailInProgress = false;
          this.messageSent = true;

          window.setTimeout(function () {
            $(".alert2").fadeTo(500, 0).slideUp(500, function () {
              $(this).hide();
              vm.messageSent = false;
              $('#modalConversationsNotSigned textarea').val("");
            });
          }, 3000);
        }, function (response) {
          //error callback
          this.emailInProgress = false;
          console.log('error saving message sendMessageFromStudent ' + response.status);
          console.log('response');
          console.log(response);
        });
      }
    },

    sendMessage: function sendMessage(index, researcher_name, researcher_uniweb_number, student_username, student_name) {
      if (!this.emailInProgress) {
        this.emailInProgress = true;
        var textareaId = '#newmessage-' + index;
        var body = $(textareaId).val();
        var is_from_student = false;
        var is_draft = false;

        if (this.role === 'student') {
          is_from_student = true;
        }

        researcher_uniweb_number = parseInt(researcher_uniweb_number);
        var messageContent = { researcher_uniweb_number: researcher_uniweb_number, researcher_name: researcher_name, student_username: student_username, student_name: student_name, body: body, is_from_student: is_from_student, is_draft: is_draft }; //isFromStudent boolean
        var modelRoute = '/conversations/';
        var fileUrl = this.be_url + modelRoute;

        this.$http.post(fileUrl, messageContent).then(function (response) {
          // success callback
          this.emailInProgress = false;
          if (this.role === 'student' || this.role === 'researcher') {
            this.hasConversations = true;
            this.store('hasConversations', this.hasConversations);
            this.theResearcherTalkedToStudent = true;
            this.messageSent = true;
            //$(".alert2").removeClass('alertMessageSent alert alert-success alert-dismissible').addClass('alertMessageSent alert alert-success alert-dismissible fade in');

            window.setTimeout(function () {
              $(".alert2").fadeTo(500, 0).slideUp(500, function () {
                $(this).hide();
                vm.messageSent = false;
              });
            }, 3000);

            $('#modalConversations textarea').val('');
            this.getMessageList();
            return this.theResearcherTalkedToStudent, this.hasConversations;
          }
        }, function (response) {
          //error callback
          this.emailInProgress = false;
          console.log('error saving message sendMessage ' + response.status);
          console.log('response');
          console.log(response);
          this.theResearcherTalkedToStudent = false;
          this.hasConversations = false;
          this.store('hasConversations', this.hasConversations);
          return this.theResearcherTalkedToStudent, this.hasConversations;
        });
      }
    },

    confirmIncompleteProfile: function confirmIncompleteProfile(username) {
      if (this.profile === true) {
        this.updateProfile(username, true);
      } else {
        this.createProfile(username, false, true);
      }
    },

    updateProfile: function updateProfile(username, isConfirmed) {
      var program_code = 0;
      var profileContent = {};
      this.updateProfileFailed = false;
      var name = this.name;
      var email = this.email;
      var level_of_instruction = this.levelOfInstruction;
      var admitted = this.getAdmittedValue();
      this.admitted = admitted;
      var program_code = this.getProfileCodeValue();

      if (name != "" && email != "" && level_of_instruction != "" && admitted != "" && program_code != 0 && this.studentTranscripts.data.length != 0 && this.studentCv.data.length != 0 || isConfirmed == true) {
        profileContent = { name: name, email: email, level_of_instruction: level_of_instruction, program_code: program_code, admitted: admitted }; //cv transcript path

        var modelRoute = '/students/' + encodeURIComponent(username);
        var url = this.be_url + modelRoute;

        this.$http.put(url, profileContent).then(function (response) {
          // success callback
          this.getStudent(this.username);
          this.updateProfileFailed = false;
          $('.name-block').removeClass('glow');
          $('.level-block').removeClass('glow');
          $('.admittedTo-block').removeClass('glow');
          $('.program-block').removeClass('glow');
          $('.transcript-block').removeClass('glow');
          $('.cv-block').removeClass('glow');
          $('#modalStudentProfile').modal('hide');
        }, function (response) {
          console.log(response);
          console.log('error saving profile ' + response.status);
        });
      } else {
        if (name == "") {
          $('.name-block').addClass('glow');
        }
        if (level_of_instruction == "") {
          $('.level-block').addClass('glow');
        }
        if (admitted == "") {
          $('.admittedTo-block').addClass('glow');
        }
        if (program_code == 0) {
          $('.program-block').addClass('glow');
        }
        if (this.studentTranscripts.data.length == 0) {
          $('.transcript-block').addClass('glow');
        }
        if (this.studentCv.data.length == 0) {
          $('.cv-block').addClass('glow');
        }
        $('.alert').show();
        this.updateProfileFailed = true;
      }
    },

    getAdmittedValue: function getAdmittedValue() {
      var is_admitted = $('#admitted').find('input[name=is_admitted]:checked').val();

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.isAdmitted[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var item = _step6.value;

          if (item.code == is_admitted) {
            var admitted = is_admitted;
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

      if (admitted == undefined) {
        admitted = "";
      }
      return admitted;
    },

    getProfileCodeValue: function getProfileCodeValue() {
      var program_code = $('#StudentProfile .showSelectMenu select option:selected').val();

      var parsed_program_code = parseInt(program_code);
      if (isNaN(parsed_program_code)) {
        parsed_program_code = 0;
      }
      return parsed_program_code;
    },

    createProfile: function createProfile(username, isFromEmail, isConfirmed) {
      this.updateProfileFailed = false;
      var profileContent = {};

      var name = $('#StudentProfile').find('#name').val().trim();
      this.password = $('#modalStudentProfile #passwordExt').val().trim();

      if (isFromEmail) {
        var email = username;
      } else {
        var email = this.email;
        this.name = name;
        this.store('name', this.name);
        this.username = username;
        this.store('username', this.username);

        if (this.internal) {
          this.password = $('#modalLogin #password').val().trim();
        }
      }
      var application = 'TSS';
      var level_of_instruction = this.levelOfInstruction;

      var admitted = this.getAdmittedValue();
      this.admitted = admitted;

      var program_code = this.getProfileCodeValue();

      if (name != "" && this.password != '') {
        // Name and password are okay. Check the other fields.
        if (level_of_instruction != "" && program_code != 0 && admitted != "" && this.studentCv.data != undefined && this.studentTranscripts.data != undefined || isConfirmed) {
          // Other fields are okay too. Save their profile.
          profileContent = { name: name, email: email, username: username, level_of_instruction: level_of_instruction, program_code: program_code, admitted: admitted };

          var modelRoute = '/students';
          var fileUrl = this.be_url + modelRoute;

          this.$http.post(fileUrl, profileContent).then(function (response, err) {
            // success callback

            if (this.internal) {
              this.loggedIn = true;
              this.store('loggedIn', this.loggedIn);

              this.readUserRole(this.username);

              if (!isFromEmail) {
                // not from email
                this.createAccountFailed = false;
              }

              this.updateProfileFailed = false;
              $('.name-block').removeClass('glow');
              $('.level-block').removeClass('glow');
              $('.admittedTo-block').removeClass('glow');
              $('.program-block').removeClass('glow');
              $('.transcript-block').removeClass('glow');
              $('.cv-block').removeClass('glow');

              $('#modalStudentProfile').modal('hide');
            } else {
              // External student; need to save their credentials in FOMSSO.
              var url = this.fomsso_url + "/register";
              var credentials = { 'username': this.username, 'password': this.password, 'application': application, 'name': this.name };
              this.$http.post(url, credentials).then(function (response) {
                // success
                this.token = response.headers('token');
                var user = this.parseJwt(this.token);
                var email = user.email;
                this.loggedIn = true;
                this.store('loggedIn', this.loggedIn);
                if (isFromEmail) {
                  this.profile = true;
                  this.store('profile', this.profile);
                }
                this.createAccountFailed = false;

                $('.name-block').removeClass('glow');
                $('.level-block').removeClass('glow');
                $('.admittedTo-block').removeClass('glow');
                $('.program-block').removeClass('glow');
                $('.transcript-block').removeClass('glow');
                $('.cv-block').removeClass('glow');

                $('#modalStudentProfile').modal('hide');
                this.readUserRole(this.username);
              }, function (response) {
                //error callback
                console.log(response);
                console.log(response.status);
                this.updateStateEngine('EmailFound', true);
              });
            } // End of saving credentials for external students
          }, function (response) {
            //error callback
            console.log(response);
            console.log('error saving profile ' + response.status);
          }); // End of saving profile
        } else {
          // Name and password are okay but there's a problem with one of the other fields
          this.noNameAndPassword = false;

          if (level_of_instruction == "") {
            $('.level-block').addClass('glow');
          }
          if (admitted == "") {
            $('.admittedTo-block').addClass('glow');
          }
          if (program_code == 0) {
            $('.program-block').addClass('glow');
          }
          if (this.studentTranscripts.data == undefined) {
            $('.transcript-block').addClass('glow');
          }
          if (this.studentCv.data == undefined) {
            $('.cv-block').addClass('glow');
          }
          $('.alert').show();
          this.updateProfileFailed = true;
        }
      } else {
        // Name or password is blank
        this.noNameAndPassword = true;

        if (name == "") {
          $('.name-block').addClass('glow');
        }
        if (this.password == "") {
          $('.name-block').addClass('glow');
        }
        $('.alert').show();
        this.updateProfileFailed = true;
      }
    },

    addInterestToInterestChoices: function addInterestToInterestChoices(theValue, theIndex) {
      var interestChoicesObj = { theIndex: theIndex, theValue: theValue };
      this.interestsChoices.push(interestChoicesObj);
      $('#interests-' + theIndex).prop('checked', true);
    },

    removeInterestFromInterestChoices: function removeInterestFromInterestChoices(theValue, theIndex) {
      var i = 0;
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = this.interestsChoices[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var choice = _step7.value;

          if (theIndex == choice.theIndex) {
            this.interestsChoices.splice(i, 1);
            break;
          }
          i += 1;
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

      $('#interests-' + theIndex).prop('checked', false);
    },

    clearInterestsChoices: function clearInterestsChoices() {
      this.interestsChoices = [];
      $('[id^=interests-]').prop('checked', false);
      // Deliberately not calling onRefreshSearch yet
    },

    uncheckAll: function uncheckAll() {
      this.interestsChoices = [];
      $('[id^=interests-]').prop('checked', false);

      this.researchersFiltered = this.onRefreshSearch();
      this.extractAlphaFilter();
    },

    updateChecked: function updateChecked(value, index, event) {
      // called when an interest is selected in treeview/list
      if (event.target.checked) {
        this.addInterestToInterestChoices(value, index);
      } else {
        //remove interest from interestchoices
        this.removeInterestFromInterestChoices(value, index);
      }

      this.researchersFiltered = this.onRefreshSearch();
      this.extractAlphaFilter();
    },

    createMasterInterestList: function createMasterInterestList() {
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = this.researchers[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var researcher = _step8.value;

          if (researcher.research_interests != null) {
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = researcher.research_interests[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var anInterest = _step9.value;

                if (anInterest != null) {
                  var leaf = anInterest.interest[1];
                  var index = 0;
                  var _iteratorNormalCompletion10 = true;
                  var _didIteratorError10 = false;
                  var _iteratorError10 = undefined;

                  try {
                    for (var _iterator10 = this.selectedInterests[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                      var selectedInterest = _step10.value;

                      if (leaf == selectedInterest) {
                        if (this.researchersMasterInterestsList[index]) {
                          //if term exist in array of set
                          this.researchersMasterInterestsList[index].add(researcher);
                        } else {
                          this.researchersMasterInterestsList[index] = new Set([researcher]);
                        }
                      }
                      index += 1;
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
                } //end if anInterest != null
              } //end researcher.research_interests loop
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
          } //end if researcher.research_interests != null
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
    },

    createInterestList: function createInterestList() {
      this.selectedInterests = [];
      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = this.researchers[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var researcher = _step11.value;

          if (researcher.research_interests != null) {
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
              for (var _iterator12 = researcher.research_interests[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var anInterest = _step12.value;

                if (anInterest != null) {
                  var leaf = anInterest.interest[1];
                  if ($.inArray(leaf, this.selectedInterests) == '-1') {
                    this.selectedInterests.push(leaf);
                  }
                } //end if anInterest != null
              } //end researcher.research_interests loop
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
          } //end if researcher.research_interests != null
        } //end this.researchers loop
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

      this.selectedInterests.sort(function (s1, s2) {
        var l = s1.toLowerCase(),
            m = s2.toLowerCase();
        return l === m ? 0 : l > m ? 1 : -1;
      });
    },

    toggleLanguage: function toggleLanguage() {
      if (this.theSelectedLanguage == 'en') {
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

    getStudentProfile: function getStudentProfile(username) {
      var student_username = username;
      var modelRoute = '/students/' + encodeURIComponent(username);
      var url = this.be_url + modelRoute;

      this.$http.get(url).then(function (response) {
        // success callback
        this.student_profile = response.data;
        this.process_student_profile(student_username);
      }, function (response) {
        // error callback
        console.log('error');
        console.log(response);
        console.log(response.status);
      });
    },

    process_student_profile: function process_student_profile(username) {
      var student_username = username;
      if (this.student_profile) {
        this.student_profile_array = [];
        this.student_profile_array.push(this.student_profile);
        this.getCv(student_username);
        this.getTranscripts(student_username);
        $("#modalViewStudentProfile").modal('show');
      }
    },

    getStudent: function getStudent(username) {
      var modelRoute = '/students/' + encodeURIComponent(username);
      var tssurl = this.be_url + modelRoute;

      this.$http.get(tssurl).then(function (response, err) {
        // success callback
        this.student = response.data;

        if (this.student) {
          this.profile = true;
          this.store('profile', this.profile);

          this.getCv(username);
          this.getTranscripts(username);

          this.name = this.student.name;
          this.store('name', this.name);

          this.levelOfInstruction = this.student.level_of_instruction;
          this.store('levelOfInstruction', this.levelOfInstruction);

          this.programAdmitted = this.student.program_code;
          this.store('programAdmitted', this.programAdmitted);

          this.admitted = this.student.admitted;
          this.store('admitted', this.admitted);

          this.isAdmittedToProgram = this.programAdmitted != 0;
          this.store('isAdmittedToProgram', this.isAdmittedToProgram);

          this.checkProgramRadio();
          this.getMessageList();
          $('#modalLogin').modal('hide');
        } else {
          this.profile = false;
          this.store('profile', this.profile);
          $('#modalLogin').modal('hide');
          $('#modalStudentProfile').modal('show');
        }
      }, function (err) {
        // error callback
        console.log('error');
        console.log(err);
        console.log(err.status);
      });
    },

    getResearchers: function getResearchers() {
      var url = this.uniweb_url + "/professors";

      this.$http.get(url).then(function (response, error) {
        this.researchers = response.data;
        this.processUniwebFeed();
        this.createInterestList();
        this.createMasterInterestList();
        this.extractAlphaFilter();
        $('#loading-message').remove();

        // if (this.role != '') {
        //   this.getMessageList(); // Not sure why we need this. Let's try commenting it out and see what happens.
        // }
        // if (this.role == 'student') {
        //   this.getStudent(this.username); // Not sure why we need this
        // }
      }, function (response) {
        // error callback
        console.log(response);
        console.log(response.status);
      });
    },

    onCancel: function onCancel() {
      $("#dontHaveAccount").find("input#email").val("");
      this.updateStateEngine('notStarted', true);
    },

    onCreateAccount: function onCreateAccount() {
      this.username = $("#email").val().toLowerCase().trim();
      var email = this.username;
      var application = "TSS";
      var username = this.username;
      if (this.username != '') {
        var modelRoute = '/verifications/account/' + encodeURIComponent(this.username);
        var theurl = this.be_url;
        var url = theurl + modelRoute;

        this.studentTranscripts = [];
        this.studentCv = [];

        this.$http.post(url, {
          headers: {
            'Content-Type': ''
          }
        });
        this.createAccountFailed = false;
        this.updateStateEngine('EmailSent', true);
      } else {
        //display alert credantial missing
        this.createAccountFailed = true;
        $('#externalcreateAccountFailedAlert').show();
        this.updateStateEngine('EmailNotFound', true);
      }
    },

    onVerifyEmail: function onVerifyEmail() {
      var email = $('#email').val().toLowerCase().trim();
      this.email = email;
      this.username = email;
      this.internal = false;
      this.readUserRole(this.username);
      this.fromEmailLink = false;
    },

    onEmailPassword: function onEmailPassword() {
      if (this.username == '') {
        this.username = $("#email").val().toLowerCase().trim();
      }

      this.password = $("#thePassword").val().trim();
      var application = "TSS";

      if (this.password !== '' && this.username !== '') {
        var email = this.username;
        var url = this.fomsso_url + "/auth";
        var credentials = { 'username': this.username, 'password': this.password, 'application': application };

        this.$http.post(url, credentials).then(function (response) {
          // success callback
          this.token = response.headers('token');
          var user = this.parseJwt(this.token);
          var email = user.email;
          this.loggedIn = true;
          this.loginFailed = false;
          this.store('email', this.email);
          this.store('username', this.username);
          this.store('loggedIn', this.loggedIn);
          $('#modalLogin').modal('hide');
          this.readUserRole(email);
        }, function (response) {
          this.loginFailed = true;
          this.updateStateEngine('EmailFound', true);
        });
      } else {
        // username or password is null
        this.loginFailed = true;
        $('#modalLogin').modal('show');
        $('#dontHaveAccount').attr("aria-expanded", true);
        $('#dontHaveAccount').addClass('in');
      }
    },

    updateStateEngine: function updateStateEngine(newState, storeState) {
      this.loginState = newState;
      if (storeState) {
        this.store('loginState', this.loginState);
      }
    },

    // onTryAgain: function() {
    //   this.updateStateEngine('EmailSent',true);
    // },

    onResendEmail: function onResendEmail() {
      this.updateStateEngine('ResetSent', true);
      var modelRoute = '/verifications/account/' + encodeURIComponent(this.username);
      var theurl = this.be_url;
      var url = theurl + modelRoute;
      this.$http.post(url, {
        headers: {
          'Content-Type': ''
        }
      });
    },

    checkUrl: function checkUrl() {
      var email = this.getUrlParameter('email');
      var code = this.getUrlParameter('code');
      var action = this.getUrlParameter('action');
      var token = this.getUrlParameter('conversationid');

      if (email != '' && code != '') {
        if (action == 'create-account') {
          this.onVerificationCodeEmail(code, email);
        } else {
          this.onUpdatePasswordEmail(code, email);
        }
      } else {
        // email or code is null
        if (token != '') {
          this.getMessageEmail(token);
        }
      }
    },

    getUrlParameter: function getUrlParameter(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    },

    getMessageEmail: function getMessageEmail(token) {
      var modelRoute = '/conversations/token/' + token;
      var theurl = this.be_url;
      var url = theurl + modelRoute;

      this.$http.get(url).then(function (response) {
        this.conversationsEmail = [];
        this.conversationsEmail.id = response.data.id;
        this.conversationsEmail.researcher_uniweb_number = response.data.researcher_uniweb_number;
        this.conversationsEmail.researcher_name = response.data.researcher_name;
        this.conversationsEmail.student_username = response.data.student_username;
        this.conversationsEmail.student_name = response.data.student_name;
        this.conversationsEmail.body = response.data.body;
        this.conversationsEmail.sent_date = response.data.send_date;
        this.conversationsEmail.read_date = response.data.read_date;
        this.conversationsEmail.is_from_student = response.data.is_from_student;

        $('#modalConversationsNotSigned').modal('show');
      });
    },

    onUpdatePasswordEmail: function onUpdatePasswordEmail(code, username) {
      var verificationCode = code;
      this.code = code;

      var modelRoute = '/verifications/email/' + encodeURIComponent(username) + '/code/' + encodeURIComponent(code); // code is numeric but we're going to uriencode it anyway
      this.username = username;

      var theurl = this.be_url;
      var url = theurl + modelRoute;
      this.$http.get(url).then(function (response) {
        this.updateStateEngine('NewPasswordCreation', true);
        $('#modalLogin').modal('show');
        $('#dontHaveAccount').attr("aria-expanded", true);
        $('#dontHaveAccount').addClass('in');
      });
    },

    onVerificationCodeEmail: function onVerificationCodeEmail(code, username) {
      var verificationCode = code;
      var modelRoute = '/verifications/email/' + encodeURIComponent(username) + '/code/' + encodeURIComponent(code);

      var theurl = this.be_url;
      var url = theurl + modelRoute;

      this.$http.get(url).then(function (response, error) {
        this.username = username;
        this.store('username', this.username);
        this.email = username;
        this.code = verificationCode;
        this.store('verificationCode', this.code);
        this.store('email', this.email);
        this.fromEmailLink = true;
        this.internal = false;

        this.readUserRole(this.username);
      }, function (error) {
        this.loginFailed = true;
        this.loggedIn = false;
        this.store('loggedIn', this.loggedIn);
        $('#modalLogin').modal('show');
        this.updateStateEngine('InvalidKey', true);
        $('#dontHaveAccount').attr("aria-expanded", true);
        $('#dontHaveAccount').addClass('in');
      });
    },

    onVerificationCode: function onVerificationCode() {
      var verificationCode = $('#verificationCode').val().trim();
      this.code = verificationCode;
      var modelRoute = '/verifications/email/' + encodeURIComponent(this.username) + '/code/' + encodeURIComponent(verificationCode);
      var theurl = this.be_url;
      var url = theurl + modelRoute;

      this.$http.get(url).then(function (response) {
        this.internal = false;
        this.fromEmailLink = false;

        switch (this.loginState) {
          case "PasswordSent":
            this.updateStateEngine('NewPasswordCreation', true);
            $('#modalLogin').modal('show');
            $('#dontHaveAccount').attr("aria-expanded", true);
            $('#dontHaveAccount').addClass('in');
            break;

          case "InvalidKey":
            if (this.passwordSent == true) {
              this.updateStateEngine('NewPasswordCreation', true);
              $('#modalLogin').modal('show');
              $('#dontHaveAccount').attr("aria-expanded", true);
              $('#dontHaveAccount').addClass('in');
            } else {
              this.updateStateEngine('EmailFound', true);
              $('#modalLogin').modal('hide');
              $('#modalStudentProfile').modal('show');
            }
            break;

          default:
            //for initial account creation
            this.updateStateEngine('EmailFound', true);
            $('#modalLogin').modal('hide');
            $('#modalStudentProfile').modal('show');
        }
      }, function (response) {
        $('#modalLogin').modal('show');
        this.updateStateEngine('InvalidKey', true);
        $('#dontHaveAccount').attr("aria-expanded", true);
        $('#dontHaveAccount').addClass('in');
      });
    },

    onResetPassword: function onResetPassword() {
      this.updateStateEngine('PasswordSent', true);
      this.passwordSent = true;
      var modelRoute = '/verifications/password/' + encodeURIComponent(this.username);
      var url = this.be_url;
      var fileUrl = url + modelRoute;
      this.$http.post(fileUrl, {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
      });
    },

    onChangePassword: function onChangePassword() {
      this.password = $("#thePassword").val().trim();
      var url = this.fomsso_url + "/reset";
      this.store('username', this.username);
      var credentials = { 'username': this.username, 'password': this.password };
      this.$http.post(url, credentials, { headers: { 'Content-Type': 'text/plain' } }).then(function (response) {
        this.processLinkLogin(this.username, this.password);
      });
    },

    processLinkLogin: function processLinkLogin(username, password) {
      var application = "TSS";
      var url = this.fomsso_url + "/auth";
      var credentials = { 'username': username, 'password': password, 'application': application };

      this.$http.post(url, credentials).then(function (response) {
        // success callback
        this.token = response.headers('token');

        this.username = username;
        this.store('username', username);
        $('#modalLogin').modal('hide');
        this.loggedIn = true;
        this.store('loggedIn', this.loggedIn);
        this.loginFailed = false;
        this.readUserRole(this.username);
      }, function (response) {
        console.log('login failed');
        console.log(response);
        this.loginFailed = true;
        console.log('this.loginFailed ' + this.loginFailed);
        this.updateStateEngine('EmailNotFound', true);
      });
    },

    getMessageList: function getMessageList() {
      var modelRoute = '/conversations';
      var fileUrl = this.be_url + modelRoute;

      this.$http.get(fileUrl).then(function (response) {
        // success callback
        var messageList = response.data;

        switch (this.role) {
          case "student":
            this.getStudentConversations(messageList);
            break;

          case "researcher":
            this.getResearcherConversations(messageList);
        }
      });
    },

    getResearcherConversations: function getResearcherConversations(messageList) {
      var messageForThisResearcher;
      var studentTalkedToResearcher = false;
      this.conversationResearchers = [];

      var _iteratorNormalCompletion13 = true;
      var _didIteratorError13 = false;
      var _iteratorError13 = undefined;

      try {
        for (var _iterator13 = this.researchers[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
          var researcher = _step13.value;

          if (researcher.id === this.userId) {
            var researcherID = parseInt(researcher.id);
            messageForThisResearcher = messageList.filter(function (item) {
              item.researcher_uniweb_number === researcherID;
            });

            if (messageForThisResearcher.length > 0) {
              this.hasConversations = true;
              this.store('hasConversations', this.hasConversations);
              var conversations = this.groupBy(messageForThisResearcher, function (item) {
                return [item.researcher_uniweb_number, item.student_username];
              });
              var researcherId;
              var studentname;
              var student_username;
              var studentArr = [];
              var studentObj = {};
              var unreadCount;
              var allUnreadCount = 0;
              var mostRecentUpdate;
              var studentHasReplied;
              var firstTimeThroughLoop;

              var _iteratorNormalCompletion14 = true;
              var _didIteratorError14 = false;
              var _iteratorError14 = undefined;

              try {
                for (var _iterator14 = conversations[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                  var conversation = _step14.value;

                  firstTimeThroughLoop = true;
                  studentHasReplied = false;
                  unreadCount = 0;

                  var _iteratorNormalCompletion15 = true;
                  var _didIteratorError15 = false;
                  var _iteratorError15 = undefined;

                  try {
                    for (var _iterator15 = conversation[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                      var message = _step15.value;


                      if (message.is_from_Student === true) {
                        studentHasReplied = true;
                      }
                      if (message.read_date === null && message.is_from_student === true) {
                        unreadCount += 1;
                        allUnreadCount += 1;
                      }
                      if (firstTimeThroughLoop) {
                        firstTimeThroughLoop = false;
                        mostRecentUpdate = message.sent_date;
                        student_username = message.student_username;
                        researcherId = this.userId;
                      }
                      studentname = message.student_name;
                      student_username = message.student_username;
                      studentObj = { studentname: studentname, student_username: student_username, studentHasReplied: studentHasReplied, mostRecentUpdate: mostRecentUpdate, unreadCount: unreadCount };

                      studentArr.push(studentObj);
                    } //end of message of conversation
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

                  conversation['talkedWith'] = studentObj;
                  conversation['name'] = studentname;
                  conversation['username'] = student_username;
                } // end of conversation of conversation

                //sort conversations in reverse chronological order by most recent update
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

              conversations.sort(function (a, b) {
                var x = a['talkedWith']['mostRecentUpdate'];
                var y = b['talkedWith']['mostRecentUpdate'];
                return x < y ? 1 : x > y ? -1 : 0;
              });

              researcher['conversations'] = conversations;
              researcher['talkedWith'] = studentArr;

              this.allUnreadCount = allUnreadCount;
              this.store('allUnreadCount', this.allUnreadCount);

              researcher['newcounter'] = allUnreadCount;
              if (allUnreadCount > 0) {
                researcher.isUnread = true;
              } else {
                researcher.isUnread = false;
              }
            } else {
              researcher.isUnread = false;
            } // end of messageForThisResearcher
            this.conversationResearchers.push(researcher);
          } // end researcher.id === this.userId
        } // end of var researcher of this.researchers
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

    getStudentConversations: function getStudentConversations(messageList) {
      var messagesForThisStudent;
      var theResearcherTalkedToStudent = false;
      this.studentConversations = [];

      if (this.studentProfile) {
        var _iteratorNormalCompletion16 = true;
        var _didIteratorError16 = false;
        var _iteratorError16 = undefined;

        try {
          for (var _iterator16 = this.studentProfile[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
            var student = _step16.value;

            messagesForThisStudent = messageList.filter(function (item) {
              item.student_username === this.username;
            });

            if (messagesForThisStudent.length > 0) {
              this.hasConversations = true;
              this.store('hasConversations', this.hasConversations);

              var conversations = this.groupBy(messagesForThisStudent, function (item) {
                return [item.researcher_uniweb_number];
              });

              var researcherid;
              var conversationArr = [];
              var conversationObj = {};
              var researcherId;
              var researcherName;
              var researcherPositionTitle;
              var researcherAcademicUnit;
              var studentUsername;
              var researcherHasReplied;
              var firstTimeThroughLoop;
              var unreadCount;
              var allUnreadCount = 0;
              var mostRecentUpdate;

              var _iteratorNormalCompletion17 = true;
              var _didIteratorError17 = false;
              var _iteratorError17 = undefined;

              try {
                for (var _iterator17 = conversations[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                  var conversation = _step17.value;

                  firstTimeThroughLoop = true;
                  researcherHasReplied = false;
                  unreadCount = 0;

                  var _iteratorNormalCompletion18 = true;
                  var _didIteratorError18 = false;
                  var _iteratorError18 = undefined;

                  try {
                    for (var _iterator18 = conversation[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                      var message = _step18.value;


                      if (message.is_from_student === false) {
                        researcherHasReplied = true;
                      }

                      if (message.read_date === null && message.is_from_student === false) {
                        unreadCount += 1;
                        allUnreadCount += 1;
                      }

                      if (firstTimeThroughLoop) {
                        firstTimeThroughLoop = false;
                        mostRecentUpdate = message.sent_date;
                        researcherid = message.researcher_uniweb_number;
                        studentUsername = message.student_username;

                        var _iteratorNormalCompletion19 = true;
                        var _didIteratorError19 = false;
                        var _iteratorError19 = undefined;

                        try {
                          for (var _iterator19 = this.researchers[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                            var researcher = _step19.value;

                            if (researcher.id == researcherid) {
                              // Use double-equals to allow string-to-integer comparison
                              researcherName = researcher.membership_information.first_name + ' ' + researcher.membership_information.last_name;
                              researcherPositionTitle = researcher.membership_information.position_title[1];
                              researcherAcademicUnit = researcher.membership_information.academic_unit[1];
                              break;
                            } // End of if (researcher.id == researcherid)
                          } // End of for (var researcher of this.researchers)
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
                      } else {
                        if (message.sent_date > mostRecentUpdate) {
                          mostRecentUpdate = message.sent_date;
                        } // End of if (message.sent_date > mostRecentUpdate)
                      } // End of if (firstTimeThroughLoop)
                    } // End of for (var message of conversation)
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

                  conversationObj = {
                    researcherid: researcherid,
                    researcherName: researcherName,
                    researcherPositionTitle: researcherPositionTitle,
                    researcherAcademicUnit: researcherAcademicUnit,
                    researcherHasReplied: researcherHasReplied,
                    mostRecentUpdate: mostRecentUpdate,
                    unreadCount: unreadCount
                  };
                  conversationArr.push(conversationObj);
                  conversation['talkedWith'] = conversationObj;

                  if (researcherid == this.clickedResearcherId) {
                    theResearcherTalkedToStudent = true;
                  } // End of if (message.researcherid == this.clickedResearcherId)
                } // End of for (var conversation of conversations)

                // Sort conversations in reverse chronological order by most recent update
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

              conversations.sort(function (a, b) {
                var x = a['talkedWith']['mostRecentUpdate'];var y = b['talkedWith']['mostRecentUpdate'];
                return x < y ? 1 : x > y ? -1 : 0;
              });

              student['conversations'] = conversations;
              student['talkedWith'] = conversationArr;
              this.studentConversations.push(student);

              this.allUnreadCount = allUnreadCount;
              this.store('allUnreadCount', this.allUnreadCount);
              student['newCounter'] = allUnreadCount;

              if (allUnreadCount > 0) {
                student.isUnread = true;
              } else {
                student.isUnread = false;
              }
            } else {
              student.isUnread = false;
            } // End of if (messagesForThisStudent.length > 0)
          } // End of for (var student of this.studentProfile)
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
      } // End of if (this.studentProfile)
      this.theResearcherTalkedToStudent = theResearcherTalkedToStudent;
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

    checkProgramRadio: function checkProgramRadio() {
      if (this.programAdmitted != 0) {
        this.checkedYes = true;
        this.checkedNo = false;
        $('#StudentProfile #admittedToProgram').find('select').val(this.programAdmitted).change();
      } else {
        this.checkedYes = false;
        this.checkedNo = true;
      }
    },

    processUniwebFeed: function processUniwebFeed() {
      // called once by getResearchers
      var modelRoute = '/researchers';
      var urlRoute = this.be_url + modelRoute;
      this.$http.get(urlRoute).then(function (response, err) {
        // success callback
        var _iteratorNormalCompletion20 = true;
        var _didIteratorError20 = false;
        var _iteratorError20 = undefined;

        try {
          for (var _iterator20 = response.data[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
            var researcher = _step20.value;

            this.processResearcherAvailability(researcher["uniweb_number"], researcher["available_date"]);
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

        this.buildResearcherList(this.researchers).then(function (response) {
          vm.researcherList = response;
        }, function (error) {
          console.error("Unable to build researcher list", error);
          console.log(response);
        });
      }, function (err) {
        console.log('error ' + err);
        console.log(err.status);
      });

      var _iteratorNormalCompletion21 = true;
      var _didIteratorError21 = false;
      var _iteratorError21 = undefined;

      try {
        for (var _iterator21 = this.researchers[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
          var researcher = _step21.value;

          this.$set(researcher, 'selected', true);
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

      this.researchersFiltered = this.researchers;
    },

    onRefreshSearch: function onRefreshSearch() {
      var matchingResearchers = new Set();
      var hasSearch;
      var freeTextSearchString;
      var searchTerms;
      var freeTextSet;
      var researchInterestSet;
      var researchersFiltered;

      freeTextSearchString = $('#freeTextSearch').val();
      if (freeTextSearchString != '') {
        // User has done a free text search
        hasSearch = true;
        searchTerms = vm.buildSearchterms();
        freeTextSet = intersectFreeTextTerms(searchTerms);

        if (this.interestsChoices.length > 0) {
          // User has done a free text search AND selected research interests
          researchInterestSet = unionResearchInterests();
          matchingResearchers = intersect(researchInterestSet, freeTextSet);
        } else {
          // Free text search but no research interests
          matchingResearchers = freeTextSet;
        }
      } else {
        // No free text search
        if (this.interestsChoices.length > 0) {
          // User has selected research interests
          hasSearch = true;
          researchInterestSet = unionResearchInterests();
          matchingResearchers = researchInterestSet;
        } else {
          // No search terms
          hasSearch = false;
        }
      }

      if (hasSearch == true) {
        researchersFiltered = [].concat(_toConsumableArray(matchingResearchers));
        // Sort list by last name and first name before returning it
        researchersFiltered.sort(function (a, b) {
          if (a['membership_information']['last_name'] < b['membership_information']['last_name']) {
            return -1;
          } else if (a['membership_information']['last_name'] > b['membership_information']['last_name']) {
            return 1;
          } else {
            // Same last name, look at first name
            if (a['membership_information']['first_name'] < b['membership_information']['first_name']) {
              return -1;
            } else if (a['membership_information']['first_name'] > b['membership_information']['first_name']) {
              return 1;
            } else {
              // Same last name and first name, look at ID
              return parseInt(b['id']) - parseInt(a['id']);
            }
          }
        });
      } else {
        researchersFiltered = this.researchers;
      }
      return researchersFiltered;

      function unionResearchInterests() {
        //loop through the terms
        var _iteratorNormalCompletion22 = true;
        var _didIteratorError22 = false;
        var _iteratorError22 = undefined;

        try {
          for (var _iterator22 = vm.interestsChoices[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
            var choice = _step22.value;

            //find the matching set
            var researchersMatching_ThisTerm = vm.researchersMasterInterestsList[choice.theIndex];
            matchingResearchers = union(matchingResearchers, researchersMatching_ThisTerm);
          } //end loop through interestsChoices
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

        return matchingResearchers;
      } //end unionResearchInterests

      function intersectFreeTextTerms(terms) {
        var matchingResearchers;

        //Check if there are keywords in the freetext
        var firstTimeThroughLoop = true; //set first flag the first time we go through the loop

        //loop through the terms
        var _iteratorNormalCompletion23 = true;
        var _didIteratorError23 = false;
        var _iteratorError23 = undefined;

        try {
          for (var _iterator23 = terms[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
            var term = _step23.value;


            //find the matching set
            var researchersMatching_ThisTerm = vm.researcherList['tss_' + term];

            if (!researchersMatching_ThisTerm) {
              // This term doesn't match any researchers. That's enough to result in an empty set.
              matchingResearchers = new Set();
              break;
            } else {
              if (firstTimeThroughLoop == true) {
                matchingResearchers = researchersMatching_ThisTerm;
                firstTimeThroughLoop = false;
              } else {
                matchingResearchers = intersect(matchingResearchers, researchersMatching_ThisTerm);
              }

              if (!matchingResearchers) {
                //if set is empty
                break;
              }
            }
          } //end loop through terms
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

        return matchingResearchers;
      } //end functionintersectFreeTextTerms

      function union(setA, setB) {
        var union = new Set(setA);
        var _iteratorNormalCompletion24 = true;
        var _didIteratorError24 = false;
        var _iteratorError24 = undefined;

        try {
          for (var _iterator24 = setB[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
            var elem = _step24.value;

            union.add(elem);
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

        return union;
      } //end union

      function intersect(setA, setB) {
        var intersect = new Set([].concat(_toConsumableArray(setA)).filter(function (x) {
          return setB.has(x);
        }));
        return intersect;
      } //end intersect
    },

    parseJwt: function parseJwt(jwtToken) {
      var base64Url = jwtToken.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    },

    logout: function logout() {
      localStorage.clear();
      sessionStorage.clear();
      this.token = {};
      this.loggedIn = false;
      this.loginFailed = false;
      this.passwordSent = false;
      this.admitted = '';
      this.createAccountFailed = false;
      this.username = '';
      this.messageSent = false;
      this.email = '';
      this.profile = false;
      this.name = '';
      this.programAdmitted = 0;
      this.isAdmittedToProgram = false;
      this.studentConversations = [];
      this.studentProfile = [];
      this.studentTranscripts = [];
      this.studentCv = [];
      this.studentHasCv = false;
      this.studentHasTranscripts = false;
      this.cvStudent = {};
      this.transcriptsStudent = {};
      this.hasConversations = false;
      this.theResearcherTalkedToStudent = false;
      this.updateStateEngine('notStarted', true);
      // Clear search
      this.clearInterestsChoices();
      this.onFilterFreetextClear(); // This function also updates the search results

      if (this.role == "admin") {
        // We haven't called getResearchers yet for admins, so do it now
        this.getResearchers();
      }
      this.role = '';
    },

    readUserRole: function readUserRole(username) {
      var modelRoute = '/roles/' + encodeURIComponent(username);
      var url = this.be_url + modelRoute;

      this.$http.get(url).then(function (response) {
        // success callback
        var userRole = response;
        this.processRole(userRole);
      }, function (response) {
        //error callback
        console.log('error getting role ' + response.status);
        console.log(response);
      });
    },

    processRole: function processRole(userRole) {
      this.role = userRole.data.role;

      switch (this.role) {
        case 'student':
          this.store('role', this.role);

          if (this.internal) {
            this.loggedIn = true;
            this.store('loggedIn', this.loggedIn);
            this.getStudent(this.username);
          } else {
            // Not an internal student

            if (this.fromEmailLink) {
              //coming from email link with verification code
              this.getStudent(this.username);
            } else {
              //coming from UI

              if (this.loggedIn) {
                // logged in
                this.getStudent(this.username);
              } else {
                // not logged in
                this.updateStateEngine('EmailFound', true);
                $('#dontHaveAccount').attr("aria-expanded", true);
                $('#dontHaveAccount').addClass('in');
              } // end of if (this.loggedIn)
            } // end of if (this.fromEmailLink)
          } // end of if (this.internal)
          break;

        case 'researcher':
          this.store('role', this.role);

          $('#modalLogin').modal('hide');
          this.userId = userRole.data.id;
          this.store('userId', this.userId);
          this.loggedIn = true;
          this.store('loggedIn', this.loggedIn);
          this.getMessageList();
          break;

        case 'admin':
          this.store('role', this.role);

          //show admin screen
          $('#modalLogin').modal('hide');
          this.loggedIn = true;
          this.store('loggedIn', this.loggedIn);
          this.getStudentsInSystem();
          this.getSupervisors();
          this.getStudentProfileCreated();
          break;

        default:
          //role is empty
          this.profile = false;
          // this.retrieve('verificationCode', this.code);

          if (this.internal) {
            $('#modalLogin').modal('hide');
            $('#modalStudentProfile').modal('show');
          } else {
            // not internal
            if (this.fromEmailLink) {
              $('#modalLogin').modal('hide');
              $('#modalStudentProfile').modal('show');
            } else {
              // not from email link
              this.updateStateEngine('EmailNotFound', false);
              $('#modalLogin').modal('show');
              $('#dontHaveAccount').attr("aria-expanded", true);
              $('#dontHaveAccount').addClass('in');
            }
          }
      }
    },

    getStudentProfileCreated: function getStudentProfileCreated() {
      var today = new Date();
      today = this.formatDate(today);
      var makeDate = new Date(today);
      var prev = new Date(makeDate.getFullYear() - 1, makeDate.getMonth() + 1);
      this.startDate = this.formatDate(prev);
      this.store('startDate', this.startDate);
      this.endDate = today;
      this.store('endDate', this.endDate);
      var modelRoute = '/reports/profiles-by-month/start/' + encodeURIComponent(this.startDate) + '/end/' + encodeURIComponent(this.endDate);
      var theurl = this.be_url + modelRoute;

      this.$http.get(theurl).then(function (response) {
        // success callback
        this.studentProfilesByMonth = response.data;
      }, function (response) {
        //error callback
        console.log('error getting all student profiles ');
        console.log(response);
        console.log(response.data);
        console.log(response.status);
      });
    },

    getStudentsInSystem: function getStudentsInSystem() {
      var modelRoute = '/reports/students';
      var theurl = this.be_url + modelRoute;

      this.$http.get(theurl).then(function (response, err) {
        // success callback
        this.studentInSystem = response.data;
      }, function (err) {
        //error callback
        console.log('error getting all student in system ');
        console.log(err);
        console.log(err.data);
        console.log(err.status);
      });
    },

    getSupervisors: function getSupervisors() {
      var modelRoute = '/reports/supervisors';
      var theurl = this.be_url + modelRoute;

      this.$http.get(theurl).then(function (response, err) {
        // success callback
        this.supervisorsInSystem = response.data;
      }, function (err) {
        //error callback
        console.log('error getting all supervisors in system ');
        console.log(err);
        console.log(err.data);
        console.log(err.status);
      });
    },

    authorize: function authorize(username, password) {
      this.username = $("#username").val().toLowerCase().trim();
      this.password = $("#password").val().trim();
      var application = "TSS";
      var url = this.fomsso_url + "/auth";
      var credentials = { 'username': this.username, 'password': this.password, 'application': application };

      this.$http.post(url, credentials).then(function (response) {
        // success callback
        this.store('username', this.username);
        this.token = response.headers('token');
        var user = this.parseJwt(this.token);
        this.email = user.email;
        this.store('email', this.email);
        this.name = user.name;
        this.store('name', this.name);
        this.internal = true;
        this.store('internal', this.internal);
        this.loginFailed = false;
        this.readUserRole(this.username);
      }, function (response) {
        //error callback
        this.loginFailed = true;
        this.internal = true;
        $('#internalLoginFailedAlert').show();
        this.loggedIn = false;
        this.store('loggedIn', this.loggedIn);
        return this.loginFailed, this.loggedIn;
      });

      this.rememberMe = $('#rememberMe').checked;
      this.store('rememberMe', this.rememberMe);
    },

    extractAlphaFilter: function extractAlphaFilter() {
      // for each researcher
      // extract 1st letter of last name
      // enable corresponding letterbutton in html
      // Creating object listing the letters of the alphabet
      var alphabet = 'ABCDEFGHIJKLMNOPQRTSUVWXYZ'.split('');
      var alphabetButtons = {};

      var alphaButtonArray = [];
      var _iteratorNormalCompletion25 = true;
      var _didIteratorError25 = false;
      var _iteratorError25 = undefined;

      try {
        for (var _iterator25 = alphabet[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
          var letter = _step25.value;

          alphabetButtons = { letter: letter, isAvailable: false };
          alphaButtonArray.push(alphabetButtons);
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

      var researcherLastInitials = [];
      var _iteratorNormalCompletion26 = true;
      var _didIteratorError26 = false;
      var _iteratorError26 = undefined;

      try {
        for (var _iterator26 = this.researchersFiltered[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
          var researcher = _step26.value;

          var firstchar = researcher.membership_information.last_name.charAt(0);
          if (!_.includes(researcherLastInitials, firstchar)) {
            researcherLastInitials.push(firstchar);
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
        for (var _iterator27 = alphaButtonArray[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
          var alphabutton = _step27.value;

          //check if it matches with the researchersLastInitials
          if (_.includes(researcherLastInitials, alphabutton)) {
            alphabutton.isAvailable = true;
          } else {
            alphabutton.isAvailable = false;
          }
          this.alphabuttons.push(alphabutton);
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

          if (_.includes(researcherLastInitials, alphabutton.letter)) {
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

    buildResearcherList: function buildResearcherList(listOfResearchers) {
      return new Promise(function (resolve, reject) {
        var researcherList = new Set(); //initialize set of researchers

        var _iteratorNormalCompletion29 = true;
        var _didIteratorError29 = false;
        var _iteratorError29 = undefined;

        try {
          for (var _iterator29 = listOfResearchers[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
            var researcher = _step29.value;

            var terms = new Set(); //initialize set of terms for this researcher

            //begin search in interests
            if (researcher.research_interests) {
              var _iteratorNormalCompletion30 = true;
              var _didIteratorError30 = false;
              var _iteratorError30 = undefined;

              try {

                for (var _iterator30 = researcher.research_interests[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
                  var researcherInterest = _step30.value;

                  var interest = researcherInterest.interest[1];

                  var _iteratorNormalCompletion31 = true;
                  var _didIteratorError31 = false;
                  var _iteratorError31 = undefined;

                  try {
                    for (var _iterator31 = tokenizeString(interest)[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
                      var token = _step31.value;

                      terms.add(token);
                    }
                  } catch (err) {
                    _didIteratorError31 = true;
                    _iteratorError31 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion31 && _iterator31.return) {
                        _iterator31.return();
                      }
                    } finally {
                      if (_didIteratorError31) {
                        throw _iteratorError31;
                      }
                    }
                  }
                } //end of loop through interests
              } catch (err) {
                _didIteratorError30 = true;
                _iteratorError30 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion30 && _iterator30.return) {
                    _iterator30.return();
                  }
                } finally {
                  if (_didIteratorError30) {
                    throw _iteratorError30;
                  }
                }
              }
            }

            if (researcher.biography != null) {
              //search in interests
              var bioEn = researcher.biography.academic_biography.en;
              var bioFr = researcher.biography.academic_biography.fr;

              if (bioEn) {
                var _iteratorNormalCompletion32 = true;
                var _didIteratorError32 = false;
                var _iteratorError32 = undefined;

                try {
                  for (var _iterator32 = tokenizeString(bioEn)[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
                    var token = _step32.value;

                    terms.add(token);
                  }
                } catch (err) {
                  _didIteratorError32 = true;
                  _iteratorError32 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion32 && _iterator32.return) {
                      _iterator32.return();
                    }
                  } finally {
                    if (_didIteratorError32) {
                      throw _iteratorError32;
                    }
                  }
                }
              }

              if (bioFr) {
                var _iteratorNormalCompletion33 = true;
                var _didIteratorError33 = false;
                var _iteratorError33 = undefined;

                try {
                  for (var _iterator33 = tokenizeString(bioFr)[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
                    var token = _step33.value;

                    terms.add(token);
                  }
                } catch (err) {
                  _didIteratorError33 = true;
                  _iteratorError33 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion33 && _iterator33.return) {
                      _iterator33.return();
                    }
                  } finally {
                    if (_didIteratorError33) {
                      throw _iteratorError33;
                    }
                  }
                }
              }
            }

            if (researcher.research_description != null) {
              var descriptionEn = researcher.research_description.research_description.en;
              var descriptionFr = researcher.research_description.research_description.fr;

              if (descriptionEn) {
                var _iteratorNormalCompletion34 = true;
                var _didIteratorError34 = false;
                var _iteratorError34 = undefined;

                try {
                  for (var _iterator34 = tokenizeString(descriptionEn)[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
                    var token = _step34.value;

                    terms.add(token);
                  }
                } catch (err) {
                  _didIteratorError34 = true;
                  _iteratorError34 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion34 && _iterator34.return) {
                      _iterator34.return();
                    }
                  } finally {
                    if (_didIteratorError34) {
                      throw _iteratorError34;
                    }
                  }
                }
              }

              if (descriptionFr) {
                var _iteratorNormalCompletion35 = true;
                var _didIteratorError35 = false;
                var _iteratorError35 = undefined;

                try {
                  for (var _iterator35 = tokenizeString(descriptionFr)[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
                    var token = _step35.value;

                    terms.add(token);
                  }
                } catch (err) {
                  _didIteratorError35 = true;
                  _iteratorError35 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion35 && _iterator35.return) {
                      _iterator35.return();
                    }
                  } finally {
                    if (_didIteratorError35) {
                      throw _iteratorError35;
                    }
                  }
                }
              }
            }

            if (researcher.selected_publications != null) {
              var articles = researcher.selected_publications.journal_articles[0].article_title;

              if (articles) {
                var _iteratorNormalCompletion36 = true;
                var _didIteratorError36 = false;
                var _iteratorError36 = undefined;

                try {
                  for (var _iterator36 = tokenizeString(articles)[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
                    var token = _step36.value;

                    terms.add(token);
                  }
                } catch (err) {
                  _didIteratorError36 = true;
                  _iteratorError36 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion36 && _iterator36.return) {
                      _iterator36.return();
                    }
                  } finally {
                    if (_didIteratorError36) {
                      throw _iteratorError36;
                    }
                  }
                }
              }
            }

            if (researcher.research_funding_history != null) {
              var fundingTitle = researcher.research_funding_history[0].funding_title;

              if (fundingTitle) {
                var _iteratorNormalCompletion37 = true;
                var _didIteratorError37 = false;
                var _iteratorError37 = undefined;

                try {
                  for (var _iterator37 = tokenizeString(fundingTitle)[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
                    var token = _step37.value;

                    terms.add(token);
                  }
                } catch (err) {
                  _didIteratorError37 = true;
                  _iteratorError37 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion37 && _iterator37.return) {
                      _iterator37.return();
                    }
                  } finally {
                    if (_didIteratorError37) {
                      throw _iteratorError37;
                    }
                  }
                }
              }

              if (researcher.research_funding_history[0].project_description != null) {
                var fundingDescriptionEn = researcher.research_funding_history[0].project_description.english;
                var fundingDescriptionFr = researcher.research_funding_history[0].project_description.french;

                if (fundingDescriptionEn) {
                  var _iteratorNormalCompletion38 = true;
                  var _didIteratorError38 = false;
                  var _iteratorError38 = undefined;

                  try {
                    for (var _iterator38 = tokenizeString(fundingDescriptionEn)[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
                      var token = _step38.value;

                      terms.add(token);
                    }
                  } catch (err) {
                    _didIteratorError38 = true;
                    _iteratorError38 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion38 && _iterator38.return) {
                        _iterator38.return();
                      }
                    } finally {
                      if (_didIteratorError38) {
                        throw _iteratorError38;
                      }
                    }
                  }
                }

                if (fundingDescriptionFr) {
                  var _iteratorNormalCompletion39 = true;
                  var _didIteratorError39 = false;
                  var _iteratorError39 = undefined;

                  try {
                    for (var _iterator39 = tokenizeString(fundingDescriptionFr)[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
                      var token = _step39.value;

                      terms.add(token);
                    }
                  } catch (err) {
                    _didIteratorError39 = true;
                    _iteratorError39 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion39 && _iterator39.return) {
                        _iterator39.return();
                      }
                    } finally {
                      if (_didIteratorError39) {
                        throw _iteratorError39;
                      }
                    }
                  }
                }
              }
            }

            var _iteratorNormalCompletion40 = true;
            var _didIteratorError40 = false;
            var _iteratorError40 = undefined;

            try {
              for (var _iterator40 = terms[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
                var term = _step40.value;

                try {
                  if (researcherList['tss_' + term]) {
                    //if term exist in array of set
                    researcherList['tss_' + term].add(researcher);
                  } else {
                    researcherList['tss_' + term] = new Set([researcher]);
                  }
                } catch (error) {
                  console.log('an error occurred ' + error);
                  console.log(term);
                }
              }
            } catch (err) {
              _didIteratorError40 = true;
              _iteratorError40 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion40 && _iterator40.return) {
                  _iterator40.return();
                }
              } finally {
                if (_didIteratorError40) {
                  throw _iteratorError40;
                }
              }
            }
          } //end loop through researchers
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

        resolve(researcherList);
        //return researcherList;
      });
    },

    buildSearchterms: function buildSearchterms() {
      //set variable for freeText array
      var searchTerms = [];
      //grab text from input. Split comma-separated input box values into array
      var searchTerms = $('#freeTextSearch').val();
      var searchTermsTokenized = tokenizeString(searchTerms);
      return searchTermsTokenized;
    },

    onFilterFreetext: function onFilterFreetext() {
      this.researchersFiltered = this.onRefreshSearch();
      this.extractAlphaFilter();
    },

    onFilterFreetextClear: function onFilterFreetextClear() {
      $('#freeTextSearch').val('');
      this.researchersFiltered = this.onRefreshSearch();
      this.extractAlphaFilter();
    },

    translateMonths: function translateMonths(EnglishMonth) {
      // Brute force because we're only calling this twelve times.
      return EnglishMonth.replace("Feb", "fév").replace("Apr", "avr").replace("May", "mai").replace("Aug", "aoû").replace("Dec", "déc").toLowerCase();
    },

    translateLevelOfInstruction: function translateLevelOfInstruction(level_of_instruction) {
      switch (level_of_instruction) {
        case "msc":
          return this.$t("message.MSC");

        case "phd":
          return this.$t("message.PHD");

        default:
          return level_of_instruction;
      }
    },

    findInJson: function findInJson(jsonArray, code, lang) {
      var _iteratorNormalCompletion41 = true;
      var _didIteratorError41 = false;
      var _iteratorError41 = undefined;

      try {
        for (var _iterator41 = jsonArray[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
          var jsonObject = _step41.value;

          if (jsonObject.code == code && jsonObject.lang == lang) {
            return jsonObject.name;
          }
        }
      } catch (err) {
        _didIteratorError41 = true;
        _iteratorError41 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion41 && _iterator41.return) {
            _iterator41.return();
          }
        } finally {
          if (_didIteratorError41) {
            throw _iteratorError41;
          }
        }
      }

      return "";
    },

    filterAlphabetical: function filterAlphabetical(letterOfAlphabet) {
      // Possible refactor: replace this.researchersFiltered with a list of lists, populated in extractAlphaFilter
      // e.g. "['A':[researcher, researcher, researcher],'B':[researcher, researcher],...,'Z':[]"
      // and then we don't need this function.
      var returnList = [];
      var _iteratorNormalCompletion42 = true;
      var _didIteratorError42 = false;
      var _iteratorError42 = undefined;

      try {
        for (var _iterator42 = this.researchersFiltered[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
          var researcher = _step42.value;

          if (researcher.membership_information.last_name.charAt(0) == letterOfAlphabet) {
            returnList.push(researcher);
          }
        }
      } catch (err) {
        _didIteratorError42 = true;
        _iteratorError42 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion42 && _iterator42.return) {
            _iterator42.return();
          }
        } finally {
          if (_didIteratorError42) {
            throw _iteratorError42;
          }
        }
      }

      return returnList;
    }
  } //end methods
});
//# sourceMappingURL=mainEs2015.js.map
