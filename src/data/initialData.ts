import { UserPortfolioProfile } from '../types';

export const initialPortfolioData: UserPortfolioProfile = {
  name: "Ghita Harzafi",
  age: 20,
  yearTitle: "2026 ENGINEER PORTFOLIO",
  playerLevel: "PLAYER 01 ★ LVL 20",
  xpText: "XP: FULL-STACK ENGINEER",
  role: "Étudiante Ingénieure IIR ★ Full-Stack Developer",
  mission: "Concevoir et développer des applications Full-Stack modernes, évolutives et axées sur une expérience utilisateur exceptionnelle.",
  status: "En quête continue d'apprentissage & opportunités !",
  bio: "Étudiante ingénieure passionnée par le développement web (React, Spring Boot, PHP, JavaScript) et les nouvelles technologies. Dotée d'une solide base en développement Full-Stack, d'une grande capacité d'adaptation et d'un fort esprit d'équipe.",
  location: "Casablanca, Maroc",
  email: "ghita.harzafi@emsi.ma",
  githubUrl: "https://github.com/ghitaharzafi",
  linkedinUrl: "https://linkedin.com/in/ghitaharzafi",
  avatarUrl: "/Gemini_Generated_Image_n5nyvbn5nyvbn5ny.jpg",
  catName: "Mochi",

  tools: [
    { id: "1", name: "React.js", category: "frontend", icon: "Code2", level: 95 },
    { id: "2", name: "Spring Boot", category: "backend", icon: "Sparkles", level: 90 },
    { id: "3", name: "PHP / PDO", category: "backend", icon: "PenTool", level: 92 },
    { id: "4", name: "JavaScript DOM", category: "frontend", icon: "Palette", level: 94 },
    { id: "5", name: "MySQL & Postgres", category: "database", icon: "Box", level: 88 },
    { id: "6", name: "HTML5 / CSS3", category: "frontend", icon: "Code2", level: 96 }
  ],

  trainingLogs: [
    {
      id: "t1",
      title: "1ère année Cycle Ingénieur IIR",
      institution: "EMSI (École Marocaine des Sciences de l'Ingénieur)",
      period: "2026 - Présent",
      details: "Spécialisation Ingénierie Informatique et Réseaux (IIR). Approfondissement génie logiciel, réseaux & sécurité."
    },
    {
      id: "t2",
      title: "Diplôme Technicienne Spécialisée Full-Stack Web",
      institution: "ISTA NTIC",
      period: "2024 - 2026 (2 ans)",
      details: "Formation intensive en architecture Web, bases de données relationnelles & non-relationnelles, frameworks front & back."
    },
    {
      id: "t3",
      title: "Baccalauréat Scientifique",
      institution: "Lycée",
      period: "Obtenu en 2024",
      details: "Baccalauréat Scientifique."
    }
  ],

  experiences: [
    {
      id: "e1",
      company: "TOCODE",
      role: "Stagiaire Développeuse Full-Stack",
      period: "01/02/2026 - 01/03/2026 (1 mois)",
      location: "Casablanca, Maroc",
      missions: [
        "Conception et développement d'interfaces utilisateur modernes et réactives avec React.js.",
        "Développement de services back-end et couches métier robustes avec Java EE et Spring Boot.",
        "Intégration et consommation d'APIs RESTful dans une architecture microservices Full-Stack."
      ]
    },
    {
      id: "e2",
      company: "Alphabike SARL",
      role: "Stagiaire Développeuse Web",
      period: "01/05/2026 - 01/06/2026 (1 mois)",
      location: "Casablanca, Maroc",
      missions: [
        "Conception globale de la base de données et modèle d'architecture applicative.",
        "Développement complet d'un système de réservation d'hôtels et gestion des disponibilités."
      ]
    }
  ],

  skills: [
    { id: "s1", name: "Esprit d'équipe & Communication", category: "soft_skill", level: "MAX LVL" },
    { id: "s2", name: "Capacité d'apprentissage rapide", category: "soft_skill", level: "MAX LVL" },
    { id: "s3", name: "Sérieux & Résolution de problèmes", category: "soft_skill", level: "EXPERT" },
    { id: "s4", name: "Investissement & Proactivité", category: "soft_skill", level: "EXPERT" },
    { id: "s5", name: "Méthodologie Agile (Scrum)", category: "hard_skill", level: "SENIOR" },
    { id: "s6", name: "Intégration CI/CD & Linux", category: "hard_skill", level: "SENIOR" }
  ],

  languages: [
    { name: "Arabe", level: "Langue Maternelle", flag: "MAROC", percentage: 100 },
    { name: "Français", level: "Niveau C1 (Courant)", flag: "FRANCE", percentage: 95 },
    { name: "Anglais", level: "Niveau C1 (Courant)", flag: "UK", percentage: 95 },
    { name: "Espagnol", level: "Niveau B2 (Intermédiaire)", flag: "ESPAGNE", percentage: 75 },
    { name: "Italien", level: "Niveau B1 (Initial)", flag: "ITALIE", percentage: 60 }
  ],

  hobbies: [
    "Lecture (Romans, littérature technique & dev personnel)",
    "Veille technologique (IA & tendances Web)",
    "Hackathons & Challenges de code",
    "Voyages & Découvertes culturelles"
  ],

  certifications: [
    "Udemy - Full-Stack Web Development Mastery",
    "LinkedIn Learning - Spring Boot & React Microservices",
    "Coursera - Agile Project Management with Scrum"
  ],

  projects: [
    {
      id: "p-auth",
      title: "User Authentication System - PHP MySQL PDO",
      category: "PHP & Security",
      description: "A secure user authentication system built with PHP, MySQL, and PDO. Features registration, login, password hashing, session management, and protected routes. Implements security best practices including prepared statements and password encryption.",
      xpReward: 1500,
      tags: ["PHP", "MySQL", "PDO", "HTML/CSS"],
      imageUrl: "/ChatGPT%20Image%20Sep%2030,%202026,%2010_22_32%20PM.png",
      demoUrl: "https://github.com/ghitaharzafi",
      codeUrl: "https://github.com/ghitaharzafi",
      featured: true
    },
    {
      id: "p-ecom",
      title: "Beauty & Fashion E-commerce - CRUD Management",
      category: "E-Commerce & PHP",
      description: "A complete e-commerce platform with full CRUD functionality for product management. Includes product catalog, shopping cart, admin panel for inventory management, and responsive design. Demonstrates advanced PHP backend development and database operations.",
      xpReward: 1700,
      tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      imageUrl: "/ChatGPT%20Image%20Sep%2030,%202026,%2010_22_32%20PM.png",
      demoUrl: "https://github.com/ghitaharzafi",
      codeUrl: "https://github.com/ghitaharzafi",
      featured: true
    },
    {
      id: "p-patient",
      title: "Patient Management System - JavaScript DOM",
      category: "JavaScript & DOM",
      description: "A dynamic web application built with vanilla JavaScript featuring JSON data manipulation and advanced DOM operations. Implements CRUD operations, data persistence, and interactive UI updates. Demonstrates proficiency in modern JavaScript and frontend architecture.",
      xpReward: 1600,
      tags: ["JavaScript", "JSON", "HTML5", "CSS3"],
      imageUrl: "/ChatGPT%20Image%20Sep%2030,%202026,%2010_22_32%20PM.png",
      demoUrl: "https://github.com/ghitaharzafi",
      codeUrl: "https://github.com/ghitaharzafi",
      featured: true
    },
    {
      id: "p-pizza",
      title: "Pizza Place - Responsive Website",
      category: "Responsive Web Design",
      description: "A fully responsive restaurant website with modern UI/UX design. Features mobile-first responsive layout, interactive menu display, online ordering system, and smooth animations. Built with semantic HTML5, advanced CSS3 techniques, and vanilla JavaScript.",
      xpReward: 1400,
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      imageUrl: "/ChatGPT%20Image%20Sep%2030,%202026,%2010_22_32%20PM.png",
      demoUrl: "https://github.com/ghitaharzafi",
      codeUrl: "https://github.com/ghitaharzafi",
      featured: true
    },
    {
      id: "p1",
      title: "Système de Réservation d'Hôtels",
      category: "Full-Stack Web App",
      description: "Application complète développée lors du stage Alphabike SARL pour la gestion des chambres, réservations et paiements.",
      xpReward: 1800,
      tags: ["React.js", "Spring Boot", "MySQL", "Tailwind CSS"],
      imageUrl: "/ChatGPT%20Image%20Sep%2030,%202026,%2010_22_32%20PM.png",
      demoUrl: "https://github.com/ghitaharzafi",
      codeUrl: "https://github.com/ghitaharzafi",
      featured: false
    },
    {
      id: "p2",
      title: "Plateforme Enterprise Microservices",
      category: "Java EE & Spring",
      description: "Projet conçu chez TOCODE combinant interfaces React.js réactives, API REST Spring Boot, et conteneurisation Docker.",
      xpReward: 1600,
      tags: ["React.js", "Java EE", "Spring Boot", "Docker", "REST API"],
      imageUrl: "/ChatGPT%20Image%20Sep%2030,%202026,%2010_22_32%20PM.png",
      demoUrl: "https://github.com/ghitaharzafi",
      codeUrl: "https://github.com/ghitaharzafi",
      featured: false
    }
  ]
};
