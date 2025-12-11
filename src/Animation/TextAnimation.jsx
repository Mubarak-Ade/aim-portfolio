import { AiFillCheckCircle } from "react-icons/ai"; 
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
// This component displays a text animation that appears after a specified timer
// It uses the motion library for animations and React hooks for state management
// The text prop is the text to be displayed, and timer is the delay before it appears

export const TypewritingAnimation = ({ text, output, timer = 500, }) => {
	
	const [display, setDisplay] = useState(false)

	useEffect(() => {
		setInterval(() => {
			setDisplay(true)
		}, timer);
		clearInterval()
	}, [display, timer])

	return (display &&
		<>
			<h2 className='text-xl text-custom-500 font-bold tracking-tighter flex items-center justify-start'>
				<span className="mr-2">$</span>
				{text.split('').map((char, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, display: 'none' }}
						animate={display ? { opacity: 1, display: 'block' } : {}}
						transition={{ duration: 0.1, delay: index * 0.1 }}
						className=''>
						{char === " " ? "\u00A0" : char}
					</motion.span>
				))}
				<motion.span
					initial={{
						opacity: 0
					}}
					animate={{
						opacity: 1
					}}
					transition={{
						duration: .5,
						repeat: Infinity,
						repeatType: 'mirror'
					}}
					className='h-6 w-1 ml-2 bg-custom-500'></motion.span>
			</h2>
			<motion.span 
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{
					duration: 0.5,
					delay: 2
				}}
			className="text-white text-xl flex items-center gap-2">{output}</motion.span>
		</>
	)
}

export const TextUpAnimation = ({ text, timer = 500, activeStep}) => {
	return (activeStep &&
		<h2 className='text-5xl text-white font-bold gap-4 flex items-center justify-start'>
			{text.split(' ').map((char, index) => (
				<motion.span
					key={index}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: index * 0.1 }}
					className=''>
					{char}
				</motion.span>
			))}
		</h2>
	)
}

export const TextRightAnimation = ({ text, timer = 500, }) => {

	const [display, setDisplay] = useState(false)

	useEffect(() => {
		setInterval(() => {
			setDisplay(true)
		}, timer);
		clearInterval()
	}, [display, timer])

	return (display &&
		<h2 className='text-2xl mt-2 text-white font-bold gap-4 flex items-center justify-start'>
			{text.split(' ').map((char, index) => (
				<motion.span
					key={index}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2, delay: index * 0.1 }}
					className=''>
					{char}
				</motion.span>
			))}
		</h2>
	)
}

export const TextScaleAnimation = ({ text, timer = 500, }) => {

	const [display, setDisplay] = useState(false)

	useEffect(() => {
		setInterval(() => {
			setDisplay(true)
		}, timer);
		clearInterval()
	}, [display, timer])

	return (display &&
		<h2 className='text-lg mt-2 text-white font-bold gap-1 flex items-center justify-start'>
			{text.split(' ').map((char, index) => (
				<motion.span
					key={index}
					initial={{ opacity: 0, x: 0 }}
					animate={{ opacity: 1, x: 20 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
					className=''>
					{char}
				</motion.span>
			))}
		</h2>
	)
}