import Greens from "./images/greens-over-grains.png";
import ToDo from "./images/to-do-app.png";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

let resumeData = {
  name: "Damia Smith",
  role: "Full Stack Developer",
  roleDescription:
    "I enjoy creating applications in the cloud with a specialization in AWS. I am passionate about writing clean, readable, reusable code and learning new ways to solve problems.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/damia-smith",
      className: faLinkedin,
    },
    {
      name: "github",
      url: "https://github.com/damiasmith",
      className: faGithub,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/damia.smith/",
      className: faInstagram,
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/channel/UCLmE8SX9smcZrFMVTyDKm1g",
      className: faYoutube,
    },
  ],
  aboutme:
    "I am currently working as a full-stack developer on the Public Cloud Services team at Centene. I enjoy developing innovative applications for documentation and proof of concept, as well as automating manual ops processes. In my spare time, I am advancing my react skills, learning java, and building personal projects. I also enjoy yoga, biking, hiking, creating art and spending time with my pets.",
  email: "damia.v.smith@gmail.com",
  address: "St. Louis, MO",
  website: "https://damiasmith.github.io/portfolio/",
  resume: {
    url: "https://s3.amazonaws.com/damia.smith.resume/resume/Resume2020.pdf",
  },
  education: [
    {
      UniversityName: "LaunchCode - CoderGirl",
      specialization: "Web Development",
      MonthOfPassing: "July",
      YearOfPassing: "2019",
    },
    {
      UniversityName: "University of Kansas",
      specialization: "MFA Studio Art",
      MonthOfPassing: "May",
      YearOfPassing: "2013",
    },
    {
      UniversityName: "Southern Illinois University Edwardsville",
      specialization: "BFA Studio Art/ BS Art Education",
      MonthOfPassing: "May",
      YearOfPassing: "2008",
    },
  ],
  work: [
    {
      CompanyName: "Centene",
      specialization: "Public Cloud Services",

      MonthOfStarting: "Aug",
      YearOfStarting: "2019",
      MonthOfLeaving: "Present",
      YearOfLeaving: "",
    },
    {
      CompanyName: "LaunchCode",
      specialization: "Teaching Assistant",
      MonthOfStarting: "Jan",
      YearOfStarting: "2020",
      MonthOfLeaving: "July",
      YearOfLeaving: "2020",
    },
  ],
  skills: [
    {
      skillsDescription1: "Javascript",
      skills: [
        {
          skillname: "HTML5",
        },
        {
          skillname: "CSS",
        },
        {
          skillname: "ES6",
        },
        {
          skillname: "Reactjs",
        },
        {
          skillname: "Angular 9",
        },
        {
          skillname: "Jest",
        },
        {
          skillname: "Jasmine",
        },
        {
          skillname: "Bootstrap",
        },
      ],
    },
    {
      skillsDescription2: "Nodejs",
      skills: [
        {
          skillname: "REST",
        },
        {
          skillname: "Express",
        },
        {
          skillname: "Mongoose",
        },
        {
          skillname: "MongoDB",
        },
        {
          skillname: "Mocha",
        },
        {
          skillname: "Chai",
        },
        {
          skillname: "Puppeteer",
        },
      ],
    },
    {
      skillsDescription3: "AWS",
      skills: [
        {
          skillname: "Lambda",
        },
        {
          skillname: "API Gateway",
        },
        {
          skillname: "Step Function",
        },
        {
          skillname: "CloudFormation",
        },
        {
          skillname: "CloudWatch",
        },
        {
          skillname: "SQS",
        },
        {
          skillname: "SNS",
        },
      ],
    },
    {
      skillsDescription4: "Developer Tools",
      skills: [
        {
          skillname: "Git",
        },
        {
          skillname: "Visual Studio Code",
        },
        {
          skillname: "Chrome Dev Tools",
        },
        {
          skillname: "Jira/Agile",
        },
        {
          skillname: "Postman",
        },
      ],
    },
  ],
  portfolio: [
    {
      name: "To Do App",
      description:
        "A web app for creating lists, adding tasks and completing tasks",
      techStack:
        "React, Node.js, DynamoDB, Lambda",
      imgurl: ToDo,
      url: "http://to-do-app-damia.s3-website-us-east-1.amazonaws.com/",
      github: 'https://github.com/damiasmith/to-do-app'
    },
    {
      name: "Grains Over Greens",
      description:
        "A web app for categorizing menu items by dietary restrictions",
      techStack:
        "Angular, Node.js, MongoDB, Express",
      imgurl: Greens,
      url: "https://stackblitz.com/github/damiasmith/greens-over-grains/tree/stackblitz",
      github: 'https://github.com/damiasmith/greens-over-grains'
    },
  ],
};

export default resumeData;
