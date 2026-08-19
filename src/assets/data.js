import chat from "./images/chat.png";
import crm from "./images/crm.png";
// import shortify from "./images/shortify.png";

export const bio = [
  "Hello! I'm Mano Deepan, a hardworking and passionate job seeker with strong JavaScript, Java, and ReactJS, skills and eager to secure an entry-level Software Developer position",
  "Organized and dependable candidate successful at managing multiple priorities with a positive attitude.",
  "I am a quick learner and ready to learn and implement required technologies",
];

export const skills = [
  { skillName: "React.js", percentage: 90, icon: "reactjs", group: "frontend" },
  { skillName: "Redux", percentage: 85, icon: "redux", group: "frontend" },
  { skillName: "JavaScript", percentage: 92, icon: "javascript", group: "frontend" },
  { skillName: "HTML", percentage: 95, icon: "html", group: "frontend" },
  { skillName: "CSS", percentage: 90, icon: "css", group: "frontend" },
  { skillName: "Bootstrap", percentage: 90, icon: "bootstrap", group: "styling" },
  { skillName: "TailwindCSS", percentage: 88, icon: "tailwindcss", group: "styling" },
  { skillName: "GSAP", percentage: 70, icon: "gsap", group: "styling" },
  { skillName: "Node.js", percentage: 85, icon: "nodejs", group: "backend" },
  { skillName: "Spring Boot", percentage: 75, icon: "springboot", group: "backend" },
  { skillName: "FastAPI", percentage: 80, icon: "fastapi", group: "backend" },
  { skillName: "MongoDB", percentage: 80, icon: "mongodb", group: "database" },
  { skillName: "PostgreSQL", percentage: 78, icon: "postgresql", group: "database" },
  { skillName: "MySQL", percentage: 82, icon: "mysql", group: "database" },
  { skillName: "Git", percentage: 90, icon: "git", group: "tools" },
  { skillName: "Linux", percentage: 75, icon: "linux", group: "tools" },
  { skillName: "Chrome DevTools", percentage: 85, icon: "chromedevtools", group: "tools" },
  { skillName: "AWS", percentage: 70, icon: "awsdeployment", group: "cloud" },
  { skillName: "Google Cloud", percentage: 65, icon: "googlecloud", group: "cloud" },
];

export const projects = [
  {
    projectName: "Air flight",
    type: "data",
    image: "",
    summary:
      "An end-to-end flight telemetry data pipeline built with Apache Airflow, dbt, Snowflake, and Docker. Ingests live flight data from the OpenSky Network API, transforms it through a Bronze → Silver → Gold medallion architecture, and surfaces real-time insights via a Streamlit dashboard with ML-powered anomaly detection.",
    preview: "",
    github: "https://github.com/manoje8/air-flight",
    techStack: ["Python", "Airflow", "DBT", "Snowflake", "Docker"],
  },
  {
    projectName: "Medici",
    type: "ai",
    image: "",
    summary:
      "A production-grade agentic RAG system orchestrated by a LangGraph state machine. Specialized LLM agents handle query routing, planning, hybrid retrieval with self-correcting loops, relevance grading, and citation-backed synthesis, with multi-turn memory and multi-format document ingestion.",
    preview: "",
    github: "https://github.com/manoje8/studious",
    techStack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Google Cloud",
      "Qdrant",
      "redis",
      "postgresql",
      "logfire",
    ],
  },
  {
    projectName: "Treant",
    type: "ai",
    image: "",
    summary:
      "A document parsing tool that extracts structured content from PDFs, Office files, HTML, and text using Docling and Google Document AI, with support for multiple pluggable parsing backends.",
    preview: "",
    github: "https://github.com/manoje8/treant",
    techStack: ["Python", "Google Cloud", "Docling"],
  },
  // {
  //   projectName: "Shortify",
  //   image: shortify,
  //   type: "mern",
  //   summary:
  // "A secure and scalable URL shortening service that transforms long URLs into short, trackable links with efficient redirection and link management.",
  //   preview: "https://eloquent-tanuki-57a622.netlify.app/",
  //   github: "https://github.com/manoje8/urlshortener-frontend",
  //   techStack: ["React JS", "Bootstrap v4.6", "Node js", "MongoDB", "JWT"],
  // },
  {
    projectName: "Simple Chat",
    type: "mern",
    image: chat,
    summary:
      "A real-time chat application built on the MERN stack with Socket.io, featuring Firebase authentication, typing indicators, and a live online users list.",
    github: "https://github.com/manoje8/simple-chat",
    techStack: ["React JS", "Bootstrap v4.6", "Node js", "MongoDB", "Firebase"],
  },
  {
    projectName: "Customer Relationship Management",
    type: "mern",
    image: crm,
    summary:
      "A full-stack CRM built with React, Node.js, and MongoDB for managing customer relationships. Includes role-based access control, customer and communication tracking, employee feedback handling, and analytics reporting.",
    preview: "https://cozy-flan-a08f87.netlify.app/",
    github: "https://github.com/manoje8/CRM-frontend",
    techStack: ["React JS", "Node js", "MongoDB", "JWT"],
  },
];

export const experience = [
  {
    title: "Connect Prodigy Consulting Company",
    duration: "2023 - 2024",
    subtitle: "Software Engineer",
    details:
      "Tested and validated an ETL migration from an on-premises system to a cloud based platform, ensuring data integrity\n" +
      "throughout the transition. Developed a simple XML to JSON transformer and implemented Drools rules to detect\n" +
      "missing placeholders and flag unsupported transformer issues.",
    tags: ["Java", "Spring", "JUnit"],
    icon: "heartbeat",
  },
  {
    title: "Knexta Technologies",
    duration: "2025 - 2026",
    subtitle: "Software Developer",
    details:
      "Developed and maintained full-stack web applications, focusing on backend optimization, API development, and cloud\n" +
      "deployment. Built and integrated AI powered features into production systems. Collaborated with cross functional teams\n" +
      "to deliver features end-to-end, translating requirements into production-ready interfaces and scalable backend services.",
    tags: ["React JS", "Node JS", "Postgres"],
    icon: "heartbeat",
  },
];

export const education = [
  {
    title: "B.Tech. in Mechanical Engineering",
    duration: "2018 - 2022",
    subtitle: "Pondicherry Engineering College, Pondicherry",
    details: [],
    icon: "graduation-cap",
  },
  {
    title: "Class 12th in Computer Science",
    duration: "",
    subtitle: "Board of Secondary Education, Tamil Nadu",
    details: [],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];
