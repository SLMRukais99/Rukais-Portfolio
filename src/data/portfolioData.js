const portfolioData = {
  personal: {
    name: "S.L.M. Rukais",
    title: "Software Engineer",
    subtitle: "BSc (Hons) in Computing & Information Systems",
    university: "Sabaragamuwa University of Sri Lanka",
    email: "mohamedrukais@gmail.com",
    phone: "+94 76 940 2001",
    linkedin: "https://www.linkedin.com/in/mohamed-rukais-a16717230",
    github: "https://github.com/SLMRukais99",
    location: "Sri Lanka",
    description: "Passionate software engineer with expertise in full-stack development, specializing in modern web technologies and innovative solutions."
  },
  education: [
    {
      institution: "Sabaragamuwa University of Sri Lanka",
      degree: "BSc (Hons) in Computing & Information Systems",
      period: "Oct 2020 - Apr 2025",
      gpa: "3.6",
      description: "Strong foundation in software development and computer networking with hands-on experience in building applications, debugging, and deploying systems."
    },
    {
      institution: "Esoft Metro Campus",
      degree: "Diploma in English (DIE)",
      period: "Aug 2017 - Apr 2018",
      description: "Enhanced English communication, grammar, and professional writing skills."
    },
    {
      institution: "Zahira College Kalmunai",
      degree: "GCE Advanced Level (Physical Science Stream)",
      period: "Jan 2016 - Aug 2018",
      description: "Studied Mathematics, Physics, and Chemistry with leadership experience as school prefect."
    }
  ],
  experience: [
    {
      company: "Intervest Software Technologies (Private) Limited",
      position: "Software Engineering Intern",
      period: "Feb 2024 - Aug 2024",
      location: "Colombo 05, Sri Lanka",
      projects: ["Staysure 1.5", "Avanti Travel Insurance"],
      achievements: [
        "Worked on projects for UK-based companies",
        "Developed RESTful APIs and integrated backend functionality",
        "Gained experience with WordPress and Magnolia CMS",
        "Used Jira for project tracking and Confluence for collaboration",
        "Applied Agile methodologies in development processes",
        "Created responsive user interfaces with React"
      ]
    }
  ],
  skills: {
    languages: ["C", "C#", "Java", "JavaScript", "TypeScript", "PHP", "Python"],
    frameworks: ["React", "Redux", "Node.js", "Express.js", ".NET"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    tools: ["Git/GitHub", "Selenium", "Postman", "Figma", "Canva", "VS Code", "IntelliJ IDEA"]
  },
  projects: [
    {
      title: "E-commerce Website",
      description: "Full-stack e-commerce platform with JWT authentication, product management, and advanced filtering.",
      technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/SLMRukais99/E-Commerce_Web",
      category: "Full Stack"
    },
    {
      title: "E-bus Tracking System",
      description: "Real-time bus tracking system with GPS integration and Google Maps API for enhanced user experience.",
      technologies: ["Flutter", "Firebase", "Google API"],
      github: "https://github.com/SLMRukais99/e_bus_tracker",
      category: "Mobile"
    },
    {
      title: "CRUD Application",
      description: "Dynamic React application with full Create, Read, Update, and Delete functionality.",
      technologies: ["React"],
      github: "https://github.com/SLMRukais99/CrudApp",
      category: "Web App"
    },
    {
      title: "Weather App",
      description: "Responsive weather application displaying real-time data via API integration.",
      technologies: ["React", "Weather API"],
      github: "https://github.com/SLMRukais99/WeatherApp",
      category: "Web App"
    }
  ],
  publications: [
    {
      title: "An Ensemble Model for Predicting Career Paths of Sri Lankan IT Undergraduates",
      authors: "S. L. M. Rukais, S. Adeeba, B. T. G. S. Kumara and G. A. C. A. Herath",
      conference: "8th International Research Conference on Smart Computing and Systems Engineering",
      year: "2025",
      type: "Full Paper"
    }
  ]
};

export default portfolioData;