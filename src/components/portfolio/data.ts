import type { Course, Project } from "./types";

export const aboutMe =
  "Passionate software engineer in NYC. Currently a senior studying computer science at NYIT!";

export const courses: Course[] = [
  { name: "Data Structures" },
  { name: "Design & Analysis of Algorithms" },
  { name: "Operating Systems" },
  { name: "Database Systems" },
  { name: "Software Engineering" },
  { name: "Computer Networks" },
  { name: "Web Development" },
  { name: "Artificial Intelligence" },
  { name: "Discrete Mathematics" },
  { name: "Mobile App Development" },
];

export const projects: Project[] = [
  {
    title: "Algorithm Visualization",
    description:
      "An algorithm visualization tool built to compare brute force and optimized approaches in a way that feels interactive and intuitive for students.",
    summary:
      "A learning-focused project that turns abstract algorithm behavior into visuals people can actually follow step by step.",
    tech: ["Java", "p5.js"],
    url: "https://github.com/mcampo0215/AlgoVisualization",
    features: [
      "Interactive visual breakdown of algorithm execution",
      "Comparison between naive and optimized approaches",
      "Great portfolio piece for problem-solving and education",
      "Highlights time-complexity thinking in a visual format",
    ],
    metrics: {
      completion: 88,
      frontend: 72,
      backend: 64,
      difficulty: 79,
    },
  },
  {
    title: "Page Rank & Markov",
    description:
      "A simulation of PageRank using Markov chains, with a UI layer and graph-driven feedback to make the math easier to understand.",
    summary:
      "A theory-heavy concept turned into an approachable, visual software experience with both logic and presentation working together.",
    tech: ["React Native", "Spring Boot"],
    url: "https://github.com/mcampo0215/MarkovChains",
    features: [
      "Mathematical concept translated into an interactive system",
      "UI plus stats and graphing for stronger storytelling",
      "Strong demonstration of computational thinking",
      "Blends academic depth with product-minded presentation",
    ],
    metrics: {
      completion: 84,
      frontend: 74,
      backend: 78,
      difficulty: 86,
    },
  },
  {
    title: "User Authentication",
    description:
      "A full authentication system with registration, login, JWT handling, and email verification, pairing a Next.js frontend with a Spring Boot backend.",
    summary:
      "A clean full-stack security-focused build that covers core real-world app behavior from identity to session flow.",
    tech: [
      "Next.js",
      "Spring Boot",
      "Typescript",
      "PostgreSQL",
      "Postman",
    ],
    url: "https://github.com/mcampo0215/UserAuthentication",
    features: [
      "User registration and login flow",
      "JWT-based authentication architecture",
      "Email verification for account security",
      "Strong example of backend API and database integration",
    ],
    metrics: {
      completion: 91,
      frontend: 83,
      backend: 90,
      difficulty: 88,
    },
  },
  {
    title: "Penalty Kick Analyzer",
    description:
      "An app where users upload penalty kick video footage and receive AI-informed guidance to improve shot accuracy, combined with account-based access.",
    summary:
      "A more ambitious full-stack concept with video processing, AI potential, and a clear sports-tech angle.",
    tech: [
      "Next.js",
      "Typescript",
      "Java",
      "Spring Boot",
      "Python",
      "PostgreSQL",
      "Postman",
    ],
    url: "https://github.com/mcampo0215/Penalty-Kick-Analyzer",
    features: [
      "Video upload workflow tied to performance feedback",
      "AI-driven concept with a clear real-world use case",
      "Authentication and persistence for user data",
      "Strong cross-stack coordination between frontend, backend, and Python",
    ],
    metrics: {
      completion: 82,
      frontend: 81,
      backend: 87,
      difficulty: 93,
    },
  },
  {
    title: "Weekly Playlist",
    description:
      "A music recommendation app that connects to Apple Music and generates refreshed playlists based on listening history.",
    summary:
      "A polished API-driven project with a consumer-friendly concept and a nice mix of personalization and UI potential.",
    tech: ["Next.js", "Typescript", "Node.js"],
    url: "https://github.com/mcampo0215/AshleyAI-Playlist",
    features: [
      "Apple Music integration",
      "Recommendation-based playlist generation",
      "Repeatable refresh flow for new results",
      "Strong example of API integration and product thinking",
    ],
    metrics: {
      completion: 86,
      frontend: 85,
      backend: 68,
      difficulty: 75,
    },
  },
];
