import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Hero from './components/Hero'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {

	return (
		<div className='relative'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Hero />} />
				<Route path='/about' element={<AboutMe />} />
				<Route path='/project' element={<Project />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	)
}

export default App
