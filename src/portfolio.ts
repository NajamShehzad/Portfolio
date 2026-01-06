/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import React from "react";

const date2018 = new Date(2017, 0, 1);
const yearsActive = new Date().getFullYear() - date2018.getFullYear();

interface Greeting {
  username: string;
  title: string;
  subTitle: string | React.ReactElement;
  resumeLink: string;
}

const greeting: Greeting = {
  /* Your Summary And Greeting Section */
  username: "Najam Shehzad",
  title: "Hi, It's Najam",
  subTitle: emoji(
    `🚀 Senior Software Engineer & Software Development Manager with ${yearsActive}+ years of experience delivering scalable, high-impact web, mobile, and backend systems. Skilled in TypeScript, JavaScript, Python, and Go, with deep expertise in AI integrations and cloud platforms including AWS, GCP, and Azure. I focus on building systems that solve real business problems, driving measurable value, not just features. Let's build something meaningful together. 🔧`,
  ),
  resumeLink:
    "https://docs.google.com/document/d/1h37-YKtkTgrCd6iP2DqoMSooredupUnK/edit?usp=sharing&ouid=115993998049444930711&rtpof=true&sd=true",
};

// Your Social Media Link

interface SocialMediaLinks {
  github?: string;
  linkedin?: string;
  gmail?: string;
  facebook?: string;
  gitlab?: string;
  medium?: string;
  stackoverflow?: string;
  instagram?: string;
  npm?: string;
  twitter?: string;
}

const socialMediaLinks: SocialMediaLinks = {
  github: "https://github.com/najamshehzad",
  linkedin: "https://www.linkedin.com/in/najamshehzadbutt/",
  gmail: "najamshehzadbutt@gmail.com",
  facebook: "https://www.facebook.com/najamshehzadbutt",
  gitlab: "https://gitlab.com/najamshehzad",
  medium: "https://medium.com/@najambutt195",
  stackoverflow: "https://stackoverflow.com/users/9660073/najam-butt",
  instagram: "https://www.instagram.com/duct_tape_programmer",
  npm: "https://www.npmjs.com/najamshehzad",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

interface SoftwareSkill {
  skillName: string;
  fontAwesomeClassname: string;
}

interface SkillsSection {
  title: string;
  subTitle: string;
  skills: (string | React.ReactElement)[];
  softwareSkills: SoftwareSkill[];
}

const skillsSection: SkillsSection = {
  title: "What I Do",
  subTitle:
    "Experienced Backend-Focused Full Stack Engineer with a Passion for Scalable Systems, AI Integrations, and Cloud-Native Architecture",
  skills: [
    emoji(
      "⚡ Architect and develop scalable backend systems using Node.js, Golang, TypeScript, and Python",
    ),
    emoji("⚡ Build microservices and robust APIs focused on maintainability and performance"),
    emoji(
      "⚡ Develop responsive, high-performing front-end apps using React, Next.js, and GraphQL",
    ),
    emoji("⚡ Integrate LLMs and AI tools including GPT-4, LangChain, Hugging Face, and Claude"),
    emoji(
      "⚡ Design and deploy cloud-native applications using Docker and Kubernetes on AWS, GCP, and Azure",
    ),
    emoji("⚡ Implement CI/CD pipelines using GitHub Actions, Jenkins, and DevOps best practices"),
    emoji("⚡ Manage PostgreSQL, MongoDB, Redis, and SQL Server for optimized data operations"),
    emoji(
      "⚡ Solve complex engineering problems with a focus on real-world outcomes and business impact",
    ),
    emoji(
      "⚡ Lead projects from architecture and team mentoring through delivery and observability",
    ),
    emoji(
      "⚡ Contribute to and maintain open-source libraries including TypeSentry, BankId, and Apache ECharts",
    ),
  ],
  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-ts",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fa-brands fa-golang", // No official Golang FA icon, using code as fallback
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "ReactJs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-project-diagram",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-memory",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google",
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes",
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-cogs",
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "fas fa-brain",
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link",
    },
    {
      skillName: "Claude",
      fontAwesomeClassname: "fas fa-robot",
    },
    {
      skillName: "TypeSentry",
      fontAwesomeClassname: "fas fa-shield-alt",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

interface TechStackExperience {
  Stack: string;
  progressPercentage: string;
}

interface TechStack {
  viewSkillBars: boolean;
  experience: TechStackExperience[];
}

const techStack: TechStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%",
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "82%",
    },
    {
      Stack: "Programming",
      progressPercentage: "85%",
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%", //Insert relative proficiency in percentage
    },
  ],
};

