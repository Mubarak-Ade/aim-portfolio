import React from "react";
import Image from "../assets/images/Profile_700x1050.png"
import {motion} from "motion/react"
import Skill from "./Skill";
const AboutMe = () => {
    return (
        <motion.div 
        initial={{
            opacity: 0,
            // scale: 0.5,
            y: 200
        }}
        whileInView={{
            opacity: 1,
            // scale: 1,
            y: 0
        }}
        transition={{
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            stiffness: 200
        }}
        viewport={{
            once: true
        }}
        className="w-full my-4 rounded-2xl m-auto p-10 ">
            <div className="flex justify-center mt-10 flex-col items-center">
                <h1 className="text-5xl mt-4 text-primary font-bold">About Me</h1>
                <motion.hr 
                animate={{
                    width: [0, "250px"]
                }}
                transition={{
                    duration: 4
                }}
                className="border-t-2 border-primary m-1 mb-6" />
            </div>
            <div className="flex lg:flex-row flex-col items-center py-5">
                <div className="relative lg:flex-1 h-100 w-100 shrink-0">
                    <img src={Image} alt="" className="rounded-full z-3 object-center h-75 w-75 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                            initial={{
                                scale: 0,
                                opacity: 0.5
                            }}
                            animate={{
                                scale: [1, 3,],
                                opacity: [0.5, 1]
                            }}
                            transition={{
                                duration: 4,
                                delay: i * 0.8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            key={`rip-${i}`} className="w-30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-30 border bg-primary/50 shadow-[0_0_15px] shadow-primary rounded-full border-primary p-4" />
                        ))}
                    </div>
                </div>
                <motion.div 
                animate={{
                    y: [200, 0]
                }}
                transition={{
                    duration: 2
                }}
                className="text-white flex-1">
                    <p className="text-xl font-montserrat">
                        Hey there! I’m Mubarq Ibrahim — but you can call me AIM. I’m
                        a Fullstack Developer who enjoys turning complex ideas into
                        simple, scalable web applications. For me, coding isn’t just
                        about making things work — it’s about building experiences
                        that are fast, elegant, and dependable. I take pride in
                        writing clean, maintainable code and bringing both
                        creativity and structure to every project I touch.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="mt-4 bg-cyan-500 rounded-md shadow-2xl shadow-custom-500 font-semibold px-4 py-2.5 cursor-pointer">View My Project</button>
                        <button className="mt-4 border-cyan-500 border rounded-md shadow-2xl shadow-custom-500 font-semibold px-4 py-2.5 cursor-pointer">Let Connect</button>
                    </div>
                </motion.div>
            </div>
            <Skill />
        </motion.div>
    );
};

export default AboutMe;
