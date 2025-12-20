import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationArrow1, CiMail } from "react-icons/ci";
import { motion } from "motion/react";

export const ContactInfo = () => {
	return (
		<div className="p-4 border border-neutral-100/20 rounded-md">
			<h2 className="text-white">Contact Information</h2>
			<ul className="p-2">
				<motion.li
					whileHover={{
						x: 20,
					}}
					transition={{
						duration: 0.5,
					}}
					className="flex cursor-pointer items-center gap-2 text-white"
				>
					<span className="p-2 bg-custom-100 text-custom-300 rounded-md">
						<CiMail size={25} />
					</span>
					<p className="flex flex-col">
						Email
						<span className="text-base font-semibold text-primary">
							adeshinaibrahim571@gmail.com
						</span>
					</p>
				</motion.li>
				<motion.li
					whileHover={{
						x: 20,
					}}
					transition={{
						duration: 0.5,
					}}
					className="flex mt-4 cursor-pointer items-center gap-2 text-white"
				>
					<span className="p-2 bg-custom-100 text-custom-300 rounded-md">
						<CiLocationArrow1 size={25} />
					</span>
					<p className="flex flex-col">
						Location
						<span className="text-sm font-semibold text-primary">Kano State, Nigeria</span>
					</p>
				</motion.li>
				<motion.li
					whileHover={{
						x: 20,
					}}
					transition={{
						duration: 0.5,
					}}
					className="flex cursor-pointer mt-4 items-center gap-2 text-white"
				>
					<span className="p-2 bg-custom-100 text-custom-300 rounded-md">
						<BsWhatsapp size={25} />
					</span>
					<p className="flex flex-col">
						Whatsapp
						<span className="text-sm font-semibold text-primary">+234-9041446164</span>
					</p>
				</motion.li>
			</ul>
		</div>
	);
};
