# Portfolio Client

A responsive React-based frontend for showcasing projects, skills, and professional experience with smooth animations and modern UI design.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Project Showcase**: Display portfolio projects with detailed information and image galleries
- **Dynamic Routing**: Navigate between Home, About, Projects, Project Details, Skills, and Contact pages
- **Smooth Animations**: Enhanced UX with Motion library animations
- **Contact Form**: Send messages directly to email via backend API
- **Category Filtering**: Filter projects by category (Frontend, Fullstack, etc.)

## Tech Stack

- **React 19** - UI framework
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first styling
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **Motion** - Animation library
- **Lucide React** - Icon library
- **Vite Plugin Tailwind** - Tailwind integration

## Project Structure

```
src/
├── components/              # Reusable components
│   ├── Navbar.jsx
│   ├── BreadCrumbs.jsx
│   ├── Contact/
│   │   ├── ContactForm.jsx
│   │   ├── ContactInfo.jsx
│   │   ├── ContactBtn.jsx
│   │   └── Alert.jsx
│   ├── Project/
│   │   └── ProjectCard.jsx
│   ├── ProjectDetail/
│   │   ├── Header.jsx
│   │   ├── SlideShow.jsx
│   │   └── TechnologyCard.jsx
│   └── Hero/
│       ├── HeroText.jsx
│       └── Terminal.jsx
├── pages/                   # Page components
│   ├── Home.jsx
│   ├── AboutMe.jsx
│   ├── Project.jsx
│   ├── ProjectDetail.jsx
│   ├── Contact.jsx
│   └── Skill.jsx
├── Animation/              # Animation components
│   ├── FlameAnimation.jsx
│   ├── GridAnimation.jsx
│   └── TextAnimation.jsx
├── assets/                 # Images, fonts, and static files
│   ├── images/
│   │   ├── background/
│   │   ├── project-img/
│   │   └── svg/
│   └── font/
├── util/
│   └── slug.js            # URL slug utilities
├── App.jsx
├── App.css
├── index.css
├── font.css
├── data.js                # Projects and portfolio data
└── main.jsx
```

## Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure API endpoint**
   
   Update the backend URL in `src/components/Contact/ContactForm.jsx`:
   ```javascript
   const res = await axios.post(
     "http://localhost:3000/",  // Change to your backend URL
     {
       name,
       email,
       message,
     }
   );
   ```

## Running Locally

**Development mode:**
```bash
npm run dev
```
Opens on `http://localhost:5173`

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

**Lint code:**
```bash
npm run lint
```

## Adding Projects

Edit `src/data.js` to add new projects:

```javascript
{
    id: n,
    name: "Project Name",
    category: "Frontend/Fullstack",
    info: "Project description",
    images: [Image1, Image2],
    stacks: ["React", "Tailwind"],
    github: "https://github.com/...",
    live: "https://...",
}
```

## Customization

- **Colors & Styling**: Modify Tailwind CSS in `index.css` and component className attributes
- **Animations**: Edit components in `src/Animation/` to change Motion library animations
- **Fonts**: Custom fonts are in `src/assets/font/` - update `font.css` to use different fonts
- **Pages**: Each page in `src/pages/` can be customized independently

## API Integration

The client communicates with the backend via:
- **Contact Form**: `POST /` - Sends name, email, and message to be forwarded to your Gmail inbox
