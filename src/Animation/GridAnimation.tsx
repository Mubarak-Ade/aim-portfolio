import { motion, AnimatePresence } from "motion/react";
import React from "react";

export const GridAnimation = () => {
	return (
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
	);
};
