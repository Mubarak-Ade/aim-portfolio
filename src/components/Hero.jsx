import { BsLinkedin } from "react-icons/bs"; 
import { BsTwitter } from "react-icons/bs"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { BsGithub } from "react-icons/bs"; 
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import HeroText from "./HeroText";
import Terminal from "./Terminal";

const Hero = () => {
    // This is the Hero component that serves as a hero section for the application
    // It displays a background image and a titl

    const [activeStep, setActiveStep] = useState(0)

    const waveVariants = {
        initial: {
            opacity: 0,
            scale: 0.8,
        },
        animate: {
            opacity: 1,
            scale: [0.8, 1.2, 1.4],
        },
    };

    const bottonWave = [
        {size: "w-120 h-120", color: "from-custom-100", duration: 3, delay: 0},
        {size: "w-100 h-100", color: "from-custom-200", duration: 2.5, delay: 0.1},
        {size: "w-80 h-80", color: "from-custom-200/80", duration: 2, delay: 0.2},
        {size: "w-60 h-60", color: "from-custom-100/60", duration: 1.5, delay: 0.3},
        {size: "w-40 h-40", color: "from-custom-200/90", duration: 1, delay: 0.4},
        {size: "w-20 h-20", color: "from-custom-400/80", duration: 0.5, delay: .5},
    ]

    const topWave = [
        {size: "w-120 h-120", color: "from-custom-100", duration: .5, delay: 0},
        {size: "w-100 h-100", color: "from-custom-200", duration: 1, delay: 0.3},
        {size: "w-80 h-80", color: "from-custom-200/80", duration: 1.5, delay: 0.6},
        {size: "w-60 h-60", color: "from-custom-100/60", duration: 2, delay: 0.9},
        {size: "w-40 h-40", color: "from-custom-200/90", duration: 2.5, delay: 1.2},
        {size: "w-20 h-20", color: "from-custom-400/80", duration: 3, delay: 1.5},
    ]

    return (
        <div className="relative flex items-center justify-center mt-10 w-full font-playfair bg-no-repeat bg-background min-h-screen">
            <div className="absolute z-5 bottom-0 left-0">
                {bottonWave.map((wave, index) => (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        key={index}
                        variants={waveVariants}
                        transition={{
                            duration: wave.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: wave.delay,
                        }}
                        className={`bg-gradient-to-tr absolute bottom-0 left-0 rounded-tr-full to-transparent ${wave.color} ${wave.size}`}
                    />
                ))}
            </div>

            <div className="absolute top-0 z-5 right-0">
                {topWave.map((wave, index) => (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        key={index}
                        variants={waveVariants}
                        transition={{
                            duration: wave.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: wave.delay,
                        }}
                        className={`bg-gradient-to-tr absolute top-0 right-0 rounded-bl-full to-transparent ${wave.color} ${wave.size}`}
                    />
                ))}
            </div>
            <div className="flex lg:flex-row flex-col mt-20 lg:mt-0 w-full items-center gap-10 justify-center bg-cover bg-center h-full">
                <HeroText activeStep={activeStep} />
                <Terminal onCommandComplete={(step) => setActiveStep(step)} />
            </div>
        </div>
    );
};

export default Hero;
