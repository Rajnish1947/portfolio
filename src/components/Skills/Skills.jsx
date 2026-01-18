
import React from "react";
import { motion } from "framer-motion";

/* Animation Variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const skillsData = [
  {
    title: "Programming Languages",
    skills: ["HTML", "JavaScript", "Python", "Core Java"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "CSS", "Tailwind CSS", "Bootstrap", "MUI"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "PHP",
      "REST Architecture",
      "CRUD Operations",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQLite", "Schema Design", "Relationships"],
  },
  {
    title: "APIs & Backend Tools",
    skills: [
      "RESTful APIs",
      "FastAPI",
      "Postman",
      "API Integration",
      "Error Handling",
    ],
  },
  {
    title: "AI / Data",
    skills: [
      "Python for Machine Learning",
      "Data Preprocessing",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Basic Model Training",
    ],
  },
  {
    title: "Tools & Development",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Postman",
      "Thunder Client",
      "Chrome DevTools",
      "npm",
      "Environment Variables (.env)",
    ],
  },
  {
    title: "Database & Admin Tools",
    skills: [
      "MongoDB Compass",
      "MySQL Workbench",
      "phpMyAdmin",
      "Database Backup & Restore",
      "Basic Query Optimization",
    ],
  },
  {
    title: "Deployment & Hosting",
    skills: [
      "Vercel",
      "Render",
      "Netlify",
      "Environment Configuration",
      "Build & Deployment Workflow",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-950 py-24 px-6 font-sans"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Technical Skills
        </h2>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Technologies and tools I use to design, build, and deploy scalable
          web applications.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillsData.map((item) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            className="rounded-2xl border border-gray-800 bg-gray-900/80 p-6
                       transition-all duration-300 hover:-translate-y-2
                       hover:border-purple-500 hover:shadow-[0_0_30px_rgba(130,69,236,0.25)]"
          >
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">
              {item.title}
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              {item.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-purple-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
