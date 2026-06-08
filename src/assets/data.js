import chat from "./images/chat.png"
import crm from "./images/crm.png"
import ebook from "./images/ebook.png"
import shortify from "./images/shortify.png"
import todoFlow from "./images/todo-flow.png"

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


export const projects = {
    webProjects: [
      {
        projectName: "Air flight",
        image: "",
        summary:
            "An end-to-end flight telemetry data engineering pipeline built with Apache Airflow, dbt, Snowflake, and Docker. ",
        preview: "",
        github: "https://github.com/manoje8/air-flight",
        techStack: ["Python", "Airflow", "DBT", "Snowflake", "Docker"],
      },
      {
        projectName: "Studious",
        image: "",
        summary:
            "Studious is a learning project that demonstrates how to build a sophisticated, agentic Retrieval-Augmented Generation system from the ground up.",
        preview: "",
        github: "https://github.com/manoje8/studious",
        techStack: ["Python", "FastAPI", "LangGraph", "Google Cloud", "Qdrant", "redis", "postgresql", "logfire"],
      },
      {
        projectName: "Shortify",
        image: shortify,
        summary:
          "Shortify is a secure URL shortening service that empowers users to transform lengthy links into memorable, trackable short URLs.",
        preview: "https://eloquent-tanuki-57a622.netlify.app/",
        github: "https://github.com/manoje8/urlshortener-frontend",
        techStack: ["React JS", "Bootstrap v4.6", "Node js", "MongoDB", "JWT"],
      },
      {
        projectName: "Simple Chat",
        image: chat,
        summary:
          "A simple chat application built using the MERN Stack and Socket.io for real-time communication.",
        preview: "https://stunning-monstera-2a6b5d.netlify.app/",
        github: "https://github.com/manoje8/simple-chat",
        techStack: ["React JS", "Bootstrap v4.6", "Node js", "MongoDB", "Firebase"],
      },
      {
        projectName: "Customer Relationship Management",
        image: crm,
        summary:
          "CRM is designed to help businesses manage customer relationships efficiently. It includes functionalities for customer profile management, communication tracking, feedback collection, and report generation.",
        preview: "https://cozy-flan-a08f87.netlify.app/",
        github: "https://github.com/manoje8/CRM-frontend",
        techStack: ["React JS", "Node js", "MongoDB", "JWT"],
      },
    ]
}

export const experience = [
    {
      title: "Connect Prodigy Consulting Company",
      duration: "2023 - 2024",
      subtitle: "Software Engineer Trainee",
      details: [
        `ETL Migration from OnPrem solution to Cloud Based solution with Automated XMl to JSON
                conversion`,
        `Unit tests (JUnit) for a converter,ensuring its accuracy and handling of various scenarios`,
        `Created a Drools-based validation framework to identify potential conversion issues within the converter`,
        `Testing and validating the input and output of the converter`,
      ],
      tags: [
        "Java",
        "Spring",
        "JUnit",
      ],
      icon: "heartbeat",
    },
    {
      title: "Knexta Technologies",
      duration: "2025 - present",
      subtitle: "Software Developer",
      details: [
        `RippleThrive is a SaaS-based Accounts Receivables solution to automate and streamline your accounts receivables process`,
        `Automate your repetitive low-value add activities & focus on strategic high value add activities with cash flow improvement.`,
      ],
      tags: [
        "React JS",
        "Node JS",
        "Postgres",
      ],
      icon: "heartbeat",
    },
]

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


const ICONS = {
  java: 'devicon:java',
  javascript: 'devicon:javascript-plain',
  python: 'devicon:python-plain',
  c: '',
  cplusplus: '',
  sql: '',
  nosql: '',
  html: '',
  css: '',
  jquery: '',
  reactjs: '',
  redux: '',
  nodejs: '',
  tailwindcss: '',
  gsap: '',
  git: '',
  chromedevtools: '',
  linux: '',
  fastapi: '',
  springboot: '',
  redis: '',
  googlecloud: '',
  awsdeployment: '',
  postgresql: '',
  mysql: '',
  mongodb: '',
  restapi: '',
  graphql: '',
  socket: '',
  nginx: '',
}