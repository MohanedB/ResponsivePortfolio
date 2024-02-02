import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { Bio as Bio_en, education as education_en, projects as projects_en, skills as skills_en } from '../../data/const';
import { Bio as Bio_fr, education as education_fr, projects as projects_fr, skills as skills_fr  } from '../../data/constfr';

const translations_en = { ...Bio_en, ...education_en, ...projects_en, ...skills_en, About: "About", Skill: "Skills", 
Education: "Education", Projects:"Projects", Contact: "Contact", greeting: "Hi, I am", IAM: "Im a", resumer: "Resume",
 skilldesc: "Here are some of the skills I have picked up in my computer science program and individual studies for the past 3 years.", Language_en: "English", 
 Language_fr: "French", Edudesc: "My education has been a journey of self-discovery and growth. My educational details are as follows.",
 education0: "Currently finishing my technic in computer science. I have completed 5 semesters flawlessly so far with an overall R Score of 28.9. I have take multiple courses such as java, linux, IOS, database and more.",
 All: "All", FirstYear: "First Year", SecondYear: "Second Year", ThirdYear: "Third Year", ProjectDesc: "I have worked on a wide range of projects", ContactDesc: "Feel free to reach out to me for any questions or opportunities!",
 Email: "Your Email", Name: "Your Name", Subject: "Subject", Message:"Message", Send: "Send", education1: "Technique Computer Science", education2: "August 2020 - May 2024", education3: "Champlain College",
education4: "Calculator", education5: "Jun 2021", education6: "A simple Calculator in C#", education7: "QuizApp", education8: "Nov 2022 - Dec 2022", 
education9: "Quizz app that creates random quiz using a trivia api. Calculates the score and stores it in the database", education10: "Paysage-Meloche",
education11: "Jan 2023 - Feb 2023", education12: "A website designed for an outdoor compagny that would allow scheduling direcetly from the website, but also managing the workers and making legal documents",
education13: "Pet-Clinic", education14: "Oct 2023 - Dec 2023", education15:"Kept working on a project that is past down by shcool year after year. Worked on the calendar and filtering. Fixed some Front end issues",
education16: "Fallen God", education17:"Jan 2022 - Mar 2022", education18:"A game based on greek mythology where you have a character that has to collect all the coins to open the portal to a boss while fighting off enemies and avoiding traps",
education19: "HalalBites", education20:"Jan 2024 - Feb 2024", education21: "A search engine website made for people of different cultures such as muslims. The website would help these people find specific restaurant around them, such as for example, all halal restaurant in someones city",
education22:"QuickReload", education23:"Jan 13th, 2024 - Jan 14th, 2024", education24:"a 2D game inspired by the classic arcade game “Asteroids” called “QuickReload” in a team of 2 using the Unity Game Engine"
,Success: "Email sent successfully!",skill0: "Frontend", skill1:"Backend", skill2:"Others", Github: "GitHub"

};

const translations_fr = { ...Bio_fr, ...education_fr, ...projects_fr, ...skills_fr, About: "À propos", resumer: "CV",
Skill: "Compétences", Education: "Éducation", Projects: "Projets", Contact: "Contactez Moi", greeting: "Bonjour, je suis", IAM: "Je suis un",  
skilldesc: "Voici certaines des compétences que j’ai acquises dans mon programme d’informatique et mes études individuelles au cours des 3 dernières années.",  
Language_en: "Anglais", Language_fr: "Français", Edudesc: "Mon éducation a été un voyage de découverte de soi et de croissance. Voici les détails de mon parcours éducatif",
education0: "Je termine actuellement ma technique en informatique. J'ai terminé jusqu'à présent 5 semestres sans faille avec une code R global de 28,9. J'ai suivi plusieurs cours tels que java, linux, IOS, base de données et plus encore.",
All: "Tous", FirstYear: "Première Année", SecondYear: "Deuxième Année", ThirdYear: "Troisième Année", ProjectDesc: "J’ai travaillé sur un large éventail de projets",ContactDesc: "N'hésitez pas à me contacter pour toute question ou opportunité!",
Emai: "Votre Email",Name: "Votre Nom", Subject: "Sujet", Message:"Message", Send: "Envoyer", education1:"Technique Informatique", education2: "Août 2020 - Mai 2024", education3 : "Collège Champlain",
education4: "Calculatrice", education5: "Juin 2021", education6: "Une simple calculatrice en C#",education7: "QuizApp",education8: "nov. 2022 - déc. 2022",
education9: "Application de quiz qui crée un quiz aléatoire en utilisant une API de trivia. Calcule le score et le stocke dans la base de données",
education10: "Paysage-Meloche", education11: "janv. 2023 - févr. 2023",education12: "Un site web conçu pour une entreprise extérieure qui permettrait de planifier directement à partir du site web, mais aussi de gérer les travailleurs et de créer des documents juridiques",
education13: "Pet-Clinic",education14: "oct. 2023 - déc. 2023",education15: "A continué à travailler sur un projet qui est transmis par l'école année après année. A travaillé sur le calendrier et le filtrage. A corrigé certains problèmes de Front end",
education16: "Fallen God", education17: "janv. 2022 - mars 2022", education18: "Un jeu basé sur la mythologie grecque où vous avez un personnage qui doit collecter toutes les pièces pour ouvrir le portail vers un boss tout en combattant les ennemis et en évitant les pièges",
education19: "HalalBites", education20: "janv. 2024 - févr. 2024", education21: "Un site web de moteur de recherche conçu pour des personnes de différentes cultures telles que les musulmans. Le site web aiderait ces personnes à trouver un restaurant spécifique autour d'eux, comme par exemple, tous les restaurants halal dans la ville de quelqu'un",
education22: "QuickReload",education23: "13 janv. 2024 - 14 janv. 2024", education24: "un jeu 2D inspiré du jeu d'arcade classique “Asteroids” appelé “QuickReload” dans une équipe de 2 en utilisant le moteur de jeu Unity"
,Success: "Email envoyé avec succès", skill0:"Frontend", skill1:"Backend", skill2:"Autres", Github: "GitHub"

};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: translations_en,
        About: "About",
      },
      fr: {
        translation: translations_fr,
        About: "hi",

      },
    },
  }, (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  });

export default i18n;

