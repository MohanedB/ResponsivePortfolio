import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { Bio as Bio_en, education as education_en, projects as projects_en, skills as skills_en } from '../../data/const';
import { Bio as Bio_fr, education as education_fr, projects as projects_fr, skills as skills_fr } from '../../data/constfr';

const translations_en = {
  ...Bio_en, ...education_en, ...projects_en, ...skills_en,

  // Nav
  About: "About", Skill: "Skills", Education: "Education", Projects: "Projects",
  Contact: "Contact", greeting: "Hi, I am", IAM: "I'm a", resumer: "Resume",
  Github: "GitHub", Language_en: "English", Language_fr: "French",
  Edudesc: "My education has been a journey of self-discovery and growth. My educational details are as follows.",
  exper5: "Experience", exper6: "My work experience as a developer and working on different companies and projects.",

  // Portfolio mode switcher
  ModeGameDev: "Game Dev",
  ModeSoftware: "Software",
  ModeSwitch: "Switch to",

  // Splash screen
  SplashTitle: "Welcome to my Portfolio",
  SplashSubtitle: "Choose how you'd like to explore my work",
  SplashGameDevLabel: "Game Developer",
  SplashGameDevDesc: "Unity, C#, Unreal Engine & game design projects",
  SplashSoftwareLabel: "Software Engineer",
  SplashSoftwareDesc: "React, Node.js, full-stack web development",

  // Hero — mode-specific roles & descriptions
  roles_software: ["Full-Stack Developer", "Web Developer", "Software Engineer"],
  roles_gamedev: ["Game Developer", "Unity Developer", "C# Programmer"],
  description_software:
    "I am a motivated and versatile developer, always eager to take on new challenges with a passion for learning. Dedicated to delivering high-quality results with a positive attitude — ready to make a meaningful contribution.",
  description_gamedev:
    "I am a passionate game development student at UQAT, specializing in Unity, Unreal Engine, C#, C++, and Blueprints. I love building interactive experiences, from 2D platformers to tower-defense games, with a strong foundation in software engineering.",

  // Skills section
  skilldesc: "Here are some of the skills I have picked up in my studies and personal projects over the past few years.",
  skill0: "Frontend", skill1: "Backend", skill2: "Tools",
  skill_gd0: "Game Engines & Languages",
  skill_gd1: "Tools & Workflow",

  // Education
  education0: "Currently finishing my technic in computer science. I have completed 5 semesters flawlessly so far with an overall R Score of 27.6. I have taken multiple courses such as java, linux, IOS, database and more.",
  education1: "Technique Computer Science", education2: "August 2020 - May 2024", education3: "Champlain College",
  education4: "Calculator", education5: "Jun 2021", education6: "A simple Calculator in C#",
  education7: "QuizApp", education8: "Nov 2022 - Dec 2022",
  education9: "Quiz app that creates random quiz using a trivia api. Calculates the score and stores it in the database",
  education10: "Paysage-Meloche", education11: "Jan 2023 - Feb 2023",
  education12: "A website designed for an outdoor company that would allow scheduling directly from the website, but also managing the workers and making legal documents",
  education13: "Pet-Clinic", education14: "Oct 2023 - Dec 2023",
  education15: "Kept working on a project that is passed down by school year after year. Worked on the calendar and filtering. Fixed some Front end issues",
  education16: "Fallen God", education17: "Jan 2022 - Mar 2022",
  education18: "A game based on greek mythology where you have a character that has to collect all the coins to open the portal to a boss while fighting off enemies and avoiding traps",
  education19: "HalalBites", education20: "Jan 2024 - Feb 2024",
  education21: "A search engine website made for people of different cultures such as muslims. The website would help these people find specific restaurants around them",
  education22: "QuickReload", education23: "Jan 13th, 2024 - Jan 14th, 2024",
  education24: "A 2D game inspired by the classic arcade game 'Asteroids' called 'QuickReload' in a team of 2 using the Unity Game Engine",
  education25: "AppDeMo", education26: "March 4th, 2024 - May 10th, 2024",
  education27: "An application that would allow the developers to create smartgroups based on their wishes. They can choose the number of devices per groups or how many groups they want to split the devices into",

  NEDU1: "UQAT Center in Montreal", NEDU2: "August 2024 - April 2027",
  NEDU3: "I am currently pursuing a bachelor's degree in video game development.",
  NEDU4: "Bachelor's degree in video game creation",

  UEDU1: "Robot Control in Unity", UEDU2: "January 28 2025",
  UEDU3: "This lab focuses on programming a robot in Unity using only scripts, without the physics engine. The robot must move forward, backward, turn, and stop via specific key inputs. Applied transformations include translations, rotations, and scaling. The wheels must rotate realistically based on user commands.",
  UEDU4: "The Great Game of War", UEDU5: "March 4 2025 - March 6 2025",
  UEDU6: "The Great Game of War is a Tower Defense game where you switch between a strategic view and tank combat.",

  // Experience
  exper1: "Full-Stack Programmer", exper2: "Montreal city",
  exper3: "March 4th - May 10th",
  exper4: "Worked on an application project that would allow the developers to create smartgroups based on their wishes. They can choose the number of devices per groups or how many groups they want to split the devices into",

  // Projects / filtering
  All: "All", FirstYear: "First Year", SecondYear: "Second Year", ThirdYear: "Third Year",
  ProjectDesc: "I have worked on a wide range of projects",
  SearchByTag: "Search by technology or project name",
  SearchHint: "Game, C#, Visual Studio, Jira, etc..",
  NoProjectsFound: "No projects found matching your search",
  Cegep: "Cegep", University: "University", Back: "Back",

  // Contact
  ContactDesc: "Feel free to reach out to me for any questions or opportunities!",
  Email: "Your Email", Name: "Your Name", Subject: "Subject", Message: "Message", Send: "Send",
  Success: "Email sent successfully!", emaileror: "Please enter an email", nameeror: "Please enter a name",
  subjecteror: "Please enter a subject", messageeror: "Please enter a message",
  invalidemailerror: "Please enter a valid Email",

  R: "R Score:",
  text: "*Click twice on the project card to be redirected",

  // ── Project modal section headings ───────────────────────────────────────
  WhatIDid: "What I Did",
  ProudCode: "Code I'm Proud Of",

  // ── Project modal: What I Did & proud code descriptions ──────────────────
  proj1_whatIDid: "I led the backend development using Node.js and MongoDB, designing the REST API and the scheduling data model. I also built the worker management dashboard in React and implemented the PDF generation for legal documents.",
  proj1_proudCodeDesc: "This route handles creating a new schedule entry while checking for conflicts — I'm proud of how clean the async/await flow turned out.",

  proj2_whatIDid: "I built the React frontend from scratch including the search UI, restaurant cards, and filter bar. I also wrote the Java Spring Boot search endpoint and the MySQL query that filters restaurants by name, cuisine, and halal certification.",
  proj2_proudCodeDesc: "This Spring Boot controller handles the full search — I'm proud that a single endpoint cleanly covers all filter combinations without a mess of conditionals.",

  proj3_whatIDid: "Inherited an existing codebase and added a calendar view for appointments. I implemented date-range filtering on the appointment list and fixed several front-end rendering bugs that had persisted across previous years.",
  proj3_proudCodeDesc: "This filter function handles the calendar range logic — I'm proud of how compact yet readable it is compared to the original sprawl.",

  proj4_whatIDid: "Built the full application solo during my internship at Montreal City. I designed the Node.js + EJS architecture, integrated the ONE UEM API to fetch device data, and implemented both splitting strategies (by count and by number of groups).",
  proj4_proudCodeDesc: "This algorithm evenly distributes devices into N groups — simple but satisfying to write cleanly in one pass.",

  proj5_whatIDid: "Built the entire calculator from scratch in C# with a XAML UI. Implemented all arithmetic operations, operator chaining, and edge-case handling (divide by zero, decimal precision).",
  proj5_proudCodeDesc: "This expression evaluator handles operator precedence properly — I'm proud I wrote it without relying on eval() or a library.",

  proj6_whatIDid: "Developed the full iOS app in Swift using SwiftUI. Integrated the Open Trivia DB API for random questions, built the scoring system, and used Firebase Firestore to persist high scores with real-time updates.",
  proj6_proudCodeDesc: "This async fetch decodes the API response and shuffles the answer choices in one clean chain — my first time doing proper async/await in Swift.",

  proj7_whatIDid: "Programmed the player controller, enemy AI state machine (patrol → chase → attack), coin pickup system, and the portal unlock trigger. I also handled all the physics-based movement and hitbox configuration.",
  proj7_proudCodeDesc: "This enemy state machine is the piece of code I'm most proud of in this project — clean enum-driven logic with no spaghetti if-chains.",

  proj8_whatIDid: "Built the core game loop: player ship movement, shooting mechanic with ammo/reload system, asteroid spawning with increasing difficulty, and the score + lives UI. The game was made in under 48 hours for a game jam.",
  proj8_proudCodeDesc: "The reload system with a visual cooldown bar was the mechanic that made the game unique — I'm proud of how it ties gameplay tension to a simple coroutine.",

  proj9_whatIDid: "Implemented all robot movement using pure Transform manipulations — no Rigidbody or physics engine. Programmed forward/backward translation, left/right rotation, and realistic wheel spinning that responds to speed and direction.",
  proj9_proudCodeDesc: "Calculating the wheel rotation from the robot's actual displacement was the math challenge I enjoyed the most in this lab.",

  proj10_whatIDid: "Implemented the dual-view system (strategy map ↔ tank combat), tower placement logic, the enemy wave spawner with scaling difficulty, and the camera transition between the two views.",
  proj10_proudCodeDesc: "The wave spawner that smoothly scales difficulty over time was my favourite part — exponential growth clamped to a max felt great to tune.",
};

