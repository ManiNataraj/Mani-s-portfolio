import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: "Bharathiar University, Coimbatore",
      period: "2023-2025",
      degree: "Master of Computer Applications",
      percentage: "75%"
    },
    {
      institution: "H.H. The Rajah's College, Pudukkottai",
      period: "2020-23",
      degree: "B.Sc. Computer Science",
      percentage: "79%"
    },
    {
      institution: "St. Mary's Higher Secondary School, Pudukkottai",
      period: "2019-2020",
      degree: "Higher Secondary Certificate",
      percentage: "70%"
    },
    {
      institution: "St. Mary's Higher Secondary School, Pudukkottai",
      period: "2017-2018",
      degree: "Secondary School Leaving Certificate",
      percentage: "88%"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-24 px-6 bg-gray-50 text-black-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My academic journey and educational background
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="group relative bg-white-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card Content */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-black mb-2 md:mb-0">
                    {edu.degree}
                  </h3>
                  <span className="text-blue-600 font-bold text-xs md:text-sm bg-blue-500/10 px-2 md:px-3 py-1 rounded-full self-start md:self-auto">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-xl text-blue-600 font-semibold mb-4">
                  {edu.institution}
                </h4>

                <div className="flex items-center gap-2">
                  <span className="text-white-300">Percentage:</span>
                  <span className="bg-gray-500/20 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {edu.percentage}
                  </span>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
