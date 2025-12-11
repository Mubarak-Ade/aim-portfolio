import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { CiLocationArrow1, CiMail } from "react-icons/ci";

const Contact = () => {
	// const [isFocused, setIsFocused] = useState(false);

	return (
		<div className="overflow-hidden max-w-6xl w-full p-5 rounded-2xl mt-4 m-auto">
			<h1 className="text-5xl text-center text-primary mt-15 text-custom-400 font-bold">
				Get In Touch
			</h1>
            <div className="flex lg:flex-row flex-col items-center justify-center gap-6 mt-6">
                <form className="border p-4 bg-custom-100/50 border-neutral-100/20 rounded-md max-w-2xl w-full">
                    <div className="flex md:flex-row flex-col gap-4">
                        <div className="text-white w-full flex flex-col mb-4">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border text-xs border-neutral-100/20 rounded-md px-4 mt-2 py-2.5"
                            />
                        </div>
                        <div className="text-white w-full flex flex-col mb-4">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                placeholder="Your Email"
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
                            rows={6}
                            className="border text-xs border-neutral-100/20 rounded-md px-4 mt-2 py-2.5"
                        ></textarea>
                    </div>
                    <button className="bg-custom-500/20 border border-custom-400 shadow-custom-400 text-white w-full px-2 py-2 rounded-full cursor-pointer">Submit</button>
                </form>
                <div className="max-w-2xl w-full">
                    <div className="p-4 border border-neutral-100/20 rounded-md">
                        <h2 className="text-white">Contact Information</h2>
                        <ul className="p-2">
                            <li className="flex items-center gap-2 text-white">
                                <span className="p-2 bg-custom-100 text-custom-300 rounded-md"><CiMail size={25} /></span>
                                <p className="flex flex-col">
                                    Email
                                    <span className="text-sm">adeshinaibrahim571@gmail.com</span>
                                </p>
                            </li>
                            <li className="flex mt-4 items-center gap-2 text-white">
                                <span className="p-2 bg-custom-100 text-custom-300 rounded-md"><CiLocationArrow1 size={25} /></span>
                                <p className="flex flex-col">
                                    Location
                                    <span className="text-sm">Kano State, Nigeria</span>
                                </p>
                            </li>
                            <li className="flex mt-4 items-center gap-2 text-white">
                                <span className="p-2 bg-custom-100 text-custom-300 rounded-md"><BsWhatsapp size={25} /></span>
                                <p className="flex flex-col">
                                    Whatsapp
                                    <span className="text-sm">Kano State, Nigeria</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 border mt-4 border-neutral-100/20 rounded-md">
                        <h2 className="text-white">Social Media</h2>
                        <ul className="p-2 flex items-center gap-4 justify-center">
                            <li className="flex items-center gap-2 text-white">
                                <span className="p-2 bg-custom-100 text-custom-300 rounded-md"><BsLinkedin size={25} /></span>
                            </li>
                            <li className="flex items-center gap-2 text-white">
                                <span className="p-2 bg-custom-100 text-custom-300 rounded-md"><BsTwitter size={25} /></span>
                            
                            </li>
                            <li className="flex items-center gap-2 text-white">
                                <span className="p-2 bg-custom-100 text-custom-300 rounded-md"><BsInstagram size={25} /></span>
                            
                            </li>
                            <li className="flex items-center gap-2 text-white">
                                <span className="p-2 bg-custom-100 text-custom-300 rounded-md"><BsFacebook size={25} /></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default Contact;
