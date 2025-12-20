import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "../components/Contact/Alert";
import { ContactBtn } from "../components/Contact/ContactBtn";
import { ContactForm } from "../components/Contact/ContactForm";
import { ContactInfo } from "../components/Contact/ContactInfo";

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [alert, setAlert] = useState({ type: "", message: "" });

	
	useEffect(() => {
		const timer = setTimeout(() => {
			setAlert({ type: "", message: "" });
		}, 5000);

		return () => clearTimeout(timer);
	}, [alert]);

	const closeAlert = () => {
		setAlert({ type: "", message: "" });
	};

	return (
		<div className="overflow-hidden max-w-6xl w-full p-5 rounded-2xl mt-4 m-auto">
			<h1 className="text-5xl text-center text-primary mt-15 text-custom-400 font-bold">
				Get In Touch
			</h1>
			<div className="flex lg:flex-row flex-col items-center justify-center gap-6 mt-6">
				<ContactForm
					onAlert={setAlert}
					onLoading={setLoading}
					loading={loading}
				/>
				<div className="max-w-2xl w-full">
					<ContactInfo />
					<ContactBtn />
				</div>
			</div>
			<AnimatePresence>
				{alert.message && (
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
						} flex items-center justify-between shadow-[0_0_15px]  text-white font-semibold px-4 py-4 top-20 left-1/2 -translate-x-1/2 text-center mt-2 rounded-md w-100 absolute`}
					>
						<BsBell />
						<p>{alert.message}</p>
						<motion.button
							onClick={closeAlert}
							whileHover={{
								scale: 1.1,
								backgroundColor: alert.type === "success" ? "var(--color-green-100)" : "var(--color-red-100)",
								color: alert.type === "success" ? "var(--color-green-500)" : "var(--color-red-500)",
							}}
							whileTap={{
								scale: 0.8,
							}}
							className="text-2xl rounded-full cursor-pointer"
						>
							<BsX />
						</motion.button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Contact;
