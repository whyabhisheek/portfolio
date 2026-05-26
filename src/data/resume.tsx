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
    "Full-Stack Developer specializing in FastAPI, Django, React.js, and AI-powered automation systems with experience in building scalable production-ready applications. Skilled in workflow automation using n8n, Gemini 1.5, CI/CD pipelines, Docker, Jenkins, AWS EC2, and modern full-stack technologies.",
  avatarUrl: "/profile.jpeg",
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "C",
    "SQL",
    "React.js",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Django REST Framework",
    "Linux",
    "Docker",
    "Git",
    "Jenkins",
    "AWS",
    "GCP",
    "VPS",
    "CI/CD",
    "PostgreSQL",
    "n8n",
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
      company: "Netpy Technologies",
      href: "#",
      badges: [],
      location: "Bangalore, IN",
      title: "Full-Stack Developer",
      logoUrl: "",
      start: "Nov 2025",
      end: "Present",
      description:
        "- Completed full-stack training while building an end-to-end Job Portal using Django and React.js.\n- Contributed to REIGC Real Estate CRM with scalable APIs, workflow automation, and role-based access.\n- Worked on CI/CD pipelines, AWS EC2 deployment, and Docker containerization.",
    },
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
        "- Learned backend development workflows, Agile practices, and team collaboration using Jira.\n- Built and optimized FastAPI-based REST APIs while working on backend endpoint development.\n- Debugged backend issues, tested APIs, and gained experience in deployment and project architecture.",
    },
  ],
  education: [
    {
      school: "S.E.A College of Engineering & Technology",
      href: "#",
      degree:
        "Bachelor of Artificial Intelligence and Machine Learning, CGPA: 8.0",
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
        "Built a full-stack Real Estate CRM using React, TypeScript, Vite, Django REST Framework, and PostgreSQL for lead and deal management. Implemented JWT authentication, role-based access control, workflow automation using Celery and Redis, plus dashboards, KPI reports, payment tracking, audit logs, compliance workflows, and Swagger APIs.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Django REST Framework",
        "PostgreSQL",
        "JWT",
        "Celery",
        "Redis",
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
        "Built AI-powered voice booking workflows using React.js, n8n, Gemini AI, and automated scheduling systems. Developed scalable integrations with real-time patient management and AI voice automation to reduce manual front desk operations and improve scheduling efficiency.",
      technologies: [
        "React.js",
        "n8n",
        "Gemini AI",
        "Voice Automation",
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
      href: "https://github.com/whyabhisheek/backend",
      dates: "2025",
      active: true,
      image: "/ib.png",
      description:
        "Built a full-stack Job Portal implementing complete SDLC from requirement analysis to deployment. Developed REST APIs, responsive React UI, resume uploads, real-time form validation, and automated CI/CD pipelines using Jenkins, Docker, and Dokploy.",
      technologies: [
        "Django",
        "React",
        "REST APIs",
        "Jenkins",
        "Docker",
        "Dokploy",
        "CI/CD",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/whyabhisheek/backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  hackathons: [],
} as const;
