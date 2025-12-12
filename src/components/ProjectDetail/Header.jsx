import React from "react";
import { motion } from "motion/react";
import { Github, Rocket } from "lucide-react";
import { Link } from "react-router";

export const Header = ({ name, info, role, link, github }) => {
	return (
		<>
			<div className="flex lg:flex-row flex-col gap-5 items-center justify-center">
				<div className="max-w-3xl w-full">
					<h1 className="text-5xl text-white font-bold">{name}</h1>
					<p className="text-secondary mt-4">{info}</p>
					<div className="flex gap-4 mt-4">
						<Link to={link}>
							<motion.button
								whileHover={{
									boxShadow: "0 0 15px var(--color-primary)",
									scale: 1.1,
								}}
								whileTap={{
									scale: 0.8,
								}}
								className="flex gap-2 shadow-[0_0_10px] cursor-pointer shadow-primary font-semibold bg-primary text-custom-100 px-4 py-2 rounded-md"
							>
								<Rocket /> Live Demo
							</motion.button>
						</Link>

						<Link to={github}>
							<motion.button
								whileHover={{
									boxShadow: "0 0 15px var(--color-secondary)",
									color: "var(--color-primary)",
									scale: 1.1,
								}}
								whileTap={{
									scale: 0.8,
								}}
								className="flex gap-2 text-secondary cursor-pointer font-semibold border border-secondary px-4 py-2 rounded-md"
							>
								<Github /> GitHub Repo
							</motion.button>
						</Link>
					</div>
				</div>
				<div className="flex flex-wrap px-5 gap-4">
					<div className="bg-card px-6 text-start py-4 rounded-md">
						<h4 className="text-secondary text-xs font-semibold">
							TIMELINE
						</h4>
						<p className="text-sm font-bold text-white">3 Weeks</p>
					</div>
					<div className="bg-card px-6 text-start py-4 rounded-md">
						<h4 className="text-secondary text-xs font-semibold">
							ROLE
						</h4>
						<p className="text-sm font-bold text-white">{role}</p>
					</div>
					<div className="bg-card px-6 text-start py-4 rounded-md">
						<h4 className="text-secondary text-xs font-semibold">
							STATUS
						</h4>
						<p className="text-sm font-bold text-green-500 before:rounded-full flex before:size-2 items-center before:bg-green-500 gap-2">
							Completed
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
