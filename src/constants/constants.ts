const beforeCollegeInfo = {
  imgSrc: "/myHighSchool.jpg",
  imgAlt: "High School",
  label: "In High School",
  text: 'Back in high school, I was all about soccer, basketball, and anything active. Becoming a developer had never crossed my mind. My older brother, on the other hand, was completely different—always at his computer, coding for hours. I’d often hear him sigh in frustration or whoop in triumph whenever he solved a problem.\n\nWhen you see something so different from yourself, you either ignore it or get curious. For me, it was the latter. Over time, I started asking him what he was doing, and before I knew it, we were having conversations about computers and coding. One day, he showed me how to print "Hello, World!" and build a simple calculator.\n\nThat’s when I realized I was starting to enjoy it—solving problems, figuring things out, and even feeling that same mix of frustration and excitement. My brother’s influence played a big role in shaping my decision, and by the time I was in high school, I knew this was the path I wanted to take.',
};

const collegeInfo = {
  imgSrc: "/seneca.jpg",
  imgAlt: "Seneca College",
  label: "In College",
  text: "I graduated from Seneca College with a Bachelor of Technology in Software Development. During my studies from September 2012 to January 2018, I built a strong foundation in both front-end and back-end development. While I developed a passion for creating intuitive and visually engaging user interfaces, I also gained experience working with back-end technologies, ensuring I have the full-stack skills to develop comprehensive web applications.",
};

const careerInfo = {
  imgSrc: "/work.jpg",
  imgAlt: "Work",
  label: "In My Career",
  text: "Since graduating, I’ve been on a continuous journey of growth as a developer, refining not just my technical skills but also my ability to collaborate, adapt, and problem-solve. Working at Onword, a fast-paced startup, taught me to be resourceful and adaptable. I learned the importance of clear communication, teamwork, and balancing multiple responsibilities to help bring a product to life. It was an environment where every challenge became an opportunity to grow, and I embraced the mindset of continuous learning and improvement.\n\nAt S&P Global, I had the chance to work on projects that impacted real users, reinforcing my appreciation for creating seamless and intuitive experiences. I learned to navigate complex challenges, work effectively with diverse teams, and contribute to meaningful improvements. One of the most rewarding moments was seeing our team’s hard work recognized, which reaffirmed my belief in the power of collaboration. Through these experiences, I’ve come to value not just the technical side of development, but also the creativity, problem-solving, and teamwork that go into building something impactful.",
};

export const aboutInto = [beforeCollegeInfo, collegeInfo, careerInfo];

export const summary =
  "I am a full-stack developer with 4+ years of experience in creating scalable, high-performance web applications. I specialize in technologies like React, Vue, Next.js, TypeScript, and Node.js, and have a strong focus on both UI/UX design and performance optimization. Throughout my career, I’ve worked on delivering intuitive data visualization solutions and improving rendering performance to enhance user experience. I am also skilled in integrating APIs seamlessly into web applications. By collaborating closely with cross-functional teams, I’ve been able to drive meaningful business outcomes and consistently deliver high-impact solutions.";

export const lineSegments = [
  {
    type: "diagonal",
    length: 100,
    x: 540,
    y: 361,
    angle: -45,
    isHoverable: false,
  }, // Fourth diagonal
  {
    type: "straight",
    length: 100,
    x: 452,
    y: -91,
    angle: 0,
    isHoverable: true,
    about: 3,
    isClicked: false,
  }, // Third straight
  {
    type: "diagonal",
    length: 100,
    x: 214,
    y: 136,
    angle: -45,
    isHoverable: false,
  }, // Third diagonal
  {
    type: "straight",
    length: 100,
    x: 63,
    y: -20,
    angle: 0,
    isHoverable: true,
    about: 2,
    isClicked: false,
  }, // Second straight
  {
    type: "diagonal",
    length: 100,
    x: -110,
    y: -89,
    angle: -45,
    isHoverable: false,
  }, // Second diagonal
  {
    type: "straight",
    length: 100,
    x: -326,
    y: 50,
    angle: 0,
    isHoverable: true,
    about: 1,
    isClicked: false,
  }, // First straight
  {
    type: "diagonal",
    length: 100,
    x: -437,
    y: -313,
    angle: -45,
    isHoverable: false,
  }, // First diagonal
];

