import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { BsBell, BsX } from "react-icons/bs";

export const Alert = ({alert, closeAlert}) => {
	return (
		<AnimatePresence>
			{alert.message && (
				<div className="fixed top-20 flex px-4 items-center justify-center left-0 w-full">
					<motion.div
						initial={{
							scale: 0,
							opacity: 0,
						}}
						animate={{
							scale: 1,
							opacity: 1,
						}}
						exit={{
							scale: 0,
							opacity: 0,
						}}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 200,
						}}
						className={`${
							alert.type === "success"
								? "bg-green-500 shadow-green-900"
								: "bg-red-500 shadow-red-900"
						} flex max-w-md items-center justify-between shadow-[0_0_15px]  text-white font-semibold px-4 py-4  text-center mt-2 rounded-md w-full `}
					>
						<BsBell />
						<p>{alert.message}</p>
						<motion.button
							onClick={closeAlert}
							whileHover={{
								scale: 1.1,
								backgroundColor:
									alert.type === "success"
										? "var(--color-green-100)"
										: "var(--color-red-100)",
								color:
									alert.type === "success"
										? "var(--color-green-500)"
										: "var(--color-red-500)",
							}}
							whileTap={{
								scale: 0.8,
							}}
							className="text-2xl rounded-full cursor-pointer"
						>
							<BsX />
						</motion.button>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};
