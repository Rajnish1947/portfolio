

import React from "react";
import { motion } from "framer-motion";

/* Experience Data */
const experiences = [
  {
    role: "MERN Stack Intern",
    company: "Bharg IT Solutions",
    location: "Jaipur (Hybrid)",
    duration: "June 2025 – August 2025",
    points: [
      "Contributed to the full-stack development of a live betting platform (LotousBets.com).",
      "Built responsive and intuitive user interfaces using React.js and Tailwind CSS.",
      "Enhanced UI/UX and ensured seamless cross-browser and cross-device compatibility.",
      "Implemented secure user authentication and authorization using JWT.",
      "Handled form validation and real-time UI updates for bet placement workflows.",
      "Collaborated on backend development using Node.js and Express.js with MySQL database integration.",
      "Optimized database queries to improve application performance and scalability.",
      "Configured environment variables and prepared the application for deployment.",
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "JWT"],
  },
  {
    role: "Software Developer Intern",
    company: "ACSASS",
    location: "Perungudi (Onsite)",
    duration: "December 2025 – January 2026",
    points: [
      "Developed and maintained frontend and backend features using React.js, Node.js, and Tailwind CSS.",
      "Implemented admin and employee authentication with role-based access control using JWT.",
      "Built task assignment and management modules with progress tracking.",
      "Designed and implemented an attendance management system.",
      "Developed real-time chat and group chat features using WebSockets.",
      "Integrated SQLite database handling CRUD operations across modules.",
      "Collaborated using Git, debugging issues, optimizing performance, and maintaining scalable architecture.",
      "Prepared the project for deployment with proper environment configuration.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "JWT",
      "WebSockets",
      "SQLite",
      "Git",
    ],
  },
  {
    role: "React Developer Intern",
    company: "Anulaar Technology",
    location: "Remote",
    duration: "January 2025 – Present",
    points: [
      "Developing modern web applications with reusable and modular React components.",
      "Completed weekly virtual tasks while consistently meeting deadlines.",
      "Implemented responsive layouts and optimized frontend performance.",
      "Collaborated with designers and backend developers for smooth feature integration.",
      "Participated in code reviews, debugging, and maintaining best practices.",
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Git"],
  },
];

/* Animations */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gray-950 py-28 px-6 font-sans"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Experience
        </h2>
        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Hands-on industry experience through internships and real-world
          software development.
        </p>
      </motion.div>

      {/* Experience Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col gap-10"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="rounded-2xl border border-gray-800 bg-gray-900/80 p-8
                       hover:-translate-y-1 hover:border-purple-500
                       hover:shadow-[0_0_35px_rgba(130,69,236,0.25)]
                       transition-all duration-300"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-gray-400 mt-1">
                  {exp.company} • {exp.location}
                </p>
              </div>
              <span className="text-sm text-gray-400 mt-2 md:mt-0">
                {exp.duration}
              </span>
            </div>

            {/* Responsibilities */}
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1.5 rounded-full
                             bg-gray-800 border border-gray-700 text-gray-300
                             hover:border-purple-500 hover:text-white
                             transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
