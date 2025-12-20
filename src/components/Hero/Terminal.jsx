import { motion } from "motion/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const terminalCommands = [
	{ text: "$ whoami", output: "Adeshina Ibrahim Mubaraq", delay: 0 },
	{ text: "$ role", output: "Full Stack Developer", delay: 2.5 },
	{
		text: "$ mission",
		output: "Building scalable web applications",
		delay: 5,
	},
	{
		text: "$ show portfolio",
		output: "Launching portfolio...",
		delay: 7.5,
	},
];

const Terminal = ({ onCommandComplete }) => {
	const [visibleCommand, setVisibleCommand] = useState([]);

	useEffect(() => {
		terminalCommands.forEach((cmd, index) => {
			setTimeout(() => {
				setVisibleCommand((prev) => [...prev, index]);
				setTimeout(() => {
					onCommandComplete(index + 1);
				}, 1500);
			}, cmd.delay * 1000);
		});
	}, []);

	return (
		<div className="text-lg z-10 self-center w-full px-4 max-w-xl ">
			<div className="rounded-xl overflow-hidden shadow-2xl shadow-custom-100 border border-custom-500 ">
				<div className="bg-[#0f1729] flex gap-1 p-4">
					<span className="rounded-full  w-5 h-5 bg-red-500"></span>
					<span className="px-2.5 rounded-full  w-5 h-5 bg-yellow-500"></span>
					<span className="px-2.5 rounded-full  w-5 h-5 bg-green-500"></span>
				</div>
				<div className="bg-[#0c1220] p-4 min-h-[300px]">
					{terminalCommands.map(
						(cmd, index) =>
							visibleCommand.includes(index) && (
								<div
									className="text-white mt-1"
									key={index}
								>
									<motion.h6
										initial={{
											width: 0,
											// opacity: 0,
										}}
										animate={{
											width: "100%",
											// opacity: 1,
										}}
										transition={{
											duration: 1,
											ease: "easeInOut",
											// delay: index * 0.5,
										}}
										className="overflow-hidden text-custom-300 whitespace-nowrap"
									>
										{cmd.text}
									</motion.h6>
									<motion.span
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.5,
											ease: "easeInOut",
											delay: 1,
										}}
										className="text-slate-200"
									>
										{cmd.output}
									</motion.span>
								</div>
							)
					)}
					<motion.span
						animate={{ opacity: [1, 0] }}
						transition={{ duration: 0.8, repeat: Infinity }}
						className="bg-custom-500 p-0.5 w-2 h-3"
					></motion.span>
				</div>
			</div>

			<div className="text-center  mt-10 p-2">
				<h6 className="mb-4 text-xl text-primary font-bold">
					{" "}
					------ Follow me on Social media ------
				</h6>
				<div className="flex text-3xl w-full items-center justify-center gap-5">
					<motion.a
						href="https://github.com/Mubarak-Ade"
						whileTap={{
							scale: 0.8,
							backgroundColor: "var(--color-custom-300)",
							color: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						whileHover={{
							backgroundColor: "var(--color-custom-300)",
							y: -10,
							color: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						transition={{
							duration: 0.5,
						}}
						className="border p-2 border-secondary text-secondary rounded-full cursor-pointer"
					>
						<BsGithub />
					</motion.a>
					<motion.a
						href="https://x.com/ade_mubaraq"
						whileTap={{
							scale: 0.8,
							backgroundColor: "var(--color-custom-300)",
							fill: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						whileHover={{
							backgroundColor: "var(--color-custom-300)",
							y: -10,
							fill: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						transition={{
							duration: 0.5,
						}}
						className="border border-secondary p-2.5 border-custom-400 fill-secondary rounded-full cursor-pointer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							// fill="#64748b"
							className="bi bi-twitter-x"
							viewBox="0 0 16 16"
							id="Twitter-X--Streamline-Bootstrap"
							height={25}
							width={25}
						>
							<desc>
								{
									"\n    Twitter X Streamline Icon: https://streamlinehq.com\n  "
								}
							</desc>
							<path
								d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
								strokeWidth={1}
							/>
						</svg>
					</motion.a>
					<motion.a
						href="https://www.linkedin.com/in/mubarak-adeshina-924bb32a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
						whileTap={{
							scale: 0.8,
							backgroundColor: "var(--color-custom-300)",
							color: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						whileHover={{
							backgroundColor: "var(--color-custom-300)",
							y: -10,
							color: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						transition={{
							duration: 0.5,
						}}
						className="border p-2 border-secondary text-secondary rounded-full cursor-pointer"
					>
						<BsLinkedin />
					</motion.a>
				</div>
			</div>
		</div>
	);
};

export default Terminal;