// Your education background

interface School {
  schoolName: string;
  logo: any;
  subHeader: string;
  duration: string;
  desc: string;
  descBullets?: string[];
}

interface EducationInfo {
  viewEducation: boolean;
  schools: School[];
}

const educationInfo: EducationInfo = {
  viewEducation: false, // Set it to true to see education section
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit", // mg3 eis4 vi1
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit", // 1 masha / 8 ratti
      ],
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 work experiences

interface WorkExperience {
  role: string;
  company: string;
  companylogo: any;
  date: string;
  desc: string;
  descBullets?: string[];
}

interface WorkExperiences {
  viewExperiences: boolean;
  experience: WorkExperience[];
}

const workExperiences: WorkExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Development Manager",
      company: "Digital Plattform",
      companylogo: require("./assets/images/blue-stripes-150x150.png"),
      date: "Jan 2023 - Present",
      desc: "Driving full-cycle product development and cloud-native architecture for large-scale platforms across energy, recruitment, and e-commerce domains in Sweden.",
      descBullets: [
        "Engineered the P2 Energy system handling 200M+ data points from SMHI, Metry, and Elvaco; optimized queries and indexing for high-performance analytics and scalable data access",
        "Built and scaled system integrations such as Visma ↔ Magento (Kontorab AB) and WordPress ↔ Teamtailor (Xamera) using job queues and custom webhooks",
        "Developed and orchestrated automated job scheduling with cron and BullMQ queues to streamline recurring processes and ensure task reliability",
        "Led development of an AI-driven workflow engine leveraging GPT-4 and LangChain for document intelligence and internal automation",
        "Designed and shipped a modular Pawn system supporting inventory, role-based permissions, and transactional history",
        "Introduced microservices and containerization (Docker, Kubernetes), reducing deployment time and improving system observability",
        "Collaborated closely with product and design teams to deliver scalable, user-centric solutions across multiple verticals",
      ],
    },
    {
      role: "Development Team Lead",
      company: "Digital Marknadsplan",
      companylogo: require("./assets/images/dmn.png"),
      date: "May 2020 - Jan 2023",
      desc: "Led development of a centralized Marketing Resource Management (MRM) platform to optimize campaign planning, execution, and performance for clients across Scandinavia.",
      descBullets: [
        "Built a scalable MRM platform enabling real-time interactive planning, budget tracking, and performance analytics through dynamic dashboards and automated KPI reporting",
        "Implemented marketing automation features. From email campaigns and landing pages to smart segmentation and lead nurturing workflows",
        "Architected robust backend systems with Node.js, Express, MongoDB, and React; designed for scalability and modularity",
        "Integrated the system with Google services and major CRMs to unify marketing and sales operations across multiple data sources",
        "Streamlined team collaboration by embedding content planning, review workflows, and campaign approvals into a single platform",
        "Managed CI/CD with GitHub Actions and mentored junior developers, boosting productivity and code quality across the team",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "Jan 2019 – May 2020",
      desc: "Worked with multiple international clients as a freelance developer to deliver scalable software and e-commerce platforms.",
      descBullets: [
        "Developed a complete e-commerce platform for Closebuy, enabling seamless checkout with QR-based association features",
        "Built custom CMS and dashboard solutions for analytics and reporting across different industries",
        "Delivered full-stack projects using Node.js, React, GraphQL, and MongoDB under strict delivery timelines",
      ],
    },
    {
      role: "MERN Stack Developer",
      company: "Panacloud",
      companylogo: require("./assets/images/pana.jpg"),
      date: "Aug 2018 – May 2019",
      desc: "Contributed to core platform development for PIAIC, a national education initiative for AI and cloud computing in Pakistan.",
      descBullets: [
        "Built backend services for student registration, fee processing, and authentication using Node.js and MongoDB",
        "Enabled students to access online lectures and materials through a secure content delivery system",
        "Improved backend performance and system reliability under high user loads by optimizing database queries",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

interface OpenSource {
  githubConvertedToken: string | undefined;
  githubUserName: string;
  showGithubProfile: string;
}

const openSource: OpenSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "najamshehzad", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

interface FooterLink {
  name: string;
  url: string;
}

interface Project {
  image: any;
  projectName: string;
  projectDesc: string;
  footerLink: FooterLink[];
}

interface BigProjects {
  title: string;
  subtitle: string;
  projects: Project[];
  display: boolean;
}

const bigProjects: BigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/dp-logo_white.png"),
      projectName: "Digital Plattform",
      projectDesc:
        "A modular, cloud-native platform designed for rapid development of tailored business systems — from energy analytics and AI workflow engines to recruitment and e-commerce integrations. It helps organizations modernize operations by reusing flexible building blocks like authentication, reporting, dashboards, and external integrations.",
      footerLink: [
        {
          name: "Visit Digital Plattform",
          url: "https://digitalplattform.se/",
        },
      ],
    },
    {
      image: require("./assets/images/p2energi.png"),
      projectName: "P2 Energy — Digital Plattform",
      projectDesc:
        "Engineered a scalable energy data platform handling 200M+ metrics from SMHI, Metry, and Elvaco with real-time analytics, automated indexing, and high-throughput GraphQL APIs. The system enabled strategic growth and played a key role in P2 Energy's acquisition by PropTech Energy, one of Sweden's leading indoor climate and energy service providers.",
      footerLink: [
        {
          name: "Visit P2 Energy",
          url: "https://www.p2ab.se/",
        },
        {
          name: "Read Acquisition News",
          url: "https://www.procuritas.com/proptech-energy-grows-with-p2-energi",
        },
      ],
    },
    {
      image: require("./assets/images/dp-logo_white.png"),
      projectName: "AI Workflows — Digital Plattform",
      projectDesc:
        "Developed a modular, LLM-powered automation platform using GPT-4 and LangChain to streamline complex workflows. Enabled use cases like automated customer responses for moving companies, AI-assisted medical reply drafting for surgeons, and custom document workflows tailored to unique business needs.",
      footerLink: [
        {
          name: "Visit AI Workflows",
          url: "https://flows.digitalplattform.se",
        },
      ],
    },
    {
      image: require("./assets/images/dmn.png"),
      projectName: "MRM – Digital Marknadsplan",
      projectDesc:
        "A powerful Marketing Resource Management (MRM) platform enabling organizations to centralize marketing operations—from strategic planning and budgeting to campaign automation and performance reporting. Features include content calendars, automated email flows, KPI dashboards, task collaboration, and order/budget workflows tailored for agencies and enterprises across Scandinavia.",
      footerLink: [
        {
          name: "Visit MRM",
          url: "https://app.digitalplattform.se/",
        },
      ],
    },
    {
      image: require("./assets/images/kontorab.png"),
      projectName: "Visma–Magento Integration (Kontorab)",
      projectDesc:
        "Engineered a robust integration to seamlessly connect Magento with Visma CRM, enabling bi-directional synchronization of orders, customers, articles, article groups, and more. The solution uses a job queue and scheduling system to automate data flows, ensure real-time consistency, and streamline e-commerce operations for Kontorab.",
      footerLink: [
        {
          name: "Visit Kontorab Site",
          url: "https://www.kontorab.se/",
        },
      ],
    },
    {
      image: require("./assets/images/xamera.png"),
      projectName: "Xamera Job Match",
      projectDesc:
        "Automated Xamera's recruitment pipeline by integrating Teamtailor with their website. Enabled real-time job syncing and introduced a one-click apply system—letting candidates apply to multiple roles at once, significantly increasing conversion and applicant volume.",
      footerLink: [
        {
          name: "Visit Xamera",
          url: "https://www.xamera.se/",
        },
      ],
    },
    {
      image: require("./assets/images/closebuy.png"),
      projectName: "Closebuy",
      projectDesc:
        "Developed the full digital infrastructure for Closebuy's unmanned store concept — integrating secure access via BankID, payment through Swish and Klarna, and RCO smart door controls. Enabled 24/7 operations, frictionless entry, and checkout, powering new revenue streams for local associations.",
      footerLink: [
        {
          name: "Visit Closebuy",
          url: "https://www.closebuy.se/",
        },
      ],
    },
    {
      image: require("./assets/images/piaic.png"),
      projectName: "PIAIC – Panacloud",
      projectDesc:
        "Engineered the backend for Pakistan's national AI education initiative (PIAIC), enabling 100K+ student registrations with scalable MongoDB storage, Node.js APIs, and cron-driven workflows. Delivered secure access to online lectures and ensured high availability under nationwide load.",
      footerLink: [
        {
          name: "Visit PIAIC",
          url: "https://www.piaic.org/",
        },
      ],
    },
    {
      image: require("./assets/images/ps-mypages-logo.png"),
      projectName: "Pawn System – Gomer Andersson",
      projectDesc:
        "Delivered a secure, role-based pawn management platform for Gomer Andersson, enabling full lifecycle tracking of pawn items, transactions, and customer history. Streamlined internal operations with real-time inventory updates, audit logs, and user access controls.",
      footerLink: [
        {
          name: "Visit Gomer Andersson",
          url: "https://pantbank.se/",
        },
      ],
    },
  ],
  display: true,
};

