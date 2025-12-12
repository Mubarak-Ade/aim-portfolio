import React, { useCallback, useEffect, useRef, useState } from "react";
import ProjectCard from "../components/Project/ProjectCard";
import { Data } from "../data";
import { AnimatePresence, motion } from "motion/react";
import { FlameAnimation } from "../Animation/FlameAnimation";
import { GridAnimation } from "../Animation/GridAnimation";

const Project = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [activeIndex, setActiveIndex] = useState(null);
	const containerRef = useRef();
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = ["All", "Frontend", "Backend", "Fullstack"];

	const filterByCategory =
		selectedCategory === "All"
			? Data
			: Data.filter((data) => selectedCategory === data.category);

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

	const handleSelectCategory = (select) => {
		setSelectedCategory(select);
	};

	return (
		<div className="relative overflow-hidden h-full">
			<GridAnimation />
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
				<div className="p-4">
					<div className="md:flex hidden items-center justify-center gap-4 mb-10">
						{categories.map((category) => (
							<motion.button
								whileTap={{
									scale: 0.9,
								}}
								key={category}
								onClick={() =>
									handleSelectCategory(category)
								}
								className={`${
									selectedCategory === category
										? "bg-secondary/30"
										: ""
								} px-6 py-1.5 cursor-pointer text-secondary font-semibold border-secondary border rounded-3xl text-xs`}
							>
								{category}
							</motion.button>
						))}
					</div>
					<select
						onChange={(e) => setSelectedCategory(e.target.value)}
						name="category"
						id="category"
						className="px-6 py-1.5 md:hidden w-full cursor-pointer text-secondary font-semibold border-secondary border rounded-3xl text-xs"
					>
						{/* <option value="">All</option> */}
						{categories.map((category) => (
							<option
								key={category}
								value={category}
								className="bg-custom-100 text-white p-2"
							>
								{category}
							</option>
						))}
					</select>
				</div>
				<div className="grid p-10 grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-y-28  auto-rows-fr">
					{filterByCategory.map((data) => (
						<ProjectCard
							key={data.id}
							data={data}
							index={data.id}
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
