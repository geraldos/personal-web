import { Braces, Code2, Database, Sparkles } from "lucide-react";
import {
  SiCypress,
  SiCss,
  SiDocker,
  SiDotenv,
  SiEslint,
  SiExpress,
  SiFastify,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiJest,
  SiJsonwebtokens,
  SiMui,
  SiMariadb,
  SiNodedotjs,
  SiNodemon,
  SiPostgresql,
  SiPwa,
  SiReact,
  SiRedux,
  SiReduxsaga,
  SiSpringboot,
  SiStorybook,
  SiTailwindcss,
  SiTestinglibrary,
  SiThymeleaf,
  SiTypescript,
  SiVuedotjs,
  SiWebpack,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

import { HapiIcon } from "../../shared/icons/HapiIcon";

export const profile = {
  email: "sepdwijaya18@gmail.com",
  contactHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=sepdwijaya18%40gmail.com",
  githubHref: "https://github.com/geraldos",
  cvHref:
    "https://drive.google.com/file/d/1tVsjgISqvOS04oBys8YYPQRd2pI0d-Pn/view?usp=sharing",
  cvFileName: "geraldo-sepdwijaya-cv.md",
  careerStartDate: new Date("2020-11-20T00:00:00"),
};

export const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Vue", icon: SiVuedotjs },
  { name: "Flutter", icon: SiFlutter },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Material UI", icon: SiMui },
  { name: "Storybook", icon: SiStorybook },
  { name: "Webpack", icon: SiWebpack },
  { name: "Jest", icon: SiJest },
  { name: "Cypress", icon: SiCypress },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Hapi", icon: HapiIcon },
  { name: "Fastify", icon: SiFastify },
  { name: "Express", icon: SiExpress },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "MariaDB", icon: SiMariadb },
  { name: "Db2", icon: Database },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "SQL", icon: Database },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: FaAws },
  { name: "Jenkins", icon: SiJenkins },
];

export const projects = [
  {
    number: "01",
    title: "Frontend Experiences",
    description:
      "Building polished, responsive interfaces that balance product goals, performance, and maintainable code.",
    tags: ["React", "Vue", "UI Engineering"],
    color: "bg-acid text-paper",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Full-stack Systems",
    description:
      "Connecting thoughtful frontends to reliable backend services to deliver complete, scalable applications.",
    tags: ["Node.js", "Spring Boot", "API"],
    color: "bg-acid text-paper",
    icon: Code2,
  },
  {
    number: "03",
    title: "Learning Experiments",
    description:
      "Exploring new technologies through focused prototypes, technical research, and deliberate experimentation.",
    tags: ["AI", "Prototypes", "Research"],
    color: "bg-acid text-paper",
    icon: Braces,
  },
];

export const experienceStacks = [
  [
    { name: "React", icon: SiReact },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "Thymeleaf", icon: SiThymeleaf },
    { name: "Db2", icon: Database },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "SQL", icon: Database },
    { name: "Docker", icon: SiDocker },
    { name: "Jenkins", icon: SiJenkins },
  ],
  [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Redux", icon: SiRedux },
    { name: "Webpack", icon: SiWebpack },
    { name: "Jest", icon: SiJest },
    { name: "Testing Library", icon: SiTestinglibrary },
    { name: "PWA", icon: SiPwa },
  ],
  [
    { name: "Flutter", icon: SiFlutter },
    { name: "Vue", icon: SiVuedotjs },
  ],
];

export const credentials = [
  {
    title: "React Developer Learning Path",
    provider: "Dicoding Indonesia",
    status: "Completed",
    description:
      "Advanced React learning focused on clean code, Redux state management, automated testing, CI/CD, and practical ecosystem choices.",
    topics: ["Clean Code", "Redux", "Testing", "CI/CD", "React Ecosystem"],
    stacks: [
      { name: "React", icon: SiReact },
      { name: "Storybook", icon: SiStorybook },
      { name: "Cypress", icon: SiCypress },
      { name: "Testing Library", icon: SiTestinglibrary },
      { name: "Webpack", icon: SiWebpack },
      { name: "ESLint", icon: SiEslint },
    ],
    repoHref: "https://github.com/geraldos/dicoding-forum-apps-react-expert",
    certificateHref: "https://www.dicoding.com/certificates/RVZKKMK7EZD5",
    accent: "text-acid",
  },
  {
    title: "Backend JavaScript Learning Path",
    provider: "Dicoding Indonesia",
    status: "Completed",
    description:
      "Backend JavaScript learning focused on clean architecture, automated testing, security, scalability, CI/CD, and API documentation.",
    topics: ["Clean Architecture", "Testing", "Security", "Scalability", "API Docs"],
    stacks: [
      { name: "Hapi", icon: HapiIcon },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Jest", icon: SiJest },
      { name: "ESLint", icon: SiEslint },
      { name: "Nodemon", icon: SiNodemon },
      { name: "dotenv", icon: SiDotenv },
      { name: "AWS", icon: FaAws },
    ],
    repoHref: "https://github.com/geraldos/forum-api",
    certificateHref: "https://www.dicoding.com/certificates/L4PQEJ2EQPO1",
    accent: "text-acid",
  },
];

export const professionalProof = [
  {
    label: "Confidential systems",
    title: "Backoffice platforms",
    description:
      "Delivered multiple internal backoffice projects where reliability, maintainability, and operational clarity mattered more than public visibility.",
    highlights: ["Internal Tools", "Operational Workflows", "Production Delivery"],
    stacks: [
      { name: "React", icon: SiReact },
      { name: "Vue", icon: SiVuedotjs },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Thymeleaf", icon: SiThymeleaf },
      { name: "Docker", icon: SiDocker },
      { name: "Jenkins", icon: SiJenkins },
    ],
  },
  {
    label: "Critical product",
    title: "M2U Web",
    description:
      "Contributed to Maybank Indonesia's internet banking web platform, supporting a critical user-facing financial product where stability, usability, and production reliability are essential.",
    highlights: ["Internet Banking", "Financial Platform", "Production Reliability"],
    stacks: [
      { name: "React", icon: SiReact },
      { name: "Material UI", icon: SiMui },
      { name: "Tachyons CSS", icon: Braces },
      { name: "Redux-Saga", icon: SiReduxsaga },
      { name: "Docker", icon: SiDocker },
      { name: "Jenkins", icon: SiJenkins },
    ],
    websiteHref: "https://m2u.maybank.co.id/",
  },
];
