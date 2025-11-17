import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 md:p-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-black"></div>

        {/* Floating orbs */}
        <div>
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          ></motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
          ></motion.div>
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <motion.div variants={itemVariants} className="mb-6">
          <motion.span
            className="inline-block px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            👋 Welcome 
          </motion.span>
        </motion.div> */}

        <motion.p
          className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 tracking-wide"
          variants={itemVariants}
        >Hi I'm</motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 md:mb-6 leading-tight"
          variants={itemVariants}
        >
          <span>MANIKANDAN</span>
          <br />
          {/* <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient"></span> */}
        </motion.h1>

        <motion.div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"
          variants={itemVariants}
        >
          <span className="text-gray-200"></span>
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Software Developer
          </span>
        </motion.div>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I craft exceptional digital experiences through clean code, innovative
          design, and cutting-edge technologies
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full sm:w-auto"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-xl hover:shadow-purple-500/25 transition-all duration-300 w-full sm:w-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore My Work
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-gray-300 border-2 border-gray-600 rounded-full hover:border-purple-400 hover:text-purple-400 transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="/Manikandan_N.pdf"
            download="Manikandan.pdf"
            className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-xl hover:shadow-orange-500/25 transition-all duration-300 w-full sm:w-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(255,165,0,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Download Resume
              <svg
                className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8-8 8z"
                />
              </svg>
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6  transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
