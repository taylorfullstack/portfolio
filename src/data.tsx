/**
 * 
Relative Sizing Class	Font Size	Equivalent in Pixels
fa-2xs	0.625em	10px
fa-xs	0.75em	12px
fa-sm	0.875em	14px
fa-lg	1.25em	20px
fa-xl	1.5em	24px
fa-2xl	2em	32px
 */
import SportseePreview from './assets/SportSeePreview.png'
import HRNetPreview from './assets/hrnet_1280x800.png'
import KasaPreview from './assets/kasa_1280x800.png'
import ArgentBankPreview from './assets/argentbank_1280x800.png'


import {
  faTwitterSquare,
  faGithubSquare,
  faGit,
  faReact,
  faLinkedin,
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
  faSass,
  faWordpress,
  faVuejs,
  faNode,
  faPhp,
  faFigma,
  faDocker,
  faDiscord,
  faCodepen,
  faNpm,
  faOsi, //https://opensource.org/logo-usage-guidelines/
} from '@fortawesome/free-brands-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  NextjsIcon, ViteIcon, ScssIcon,
  TailwindIcon, TanstackIcon, TypeScriptIcon, ReduxIcon,
  ReactRouterIcon
} from './components/icons';

const tech = {
  chrome: {
    name: "Chrome Degugger",
    icon: <div>Chrome</div>,
  },
  codepen: {
    name: "Codepen",
    icon: <FontAwesomeIcon icon={faCodepen} size="2xl" color='#00D8FF' />,
  },
  css: {
    name: "CSS",
    icon: <FontAwesomeIcon icon={faCss3Alt} size="2xl" color='#264DE4' />,
  },
  cypress: {
    name: "Cypress",
    icon: <div>Cypress</div>,
  },
  discord: {
    name: "Discord",
    icon: <FontAwesomeIcon icon={faDiscord} size="2xl" color='#00D8FF' />,
  },
  docker: {
    name: "Docker",
    icon: <FontAwesomeIcon icon={faDocker} size="2xl" color='#00D8FF' />,
  },
  figma: {
    name: "Figma",
    icon: <FontAwesomeIcon icon={faFigma} size="2xl" />,
  },
  git: {
    name: "Git",
    icon: <FontAwesomeIcon icon={faGit} size="2xl" color='#00D8FF' />,
  },
  github: {
    name: "GitHub",
    icon: <FontAwesomeIcon icon={faGithubSquare} size="2xl" color='#00D8FF' />,
  },
  html: {
    name: "HTML",
    icon: <FontAwesomeIcon icon={faHtml5} size="2xl" color='#f06529' />,
  },
  jest: {
    name: "Jest",
    icon: <div>Jest</div>,
  },
  js: {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} size="2xl" color='#F0DB4F' />,
  },
  linkedin: {
    name: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} size="2xl" color='#00D8FF' />,
  },
  next: {
    name: "Next.js",
    icon: <NextjsIcon size="2xl" />,
  },
  node: {
    name: "Node.js",
    icon: <FontAwesomeIcon icon={faNode} size="2xl" color='#00D8FF' />,
  },
  nodejs: {
    name: "Node.js",
    icon: <FontAwesomeIcon icon={faNodeJs} size="2xl" color='#00D8FF' />,
  },
  notion: {
    name: "Notion",
    icon: <div>Notion</div>,
  },
  npm: {
    name: "NPM",
    icon: <FontAwesomeIcon icon={faNpm} size="2xl" color='#cb3837' />,
  },
  opensource: {
    name: "Open Source",
    icon: <FontAwesomeIcon icon={faOsi} size="2xl" />,
  },
  php: {
    name: "PHP",
    icon: <FontAwesomeIcon icon={faPhp} size="2xl" color='#00D8FF' />,
  },
  react: {
    name: "React.js",
    icon: <FontAwesomeIcon icon={faReact} size="2xl" color='#00D8FF' />,
  },
  reactrouter: {
    name: "React Router",
    icon: <ReactRouterIcon size="2xl" />,
  },
  redux: {
    name: "Redux",
    icon: <ReduxIcon size="2xl" />,
  },
  sass: {
    name: "Sass",
    icon: <FontAwesomeIcon icon={faSass} size="2xl" color='#00D8FF' />,
  },
  scss: {
    name: "SCSS",
    icon: <ScssIcon size="2xl" />,
  },
  software: {
    name: "Software as a Service",
    icon: <div>Software as a Service</div>,
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: <TailwindIcon size='2xl' />,
  },
  tanstack: {
    name: "TanStack Table",
    icon: <TanstackIcon size="2xl" />,
  },
  twitter: {
    name: "Twitter",
    icon: <FontAwesomeIcon icon={faTwitterSquare} size="2xl" color='#00D8FF' />,
  },
  typescript: {
    name: "TypeScript",
    icon: <TypeScriptIcon size="2xl" />,
  },
  vite: {
    name: "Vite",
    icon: <ViteIcon size="2xl" />,
  },
  vue: {
    name: "Vue.js",
    icon: <FontAwesomeIcon icon={faVuejs} size="2xl" color='#00D8FF' />,
  },
  wordpress: {
    name: "WordPress",
    icon: <FontAwesomeIcon icon={faWordpress} size="2xl" color='#00D8FF' />,
  },
  wc3: {
    name: "WC3",
    icon: <div>WC3</div>,
  },
  wcag: {
    name: "WCAG",
    icon: <div>WCAG</div>,
  },
}

