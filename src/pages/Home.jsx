import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import Skill from '../components/Skill'
import Contact from '../components/Contact'

const Home = () => {
// This is the Home component that renders the Hero component
// It serves as the main entry point for the application	

	return (
		<div className=''>
			<Hero />
			<AboutMe />
			<Skill />
			<Project />
			<Contact />
		</div>
	)
}

export default Home