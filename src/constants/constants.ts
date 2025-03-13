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

const SPGlobalDesc = [
  "Developed scalable, responsive web applications using React and Vue, enhancing data visualization and user experience.",
  "Revamped legacy ASP.NET applications with React and Vue, reducing front-end code complexity and improving rendering performance, leading to a 20% increase in user engagement.",
  "Integrated and worked with SDKs to enhance application functionality, optimize API interactions, and manage financial data queries efficiently.",
  "Implemented infinite scroll and lazy loading, reducing initial load times and improving user responsiveness.",
  "Designed seamless API integrations with back-end services, improving real-time financial data rendering and dashboard load times by 15%.",
  "Awarded the H2 2022 Essential Excellence Award for delivering data visualization dashboards and analytics solutions.",
];

const OnwordDesc = [
  "Built a business-focused social networking app with React, GraphQL, Styled Components, and Material UI, ensuring responsiveness across devices.",
  "Optimized application performance with lazy loading and efficient image-handling techniques, reducing load times significantly.",
  "Managed API development with Express.js and MongoDB, enabling seamless real-time data handling.",
];

const MinistryDesc = [
  "Conducted QA testing on applications within an Agile development environment.",
  "Performed functional, unit, and regression testing based on detailed test cases.",
  "Identified, documented, and tracked software issues, bugs, and defects using Team Foundation Server.",
  "Assisted developers in deploying code across multiple testing environments.",
  "Reviewed and analyzed user-reported incidents to identify and resolve system issues efficiently.",
];

export const experienceInfo = [
  {
    company: "S&P Global",
    position: "Front End Developer",
    duration: "01/2022 - 12/2024",
    numYear: "(3 years)",
    description: SPGlobalDesc,
  },
  {
    company: "Onword",
    position: "Full Stack Developer",
    duration: "08/2020 - 12/2021",
    numYear: "(1.5 years)",
    description: OnwordDesc,
  },
  {
    company: "Ontario Ministry of Children, Community and Social Services",
    position: "Junior Application QA Tester",
    duration: "01/2018 - 12/2019",
    numYear: "(1 year)",
    description: MinistryDesc,
  },
];

export const summary =
  "I am a front-end developer with 4+ years of experience in creating scalable, high-performance web applications. I specialize in technologies like React, Vue, Next.js, TypeScript, and Node.js, and have a strong focus on both UI/UX design and performance optimization. Throughout my career, I’ve worked on delivering intuitive data visualization solutions and improving rendering performance to enhance user experience. I am also skilled in integrating APIs seamlessly into web applications. By collaborating closely with cross-functional teams, I’ve been able to drive meaningful business outcomes and consistently deliver high-impact solutions.";
