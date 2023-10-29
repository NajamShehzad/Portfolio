
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Najam Shehzad",
  title: "Hi, It's Najam",
  subTitle: emoji(`🚀 Experienced Software Development Manager with 5+ years crafting web, mobile, and server applications. Skilled in TypeScript, JavaScript, Python, and C#. 🖥️ Expertise in AI integrations and cloud infrastructures across AWS, GCP, and Azure. Driven by innovation, I prioritize both technical prowess and alignment with business needs. Let's build something amazing together! 🔧`),
  resumeLink: "https://drive.google.com/file/d/1gwvN3SLTso1gD5VqbGiPoA5-diH5SQd-/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/najamshehzad",
  linkedin: "https://www.linkedin.com/in/najamshehzadbutt/",
  gmail: "najamshehzadbutt@gmail.com",
  facebook: "https://www.facebook.com/najamshehzadbutt",
  gitlab: "https://gitlab.com/najamshehzad",
  medium: "https://medium.com/@najambutt195",
  stackoverflow: "https://stackoverflow.com/users/9660073/najam-butt",
  instagram: "https://www.instagram.com/duct_tape_programmer"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Build high Quality Back End / Server Side for your System"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / DO"),
    emoji("⚡ Deployemnt of your application at AWS / Digital Ocean / Google Cloud"),
    emoji("⚡ Develop highly interactive Front End / User Interfaces for your web and mobile applications"),
    emoji("⚡ Single Page Application ( SPA ) "),
    emoji("⚡ Progressive Web Applications ( PWA ) "),
    emoji("⚡ Integration of Third party API like Google, Facebook, Twitter, WordPress, Mautic etc"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "ReactJs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Digital Ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "Google Cloud ",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "82%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "75%"  //Insert relative proficiency in percentage
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: false, // Set it to true to see education section
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",// mg3 eis4 vi1
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"// 1 masha / 8 ratti
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    }
  ]
}

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Development Manager",
      company: "Digital Marknadsplan",
      companylogo: require("./assets/images/dmn.png"),
      date: "May 2020 – Present",
      //   desc: "This is description",
      //   descBullets: [
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //   ]
    },
    {
      role: "Full Stack Developer",
      company: "Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "Jan 2019 – May 2020",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "MERN Stack Developer",
      company: "Panacloud",
      companylogo: require("./assets/images/pana.jpg"),
      date: "AUG 2018 – May 2019",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "najamshehzad", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/closebuy.jpg"),
      projectName: "Closebuy",
      projectDesc: "A completely new concept for unmanned stores that gives your association extra buzz at the checkout.",
      footerLink: [
        {
          name: "Visit Closebuy",
          url:  "https://www.closebuy.se/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/piaic.jpg"),
      projectName: "PIAIC",
      projectDesc: "Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
      footerLink: [
        {
          name: "Visit PIAIC",
          link: "https://www.piaic.org/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@najambutt195/validate-learning-wastage-dde2366188a8",
      title: "Validate Learning & Wastage",
      description: "Validated learning is an approach to demonstrating progress against business goals when traditional key performance indicators are not very useful"
    },
    {
      url: "https://medium.com/@najambutt195/what-is-react-8911c032e2f9",
      title: "What is React?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "najambutt195@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "najamshehzadbutt"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
