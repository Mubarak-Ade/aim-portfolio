import { motion } from "motion/react";
import React, { useState } from "react";
import { FlameAnimation } from "../Animation/FlameAnimation";
import { Link } from "react-router";

const ProjectCard = ({ data }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			initial={{
				y: 200,
			}}
			animate={{
				y: 0,
			}}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			transition={{
				delay: 0.2,
				duration: 0.5,
			}}
			whileHover={{
				boxShadow: "0 0 50px var(--color-cyan-400)",
				scale: 1.05,
			}}
			className="m4 relative max-w-sm h-full block border-2 text-white border-background shadow-custom-100 rounded-2xl space-y-4 bg-card shadow-[0_0_15px]"
		>
			<div className="relative overflow-hidden rounded-t-xl">
				<img
					src={data.image}
					alt={data.image}
					className="rounded-t-xl m-auto drop-shadow-2xl w-full h-60 object-fill"
				/>
				<motion.div
					animate={{
						opacity: isHovered ? 1 : 0,
					}}
					transition={{ duration: 0.3 }}
					className="flex absolute top-0 left-0 w-full h-full bg-background/50 items-center justify-center gap-5 p-4"
				>
					<Link to={data.github}>
						<motion.button
							whileHover={{
								scale: 1.1,
								backgroundColor: "var(--color-card)",
								border: "1px solid var(--color-primary)",
								color: "var(--color-primary)",
							}}
							whileTap={{
								scale: 0.9,
							}}
							className="px-8 py-2 bg-custom-200/80 border border-primary cursor-pointer shadow-2xl shadow-custom-100 rounded-3xl "
						>
							Github
						</motion.button>
					</Link>
					<Link to={data.live}>
						<motion.button
							whileHover={{
								scale: 1.1,
								backgroundColor: "var(--color-primary)",
								color: "var(--color-card)",
								border: "1px solid var(--color-card)",
							}}
							whileTap={{
								scale: 0.9,
							}}
							className="px-8 py-2 bg-custom-500/40 border-2 border-custom-300 text-custom-200 cursor-pointer rounded-3xl "
						>
							Demo
						</motion.button>
					</Link>
				</motion.div>
			</div>
			<div className="space-y-2 px-5">
				<span className="px-6 py-2 bg-custom-500/30 text-custom-500 font-semibold border-custom-500 border rounded-3xl text-sm">
					{data.role}
				</span>
				<h2 className="text-xl font-bold mt-4">{data.name}</h2>
				<p className="line-clamp-2">{data.info}</p>
				<div className="flex flex-wrap gap-1">
					{data.stacks.slice(0, 4).map((stack, index) => (
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
