
// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";

// // Education Data
// const educationData = [
//   {
//     degree: "B.E (Computer Science & Engineering)",
//     institute: " Aarupadai Veedu Institute of Technology,Paiyanoor, near Chennai",
//     duration: "2026",
//     score: "CGPA: 8.77 / 10.0",
//   },
//   {
//     degree: "XII (BSEB)",
//     institute: "S.D.S College, Chapra ,Pratap Nagar, Chapra, or near Sadar Hospital/Bhagwan Bazar, Bihar. ",
//     duration: "2020",
//     score: "Percentage: 75.4%",
//   },
//   {
//     degree: "X (BSEB)",
//     institute: " Ambika Dada High School, Chhitarwaliya village, Ekma Block, Saran District, Bihar",
//     duration: "2018",
//     score: "Percentage: 68.4%",
//   },
// ];

// // Animation
// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       type: "spring",
//       stiffness: 80,
//     },
//   }),
// };

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 px-6 md:px-[7vw] lg:px-[20vw] bg-gray-900 font-sans"
//     >
//       {/* Header */}
//       <div className="text-center mb-14">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
//         <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
//           My academic background and educational achievements.
//         </p>
//       </div>

//       {/* Education Cards */}
//       <div className="flex flex-col gap-8">
//         {educationData.map((edu, index) => (
//           <motion.div
//             key={index}
//             custom={index}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//           >
//             <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
//               <div className="bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
                
//                 {/* Degree */}
//                 <h3 className="text-2xl font-semibold text-purple-400 mb-2">
//                   {edu.degree}
//                 </h3>

//                 {/* Institute */}
//                 <p className="text-gray-300 text-lg mb-3">
//                   {edu.institute}
//                 </p>

//                 {/* Details */}
//                 <div className="flex flex-wrap justify-between text-gray-400 text-sm">
//                   <span>{edu.duration}</span>
//                   <span>{edu.score}</span>
//                 </div>

//               </div>
//             </Tilt>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

// Education Data
const educationData = [
  {
    degree: "B.E – Computer Science & Engineering",
    institute:
      "Aarupadai Veedu Institute of Technology, Paiyanoor (Near Chennai)",
    duration: "2022 – 2026",
    score: "CGPA: 8.77 / 10",
  },
  {
    degree: "XII (BSEB)",
    institute:
      "S.D.S College, Pratap Nagar, Chapra, Bihar",
    duration: "2020",
    score: "75.4%",
  },
  {
    degree: "X (BSEB)",
    institute:
      "Ambika Dada High School, Ekma Block, Saran District, Bihar",
    duration: "2018",
    score: "68.4%",
  },
];

// Animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-[8vw] lg:px-[18vw] "
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          Education
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
       
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-10">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-purple-500/30 hidden sm:block" />

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="hidden sm:flex absolute left-0 top-6 w-8 h-8 rounded-full bg-purple-600 items-center justify-center">
              <GraduationCap size={16} className="text-white" />
            </div>

            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03}>
              <div className="sm:ml-16 bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 shadow-md hover:shadow-purple-500/40 transition-all duration-300">
                
                {/* Degree */}
                <h3 className="text-xl md:text-2xl font-semibold text-purple-400">
                  {edu.degree}
                </h3>

                {/* Institute */}
                <p className="text-gray-300 mt-2 leading-relaxed">
                  {edu.institute}
                </p>

                {/* Footer */}
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="bg-gray-700/60 px-3 py-1 rounded-full">
                    {edu.duration}
                  </span>
                  <span className="bg-gray-700/60 px-3 py-1 rounded-full">
                    {edu.score}
                  </span>
                </div>

              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
