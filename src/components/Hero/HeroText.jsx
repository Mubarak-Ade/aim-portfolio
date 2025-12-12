import { motion } from "motion/react";
import Image from "../../assets/images/Profile.png";
import { Link } from "react-router";

const HeroText = ({ activeStep }) => {
	return (
		<div className="w-full space-y-3 text-center z-10 flex flex-col justify-center items-center max-w-3xl">
			<motion.div
				initial={{
					scale: 0,
					rotate: -180,
				}}
				animate={
					activeStep >= 0
						? {
								scale: 1,
								rotate: 0,
						  }
						: {}
				}
				transition={{
					delay: 2.5,
				}}
				className="w-50 h-50 border-4 overflow-hidden bg-primary shadow-[0px_0px_20px] shadow-primary border-primary mix-blend-luminosity rounded-full"
			>
				<img
					src={Image}
					alt="Profile"
					className="h-full w-full opacity-95"
				/>
			</motion.div>

			<h1 className="text-5xl mt-6 text-primary text-shadow-2xs font-bold gap-4 flex items-center justify-star">
				{"Hi, I'm AIM".split(" ").map((char, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={activeStep >= 1 ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.2, delay: index * 0.1 }}
						className=""
					>
						{char}
					</motion.span>
				))}
			</h1>
			<h2 className="text-2xl mt-2 text-slate-400 font-bold gap-4 flex items-center justify-center">
				{"Full-Stack Developer".split(" ").map((char, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, x: 20 }}
						animate={activeStep >= 2 ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.2, delay: index * 0.1 }}
						className=""
					>
						{char}
					</motion.span>
				))}
			</h2>

			<p className="text-xl mr-10 text-center mt-2 text-slate-400 font-bold gap-1 flex items-center justify-center">
				{"Building scalable web applications"
					.split(" ")
					.map((char, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0, x: 0 }}
							animate={
								activeStep >= 3 ? { opacity: 1, x: 20 } : {}
							}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className=""
						>
							{char}
						</motion.span>
					))}
			</p>
			<motion.button
				initial={{ opacity: 0, y: 20 }}
				animate={
					activeStep >= 4
						? {
								opacity: 1,
								y: 0,
						  }
						: {}
				}
				whileHover={{
					scale: 1.1,
					backgroundColor: "var(--color-primary)",
					boxShadow: "0 0 20px rgba(6,182,212,0.4)",
					color: "var(--color-background)",
					transition: {
						duration: 0.2,
					},
				}}
				whileTap={{
					scale: 0.8,
					backgroundColor: "var(--color-primary)",
					color: "var(--color-background)",
				}}
				className="border-custom-500 border text-primary cursor-pointer px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg"
			>
				<Link to="/about">About me</Link>
			</motion.button>
		</div>
	);
};

export default HeroText;