const translations_fr = {
  ...Bio_fr, ...education_fr, ...projects_fr, ...skills_fr,

  // Nav
  About: "À propos", Skill: "Compétences", Education: "Éducation", Projects: "Projets",
  Contact: "Contactez Moi", greeting: "Bonjour, je suis", IAM: "Je suis un", resumer: "CV",
  Github: "GitHub", Language_en: "Anglais", Language_fr: "Français",
  Edudesc: "Mon éducation a été un voyage de découverte de soi et de croissance. Voici les détails de mon parcours éducatif",
  exper5: "Expérience", exper6: "Mon expérience de travail en tant que développeur.",

  // Portfolio mode switcher
  ModeGameDev: "Jeux Vidéo",
  ModeSoftware: "Logiciel",
  ModeSwitch: "Passer à",

  // Splash screen
  SplashTitle: "Bienvenue sur mon Portfolio",
  SplashSubtitle: "Choisissez comment explorer mon travail",
  SplashGameDevLabel: "Développeur de Jeux",
  SplashGameDevDesc: "Unity, C#, Unreal Engine & conception de jeux",
  SplashSoftwareLabel: "Ingénieur Logiciel",
  SplashSoftwareDesc: "React, Node.js, développement web full-stack",

  // Hero — mode-specific roles & descriptions
  roles_software: ["Développeur Full-Stack", "Développeur Web", "Ingénieur Logiciel"],
  roles_gamedev: ["Développeur de Jeux", "Développeur Unity", "Programmeur C#"],
  description_software:
    "Je suis un développeur motivé et polyvalent, toujours prêt à relever de nouveaux défis avec une passion pour l'apprentissage. Dédié à fournir des résultats de haute qualité avec une attitude positive.",
  description_gamedev:
    "Je suis un étudiant passionné en développement de jeux vidéo à l'UQAT, spécialisé en Unity, Unreal Engine, C#, C++ et Blueprints. J'adore créer des expériences interactives, des platformers 2D aux jeux tower-defense, avec une solide base en génie logiciel.",

  // Skills section
  skilldesc: "Voici certaines des compétences que j'ai acquises dans mes études et projets personnels.",
  skill0: "Frontend", skill1: "Backend", skill2: "Outils",
  skill_gd0: "Moteurs & Langages",
  skill_gd1: "Outils & Flux de travail",

  // Education
  education0: "J'ai terminé ma technique en informatique avec succès, avec une cote R globale de 27,6.",
  education1: "Technique Informatique", education2: "Août 2020 - Mai 2024", education3: "Collège Champlain",
  education4: "Calculatrice", education5: "Juin 2021", education6: "Une simple calculatrice en C#",
  education7: "QuizApp", education8: "nov. 2022 - déc. 2022",
  education9: "Application de quiz qui crée un quiz aléatoire en utilisant une API de trivia. Calcule le score et le stocke dans la base de données",
  education10: "Paysage-Meloche", education11: "janv. 2023 - févr. 2023",
  education12: "Un site web conçu pour une entreprise extérieure qui permettrait de planifier directement à partir du site web, mais aussi de gérer les travailleurs et de créer des documents juridiques",
  education13: "Pet-Clinic", education14: "oct. 2023 - déc. 2023",
  education15: "A continué à travailler sur un projet transmis par l'école année après année. A travaillé sur le calendrier et le filtrage.",
  education16: "Fallen God", education17: "janv. 2022 - mars 2022",
  education18: "Un jeu basé sur la mythologie grecque où vous avez un personnage qui doit collecter toutes les pièces pour ouvrir le portail vers un boss tout en combattant les ennemis",
  education19: "HalalBites", education20: "janv. 2024 - févr. 2024",
  education21: "Un site web de moteur de recherche créé pour des personnes de différentes cultures telles que les musulmans",
  education22: "QuickReload", education23: "13 janvier 2024 - 14 janvier 2024",
  education24: "Un jeu 2D inspiré du jeu d'arcade classique «Asteroids» dans une équipe de 2 en utilisant Unity",
  education25: "AppDeMo", education26: "4 mars 2024 - 10 mai 2024",
  education27: "Une application permettant aux développeurs de créer des smartgroups selon leurs souhaits",

  NEDU1: "Centre UQAT à Montréal", NEDU2: "Août 2024 - Avril 2027",
  NEDU3: "Je poursuis actuellement un baccalauréat en création de jeux vidéo.",
  NEDU4: "Baccalauréat en création de jeux vidéo",

  UEDU1: "Contrôle d'un Robot en Unity", UEDU2: "28 janvier 2025",
  UEDU3: "Ce laboratoire vise à programmer un robot en Unity en utilisant uniquement des scripts, sans moteur physique. Le robot doit avancer, reculer, tourner et stopper via des touches prédéfinies.",
  UEDU4: "The Great Game of War", UEDU5: "4 Mars 2025 - 6 Mars 2025",
  UEDU6: "The Great Game of War est un Tower Defense où vous alternez entre vue stratégique et combat en tank.",

  // Experience
  exper1: "Programmeur Full-Stack", exper2: "Ville de Montréal",
  exper3: "4 mars - 10 mai",
  exper4: "Travaillé sur un projet d'application permettant aux développeurs de créer des smartgroups selon leurs souhaits.",

  // Projects / filtering
  All: "Tous", FirstYear: "Première Année", SecondYear: "Deuxième Année", ThirdYear: "Troisième Année",
  ProjectDesc: "J'ai travaillé sur un large éventail de projets",
  SearchByTag: "Rechercher par technologie ou nom de projet",
  SearchHint: "Game, C#, Visual Studio, Jira, etc..",
  NoProjectsFound: "Aucun projet n'a été trouvé",
  Cegep: "Cégep", University: "Université", Back: "Retour",

  // Contact
  ContactDesc: "N'hésitez pas à me contacter pour toute question ou opportunité!",
  Email: "Votre Email", Name: "Votre Nom", Subject: "Sujet", Message: "Message", Send: "Envoyer",
  Success: "Email envoyé avec succès!", emaileror: "Veuillez entrer un email", nameeror: "Veuillez entrer un nom",
  subjecteror: "Veuillez entrer un sujet", messageeror: "Veuillez entrer un message",
  invalidemailerror: "Veuillez entrer un email valide",

  R: "Cote R:",
  text: "*Cliquez deux fois sur la carte du projet pour être redirigé",

  // ── Project modal section headings ───────────────────────────────────────
  WhatIDid: "Ce que j'ai fait",
  ProudCode: "Code dont je suis fier",

  // ── Project modal: What I Did & proud code descriptions ──────────────────
  proj1_whatIDid: "J'ai dirigé le développement backend avec Node.js et MongoDB, en concevant l'API REST et le modèle de données de planification. J'ai également construit le tableau de bord de gestion des employés en React et implémenté la génération de PDF pour les documents légaux.",
  proj1_proudCodeDesc: "Cette route gère la création d'une entrée de planning tout en vérifiant les conflits — je suis fier de la clarté du flux async/await.",

  proj2_whatIDid: "J'ai construit le frontend React de zéro, incluant l'interface de recherche, les cartes de restaurants et la barre de filtres. J'ai aussi écrit l'endpoint de recherche Spring Boot et la requête MySQL filtrant par nom, cuisine et certification halal.",
  proj2_proudCodeDesc: "Ce contrôleur Spring Boot gère la recherche complète — je suis fier qu'un seul endpoint couvre proprement toutes les combinaisons de filtres.",

  proj3_whatIDid: "J'ai repris une base de code existante et ajouté une vue calendrier pour les rendez-vous. J'ai implémenté le filtrage par plage de dates et corrigé plusieurs bugs d'affichage front-end persistants depuis des années.",
  proj3_proudCodeDesc: "Cette fonction de filtre gère la logique de plage calendrier — je suis fier de sa compacité et lisibilité par rapport au code original.",

  proj4_whatIDid: "J'ai construit l'application complète en solo lors de mon stage à la Ville de Montréal. J'ai conçu l'architecture Node.js + EJS, intégré l'API ONE UEM pour récupérer les données des appareils, et implémenté les deux stratégies de division.",
  proj4_proudCodeDesc: "Cet algorithme distribue équitablement les appareils en N groupes — simple mais satisfaisant à écrire proprement en un seul passage.",

  proj5_whatIDid: "J'ai construit la calculatrice complète en C# avec une interface XAML. J'ai implémenté toutes les opérations arithmétiques, le chaînage d'opérateurs et la gestion des cas limites (division par zéro, précision décimale).",
  proj5_proudCodeDesc: "Cet évaluateur d'expressions gère correctement la priorité des opérateurs — je suis fier de l'avoir écrit sans recourir à eval() ou une bibliothèque.",

  proj6_whatIDid: "J'ai développé l'application iOS complète en Swift avec SwiftUI. J'ai intégré l'API Open Trivia DB pour les questions aléatoires, construit le système de score et utilisé Firebase Firestore pour persister les meilleurs scores avec des mises à jour en temps réel.",
  proj6_proudCodeDesc: "Ce fetch asynchrone décode la réponse API et mélange les choix de réponses en une chaîne propre — ma première utilisation sérieuse d'async/await en Swift.",

  proj7_whatIDid: "J'ai programmé le contrôleur du joueur, la machine à états de l'IA ennemie (patrouille → poursuite → attaque), le système de ramassage de pièces et le déclencheur du portail. J'ai également géré tout le mouvement physique et la configuration des hitboxes.",
  proj7_proudCodeDesc: "Cette machine à états ennemie est le code dont je suis le plus fier dans ce projet — logique pilotée par enum, sans enchevêtrement de conditions.",

  proj8_whatIDid: "J'ai construit la boucle de jeu principale : mouvement du vaisseau, mécanique de tir avec système munitions/rechargement, spawn d'astéroïdes à difficulté croissante, et l'interface score + vies. Le jeu a été réalisé en moins de 48h pour un game jam.",
  proj8_proudCodeDesc: "Le système de rechargement avec barre de progression visuelle était la mécanique qui rendait le jeu unique — je suis fier de la façon dont il lie la tension du gameplay à une simple coroutine.",

  proj9_whatIDid: "J'ai implémenté tout le mouvement du robot avec de pures manipulations de Transform — sans Rigidbody ni moteur physique. J'ai programmé les translations avant/arrière, la rotation gauche/droite et la rotation réaliste des roues.",
  proj9_proudCodeDesc: "Calculer la rotation des roues à partir du déplacement réel du robot était le défi mathématique que j'ai le plus apprécié dans ce laboratoire.",

  proj10_whatIDid: "J'ai implémenté le système de double vue (carte stratégique ↔ combat en tank), la logique de placement des tours, le spawner de vagues ennemies à difficulté croissante et la transition de caméra entre les deux vues.",
  proj10_proudCodeDesc: "Le spawner de vagues qui augmente progressivement la difficulté était ma partie préférée — la croissance exponentielle plafonnée à un maximum était géniale à calibrer.",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: translations_en },
      fr: { translation: translations_fr },
    },
  });

export default i18n;