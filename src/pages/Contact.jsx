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
			<Alert alert={alert} closeAlert={closeAlert} />
		</div>
	);
};

export default Contact;
