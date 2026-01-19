


// import React from "react";
// import { motion } from "framer-motion";
// import { HiCheckCircle } from "react-icons/hi";

// const projects = [
//   {
//   title: "Food Delivery App",
//   duration: "May 2025",
//   description:
//     "Developed a full-featured food delivery platform with restaurant browsing, item search, user authentication, cart management, order placement, and additional features like payment integration, personal recommendations, and donation functionality.",
//   features: [
//     "Responsive frontend using React.js and Tailwind CSS.",
//     "Backend APIs using Node.js and Express.js.",
//     "Database management with MongoDB.",
//     "JWT-based authentication for secure login.",
//     "Dynamic cart and order placement workflows.",
//     "Payment gateway integration for online transactions.",
//     "Personalized recommendations based on user preferences.",
//     "Donation feature allowing users to contribute to causes."
//   ],
//   tech: [
//     "React.js",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "Tailwind CSS",
//     "JWT",
//     "Postman",
//     "Git",
//     "Payment Gateway Integration"
//   ],
//   link: "https://github.com/Rajnish1947/Food-Delivery-miniproject",
// }
// ,
//   {
//     title: "Doctor Appointment Booking Platform",
//     duration: "Nov 2024 – Feb 2025",
//     description:
//       "Developed a full-stack doctor appointment booking platform enabling patients to book appointments, doctors to manage schedules, and admins to oversee the system. Ensured secure authentication, real-time updates, and a responsive UI.",
//     features: [
//       "Role-Based Authentication with JWT for patients, doctors, and admins.",
//       "Personalized dashboards for each user type.",
//       "Real-time slot booking to prevent double bookings.",
//       "Admin management for user approvals and monitoring.",
//       "Optimized RESTful APIs for faster responses.",
//       "Responsive frontend with React.js and Tailwind CSS.",
//       "Data management using MongoDB with structured schemas.",
//       "Form validation, input sanitization, and session management.",
//       "Deployment-ready environment configuration."
//     ],
//     tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Postman", "VS Code", "Git"],
//     link: "https://zingy-taiyaki-2e3266.netlify.app/",
//   },
//  {
//   title: "LotusBets.com (React.js)",
//   duration: "June 2025 – Sep 2025",
//   description:
//     "Developed the frontend of a dynamic online betting platform similar to LotusBets.com, focusing on a responsive and interactive user interface. The platform allows users to access live games, browse sports categories, manage their wallets, and experience a seamless real-time betting environment.",
//   features: [
//     "Built interactive and modular UI components using React.js and Tailwind CSS.",
//     "Implemented a dynamic live betting interface showing real-time game updates.",
//     "Developed wallet management features for user balances, deposits, and transactions.",
//     "Ensured a fully responsive design compatible with mobile, tablet, and desktop devices.",
//     "Integrated frontend with backend APIs for live game updates, bet placements, and user data.",
//     "Optimized frontend performance for fast load times and smooth user experience.",
//     "Implemented form validation and user feedback for betting actions."
//   ],
//   tech: [
//     "React.js",
//     "Tailwind CSS",
//     "JavaScript",
//     "REST APIs",
//     "Postman",
//     "Git"
//   ],
//   link: "https://clever-centaur-1764cf.netlify.app/",
// }
// ,
//   {
//   title: "Employee & Admin Management Platform ",
//   duration: "Jan 2025 – january 2026",
//   description:
//     "Developed a comprehensive employee and admin management platform to streamline team operations. The platform enables admins to manage employee details, assign tasks, track progress, monitor attendance, and communicate with employees through real-time chat and group chat. The system uses SQLite for efficient data storage and WebSocket for live updates.",
//   features: [
//     "Admin dashboard for managing employee profiles and editing details.",
//     "Task assignment system with support for subtasks and deadlines.",
//     "Real-time task status tracking and progress monitoring.",
//     "Advanced filtration of tasks by status, date, and employee name.",
//     "Attendance management with filtering and tracking.",
//     "Real-time chat and group chat features using WebSocket (frontend completed).",
//     "Implemented secure authentication and role-based access control.",
//     "Responsive UI design ensuring accessibility across devices.",
//     "Integrated backend with SQLite database for reliable and lightweight data management."
//   ],
//   tech: [
//     "React.js",
//     "Tailwind CSS",
//     "Node.js",
//     "SQLite",
//     "WebSocket",
//     "JWT (Authentication)",
//     "REST APIs",
//     "Postman",
//     "Git"
//   ],
//   link: "https://github.com/Rajnish1947/Employee-Admin-project",
// },{
//   title: "Mobile E-Commerce Shop Website",
//   duration: "2024",
//   description:
//     "Developed a mobile-focused e-commerce website for selling smartphones and accessories, providing users with a smooth browsing and purchasing experience. The project focuses on clean UI, product management, and basic e-commerce functionality.",
//   features: [
//     "Designed responsive product listing and detail pages using HTML and CSS.",
//     "Implemented backend functionality using PHP for dynamic content rendering.",
//     "Product catalog with pricing, images, and specifications.",
//     "User-friendly navigation optimized for mobile devices.",
//     "Basic cart functionality for selecting and reviewing products.",
//     "Server-side handling of product data and user interactions.",
//     "Form validation and secure data handling using PHP.",
//     "Simple and clean UI focused on usability and performance."
//   ],
//   tech: [
//     "HTML",
//     "CSS",
//     "PHP",
//     "MySQL",
//     "Bootstrap",
//     "XAMPP",
//     "phpMyAdmin"
//   ],
//   link: "https://github.com/Rajnish1947/Mobile-E-Commerce",
// },{
//   title: "Twitter Sentiment Analysis",
//   duration: "2024",
//   description:
//     "Built a machine learning-based sentiment analysis system to analyze tweets and classify user sentiment as positive, negative, or neutral. The project demonstrates natural language processing and data analysis skills using Python.",
//   features: [
//     "Collected and processed tweet data for sentiment analysis.",
//     "Cleaned and preprocessed text data (tokenization, stop-word removal).",
//     "Implemented sentiment classification using machine learning models.",
//     "Visualized sentiment trends using graphs and charts.",
//     "Evaluated model performance using accuracy and confusion matrix.",
//     "Structured pipeline for data preprocessing, training, and prediction."
//   ],
//   tech: [
//     "Python",
//     "Pandas",
//     "NumPy",
//     "NLTK",
//     "Scikit-learn",
//     "Matplotlib",
//     "Seaborn",
//     "Jupyter Notebook"
//   ],
//   link: "https://github.com/Rajnish1947/Real-Time-Twitter-Sentiment-Pipeline",
// },{
//   title: "Job Portal Web Application",
//   duration: "2024",
//   description:
//     "Developed a full-stack job portal web application that connects job seekers and recruiters. The platform allows users to post jobs, apply for positions, and manage profiles through a secure and user-friendly interface.",
//   features: [
//     "User authentication and role-based access for job seekers and recruiters.",
//     "Job posting, editing, and deletion functionality for recruiters.",
//     "Job search and filtering based on skills, location, and job type.",
//     "Application management system for tracking applied jobs.",
//     "Responsive frontend designed using HTML and CSS.",
//     "Backend logic and data handling implemented using Django.",
//     "Secure form handling and validation for user inputs."
//   ],
//   tech: [
//     "Python",
//     "Django",
//     "HTML",
//     "CSS",
   
