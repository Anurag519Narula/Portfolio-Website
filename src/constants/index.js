import BookVerse from "../assets/projects/BookVerse.jpg";
import Portfolio from "../assets/projects/Portfolio.jpg";
import SpendSense from "../assets/projects/SpendSense.jpg";
import CarVerse from "../assets/projects/CarVerse.png";

export const HERO_CONTENT = `I am a Software Engineer at FNZ with a passion for building scalable, full-stack applications and data-driven systems. I develop platform features for FNZ clients using FNZ Studio and build high-volume regulatory data pipelines using Microsoft Fabric. With experience across React, Node.js, FastAPI, PostgreSQL, and Azure, I thrive on solving complex engineering problems. Currently pursuing B.Tech in Computer Science at Punjab Engineering College, Chandigarh.`;

export const ABOUT_TEXT = `I am a Software Engineer at FNZ, where I work across two key areas: developing feature enhancements and platform configurations for FNZ clients using FNZ Studio — FNZ's internal Java-based development platform — and building data ingestion and transformation pipelines for APRA regulatory reporting using Microsoft Fabric. Prior to this, I interned at MakeMyTrip, where I worked on improving authentication flows at scale and expanded hotel listings for the US market. I hold a B.Tech in Computer Science and Engineering from Punjab Engineering College, Chandigarh. Beyond engineering, I'm a big football and Formula One fan — there's something about the strategy, precision, and relentless pursuit of marginal gains in F1 that honestly mirrors how I think about software. I play sports regularly and find that staying active keeps me sharp. I'm also genuinely excited by what's happening in AI and emerging tech right now — I like keeping up with the latest research, tools, and products shaping the industry.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "Junior Software Engineer",
    company: "FNZ",
    description: `Developed feature enhancements and platform configurations for FNZ clients using FNZ Studio, FNZ's internal Java-based development platform, implementing workflow logic, proprietary scripts, and data flow configurations. Built data ingestion and transformation pipelines for APRA regulatory reporting using Microsoft Fabric, processing 10,000+ records daily and enabling fully auditable financial reporting workflows.`,
    technologies: ["FNZ Studio", "Java", "Microsoft Fabric", "Python", "SQL", "Azure"],
  },
  {
    year: "Jan 2024 - June 2024",
    role: "Software Development Intern",
    company: "MakeMyTrip",
    description: `Engineered a centralized error-handling system for PWA and desktop platforms, improving application stability and reducing user drop-off by 15%. Integrated hotel listing support for the US website, improving booking accessibility for international users. Improved multi-factor authentication flows impacting 10M+ users, strengthening account security and reducing unauthorized access.`,
    technologies: ["ReactJS", "React-Redux", "Saga Middleware", "Github"],
  },
];

export const PROJECTS = [
  {
    title: "CarVerse",
    image: CarVerse,
    link: "",
    description:
      "Built a full-stack vehicle maintenance platform generating AI-based 2-year service timelines and cost estimates. Designed a modular architecture with a FastAPI AI microservice powered by AWS Bedrock Nova. Integrated NHTSA, Mapbox, Google Places, and Yelp APIs for nearby repair shop discovery.",
    technologies: ["React", "Node.js", "PostgreSQL", "FastAPI", "AWS S3", "AWS Bedrock"],
  },
  {
    title: "SpendSense",
    image: SpendSense,
    link: "https://github.com/Anurag519Narula/SpendSense",
    description:
      "Developed a MERN stack expense tracker with RESTful APIs, dynamic filtering by date/category/amount, and real-time spending summaries across transaction history.",
    technologies: ["React JS", "Node.js", "MongoDB", "Express JS"],
  },
  {
    title: "BookVerse",
    image: BookVerse,
    link: "https://github.com/Anurag519Narula/BookVerse",
    description:
      "Constructed a project from scratch leveraging the Google Books API to fetch and display book data, enabling users to directly search for book titles and explore 40+ results.",
    technologies: ["React JS", "Node.js", "MongoDB", "Express JS"],
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    link: "https://github.com/Anurag519Narula/Portfolio-Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React JS", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "37 Rose Enclave ,Civil Lines, Ludhiana, Punjab",
  phoneNo: "+91 98770-40456 ",
  email: "anurag519narula@gmail.com",
};
