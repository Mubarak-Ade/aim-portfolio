
export const TechnologyCard = ({stacks}) => {
	return (
		<div className="text-secondary rounded-xl p-4 h-full bg-card">
			<h4 className="text-white text-xl font-bold">Technologies</h4>
			<ul className="flex flex-wrap gap-4 mt-4">
				{stacks.map((stack) => (
					<li
						key={stack}
						className="px-4 py-2 text-xs rounded-2xl bg-custom-100"
					>
						{stack}
					</li>
				))}
			</ul>
		</div>
	);
};
