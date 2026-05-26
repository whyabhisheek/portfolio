import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhishek MJ",
  initials: "AM",
  url: "",
  location: "Bangalore, IN",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description: "Full-Stack Developer focused on Django, React, FastAPI, and AI automation.",
  summary:
    "Software Engineering student with strong foundations in Data Structures and Algorithms and experience building scalable backend systems using Python and RESTful APIs. Passionate about solving complex engineering problems and writing efficient, reliable code.",
  avatarUrl: "/profile.jpeg",
  skills: [
    "Python",
    "JavaScript (ES6+)",
    "TypeScript",
    "FastAPI",
    "Django",
    "Flask (basic)",
    "REST APIs",
    "React.js",
    "CSS",
    "PostgreSQL",
    "MongoDB (basic)",
    "Docker",
    "Jenkins",
    "Git",
    "CI/CD",
    "Dokploy",
    "SDLC",
    "Agile/Scrum",
    "n-Tier Architecture",
    "OOP",
    "Unit Testing",
    "DSA (BFS/DFS, DP)",
    "LeetCode (250+)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "abhiaradhya89042@gmail.com",
    tel: "+91 8904200564",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/whyabhisheek",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://linkedin.com/in/abhishek-mj-296a1227b",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:abhiaradhya89042@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Soomuch Smart Solutions Pvt. Ltd",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "",
      start: "Aug 2025",
      end: "Oct 2025",
      description:
        "- Designed and optimized FastAPI-based REST APIs, improving query performance by ~20%.\n- Debugged and resolved 30+ backend issues, reducing downtime and ensuring smoother deployments.",
    },
    {
      company: "Netpy Technologies",
      href: "#",
      badges: [],
      location: "Bangalore, IN",
      title: "Full-Stack Developer Intern",
      logoUrl: "",
      start: "Oct 2025",
      end: "Present",
      description:
        "- Participated in full SDLC including design, development, testing, and deployment.\n- Improved API performance by ~20% through query optimization.\n- Collaborated with frontend developers to integrate REST APIs.\n- Used Git for version control and CI/CD for automated deployment.",
    },
  ],
  education: [
    {
      school: "S.E.A College of Engineering & Technology",
      href: "#",
      degree:
        "Bachelor of Artificial Intelligence and Machine Learning, CGPA: 7.8",
      logoUrl: "",
      start: "",
      end: "May 2026",
    },
  ],
  projects: [
    {
      title: "REIGC Real Estate CRM Platform",
      href: "#",
      dates: "2025 - Present",
      active: true,
      image: "/project1.png",
      description:
        "Enterprise SaaS platform: designed n-tier architecture, built REST APIs with validation and standardized JSON responses, integrated PostgreSQL with optimized indexing, wrote unit tests, and Dockerized for consistent deployments.",
      technologies: [
        "Python",
        "REST APIs",
        "PostgreSQL",
        "Unit Testing",
        "Docker",
        "n-Tier",
      ],
      links: [],
    },
    {
      title: "SmartDental AI Receptionist",
      href: "https://smart-dental-reception.lovable.app/",
      dates: "2025",
      active: true,
      image: "/atomic.png",
      description:
        "Voice AI booking system: designed backend workflows using Python and API integrations, integrated AI models for response generation, and automated appointment scheduling using Google APIs.",
      technologies: [
        "Python",
        "API Integrations",
        "AI Models",
        "Google APIs",
      ],
      links: [
        {
          type: "Website",
          href: "https://smart-dental-reception.lovable.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Job Portal - Full-Stack SDLC Implementation",
      href: "https://github.com/whyabhisheek/frontend",
      dates: "2025",
      active: true,
      image: "/ib.png",
      description:
        "Built a full-stack job portal across SDLC: designed REST APIs and a responsive React (TypeScript) UI with form validation and resume upload, and automated CI/CD pipelines using Jenkins and Docker (modular design for scalability).",
      technologies: [
        "React (TypeScript)",
        "REST APIs",
        "Jenkins",
        "Docker",
        "CI/CD",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/whyabhisheek/frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  certifications: [
    "FastAPI - The Complete Course (Udemy)",
    "Git & GitHub Bootcamp (Udemy)",
  ],
  hackathons: [],
} as const;
