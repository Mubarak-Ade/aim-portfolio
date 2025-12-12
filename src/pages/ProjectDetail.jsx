import { useState } from "react";
import { Data } from "../data";
import { ArrowLeft, ArrowRight, Github, Rocket } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Header } from "../components/ProjectDetail/Header";
import { data, useNavigate, useParams } from "react-router";
import { SlideShow } from "../components/ProjectDetail/SlideShow";
import { TechnologyCard } from "../components/ProjectDetail/TechnologyCard";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { createSlug } from "../util/slug";

export const ProjectDetail = () => {
	const { slug } = useParams();
	const navigate = useNavigate()

	const currentIndex = Data.findIndex(
		(data) => slug === createSlug(data.name)
	);
	const product = Data[currentIndex];

	const { name, info, category, images, stacks, live, github } = product;

	const nextIndex = currentIndex < Data.length - 1 ? currentIndex + 1 : 0;
	const prevIndex = currentIndex > 0 ? currentIndex - 1 : Data.length - 1;

	const prevName = Data[prevIndex].name;
	const nextName = Data[nextIndex].name;

	if (!product) {
		return <p>{name} Project not found</p>
	}

	const goToPrev = () => { 
		navigate(`/projects/${createSlug(prevName)}`)
	}

	const goToNext = () => { 
		navigate(`/projects/${createSlug(nextName)}`)
	}

	const [imageIndex, setImageIndex] = useState(0);

	return (
		<div className="mt-25 p-5 max-w-6xl m-auto w-full">
			<BreadCrumbs />
			<Header
				name={name}
				info={info}
				role={category}
				link={live}
				github={github}
			/>
			<div className="p-5 mt-5">
				<div className="flex w-full lg:flex-row flex-col gap-10">
					<SlideShow
						preview={images}
						currentIndex={imageIndex}
						onIndexChange={setImageIndex}
					/>
					<TechnologyCard stacks={stacks} />
				</div>
				<hr className="mt-10 border-custom-100" />
				<div className="mt-4 items-center flex gap-4 justify-between">
					<motion.button
						onClick={goToPrev}
						whileHover={{
							border: "1px solid var(--color-secondary)",
							scale: 1.1,
						}}
						whileTap={{
							scale: 0.8,
						}}
						className="text-white w-40 md:w-60 text-xs md:text-sm cursor-pointer p-2 rounded-xl"
					>
						<span className="flex items-center gap-2 text-secondary">
							<ArrowLeft />
							Previous Project
						</span>
						<p className="font-semibold line-clamp-1 text-ellipsis">
							{prevName}
						</p>
					</motion.button>
					<motion.button
						onClick={goToNext}
						whileHover={{
							border: "1px solid var(--color-secondary)",
							scale: 1.1,
						}}
						whileTap={{
							scale: 0.8,
						}}
						className="text-white w-40  md:w-60 cursor-pointer text-xs md:text-sm rounded-xl p-2"
					>
						<span className="flex items-center gap-2 text-secondary">
							Next Project
							<ArrowRight />
						</span>
						<p className="font-semibold line-clamp-1 text-ellipsis text-start">
							{nextName}
						</p>
					</motion.button>
				</div>
			</div>
		</div>
	);
};
