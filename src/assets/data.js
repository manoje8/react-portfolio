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
    {
      title: "Languages",
      skillName: "Java, C/C++, JavaScript, SQL, NOSQL, HTML/CSS",
      color: "bg-success",
      percentage: "70",
    },
    {
      title: "Frameworks/Libraries",
      skillName: "Bootstrap, React JS, Node JS, Redux, Spring",
      color: "bg-info",
      percentage: "70",
    },
    {
      title: "Tools",
      skillName: "Git, Chrome DevTools, Linux, JWT",
      color: "bg-dark",
      percentage: "80",
    },
]

export const projects = {
    webProjects: [
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
        projectName: "Epub Reader",
        image: ebook,
        summary:
          "An interactive EPUB reader built with the MERN stack. It allows users to upload, store, and read EPUB books.",
        preview: "https://zingy-alfajores-7f81b0.netlify.app/",
        github: "https://github.com/manoje8/ebook-reader",
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
      {
        projectName: "Todo Flow",
        image: todoFlow,
        summary:
          "TodoFlow Application built using React and Redux for managing tasks. It allows users to add, update, delete, and search todos.",
        preview: "https://capable-nougat-e087a9.netlify.app/",
        github: "https://github.com/manoje8/todo-flow",
        techStack: ["React JS", "Redux", "Node JS", "MongoDB", "JWT"],
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