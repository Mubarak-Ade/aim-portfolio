import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router";

export const BreadCrumbs = () => {
	const location = useLocation();

	const pathnames = location.pathname.split("/").filter((x) => x);

	console.log(pathnames);

	return (
		<div className="text-secondary mb-5  flex items-center gap-2">
			<Link to="/">
				<Home className="text-xs" />
			</Link>
			{pathnames.map((path, index) => {
				const url = `/${pathnames.slice(0, index + 1).join("/")}`;

				const label = path
					.split()
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(" ");

				const isLast = index === pathnames.length - 1;

				return (
					<div
						className="flex gap-2 items-center text-sm"
						key={index}
					>
						<ChevronRight />
						{isLast ? (
							<span className="text-primary text-shadow-2xs text-shadow-primary">
								{label}
							</span>
						) : (
							<Link
								className=""
								to={url}
							>
								{label}
							</Link>
						)}
					</div>
				);
			})}
		</div>
	);
};
