import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { BsLayers } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";
import { FaCss3, FaHtml5, FaJsSquare, FaLayerGroup, FaNodeJs, FaReact, FaServer } from "react-icons/fa";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { SiExpress, SiFramer, SiMongodb, SiRedux, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";

const data = {
	title: "FullStack",
	icon: <FaLayerGroup />,
	color: "text-green-400",
	children: [
		{
			title: "Frontend",
			icon: <CiMonitor />,
			color: "text-blue-600",
			children: [
				{
					title: "Html",
					icon: <FaHtml5 />,
					color: "text-orange-600 bg-white p-0",
				},
				{
					title: "Typescript",
					icon: <SiTypescript />,
					color: "text-orange-600",
				},
				{
					title: "Javascript",
					icon: <FaJsSquare />,
					color: "text-yellow-500",
				},
				{
					title: "CSS",
					icon: <FaCss3 />,
					color: "text-sky-600 text-shadow-sky-600",
					children: [
						{
							title: "Tailwindcss",
							icon: <SiTailwindcss />,
							color: "text-blue-500",
						},
					],
				},
				{
					title: "React",
					icon: <FaReact />,
					color: "text-blue-600",
					children: [
						{
							title: "Redux",
							icon: <SiRedux />,
							color: "text-blue-500",
						},
						{
							title: "Shadcn UI",
							icon: <SiShadcnui />,
							color: "text-blue-600",
						},
						{
							title: "Framer Motion",
							icon: <SiFramer />,
							color: "text-purple-600",
						},
						{
							title: "Zustand",
							icon: <BsLayers />,
							color: "text-blue-400",
						},
					],
				},
			],
		},
		{
			title: "Backend",
			icon: <FaServer />,
			color: "text-emerald-600",
			children: [
				{
					title: "NodeJs",
					icon: <FaNodeJs />,
					color: "text-green-600",
				},
				{
					title: "ExpressJs",
					icon: <SiExpress />,
					color: "text-orange-400",
				},
				{
					title: "MongoDB",
					icon: <SiMongodb />,
					color: "text-green-600",
				},
			],
		},
	],
};

// const grandchild  = data.children[ ]

const Node = ({ node, level = 0 }) => {
	const [expand, setExpand] = useState(true);
	const hasChildren = node.children && node.children.length > 0;

	const expandChild = () => {
		setExpand((prev) => !prev);
	};

	return (
		<div className="flex flex-col items-center relative">
			{level > 0 && (
				<div className="absolute bg-primary bg- w-0.5 h-10 -top-10 left-1/2 -translate-x-1/2 overflow-hidden"></div>
			)}
			<motion.button
				initial={{
					scale: 0,
				}}
				whileHover={{
					scale: 1.1,
				}}
				whileTap={{
					scale: 0.9,
				}}
				animate={{
					scale: 1,
					transition: {
						duration: 1,
						type: "spring",
						stiffness: 200,
					},
				}}
				onClick={expandChild}
				className={`p-4 w-20 h-20 cursor-pointer relative rounded-2xl ${
					hasChildren && expand
						? "bg-background "
						: "bg-background/30 "
				} border border-background relative font-bold text-xs text-wrap text-center text-white flex flex-col gap-2 items-center justify-center`}
			>
				<span className={`text-xl ${node.color} drop-shadow-2xl`}>
					{node.icon}
				</span>
				{node.title}
				{hasChildren && (
					<span className="absolute bottom-0 text-xl">
						{expand ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
					</span>
				)}
			</motion.button>
			<AnimatePresence>
				{expand && hasChildren && (
					<motion.div
						initial={{
							scale: 0,
						}}
						animate={{
							scale: 1,
						}}
						exit={{
							scale: 0,
						}}
						className="flex mt-10 relative gap-8"
					>
						<div className="absolute bg-primary h-0.5 -top-10 left-10 right-10 "></div>
						{node.children.map((child, idx) => (
							<Node
								node={child}
								key={idx}
								level={level + 1}
							/>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const MobileNode = ({ node, level = 0 }) => {
	const [expand, setExpand] = useState(true);
	const hasChildren = node.children && node.children.length > 0;

	const expandChild = () => {
		setExpand((prev) => !prev);
	};

	return (
		<div className="flex flex-row relative lg:hidden">
			{level > 0 && (
				<>
					<div className="absolute bg-primary w-0.5 h-10 -top-12 left-0 " />
                    <div className="absolute bg-primary w-8 h-0.5 top-12 left-0 overflow-hidden" />
				</>
			)}
			<div className="space-y-4 flex flex-col pl-6 py-4"
			>
				<motion.button 
                initial={{
					scale: 0,
				}}
				whileHover={{
					scale: 1.1,
				}}
				whileTap={{
					scale: 0.9,
				}}
				animate={{
					scale: 1,
					transition: {
						duration: 1,
						type: "spring",
						stiffness: 200,
					},
				}}
                onClick={expandChild} className={`flex relative rounded-xl p-5 z-5 items-center gap-2 ${hasChildren ? "bg-background cursor-pointer" : "bg-card cursor-default"}`}>
					<span className={`text-xl ${node.color} ml-2 drop-shadow-2xl`}>
						{node.icon}
					</span>
					<span className="text-white">{node.title}</span>
                    {hasChildren && (
					<span className="absolute left-1 text-primary text-xl">
						{expand ? <RiArrowDownSFill /> : <RiArrowUpSFill />}
					</span>
				)}
				</motion.button>
				{expand && hasChildren && (
					<motion.div 
                    initial={{
							scale: 0,
						}}
						animate={{
							scale: 1,
						}}
						exit={{
							scale: 0,
						}}
                    className="flex flex-col gap-4 overflow-hidden relative">
						<div className="absolute bg-primary w-0.5 top-0 bottom-12 left-0 overflow-hidden" />
						{node.children.map((child, idx) => (
							<MobileNode
								node={child}
								key={idx}
								level={level + 1}
							/>
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
};

const Skill = () => {
	return (
		<div className="max-w-7xl mt-20 w-full block min-h-100 bg-custom-100/50 overflow-hidden p-10 m-auto rounded-2xl">
			<h1 className="text-4xl mb-4 font-bold text-white text-center">
				My Skill
			</h1>
			<div className="lg:flex hidden  flex-col p-5 justify-center gap-5 ">
				<Node node={data} />
			</div>
			<div className="flex flex-col w-full relative justify-center">
				<MobileNode node={data} />
			</div>
		</div>
	);
};

export default Skill;
