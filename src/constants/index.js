import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Campus Connect",
    icon: `./connect.png`,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rufus proved me wrong.",
    name: "Funke Happiness",
    designation: "Law Student",
    company: "ABUAD",
    image: `./happy.jpg`,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rufus does.",
    name: "Ebikebuna Rufus",
    designation: "Sr Hematologist",
    company: "Brigham and Women's Hospital MA",
    image: `./ebike.jpg`,
  },
  {
    testimonial:
      "After Rufus optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Adam James",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat App",
    description:
      "Built a real-time chat app using the MERN stack with Socket.io for instant messaging, JWT authentication, MongoDB storage, and a responsive React.js UI. Features include one-on-one and group chats, media sharing, and real-time notifications for seamless communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: `./chartapp.png`,
    source_code_link: "https://github.com/Ruseigha",
  },
  {
    name: "YouTube Clone",
    description:
      "YouTube Clone: A full-featured video streaming platform built with React, Node.js, Express, and MongoDB. Supports video uploads, playback, user authentication, comments, and likes, delivering a seamless, high-performance experience with a modern UI and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: `./youtube.JPG`,
    source_code_link: "https://github.com/Ruseigha",
  },
  {
    name: "Music Player",
    description:
      "Music Player Web App – A sleek, responsive music player built with ReactJS, featuring seamless audio playback, custom playlists, and intuitive UI. Supports modern design, real-time song progress, and dynamic controls for an immersive listening experience. Optimized for performance and accessibility.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: `./music.jpg`,
    source_code_link: "https://github.com/Ruseigha",
  },
];

export { services, technologies, experiences, testimonials, projects };
