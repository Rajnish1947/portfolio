

import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/profile2.png";
import { Mail, Phone, MapPin } from "lucide-react";
// Animation variants
const fadeLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
};

const fadeRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] mb-12 font-sans mt-3 md:mt-24 lg:mt-12"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* Left Side - Text */}
        <motion.div
          variants={fadeLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mt-12 md:mt-0"
        >
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-3 tracking-wide"
            style={{ textShadow: "0 0 10px rgba(130,69,236,0.7)" }}
          >
            Hi, I am
          </h1>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white"
            style={{
              textShadow:
                "0 0 10px rgba(130, 69, 236, 0.8), 0 0 20px rgba(130, 69, 236, 0.6)",
            }}
          >
            Rajnish Kumar
          </h2>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#8245ec] mb-6">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer",
 
  "Python Developer",
  " Core Java Programmer",
  "Django Developer",
  "MySQL Expert",
  "MongoDB Specialist",
  "SQLite Developer",
  "Tailwind CSS Enthusiast",
  "Bootstrap Designer",
  "MUI (Material UI) Developer",

   "AI & ML Enthusiast",
]
}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-10">
            A passionate full-stack developer with 2+ years of experience in
            building scalable and high-performance web applications. I craft
            clean UIs, efficient backends, and seamless user experiences using
            the MERN stack, Tailwind, and modern tools.
          </p>

          <a
            href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 5px #8245ec, 0 0 20px #a855f7, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
           <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm text-gray-400">

  <div className="flex items-center gap-2 justify-center md:justify-start">
    <MapPin size={16} className="text-[#8245ec]" />
    <span>Chennai padur</span>
  </div>

  <div className="flex items-center gap-2 justify-center md:justify-start">
    <Phone size={16} className="text-[#8245ec]" />
    <span>+91 6205115897</span>
  </div>

</div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          variants={fadeRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="ml-10 md:w-1/2 flex justify-center md:justify-end"
        >
          <Tilt
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_40px_10px_rgba(130,69,236,0.6)] transition-transform duration-500 hover:scale-105"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="w-full h-full rounded-full border-[6px] border-purple-700 p-1 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
              <img
                src={profileImage}
                alt="Rajnish Kumar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Tilt>
          
        </motion.div>
         
      </div>
    </section>
  );
};

export default About;
