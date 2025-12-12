import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AboutMe from './pages/AboutMe'
// import Hero from './pages/Hero'
import Project from './pages/Project'
import Contact from './pages/Contact'
import { ProjectDetail } from './pages/ProjectDetail'
import { BreadCrumbs } from './components/BreadCrumbs'

function App() {

	return (
		<>
			<Navbar />
			<main className='relative overflow-hidden'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects/:slug' element={<ProjectDetail />} />
					<Route path='/about' element={<AboutMe />} />
					<Route path='/projects' element={<Project />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</main>
		</>
	)
}

export default App
