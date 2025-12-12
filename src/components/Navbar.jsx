import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation()

	useEffect(() => {
		setIsOpen(false)
	}, [location])
	

	const navLink = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Project",
			link: "/projects",
		},
		{
			name: "Contact Me",
			link: "/contact",
		},
	];

	const toggleNav = () => setIsOpen(!isOpen);

	const NavList = () => {
		return navLink.map((link, index) => (
			<motion.li
				whileHover={{
					color: "var(--color-primary)",
					textShadow: "0 1px 15px var(--color-primary)",
				}}
				className="cursor-pointer rounded-xl w-full md:w-auto md:p-0 px-6 py-4"
				key={index}
			>
				<NavLink className={({isActive}) => isActive && "text-primary text-shadow-xs text-shadow-primary"} to={link.link}>{link.name}</NavLink>
			</motion.li>
		));
	};
	return (
		<>
			<div className="fixed top-4 w-full left-0 right-0 z-50 flex justify-center px-4">
				<div className="w-full relative max-w-4xl shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-custom-100 flex justify-between text-white border border-custom-400 px-6 py-4 items-center rounded-4xl">
					<h1 className="font-playfair text-xl">AIM</h1>
					<ul className="hidden md:flex items-center bg-custom-100  gap-10 text-base">
						<NavList />
					</ul>
					<button
						onClick={toggleNav}
						className="md:hidden cursor-pointer"
					>
						<Menu />
					</button>
				</div>
			</div>
			{isOpen && (
				<AnimatePresence>
					<motion.div className="fixed md:hidden items-center top-0 left-0 w-full h-full flex flex-col bg-background/40 z-100 px-4">
						<div className="w-full mt-4 relative max-w-4xl shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-custom-100 flex justify-between text-secondary border border-custom-400 px-6 py-4 items-center rounded-4xl">
							<h1 className="font-playfair text-xl">AIM</h1>
							<button
								onClick={toggleNav}
								className="md:hidden cursor-pointer"
							>
								<X />
							</button>
						</div>
						<motion.ul
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
								duration: 0.2,
								type: "spring",
								stiffness: 200,
							}}
							className="md:hidden w-full h-100 rounded-xl mt-4 p-5 flex flex-col bg-custom-100 gap-4 text-xl text-secondary"
						>
							<NavList />
						</motion.ul>
					</motion.div>
				</AnimatePresence>
			)}
		</>
	);
};

export default Navbar;