//     "Django ORM",
//     "VS Code"
//   ],
//   link: "https://github.com/Rajnish1947/Job-Portal-project",
// }
// ,{
//   title: "Car Rental Management System",
//   duration: "2024",
//   description:
//     "Built a Java-based car rental management system to handle vehicle bookings, customer records, and rental operations efficiently. The system focuses on structured logic, data management, and smooth user workflows.",
//   features: [
//     "Car listing and availability management.",
//     "Customer registration and rental booking system.",
//     "Rental duration and cost calculation logic.",
//     "Return management and availability updates.",
//     "Menu-driven interface for smooth user interaction.",
//     "Clear separation of business logic using object-oriented programming principles."
//   ],
//   tech: [
//     "Java",
//     "Core Java",
//     "OOP Concepts",
//     "Collections Framework",
//     "JDBC ",
//     "IntelliJ IDEA"
//   ],
//   link: "https://github.com/Rajnish1947/Java-Car-Rental-System-Project-",
// }
// ,{
//   title: "ATM Management System",
//   duration: "2024",
//   description:
//     "Developed a Java-based ATM management system that simulates real-world ATM operations such as balance inquiry, cash withdrawal, deposit, and PIN validation.",
//   features: [
//     "Secure PIN-based user authentication.",
//     "Balance inquiry and transaction history display.",
//     "Cash withdrawal and deposit functionality.",
//     "Input validation and error handling.",
//     "Menu-driven console interface.",
//     "Implemented core banking logic using Java OOP principles."
//   ],
//   tech: [
//     "Java",
//     "Core Java",
//     "OOP Concepts",
//     "Exception Handling",
//     "Collections",
//     "IntelliJ IDEA"
//   ],
//   link: "https://github.com/Rajnish1947/Atm-management",
// }



// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
//   }),
// };

// const ProjectsPage = () => {
//   return (
//     <section id="projects" className="bg-gray-950 py-28 px-6">
//       {/* Header */}
//       <div className="max-w-5xl mx-auto text-center mb-20">
//         <h2 className="text-5xl font-bold text-white">Projects</h2>
//         <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
//         <p className="mt-6 text-gray-400 text-lg">
//           Key projects demonstrating full-stack and frontend development skills with detailed tech usage.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.title}
//             custom={index}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-2 transition-all duration-300"
//           >
//             {/* Header */}
//             <div className="mb-4">
//               <h3 className="text-2xl font-semibold text-purple-400">{project.title}</h3>
//               <span className="text-gray-500 text-sm">{project.duration}</span>
//             </div>

//             {/* Description */}
//             <p className="text-gray-300 text-sm mb-4">{project.description}</p>

//             {/* Features */}
//             <ul className="mb-4 space-y-2">
//               {project.features.map((feature, i) => (
//                 <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
//                   <HiCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
//                   {feature}
//                 </li>
//               ))}
//             </ul>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.tech.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 text-xs font-medium text-gray-200 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Project Link */}
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block text-purple-400 hover:text-white font-medium text-sm border border-purple-400/30 px-4 py-2 rounded-full transition-all duration-300"
//             >
//               View Project
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectsPage;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";

