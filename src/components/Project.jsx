import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Data } from "../data";
import { AnimatePresence, motion } from "motion/react";
import { FlameAnimation } from "../Animation/FlameAnimation";

const Project = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [activeIndex, setActiveIndex] = useState(null);
	const containerRef = useRef();

	// Detect if device is touch
	useEffect(() => {
		const checkMobile = window.matchMedia("(hover: none)").matches;
		setIsMobile(checkMobile);
	}, []);

	// Close active card if clicked outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target)
			) {
				setActiveIndex(null);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	return (
		<div className="relative overflow-hidden h-full">
			<AnimatePresence>
				<div className="top-0 -z-10 left-0 h-full blur-xs grid grid-cols-17 place-items-center w-full absolute">
					{[...Array(500)].map((_, i) => (
						<motion.div
							initial={{
								borderColor: "var(--color-custom-100)",
								scale: 0,
							}}
							animate={{
								borderColor: [
									"var(--color-custom-300)",
									"var(--color-custom-100)",
								],
								boxShadow: "0 3px 10px var(--color-custom-300)",
								scale: [0.5, 1],
							}}
							transition={{
								duration: 1,
								delay: Math.random() * i * 0.05,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							exit={{
								borderColor: "var(--color-custom-100)",
								scale: 0,
							}}
							key={i}
							className="w-20 h-20 border-custom-300/10 border"
						/>
					))}
				</div>
			</AnimatePresence>
			<div className="z-50 mt-20 bg-custom-200/80">
				<div className="text-center p-4 ">
					<h2 className="text-xl text-primary m-4 font-bold">
						My work
					</h2>
					<h1 className="text-5xl text-primary m-4 font-bold">
						Projects
					</h1>
					<p className="text-lg text-white">
						A collection of my recent work and personal projects
						that showcase my skills and passion
					</p>
				</div>
				<div className="grid p-10 grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-y-28  auto-rows-fr">
					{Data.map((data, index) => (
						<ProjectCard
							key={index}
							data={data}
							index={index}
							isMobile={isMobile}
							activeIndex={activeIndex}
							setActiveIndex={setActiveIndex}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
