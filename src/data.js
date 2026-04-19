import TailorImg from "./assets/images/project-img/tailor-screen.png";
import HOS1 from "./assets/images/project-img/hos/hos.png"
import HOS2 from "./assets/images/project-img/hos/hos2.png"
import HOS3 from "./assets/images/project-img/hos/hos3.png"
import HOS4 from "./assets/images/project-img/hos/hos4.png"
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
import ShinaStoreImage1 from "./assets/images/project-img/shina/shina-store-homepage.png";
import ShinaStoreImage2 from "./assets/images/project-img/shina/productpage.png";
import ShinaStoreImage3 from "./assets/images/project-img/shina/shina-store-project-detailpage.png";
import ShinaStoreImage4 from "./assets/images/project-img/shina/cartpage.png";
import ShinaStoreImage5 from "./assets/images/project-img/shina/ordermanagement.png";
import ShinaStoreImage6 from "./assets/images/project-img/shina/checkoutpage.png";
import MemoDevImage1 from "./assets/images/project-img/memodev/memodev-homepage.png";
import MemoDevImage2 from "./assets/images/project-img/memodev/memodev-create-snippet.png";
import MemoDevImage3 from "./assets/images/project-img/memodev/register.png";
import MemoDevImage4 from "./assets/images/project-img/memodev/project.png";
import MemoDevImage5 from "./assets/images/project-img/memodev/search-1.png";
// import MemoDevImage5 from "./assets/images/project-img/memodev/signup.png";
import MemoDevImage6 from "./assets/images/project-img/memodev/project-create.png";

export const Data = [
    {
        id: 0,
        name: "Memo Dev",
        category: "Fullstack",
        info: "MemoDev is a full-stack developer knowledge vault for saving code snippets, technical notes, and reusable implementation ideas in one place. Instead of digging through old repositories or repeating the same solutions, you can organize your work by project, tag, and language, then revisit it from a focused dashboard.",
        images: [MemoDevImage1, MemoDevImage2, MemoDevImage3, MemoDevImage4, MemoDevImage5, MemoDevImage6],
        stacks: ["React", "TypeScript", "Tailwind", "Nodejs", "MongoDB", "Nodemailer", "Expressjs", "zustand", "Tanstack query", "Zod"],
        github: "https://github.com/Mubarak-Ade/MemoDev",
        live: "https://memodev.vercel.app/snippets/",
    },
    {
        id: 1,
        name: "Shina Store",
        category: "Fullstack",
        info: "Developed a full-stack laptop e-commerce platform using React, TypeScript, Node.js, Express, and MongoDB, featuring a customer storefront, secure authentication, cart and checkout flow, and an admin dashboard for product and order management. Designed RESTful APIs with type-safe validation, implemented role-based access control, and integrated Cloudinary for media handling. The project reflects scalable architecture, clean code practices, and production-ready full-stack development.",
        images: [ShinaStoreImage1, ShinaStoreImage2, ShinaStoreImage3, ShinaStoreImage4, ShinaStoreImage5],
        stacks: ["React", "TypeScript", "Tailwind", "Nodejs", "MongoDB", "Expressjs", "zustand", "Tanstack query", "Zod"],
        github: "https://github.com/Mubarak-Ade/Fullstack-Laptop-E-commerce-website",
        live: "https://shina-store.vercel.app/",
    },
    {
        id: 2,
        name: "Treevia",
        category: "Fullstack",
        info: "A Fullstack Quiz Web Application built with the MERN stack. The system supports guest and authenticated users, quiz attempts, result tracking, and admin quiz management. The architecture is designed for scalability, clean separation of concerns, and portfolio-quality presentation.",
        images: [TreeviaImage1, TreeviaImage2, TreeviaImage3, TreeviaImage4, TreeviaImage5],
        stacks: ["React", "TypeScript", "Tailwind", "Nodejs", "MongoDB", "Expressjs", "zustand"],
        github: "https://github.com/Mubarak-Ade/treevia---full-stack-quiz-website",
        live: "https://treevia-web.vercel.app/result",
    },
    {
        id: 3,
        name: "Fullstack Blog Website",
        category: "Fullstack",
        info: "A full-featured blog platform with user authentication, rich post editor, comments, and an admin dashboard. Built using React + TypeScript on the frontend, Shadcn UI for components, Zustand for client state, and a Node/Express + MongoDB backend.",
        images: [BlogImage1, BlogImage2, BlogImage3],
        stacks: ["React", "TypeScript", "Shadcn", "Nodejs", "MongoDB", "Expressjs", "Zustand"],
        github: "https://github.com/Mubarak-Ade/Blog-Website",
        live: "https://aim-blog.vercel.app",
    },
    {
        id: 4,
        name: "Tailor design landing page",
        category: "Frontend",
        info: "A sleek landing page for a fashion brand, designed to highlight products with elegance and responsiveness. Built with React, TailwindCSS and Framer motion, focusing on modern aesthetics and smooth user experience.",
        images: [HOS1, HOS2, HOS3, HOS4],
        stacks: ["React", "Tailwind", "Framer motion"],
        github: "https://github.com/Mubarak-Ade/Tailoring-Landing-page",
        live: "https://anike-fashion.vercel.app/",
    },
    {
        id: 5,
        name: "Laptop sales E-Commerce website",
        category: "Frontend",
        info: "A clean, minimalist e-commerce web interface for laptop sales. Features product listings, cart functionality, and responsive layouts using React and TailwindCSS.",
        images: [ECommerceImg],
        stacks: ["React", "Tailwind", "Framer motion", "React context Api"],
        github: "https://github.com/Mubarak-Ade/Laptop-E-commerce-website",
        live: "https://laptop-e-commerce-website.vercel.app/",
    },
    {
        id: 6,
        name: "Portfolio",
        category: "Frontend",
        info: "A personal developer portfolio showcasing skills, experience, and projects. Developed using React and TailwindCSS, with attention to accessibility and visual storytelling.",
        images: [PortfolioImg],
        stacks: ["React", "Tailwind", "Framer motion"],
        github: "https://github.com/Mubarak-Ade/Mubaraq-Ade",
        live: "https://mubaraq-adeshina.vercel.app/",
    },
    {
        id: 7,
        name: "Simple Frontend quiz app",
        category: "Frontend",
        info: "A lightweight quiz interface made with React and Framer Motion, featuring animated transitions and responsive design for smooth user interaction.",
        images: [QuizlyImg],
        stacks: ["React", "Tailwind", "Framer motion"],
        github: "",
        live: "",
    },
    {
        id: 8,
        name: "Simple Weather Api website",
        category: "Frontend",
        info: "A weather app that fetches real-time weather data using an external API. Built with React and TailwindCSS, displaying clean UI with temperature and location data.",
        images: [WeatherImg],
        stacks: ["React", "Tailwind", "weather Api"],
        github: "https://github.com/Mubarak-Ade/Mubaraq-Ade",
        live: "https://weather-sphere-iota.vercel.app/",
    },
    {
        id: 9,
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
        id: 10,
        name: "basic todo website",
        category: "Frontend",
        info: "A minimal task organizer built with React and TailwindCSS, allowing users to add and manage their daily tasks easily.",
        images: [TodoImg],
        stacks: ["React", "Tailwindcss"],
        github: "",
        live: "",
    },
];