const projects = [
    {
  title: "Food Delivery App",
  duration: "May 2025",
  description:
    "Developed a full-featured food delivery platform with restaurant browsing, item search, user authentication, cart management, order placement, and additional features like payment integration, personal recommendations, and donation functionality.",
  features: [
    "Responsive frontend using React.js and Tailwind CSS.",
    "Backend APIs using Node.js and Express.js.",
    "Database management with MongoDB.",
    "JWT-based authentication for secure login.",
    "Dynamic cart and order placement workflows.",
    "Payment gateway integration for online transactions.",
    "Personalized recommendations based on user preferences.",
    "Donation feature allowing users to contribute to causes."
  ],
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JWT",
    "Postman",
    "Git",
    "Payment Gateway Integration"
  ],
  link: "https://github.com/Rajnish1947/Food-Delivery-miniproject",
}
,
  {
    title: "Doctor Appointment Booking Platform",
    duration: "Nov 2024 – Feb 2025",
    description:
      "Developed a full-stack doctor appointment booking platform enabling patients to book appointments, doctors to manage schedules, and admins to oversee the system. Ensured secure authentication, real-time updates, and a responsive UI.",
    features: [
      "Role-Based Authentication with JWT for patients, doctors, and admins.",
      "Personalized dashboards for each user type.",
      "Real-time slot booking to prevent double bookings.",
      "Admin management for user approvals and monitoring.",
      "Optimized RESTful APIs for faster responses.",
      "Responsive frontend with React.js and Tailwind CSS.",
      "Data management using MongoDB with structured schemas.",
      "Form validation, input sanitization, and session management.",
      "Deployment-ready environment configuration."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Postman", "VS Code", "Git"],
    link: "https://zingy-taiyaki-2e3266.netlify.app/",
  },
 {
  title: "LotusBets.com (React.js)",
  duration: "June 2025 – Sep 2025",
  description:
    "Developed the frontend of a dynamic online betting platform similar to LotusBets.com, focusing on a responsive and interactive user interface. The platform allows users to access live games, browse sports categories, manage their wallets, and experience a seamless real-time betting environment.",
  features: [
    "Built interactive and modular UI components using React.js and Tailwind CSS.",
    "Implemented a dynamic live betting interface showing real-time game updates.",
    "Developed wallet management features for user balances, deposits, and transactions.",
    "Ensured a fully responsive design compatible with mobile, tablet, and desktop devices.",
    "Integrated frontend with backend APIs for live game updates, bet placements, and user data.",
    "Optimized frontend performance for fast load times and smooth user experience.",
    "Implemented form validation and user feedback for betting actions."
  ],
  tech: [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "REST APIs",
    "Postman",
    "Git"
  ],
  link: "https://clever-centaur-1764cf.netlify.app/",
}
,
  {
  title: "Employee & Admin Management Platform ",
  duration: "Jan 2025 – january 2026",
  description:
    "Developed a comprehensive employee and admin management platform to streamline team operations. The platform enables admins to manage employee details, assign tasks, track progress, monitor attendance, and communicate with employees through real-time chat and group chat. The system uses SQLite for efficient data storage and WebSocket for live updates.",
  features: [
    "Admin dashboard for managing employee profiles and editing details.",
    "Task assignment system with support for subtasks and deadlines.",
    "Real-time task status tracking and progress monitoring.",
    "Advanced filtration of tasks by status, date, and employee name.",
    "Attendance management with filtering and tracking.",
    "Real-time chat and group chat features using WebSocket (frontend completed).",
    "Implemented secure authentication and role-based access control.",
    "Responsive UI design ensuring accessibility across devices.",
    "Integrated backend with SQLite database for reliable and lightweight data management."
  ],
  tech: [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "SQLite",
    "WebSocket",
    "JWT (Authentication)",
    "REST APIs",
    "Postman",
    "Git"
  ],
  link: "https://github.com/Rajnish1947/Employee-Admin-project",
},{
  title: "Mobile E-Commerce Shop Website",
  duration: "2024",
  description:
    "Developed a mobile-focused e-commerce website for selling smartphones and accessories, providing users with a smooth browsing and purchasing experience. The project focuses on clean UI, product management, and basic e-commerce functionality.",
  features: [
    "Designed responsive product listing and detail pages using HTML and CSS.",
    "Implemented backend functionality using PHP for dynamic content rendering.",
    "Product catalog with pricing, images, and specifications.",
    "User-friendly navigation optimized for mobile devices.",
    "Basic cart functionality for selecting and reviewing products.",
    "Server-side handling of product data and user interactions.",
    "Form validation and secure data handling using PHP.",
    "Simple and clean UI focused on usability and performance."
  ],
  tech: [
    "HTML",
    "CSS",
    "PHP",
    "MySQL",
    "Bootstrap",
    "XAMPP",
    "phpMyAdmin"
  ],
  link: "https://github.com/Rajnish1947/Mobile-E-Commerce",
},{
  title: "Twitter Sentiment Analysis",
  duration: "2024",
  description:
    "Built a machine learning-based sentiment analysis system to analyze tweets and classify user sentiment as positive, negative, or neutral. The project demonstrates natural language processing and data analysis skills using Python.",
  features: [
    "Collected and processed tweet data for sentiment analysis.",
    "Cleaned and preprocessed text data (tokenization, stop-word removal).",
    "Implemented sentiment classification using machine learning models.",
    "Visualized sentiment trends using graphs and charts.",
    "Evaluated model performance using accuracy and confusion matrix.",
    "Structured pipeline for data preprocessing, training, and prediction."
  ],
  tech: [
    "Python",
    "Pandas",
    "NumPy",
    "NLTK",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "Jupyter Notebook"
  ],
  link: "https://github.com/Rajnish1947/Real-Time-Twitter-Sentiment-Pipeline",
},{
  title: "Job Portal Web Application",
  duration: "2024",
  description:
    "Developed a full-stack job portal web application that connects job seekers and recruiters. The platform allows users to post jobs, apply for positions, and manage profiles through a secure and user-friendly interface.",
  features: [
    "User authentication and role-based access for job seekers and recruiters.",
    "Job posting, editing, and deletion functionality for recruiters.",
    "Job search and filtering based on skills, location, and job type.",
    "Application management system for tracking applied jobs.",
    "Responsive frontend designed using HTML and CSS.",
    "Backend logic and data handling implemented using Django.",
    "Secure form handling and validation for user inputs."
  ],
  tech: [
    "Python",
    "Django",
    "HTML",
    "CSS",
   
    "Django ORM",
    "VS Code"
  ],
  link: "https://github.com/Rajnish1947/Job-Portal-project",
}
,{
  title: "Car Rental Management System",
  duration: "2024",
  description:
    "Built a Java-based car rental management system to handle vehicle bookings, customer records, and rental operations efficiently. The system focuses on structured logic, data management, and smooth user workflows.",
  features: [
    "Car listing and availability management.",
    "Customer registration and rental booking system.",
    "Rental duration and cost calculation logic.",
    "Return management and availability updates.",
    "Menu-driven interface for smooth user interaction.",
    "Clear separation of business logic using object-oriented programming principles."
  ],
  tech: [
    "Java",
    "Core Java",
    "OOP Concepts",
    "Collections Framework",
    "JDBC ",
    "IntelliJ IDEA"
  ],
  link: "https://github.com/Rajnish1947/Java-Car-Rental-System-Project-",
}
,{
  title: "ATM Management System",
  duration: "2024",
  description:
    "Developed a Java-based ATM management system that simulates real-world ATM operations such as balance inquiry, cash withdrawal, deposit, and PIN validation.",
  features: [
    "Secure PIN-based user authentication.",
    "Balance inquiry and transaction history display.",
    "Cash withdrawal and deposit functionality.",
    "Input validation and error handling.",
    "Menu-driven console interface.",
    "Implemented core banking logic using Java OOP principles."
  ],
  tech: [
    "Java",
    "Core Java",
    "OOP Concepts",
    "Exception Handling",
    "Collections",
    "IntelliJ IDEA"
  ],
  link: "https://github.com/Rajnish1947/Atm-management",
}
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ProjectsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="bg-gray-950 py-28 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-bold text-white">Projects</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
        <p className="mt-6 text-gray-400 text-lg">
          Selected projects showcasing full-stack and frontend development
          expertise.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
          >
            {/* Title */}
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-purple-400">
                {project.title}
              </h3>
              <span className="text-gray-500 text-sm">
                {project.duration}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4">
              {expandedIndex === index
                ? project.description
                : project.description.slice(0, 120) + "..."}
            </p>

            {/* Features */}
            <ul className="mb-3 space-y-2">
              {(expandedIndex === index
                ? project.features
                : project.features.slice(0, 3)
              ).map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-300 text-sm"
                >
                  <HiCheckCircle className="text-purple-500 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Read More Button */}
            <button
              onClick={() => toggleReadMore(index)}
              className="text-purple-400 text-sm font-medium hover:text-white mb-4"
            >
              {expandedIndex === index ? "Read Less ▲" : "Read More ▼"}
            </button>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs text-gray-200 rounded-full bg-purple-600/20 hover:bg-purple-600 hover:text-white transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-purple-400 hover:text-white text-sm border border-purple-400/30 px-4 py-2 rounded-full transition"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
