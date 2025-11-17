import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactMethods = [
    {
      title: "Email",
      value: "manikandan543bu@gmail.com",
      href: "mailto:manikandan543bu@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "LinkedIn",
      value: "Manikandan Natarajan",
      href: "https://www.linkedin.com/in/manikandan-natarajan-5636482a9/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "GitHub",
      value: "ManiNataraj",
      href: "https://github.com/ManiNataraj",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: "from-gray-700 to-gray-900"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind or just want to chat? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.title === "Email" ? "_self" : "_blank  "}
              rel={method.title === "Email" ? "" : "noopener noreferrer"}
              className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {method.title}
              </h3>

              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {method.value}
              </p>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl border border-purple-500/20 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              I'm currently available for freelance projects and full-time opportunities.
              Let's discuss how we can bring your ideas to life!
            </p>
            <motion.a
              href="https://wa.me/7010628138"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-bold text-lg shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Conversation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
