import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";

import personImage from "../assets/testimonial.jpeg";

import {
  RiJavaLine,
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Md Ayaz Ansari",
  role: "UI/UX Designer",
  subheading:
    "I am a UI/UX Designer focused on creating clean, intuitive, and user-friendly digital experiences. I believe good design is not just about looks, but about solving real user problems. I enjoy turning complex ideas into simple, meaningful interfaces that are easy to use and visually balanced.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "TaalTub A unified Music, Video & Radio experience",
    description:
      "TaalTub is a comprehensive platform that brings together music, video, and radio streaming into a single, seamless experience. Users can explore a vast library of content, create personalized playlists, and enjoy high-quality streaming across all devices.",
    techStack: ["Figma", "Adobe XD", "Adobe Illustrator", "ChatGPT"],
    imgSrc: project1,
    link: "https://embed.figma.com/proto/Ty7hYOKcC86Tr3Cc29pS8W/TaalTub-App-Design?page-id=0%3A1&node-id=466-159&p=f&viewport=362%2C113%2C0.03&scaling=scale-down-width&content-scaling=fixed&embed-host=share",
  },
  {
    id: 2,
    title: "Meesho App Redesign",
    description:
      "A comprehensive redesign of the Meesho app, focusing on enhancing user experience and interface design.",
    techStack: ["Figma", "Adobe XD", "ChatGPT"],
    imgSrc: project2,
    link: "https://embed.figma.com/proto/yzGLsV1avm8sIjgKiFCDKJ/Meesho-Re-Design?page-id=0%3A1&node-id=1-8&viewport=90%2C89%2C0.28&scaling=scale-down-width&content-scaling=fixed&embed-host=share",
  },
  {
    id: 3,
    title: "MP lads website design",
    description:
      "A web platform designed to help Members of Parliament track budgets and monitor fund expenses with clarity and transparency. The interface focuses on simple navigation, clear data visualization, and easy access to financial information.",
    techStack: ["Figma"],
    imgSrc: project3,
    link: "https://embed.figma.com/proto/UVLt1UodfdFKxfR1KkHc2D/MP-Lads-Website-Design?page-id=0%3A1&node-id=1-2&p=f&viewport=158%2C94%2C0.26&scaling=scale-down-width&content-scaling=fixed&embed-host=share",
  },
  {
    id: 4,
    title: "Pizza Master class website design",
    description:
      "A platform for pizza enthusiasts to explore recipes, order ingredients, and share their culinary creations. The design emphasizes a vibrant and engaging user experience.",
    techStack: ["Figma"],
    imgSrc: project4,
    link: "https://embed.figma.com/proto/d2chTJ7gccGTSsiOlFyBWw/Pizza-Web-Design?page-id=0%3A1&node-id=372-205&p=f&viewport=-4556%2C1346%2C0.34&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=372%3A205&embed-host=share",
  },
 
];

export const SKILLS = [
  {
    name: "UI Design",
    icon: <RiJavaLine className="text-orange-600" />,
  },
  {
    name: "UX Design",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "website Design",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "ux research",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "wireframing & prototyping",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "usability testing",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "Figma",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Framer",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Adobe XD",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Adobe Illustrator",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Aug 2025 - Jan 2026",
    role: "UI/UX Designer",
    company: "YBE Clothing",
    description:
      "Contributed to the end-to-end design of a fashion e-commerce platform, working across the full UX process — from research and ideation to high-fidelity UI and developer handoff. Conducted user research via surveys and interviews to identify pain points and behavioral patterns, translating insights into user flows, wireframes, and interactive prototypes in Figma. Designed high-fidelity screens with emphasis on visual hierarchy, brand consistency, and mobile-first responsiveness. Applied UX heuristics and usability testing to iteratively refine designs, while collaborating with developers to ensure pixel-accurate implementation. Also contributed to building a unified design system that improved workflow efficiency across both design and development teams.",
    techStack: ["Figma", "Notion", "ChatGPT", "Adobe XD"],
  },
];


export const EDUCATION = [
  {
    id: 1,
    degree: "Diploma in UI/UX Design",
    institution: "PW Skills",
    duration: "2024 - 2025",
    description:
      "Comprehensive program covering user research, wireframing, prototyping, and usability testing using tools like Figma and Adobe XD.",
  },
  {
    id: 2,
    degree: "Bsc. in Physics",
    institution: "Patnssa University",
    duration: "2020 - 2024",
    description:
      "Completed a Bachelor of Science degree in Physics, gaining a strong foundation in scientific principles, analytical thinking, and problem-solving skills.",
  },
  {
    id: 3,
    degree: "Intermediate in Science",
    institution: "DS College, Katihar(Bihar)",
    duration: "2019",
    description:
      "Completed Higher Secondary Education with a focus on Science subjects, including Physics, Chemistry, and Mathematics.",
  },
];

export const TESTIMONIAL = {
  name: "Shubham Mishra",
  title: "CEO, YBE Clothing",
  quote:
    "Ayaz is a talented UI/UX designer who consistently delivers exceptional work. His attention to detail and user-centric approach have significantly improved our product's usability and aesthetics. Ayaz is a valuable asset to any design team.",
  image: personImage,
};
