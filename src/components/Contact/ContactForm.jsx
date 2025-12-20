import { useState } from "react";
import { motion } from "motion/react";
import axios from "axios";

export const ContactForm = ({ loading, onLoading, onAlert }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleMessageSubmit = async (e) => {
		e.preventDefault();
		onLoading(true);
		onAlert({ type: "", message: "" });
		try {
			const res = await axios.post(
				"https://send-message-tsfn.onrender.com/",
				{
					name,
					email,
					message,
				}
			);
			setEmail("");
			setMessage("");
			setName("");
			onAlert({
				type: "success",
				message: res.data?.message || "Message Sent Successfully",
			});
		} catch (error) {
			console.error(error);
			const message =
				error.response?.data?.message || // server-sent error
				error.message || // Axios network error
				"Failed to send message. Try again";

			onAlert({
				type: "error",
				message,
			});
		} finally {
			onLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleMessageSubmit}
			className="border p-4 bg-custom-100/50 border-neutral-100/20 rounded-md max-w-2xl w-full"
		>
			<div className="text-white w-full flex flex-col mb-4">
				<label htmlFor="">Name</label>
				<input
					type="text"
					placeholder="Your Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="border text-xs border-neutral-100/20 rounded-md px-4 mt-2 py-2.5"
				/>
			</div>
			<div className="text-white w-full flex flex-col mb-4">
				<label htmlFor="">Email</label>
				<input
					type="text"
					placeholder="Your Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="border text-xs border-neutral-100/20 rounded-md px-4 mt-2 py-2.5"
				/>
			</div>
			<div className="text-white w-full flex flex-col mb-4">
				<label htmlFor="">Message</label>
				<textarea
					placeholder="Your Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					rows={6}
					className="border text-xs border-neutral-100/20 rounded-md px-4 mt-2 py-2.5"
				></textarea>
			</div>
			<motion.button
				whileHover={{
					background: "var(--color-primary)",
					color: "var(--color-custom-100)",
				}}
				whileTap={{
					scale: 0.8,
					background: "var(--color-primary)",
					color: "var(--color-custom-100)",
				}}
				disabled={loading}
				type="submit"
				className={`bg-custom-500/20 ${
					loading ? "cursor-wait" : "cursor-pointer"
				} font-bold border border-custom-400 shadow-custom-400 text-white w-full px-2 py-2 rounded-full`}
			>
				{loading ? "Sending..." : "Send Message"}
			</motion.button>
		</form>
	);
};
