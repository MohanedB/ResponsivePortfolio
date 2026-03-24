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