export const experience = [
  {
    company: "S&P Global",
    position: "Front End Developer",
    duration: "01/2022 - 12/2024",
    logo: "/sp_global.png",
    description: [
      "•	Developed scalable, responsive web applications using React and Vue, enhancing data visualization and user experience.",
      "•	Revamped legacy ASP.NET applications with React and Vue, reducing front-end code complexity and improving rendering performance, leading to a 20% increase in user engagement.",
      "•	Integrated and worked with SDKs to enhance application functionality, optimize API interactions, and manage financial data queries efficiently.",
      "•	Implemented infinite scroll and lazy loading, reducing initial load times and improving user responsiveness.",
      "•	Designed seamless API integrations with back-end services, improving real-time financial data rendering and dashboard load times by 15%.",
      "•	Awarded the H2 2022 Essential Excellence Award for delivering data visualization dashboards and analytics solutions.",
    ],
    bgColor: "rgb(215,0,42)",
  },
  {
    company: "Onword",
    position: "Full Stack Developer",
    duration: "08/2020 - 12/2021",
    logo: "/onword.png",
    description: [
      "•	Built a business-focused social networking app with React, GraphQL, Styled Components, and Material UI, ensuring responsiveness across devices.",
      "•	Optimized application performance with lazy loading and efficient image-handling techniques, reducing load times significantly.",
      "•	Managed API development with Express.js and MongoDB, enabling seamless real-time data handling.",
    ],
    bgColor: "rgb(77,219,216)",
  },
  {
    company: "Ontario Ministry of Children, Community and Social Services",
    position: "Junior Application QA Tester",
    duration: "01/2018 - 12/2018",
    logo: "/ministry.png",
    description: [
      "• Conducted QA testing on applications within an Agile development environment.",
      "• Performed functional, unit, and regression testing based on detailed test cases.",
      "• Identified, documented, and tracked software issues, bugs, and defects using Team Foundation Server.",
      "• Assisted developers in deploying code across multiple testing environments.",
      "• Reviewed and analyzed user-reported incidents to identify and resolve system issues efficiently.",
    ],
    bgColor: "rgb(252,185,52)",
  },
];

export const projects = [
  {
    name: "Online Resume",
    image: "/portfolio.png",
    menu: {
      description: [
        "• Building a personal resume site with Next.js, TypeScript, Tailwind CSS, Zustand, and Framer Motion.",
        "• Focused on responsive design, smooth page transitions, and state-based animation control.",
        "• Implemented device-specific rendering logic and custom animation effects to enhance user experience.",
        "• Applied modular component structure and centralized state management to maintain clean, scalable code.",
        "• Designed an interactive career timeline and experience carousel, highlighting UI/UX skills.",
      ],
      techStack: [
        "Next",
        "React",
        "Zustand",
        "TypeScript",
        "Tailwind",
        "Framer Motion",
      ],
      demo: {
        demoable: false,
        source: "",
      },
      repo: "https://github.com/yongkkim/Yong-Portfolio",
    },
  },
  {
    name: "Image Gallery",
    image: "/image_gallery.png",
    menu: {
      description: [
        "• Developed a responsive and scalable photo gallery application using React, Redux Toolkit, TypeScript, and Tailwind CSS, with a modular and maintainable code structure.",
        "• Integrated SQL Server through an Express.js API, enabling efficient CRUD operations for storing and retrieving image data.",
        "• Implemented lazy loading and infinite scrolling to optimize performance and enhance user experience on both desktop and mobile devices.",
        "• Utilized RTK Query for efficient data fetching and caching, and applied server-side image compression to reduce bandwidth usage.",
        "• Built reusable, accessible UI components and implemented secure image upload with validation to ensure a robust and user-friendly interface.",
      ],
      techStack: [
        "React",
        "Redux Toolkit",
        "TypeScript",
        "Tailwind",
        "Express.js",
        "MS SQL Server",
      ],
      demo: {
        demoable: true,
        source: "",
      },
      repo: "https://github.com/yongkkim/ImageGallery",
    },
  },
];

export const skillAreas = [
  "Front-end",
  "Back-end",
  "State Management",
  "DevOps & Tools",
];

export const skills = {
  frontEnd: [
    "• React",
    "• Vue",
    "• Next.js",
    "• TypeScript",
    "• JavaScript",
    "• HTML5",
    "• CSS3",
    "• SCSS",
    "• Styled Components",
    "• Tailwind",
  ],
  apisAndBackend: [
    "• RESTful APIs",
    "• GraphQL",
    "• Express.js",
    "• Node.js",
    "• SQL (MySQL, SQL Server)",
    "• NoSQL (MongoDB)",
  ],
  stateManagement: ["• Redux", "• RTK", "• Vuex", "• Pinia", "• Zustand"],
  devOpsAndTools: [
    "• Git",
    "• Agile Development",
    "• NPM",
    "• Jenkins",
    "• Figma",
    "• InVision",
    "• AWS Amplify",
  ],
};
