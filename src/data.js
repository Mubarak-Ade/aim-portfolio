import TailorImg from "./assets/images/project-img/tailor-screen.png";
import QuizlyImg from "./assets/images/project-img/quizly.png";
import PortfolioImg from "./assets/images/project-img/porfolio-screen.png";
import TaskImg from "./assets/images/project-img/task-manager-screen.png";
import ECommerceImg from "./assets/images/project-img/e-commerce-screen.png";
import WeatherImg from "./assets/images/project-img/weather-screen.png";
import TodoImg from "./assets/images/project-img/todo_screen.png";
import TreeviaImg from "./assets/images/project-img/treevia-screen.png";
import BlogImage from "./assets/images/project-img/blog-screen.png";

export const Data = [
    {
        id: 0,
        name: "Fullstack Blog Website",
        role: "Fullstack",
        info: "A full-featured blog platform with user authentication, rich post editor, comments, and an admin dashboard. Built using React + TypeScript on the frontend, Shadcn UI for components, Zustand for client state, and a Node/Express + MongoDB backend.",
        image: BlogImage,
        stacks: ["React", "TypeScript", "Shadcn", "Nodejs", "MongoDB", "Expressjs", "Zustand"],
        github: "https://github.com/Mubarak-Ade/Blog-Website",
        live: "https://aim-blog.vercel.app",
    },
    {
        id: 1,
        name: "Tailor design landing page",
        role: "Frontend",
        info: "A sleek landing page for a fashion brand, designed to highlight products with elegance and responsiveness. Built with React, TailwindCSS and Framer motion, focusing on modern aesthetics and smooth user experience.",
        image: TailorImg,
        stacks: ["React", "Tailwind", "Framer motion"],
        github: "https://github.com/Mubarak-Ade/Tailoring-Landing-page",
        live: "https://anike-fashion.vercel.app/",
    },
    {
        id: 2,
        name: "Laptop sales E-Commerce website",
        role: "Frontend",
        info: "A clean, minimalist e-commerce web interface for laptop sales. Features product listings, cart functionality, and responsive layouts using React and TailwindCSS.",
        image: ECommerceImg,
        stacks: ["React", "Tailwind", "Framer motion", "React context Api"],
        github: "https://github.com/Mubarak-Ade/Laptop-E-commerce-website",
        live: "https://laptop-e-commerce-website.vercel.app/",
    },
    {
        id: 3,
        name: "Portfolio",
        role: "Frontend",
        info: "A personal developer portfolio showcasing skills, experience, and projects. Developed using React and TailwindCSS, with attention to accessibility and visual storytelling.",
        image: PortfolioImg,
        stacks: ["React", "Tailwind", "Framer motion"],
        github: "https://github.com/Mubarak-Ade/Mubaraq-Ade",
        live: "https://mubaraq-adeshina.vercel.app/",
    },
    {
        id: 4,
        name: "Full Stack Quiz App",
        role: "Fullstack",
        info: "An interactive quiz application built with React, Node.js, Express, and MongoDB. Supports real-time score tracking, user management, and dynamic question rendering.",
        image: TreeviaImg,
        stacks: [
            "React",
            "Tailwind",
            "Framer motion",
            "Redux",
            "Nodejs",
            "MongoDB",
            "Expressjs",
        ],
        github: "",
        live: "",
    },
    {
        id: 5,
        name: "Simple Frontend quiz app",
        role: "Frontend",
        info: "A lightweight quiz interface made with React and Framer Motion, featuring animated transitions and responsive design for smooth user interaction.",
        image: QuizlyImg,
        stacks: ["React", "Tailwind", "Framer motion"],
        github: "",
        live: "",
    },
    {
        id: 6,
        name: "Simple Weather Api website",
        role: "Frontend",
        info: "A weather app that fetches real-time weather data using an external API. Built with React and TailwindCSS, displaying clean UI with temperature and location data.",
        image: WeatherImg,
        stacks: ["React", "Tailwind", "weather Api"],
        github: "https://github.com/Mubarak-Ade/Mubaraq-Ade",
        live: "https://weather-sphere-iota.vercel.app/",
    },
    {
        id: 7,
        name: "Full Stack task manager ",
        role: "Backend",
        info: "A task management web app that allows users to create, update, and track tasks efficiently. Built using MERN stack, with backend CRUD operations",
        image: TaskImg,
        stacks: [
            "React",
            "Typescript",
            "Tailwindcss",
            "Material ui",
            "Nodejs",
            "Expressjs",
            "MongoDB",
            "React Context Api",
        ],
        github: "https://github.com/Mubarak-Ade/Task-Manager",
        live: "",
    },
    {
        id: 8,
        name: "basic todo website",
        role: "Frontend",
        info: "A minimal task organizer built with React and TailwindCSS, allowing users to add and manage their daily tasks easily.",
        image: TodoImg,
        stacks: ["React", "Tailwindcss"],
        github: "",
        live: "",
    },
];
