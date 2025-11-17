import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: " Digisquares Technologies - Coimbatore",
      period: "April 2025 - Sep 2025",
      description: "Worked closely with senior developers to implement assigned tasks and features within ongoing projects. Contributed to the development of a Low-Code Platform using React.js, Node.js, Express, and MySQL. Gained hands-on experience in REST API integration, frontend development, and MySQL database operations. Assisted in resolving code errors  to ensure smooth project execution.",
      technologies: ["React", "Node.js", "Express.js", "MySQL","REST APIs"]
    },
    {
      title: "Junior Software Developer - Intern",
      company: "Digisquares Technologies - Coimbatore",
      period: "February 2025 - April 2025",
      description: "Collaborated with the company’s development team on building a Low Code Platform aimed at simplifying application development. Developed a User Role Assignment module using React, Node.js, and Express.js, enabling secure and scalable user access control across the platform.  Implemented RESTful APIs and integrated frontend-backend functionality to manage roles, permissions, and user assignments efficiently",
      technologies: ["React", "Node.js", "Express.js", "MySQL", ]
    },
    {
      title: "Full Stack Developer Internship",
      company: "UK Infotech - Pudukkottai",
      period: "Jan 2023 - Aug 2023",
      description: "Assisted in developing web applications and learning modern development practices. Contributed to both frontend and backend development tasks.",
      technologies: [ "Python", "Django", "MySQL", "Bootstrap", "CSS","HTML"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950 text-white relative overflow-hidden">
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
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My professional journey and career highlights
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
              }`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-gray-900 z-10"></div>

              {/*  Content card  */}
              <div className={`ml-16 md:ml-0 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                    {exp.title}
                  </h3>
                  <span className="text-indigo-400 font-semibold text-sm md:text-sm bg-indigo-500/10 px-3 py-1 rounded-full self-start md:self-auto">
                    {exp.period}
                  </span>
                </div>

                <h4 className="text-xl text-indigo-300 font-semibold mb-4">
                  {exp.company}
                </h4>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium border border-indigo-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
