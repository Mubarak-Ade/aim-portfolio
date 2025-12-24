import TailorImg from "./assets/images/project-img/tailor-screen.png";
import QuizlyImg from "./assets/images/project-img/quizly.png";
import PortfolioImg from "./assets/images/project-img/porfolio-screen.png";
import TaskImg from "./assets/images/project-img/task-manager-screen.png";
import ECommerceImg from "./assets/images/project-img/e-commerce-screen.png";
import WeatherImg from "./assets/images/project-img/weather-screen.png";
import TodoImg from "./assets/images/project-img/todo_screen.png";
import TreeviaImg from "./assets/images/project-img/treevia-screen.png";
import BlogImage1 from "./assets/images/project-img/blog-screen.png";
import BlogImage2 from "./assets/images/project-img/blog-screen_1.png";
import BlogImage3 from "./assets/images/project-img/blog-screen_2.png";
import TreeviaImage1 from "./assets/images/project-img/treevia_1.png";
import TreeviaImage2 from "./assets/images/project-img/treevia_2.png";
import TreeviaImage3 from "./assets/images/project-img/treevia_3.png";
import TreeviaImage4 from "./assets/images/project-img/treevia_4.png";
import TreeviaImage5 from "./assets/images/project-img/treevia_5.png";

export const Data = [
    {
        id: 0,
        name: "Treevia",
        category: "Fullstack",
        info: "A Fullstack Quiz Web Application built with the MERN stack. The system supports guest and authenticated users, quiz attempts, result tracking, and admin quiz management. The architecture is designed for scalability, clean separation of concerns, and portfolio-quality presentation.",
        images: [TreeviaImage1, TreeviaImage2, TreeviaImage3, TreeviaImage4, TreeviaImage5],
        stacks: ["React", "TypeScript", "Tailwind", "Nodejs", "MongoDB", "Expressjs", "zustand"],
        github: "https://github.com/Mubarak-Ade/treevia---full-stack-quiz-website",
        live: "https://treevia-web.vercel.app/result",
    },
    {
        id: 1,
        name: "Fullstack Blog Website",
        category: "Fullstack",
        info: "A full-featured blog platform with user authentication, rich post editor, comments, and an admin dashboard. Built using React + TypeScript on the frontend, Shadcn UI for components, Zustand for client state, and a Node/Express + MongoDB backend.",
        images: [BlogImage1, BlogImage2, BlogImage3],
        stacks: ["React", "TypeScript", "Shadcn", "Nodejs", "MongoDB", "Expressjs", "Zustand"],
        github: "https://github.com/Mubarak-Ade/Blog-Website",
        live: "https://aim-blog.vercel.app",
    },
    {
        id: 2,
        name: "Tailor design landing page",
        category: "Frontend",
        info: "A sleek landing page for a fashion brand, designed to highlight products with elegance and responsiveness. Built with React, TailwindCSS and Framer motion, focusing on modern aesthetics and smooth user experience.",
        images: [TailorImg],
        stacks: ["React", "Tailwind", "Framer motion"],
        github: "https://github.com/Mubarak-Ade/Tailoring-Landing-page",
        live: "https://anike-fashion.vercel.app/",
    },
    {
        id: 3,
        name: "Laptop sales E-Commerce website",
        category: "Frontend",
        info: "A clean, minimalist e-commerce web interface for laptop sales. Features product listings, cart functionality, and responsive layouts using React and TailwindCSS.",
        images: [ECommerceImg],
        stacks: ["React", "Tailwind", "Framer motion", "React context Api"],
        github: "https://github.com/Mubarak-Ade/Laptop-E-commerce-website",
        live: "https://laptop-e-commerce-website.vercel.app/",
    },
    {
        id: 4,
        name: "Portfolio",
        category: "Frontend",
        info: "A personal developer portfolio showcasing skills, experience, and projects. Developed using React and TailwindCSS, with attention to accessibility and visual storytelling.",
        images: [PortfolioImg],
        stacks: ["React", "Tailwind", "Framer motion"],
        github: "https://github.com/Mubarak-Ade/Mubaraq-Ade",
        live: "https://mubaraq-adeshina.vercel.app/",
    },
    {
        id: 6,
        name: "Simple Frontend quiz app",
        category: "Frontend",
        info: "A lightweight quiz interface made with React and Framer Motion, featuring animated transitions and responsive design for smooth user interaction.",
        images: [QuizlyImg],
        stacks: ["React", "Tailwind", "Framer motion"],
        github: "",
        live: "",
    },
    {
        id: 7,
        name: "Simple Weather Api website",
        category: "Frontend",
        info: "A weather app that fetches real-time weather data using an external API. Built with React and TailwindCSS, displaying clean UI with temperature and location data.",
        images: [WeatherImg],
        stacks: ["React", "Tailwind", "weather Api"],
        github: "https://github.com/Mubarak-Ade/Mubaraq-Ade",
        live: "https://weather-sphere-iota.vercel.app/",
    },
    {
        id: 8,
        name: "Full Stack task manager ",
        category: "Backend",
        info: "A task management web app that allows users to create, update, and track tasks efficiently. Built using MERN stack, with backend CRUD operations",
        images: [TaskImg],
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
        id: 9,
        name: "basic todo website",
        category: "Frontend",
        info: "A minimal task organizer built with React and TailwindCSS, allowing users to add and manage their daily tasks easily.",
        images: [TodoImg],
        stacks: ["React", "Tailwindcss"],
        github: "",
        live: "",
    },
];
