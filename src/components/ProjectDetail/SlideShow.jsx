import { AnimatePresence, motion } from "motion/react";

export const SlideShow = ({preview, currentIndex, onIndexChange}) => {
	return (
		<>
			<AnimatePresence>
				<div className="flex items-center flex-col">
					<div className=" max-w-2xl overflow-auto w-full h-full max-h-100">
						<motion.img
							initial={{
								x: -100,
							}}
							layout
							animate={{
								x: 0,
							}}
							transition={{
								duration: 2,
								type: "spring",
								stiffness: 200,
							}}
							key={currentIndex}
							src={preview[currentIndex]}
							alt={preview[currentIndex]}
							className="rounded-xl shadow-[0_1px_20px] object-fill w-full overflow-hidden shadow-custom-100"
						/>
					</div>
					<div className="w-full flex items-center justify-center mt-4 gap-4">
						{preview.map((img, index) => (
							<motion.img
								whileHover={{
									boxShadow: "0 0 5px var(--color-primary)",
									scale: 1.1,
								}}
								whileTap={{
									scale: 0.8,
								}}
								key={index}
								onClick={() => onIndexChange(index)}
								src={img}
								alt={img}
								className={`shadow-2xl ${
									currentIndex === index
										? "border-2 border-secondary"
										: ""
								} cursor-pointer object-cover w-20 h-20 shadow-custom-100 rounded-xl`}
							/>
						))}
					</div>
				</div>
			</AnimatePresence>
		</>
	);
};
