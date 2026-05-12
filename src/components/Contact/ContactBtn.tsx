import React from "react";
import { motion } from "motion/react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export const ContactBtn = () => {
	return (
		<div className="p-4 border mt-4 border-neutral-100/20 rounded-md">
			<h2 className="text-white">Social Media</h2>
			<ul className="p-2 flex items-center gap-4 justify-center">
				<li className="flex items-center gap-2 text-white">
					<motion.a
						whileTap={{
							scale: 0.8,
							color: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						whileHover={{
							y: -10,
							color: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						transition={{
							duration: 0.5,
						}}
						href="https://www.linkedin.com/in/mubarak-adeshina-924bb32a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
						className="p-2 bg-custom-100 text-custom-300 rounded-md"
					>
						<BsLinkedin size={25} />
					</motion.a>
				</li>
				<li className="flex items-center gap-2 text-white">
					<motion.a
						whileTap={{
							scale: 0.8,
							fill: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						whileHover={{
							y: -10,
							fill: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						transition={{
							duration: 0.5,
						}}
						href="https://x.com/ade_mubaraq"
						className="p-2 bg-custom-100 fill-white rounded-md"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
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
				</li>
				<li className="flex items-center gap-2 text-white">
					<motion.a
						whileTap={{
							scale: 0.8,
							color: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						whileHover={{
							y: -10,
							color: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						transition={{
							duration: 0.5,
						}}
						href="https://www.instagram.com/adeshinamubarakibrahim?igsh=YnY0aTgxcHFvNHls"
						className="p-2 bg-custom-100 text-custom-300 rounded-md"
					>
						<BsInstagram size={25} />
					</motion.a>
				</li>
				<li className="flex items-center gap-2 text-white">
					<motion.a
						whileTap={{
							scale: 0.8,
							color: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						whileHover={{
							y: -10,
							color: "var(--color-primary)",
							boxShadow: "0px 2px 10px var(--color-primary)",
						}}
						transition={{
							duration: 0.5,
						}}
						href="https://www.facebook.com/adeshinamubarak.ibrahim"
						className="p-2 bg-custom-100 text-custom-300 rounded-md"
					>
						<BsFacebook size={25} />
					</motion.a>
				</li>
			</ul>
		</div>
	);
};