export const projects = [
  {
    id: "p14",
    title: "HRnet",
    description: {
      en: "Convert a jQuery library to React",
      fr: "Convertir une bibliothèque jQuery vers React",
    },
    technologies: [
      tech.react,
      tech.typescript,
      tech.next,
      tech.tailwind,
      tech.npm,
      tech.tanstack,
    ],
    image: HRNetPreview,
    links: {
      site: "https://p14-taylor-heather-hrnet.vercel.app/",
      github: "https://github.com/taylorfullstack/P14_TAYLOR_Heather",
      mission: "https://react.dev",
      documentation: "https://react.dev",
    },
  },
  {
    id: "p13",
    title: "Argent Bank",
    description: {
      en: "Banking API with React",
      fr: "API bancaire avec React",
    },
    technologies: [
      tech.react,
      tech.typescript,
      tech.reactrouter,
      tech.redux,
      tech.vite,
    ],
    image: ArgentBankPreview,
    links: {
      site: "",
      github: "https://github.com/taylorfullstack/P13_TAYLOR_Heather",
      mission: "https://react.dev",
      documentation: "https://react.dev",
    },
  },
  {
    id: "p12",
    title: "SportSee",
    description: {
      en: "Sport analytics dashboard",
      fr: "Tableau de bord d'analytics du sport",
    },
    technologies: [
      tech.react,
      tech.redux,
      tech.js,
      tech.reactrouter,
      tech.vite,
    ],
    image: SportseePreview,
    links: {
      site: "https://taylorfullstack.github.io/P12_TAYLOR_Heather/",
      github: "https://github.com/taylorfullstack/P12_TAYLOR_Heather",
      mission: "https://react.dev",
      documentation: "https://react.dev",
    },
  },
  {
    id: "p11",
    title: "Kasa",
    description: {
      en: "Apartment rental application",
      fr: "Application Web de logement",
    },
    technologies: [
      tech.react,
      tech.js,
      tech.reactrouter,
      tech.css,
    ],
    image: KasaPreview,
    links: {
      site: "https://taylorfullstack.github.io/P11_TAYLOR_Heather/",
      github: "https://github.com/taylorfullstack/P11_TAYLOR_Heather",
      mission: "https://react.dev",
      documentation: "https://react.dev",
    },
  },
];

const allProjectSkills = projects.map((project) => project.technologies).flat();

export const skills = [...new Set(allProjectSkills)];