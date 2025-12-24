import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { FlameAnimation } from "../../Animation/FlameAnimation";
import { Link } from "react-router";
import { createSlug } from "../../util/slug";

const ProjectCard = ({ data, index, isMobile, activeIndex, setActiveIndex}) => {
	const isHovered = activeIndex === index;

	return (
		<motion.div
			animate={{
				boxShadow: isHovered ? "0 0 50px var(--color-cyan-400)" : "0 0 0px transparent",
				scale: isHovered ? 1.05 : 1,
			}}
			onHoverStart={() => !isMobile && setActiveIndex(index)}
			onHoverEnd={() => !isMobile && setActiveIndex(null)}
			transition={{
				delay: 0.2,
				duration: 0.5,
			}}
			// whileHover={{
			// 	boxShadow: "0 0 50px var(--color-cyan-400)",
			// 	scale: 1.05,
			// }}
			onClick={() => isMobile && setActiveIndex(isHovered ? null : index)}
			className="m4 relative max-w-sm h-full block border-2 text-white border-background shadow-custom-100 rounded-2xl space-y-4 bg-card shadow-[0_0_15px]"
		>
			<div className="relative opacity-100 overflow-hidden rounded-t-xl">
				<img
					src={data.images[0]}
					alt={data.images[0]}
					className="rounded-t-xl m-auto drop-shadow-2xl w-full h-60 object-cover"
				/>
				<motion.div
					animate={{
						opacity: isHovered ? 1 : 0,
					}}
					transition={{ duration: 0.3 }}
					className="flex absolute top-0 left-0 w-full h-full bg-background/50 items-center justify-center gap-5 p-4"
				>
					<Link to={`${createSlug(data.name)}`}>
						<motion.button
							whileHover={{
								scale: 1.1,
								backgroundColor: "var(--color-card)",
								border: "1px solid var(--color-primary)",
								color: "var(--color-primary)",
							}}
							whileTap={{
								backgroundColor: "var(--color-primary)",
								border: "1px solid var(--color-card)",
								scale: 0.6,
							}}
							className="px-8 py-2 text-xs bg-custom-200/80 border border-primary cursor-pointer shadow-2xl shadow-custom-100 rounded-xl "
						>
							View Project
						</motion.button>
					</Link>
				</motion.div>
			</div>
			<div className="space-y-2 px-5">
				<span className="px-6 py-2 bg-custom-500/30 text-custom-500 font-semibold border-custom-500 border rounded-3xl text-sm">
					{data.category}
				</span>
				<h2 className="text-xl font-bold mt-4">{data.name}</h2>
				<p className="line-clamp-2">{data.info}</p>
				<div className="flex flex-wrap gap-1">
					{data.stacks.map((stack, index) => (
						<span
							key={index}
							className="px-4 cursor-pointer py-1 bg-custom-100/30 text-[10px] rounded-3xl border border-custom-400"
						>
							{stack}
						</span>
					))}
				</div>
			</div>
			<FlameAnimation isHovered={isHovered} />
		</motion.div>
	);
};

export default ProjectCard;
