import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

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
    link: "https://www.figma.com/design/Ty7hYOKcC86Tr3Cc29pS8W/TaalTub-App-Design?node-id=0-1&t=ESSYnSK2wROtijxk-1",
  },
  {
    id: 2,
    title: "Meesho App Redesign",
    description:
      "A comprehensive redesign of the Meesho app, focusing on enhancing user experience and interface design.",
    techStack: ["Figma", "Adobe XD", "ChatGPT"],
    imgSrc: project4,
    link: "https://www.figma.com/design/yzGLsV1avm8sIjgKiFCDKJ/Meesho-Re-Design?node-id=0-1&t=RdgDPjztbODN6DRK-1",
  },
  {
    id: 3,
    title: "MP lads website design",
    description:
      "A web platform designed to help Members of Parliament track budgets and monitor fund expenses with clarity and transparency. The interface focuses on simple navigation, clear data visualization, and easy access to financial information.",
    techStack: ["Figma"],
    imgSrc: project3,
    link: "https://www.figma.com/design/UVLt1UodfdFKxfR1KkHc2D/MP-Lads-Website-Design?node-id=0-1&t=FB4NPr61dSprBJFg-1",
  },
  {
    id: 4,
    title: "Pizza Master class website design",
    description:
      "A platform for pizza enthusiasts to explore recipes, order ingredients, and share their culinary creations. The design emphasizes a vibrant and engaging user experience.",
    techStack: ["Figma"],
    imgSrc: project2,
    link: "https://www.figma.com/design/d2chTJ7gccGTSsiOlFyBWw/Pizza-Web-Design?node-id=0-1&t=mchYLLVdRydG8dt4-1",
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
    yearRange: "Oct 2025 - Present",
    role: "UI/UX Designer",
    company: "YBE Clothing",
    description:
      "During my UI/UX design internship, I worked on designing responsive and user-friendly websites. I was involved in the complete design process, including user research, wireframing, UI design, and usability improvements. I used multiple design tools to create clean layouts and meaningful user experiences while collaborating with team members to meet project goals.",
    techStack: ["Figma", "Notion", "ChatGPT"],
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