// Your Achievement Section Include Your Certification Talks and More

interface AchievementCard {
  title: string;
  subtitle: string;
  image: any;
  footerLink: FooterLink[];
}

interface AchievementSection {
  title: string | React.ReactElement;
  subtitle: string;
  achievementsCards: AchievementCard[];
}

const achievementSection: AchievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" },
      ],
    },
  ],
};

// Blogs Section

interface Blog {
  url: string;
  title: string;
  description: string;
}

interface BlogSection {
  title: string;
  subtitle: string;
  blogs: Blog[];
}

const blogSection: BlogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@najambutt195/validate-learning-wastage-dde2366188a8",
      title: "Validate Learning & Wastage",
      description:
        "Validated learning is an approach to demonstrating progress against business goals when traditional key performance indicators are not very useful",
    },
    {
      url: "https://medium.com/@najambutt195/what-is-react-8911c032e2f9",
      title: "What is React?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
};

// Talks Sections

interface Talk {
  title: string;
  subtitle: string;
  slides_url: string;
  event_url: string;
}

interface TalkSection {
  title: string;
  subtitle: string | React.ReactElement;
  talks: Talk[];
}

const talkSection: TalkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

// Podcast Section

interface PodcastSection {
  title: string | React.ReactElement;
  subtitle: string;
  podcast: string[];
}

const podcastSection: PodcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

interface ContactInfo {
  title: string | React.ReactElement;
  subtitle: string;
  email_address: string;
}

const contactInfo: ContactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "najambutt195@gmail.com",
};

//Twitter Section

interface TwitterDetails {
  userName: string;
}

const twitterDetails: TwitterDetails = {
  userName: "najamshehzadbutt", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
