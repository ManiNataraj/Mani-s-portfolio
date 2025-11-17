import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "News Portal (mini project)",
      date: "Oct 2024",
      featured: true,
      overview: "News Portal is a dynamic, full-featured web application developed using Django to provide categorized and real-time news updates to users.",
      keyFeatures: [
        "Django Admin CMS for managing articles, categories, and multimedia content effortlessly",
        "Categorized news across Politics, Sports, Business, Entertainment, and World News",
        "Real-time news updates ensuring users have access to relevant and up-to-date information",
        "Responsive design for seamless user experience across devices"
      ],
      techStack: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
      image: "https://static3.4media.com/data/articles/xl-how-to-create-a-news-portal-website-1647337622.png",
      liveUrl: "#",
      githubUrl: "https://github.com/ManiNataraj/ManiNataraj",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Real-Time Weather Application using React",
      date: "Sep 2024",
      featured: true,
      overview: "Designed and implemented a dynamic weather application that fetches and displays real-time weather information using the WeatherAPI.",
      keyFeatures: [
        "Interactive city search functionality with instant weather data retrieval using REST API integration.",
        "Comprehensive weather display showing temperature, humidity, wind speed, location details, and timezone information.",
        "Dynamic weather condition visualization with icon representation and real-time updates.",
        "Responsive and modern UI with component-based architecture for optimal user experience."
      ],
      techStack: ["React", "Axios", "REST API","Node.js", "JavaScript", "WeatherAPI","CSS"],
      image: "",
      liveUrl: "#",
      githubUrl: "https://github.com/ManiNataraj/Weather-Application",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "AI Chatbot using Gemini API",
      date: "Oct 2024",
      featured: true,
      overview: "Developed a fully functional mini AI chatbot application using the free Gemini API, integrated within a Django web framework. The chatbot can process user queries, generate intelligent responses, and handle real-time date & time requests with custom logic.",
      keyFeatures: [
        "Gemini API Integration - Connected Django backend with Google’s Gemini 2.0 Flash model to generate dynamic, conversational responses based on user input.",
        "Secure Environment Configuration - Managed API keys using environment variables and python-dotenv to maintain security and clean code structure.",
        "User-Friendly Chat UI - Designed an interactive chat interface using Bootstrap with auto-scrolling, message bubbles, and a clean light/dark contrast theme.",
        "Prisma ORM integration with PostgreSQL for efficient data management"
      ],
      techStack: ["Python", "Django", "Gemini API", "SQLite", "HTML", "CSS"],
      image: "",
      liveUrl: "#",
      githubUrl: "https://github.com/ManiNataraj/ChatAi",
      gradient: "from-orange-500 to-red-600"
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
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
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
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of my recent work and creative solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-purple-500/10"
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Header with title and featured badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.date}</p>
                </div>
              </div>

              {/* Overview */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.overview}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600/50 hover:bg-gray-600/50 hover:border-purple-500/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white font-semibold rounded-xl border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View Code</span>
                </motion.a>
              </div>

              {/* Subtle background gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border-2 border-purple-500/30 rounded-2xl text-purple-300 hover:text-white hover:border-purple-400 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://github.com/ManiNataraj" target="_blank" class="btn">
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
