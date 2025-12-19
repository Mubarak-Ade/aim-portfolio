import { useState } from "react";
import axios from "axios";
import {
	BsBell,
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsTwitter,
	BsWhatsapp,
	BsX,
} from "react-icons/bs";
import { CiLocationArrow1, CiMail } from "react-icons/ci";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [alert, setAlert] = useState({ type: "", message: "" });

	const handleMessageSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setAlert({ type: "", message: "" });
		try {
			const res = await axios.post("https://send-message-tsfn.onrender.com", {
				name,
				email,
				message,
			});
			setEmail("");
			setMessage("");
			setName("");
			setAlert({
				type: "success",
				message: res.data || "Message Sent Successfully",
			});
		} catch (error) {
			console.error(error);
			const message =
				error.response?.data?.message || // server-sent error
				error.message || // Axios network error
				"Failed to send message. Try again";

			setAlert({
				type: "error",
				message: message,
			});
		} finally {
			setLoading(false);
		}
	};

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert({type: "", message: ""})
        }, 5000)

        return () => clearTimeout(timer)
    }, [alert]);

	const closeAlert = () => {
		setAlert({ type: "", message: "" });
	};

	return (
		<div className="overflow-hidden relative max-w-6xl w-full p-5 rounded-2xl mt-4 m-auto">
			<h1 className="text-5xl text-center text-primary mt-15 text-custom-400 font-bold">
				Get In Touch
			</h1>
			<div className="flex lg:flex-row flex-col items-center justify-center gap-6 mt-6">
				<form
					onSubmit={handleMessageSubmit}
					className="border p-4 bg-custom-100/50 border-neutral-100/20 rounded-md max-w-2xl w-full"
				>
					<div className="flex md:flex-row flex-col gap-4">
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
					</div>
					<div className="text-white w-full flex flex-col mb-4">
						<label htmlFor="">Subject</label>
						<input
							type="text"
							placeholder="What's This about"
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
					<button
						disabled={loading}
						type="submit"
						className="bg-custom-500/20 border border-custom-400 shadow-custom-400 text-white w-full px-2 py-2 rounded-full cursor-pointer"
					>
						{loading ? "Sending..." : "Send Message"}
					</button>
				</form>
				<div className="max-w-2xl w-full">
					<div className="p-4 border border-neutral-100/20 rounded-md">
						<h2 className="text-white">Contact Information</h2>
						<ul className="p-2">
							<li className="flex items-center gap-2 text-white">
								<span className="p-2 bg-custom-100 text-custom-300 rounded-md">
									<CiMail size={25} />
								</span>
								<p className="flex flex-col">
									Email
									<span className="text-sm">
										adeshinaibrahim571@gmail.com
									</span>
								</p>
							</li>
							<li className="flex mt-4 items-center gap-2 text-white">
								<span className="p-2 bg-custom-100 text-custom-300 rounded-md">
									<CiLocationArrow1 size={25} />
								</span>
								<p className="flex flex-col">
									Location
									<span className="text-sm">
										Kano State, Nigeria
									</span>
								</p>
							</li>
							<li className="flex mt-4 items-center gap-2 text-white">
								<span className="p-2 bg-custom-100 text-custom-300 rounded-md">
									<BsWhatsapp size={25} />
								</span>
								<p className="flex flex-col">
									Whatsapp
									<span className="text-sm">
										Kano State, Nigeria
									</span>
								</p>
							</li>
						</ul>
					</div>
					<div className="p-4 border mt-4 border-neutral-100/20 rounded-md">
						<h2 className="text-white">Social Media</h2>
						<ul className="p-2 flex items-center gap-4 justify-center">
							<li className="flex items-center gap-2 text-white">
								<span className="p-2 bg-custom-100 text-custom-300 rounded-md">
									<BsLinkedin size={25} />
								</span>
							</li>
							<li className="flex items-center gap-2 text-white">
								<span className="p-2 bg-custom-100 text-custom-300 rounded-md">
									<BsTwitter size={25} />
								</span>
							</li>
							<li className="flex items-center gap-2 text-white">
								<span className="p-2 bg-custom-100 text-custom-300 rounded-md">
									<BsInstagram size={25} />
								</span>
							</li>
							<li className="flex items-center gap-2 text-white">
								<span className="p-2 bg-custom-100 text-custom-300 rounded-md">
									<BsFacebook size={25} />
								</span>
							</li>
						</ul>
					</div>
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
						} flex items-center justify-between shadow-[0_0_15px]  text-white font-semibold px-4 py-4 top-20 left-1/2 -translate-x-1/2 text-center mt-2 rounded-md max-w-md w-full absolute`}
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
