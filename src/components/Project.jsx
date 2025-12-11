import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Data } from "../data";
import { AnimatePresence, motion } from "motion/react";
import { FlameAnimation } from "../Animation/FlameAnimation";

const Project = () => {
	return (
		<div className="relative h-full">
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
				<div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-y-20 auto-rows-fr">
					{Data.map((data) => (
						<div className="relative p-4">
							<ProjectCard
								data={data}
								key={data.id}
							/>
							{/* <div className="h-10 w-full shadow-2xl -z-50 border bg-custom-200 border-custom-300 absolute -bottom-0 rounded-full"></div> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
