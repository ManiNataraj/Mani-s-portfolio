import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto  items-center">
        
        {/* Image Section */}
        {/* <div className="flex justify-center md:justify-start">
          <img
            src="/profile.jpg" // replace with your image
            alt="Mani's Profile"
            className="rounded-2xl shadow-lg w-64 h-64 object-cover border-4 border-indigo-500"
          />
        </div> */}

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-9">
            About <span className="text-indigo-600">Me</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5 w-full">
            Hello! I'm <span className="font-semibold text-indigo-600">Manikandan</span>, 
            I'm a full-stack developer. I love building 
            interactive web applications using technologies like 
            <span className="font-medium"> React.js, Node.js/Django, MySQL/SQLite, and HTML5, CSS3, Bootstrap 5</span>. 
            My goal is to create smooth, efficient, and visually appealing user experiences.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            I’m continuously learning and exploring new technologies to enhance 
            my development skills and bring creative ideas to life.
          </p>

          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Skills</h3>

            {/* Frontend Skills */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-700 mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Bootstrap"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-700 mb-3">Backend</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Node.js",
                  "Django",
                  "Python"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database Skills */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-700 mb-3">Database</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "MySQL",
                  "SQLite"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Version Control & Tools */}
            <div>
              <h4 className="text-lg font-medium text-gray-700 mb-3">Version Control & Collaboration Tools</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Git",
                  "GitHub",
                  "PowerBI"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Competencies Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Communication",
                "Decision Making",
                "Leadership",
                "Team Collaboration",
                "Adaptability & Quick Learning"
              ].map((competency) => (
                <span
                  key={competency}
                  className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
