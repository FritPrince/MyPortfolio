import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { RiPhpLine } from "react-icons/ri";
import { RiVuejsFill } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiFirebaseLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandFlutter } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ONILOU Prince",
  greet: "Hello there! 👋🏻",
  description:
    "Passionné par les défis technologiques et doté d'une expérience solide en génie informatique, je suis un développeur enthousiaste et motivé, prêt à apporter mes compétences et mon expertise dans le domaine du développement mobile et web. Avec une forte capacité d'adaptation et un esprit d'initiative, je suis convaincu de pouvoir contribuer de manière significative à l'inovation et à la réussite de n'importe quel projet",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "Je suis un développeur polyvalent et passionné, spécialisé dans la création d'applications mobiles et web. Je maîtrise plusieurs technologies, dont React Native, Expo, Flutter, Laravel, WordPress, et PrestaShop. J’ai une préférence pour les interfaces modernes, bien structurées et souvent inspirées de designs ou de maquettes précises comme celles de Figma.",
  "Dans mes projets, je favorise une organisation modulaire et l’intégration de fonctionnalités innovantes, notamment dans des domaines tels que l’emploi, l’e-commerce, et la mode. Je travaille également sur des solutions utilisant l’intelligence artificielle pour résoudre des problèmes locaux, notamment au Bénin.",
  "Mes compétences couvrent aussi bien le frontend que le backend, avec une expérience sur des outils tels que Firebase et Node.js. Je cherche constamment à apprendre et à m’adapter, en optimisant mes projets hébergés sur des plateformes comme OVH.",
  "Passionné par l’entrepreneuriat et la gestion de projets, je m’efforce d’avoir une vision stratégique dans mon travail. Mon objectif est de concevoir des solutions numériques utiles, innovantes et élégantes, tout en améliorant continuellement mes compétences pour répondre aux besoins de mes clients et des utilisateurs finaux.",
];


export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <RiVuejsFill className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Vue.js",
    experience: "2+ years",
  },
  {
    icon: <RiJavascriptLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Javascript",
    experience: "2+ years",
  },
  {
    icon: <RiFirebaseLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Firebase",
    experience: "2+ years",
  },
  {
    icon: <RiCss3Line className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Css",
    experience: "2+ years",
  },
  {
    icon: <RiHtml5Line className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Html",
    experience: "2+ years",
  },
  {
    icon: <RiPhpLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Php",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <TbBrandFlutter className="text-4xl text-white lg:text-5xl" />,
    name: "Flutter",
    experience: "1+ year",
  },
  {
    icon: <RiGithubFill className="text-4xl text-white lg:text-5xl" />,
    name: "Github",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Ingénieur logiciel",
    company: "CITECH",
    duration: "Février 2024 - Juin 2024",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
];

export const EDUCATION = [
  {
    degree: "Licence en Génie logiciel",
    institution: "Institut Universitaire Les Cours Sonou",
    duration: "Septembre 2021 - Juillet 2024",
    description:
      "Au cours de ces années Universitaires j'ai eu à apprendre plusieurs langages de programmation me permettant d'être dans la peau d'un développeur fullstack. Comme projet de fin d'étude j'ai conçu une application web, une application mobile avec un prototype d'une maison équipé des composants du kit Arduino, pour la gestion et la protection d'une maison intelligente",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
