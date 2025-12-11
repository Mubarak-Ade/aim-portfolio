import React from "react";
import { motion } from "motion/react";

export const FlameAnimation = ({ isHovered }) => {
	const variants = {
		initial: {
			opacity: 0,
            scale: 0.8,
		},
		hovered: {
			opacity: 1,
            scale: 1,
		},
	};
	return (
		<motion.div
			variants={variants}
			animate={isHovered ? "hovered" : "initial"}
            transition={{ duration: 0.3 }}
			className="flex absolute z-100 -bottom-28 left-1/2 -translate-x-1/2 items-center justify-center"
		>
			<div className="w-20 h-30 relative">
				<motion.div
					animate={{
						// scaleX: [1, 0.5, 1],
						scaleY: [1, 1.2, 1],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "linear",
					}}
					className="absolute w-8 h-20 flex items-center justify-center rounded-[50%_50%_30%_30%_/_80%_80%_20%_20%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-[0_0_55px] shadow-primary bg-linear-90/shorter from-cyan-400/70 to-primary/70"
				>
					<div className=" w-5 h-15 flex items-center justify-center rounded-[50%_50%_30%_30%_/_80%_80%_20%_20%] shadow-[0_0_25px] shadow-primary bg-primary">
						<div className="w-2 h-10 z-10 rounded-[50%_50%_30%_30%_/_80%_80%_20%_20%] shadow-[0_0_25px] shadow-primary bg-cyan-400"></div>
					</div>
				</motion.div>
				{/* <div className="absolute w-10 h-40 -rotate-10 rounded-[50%_50%_50%_50%_/_50%_50%_40%_40%] left-10 shadow-[0_0_25px] shadow-primary bg-primary/40"></div> */}
			</div>
		</motion.div>
	);
};
