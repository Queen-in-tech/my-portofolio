import { useState, useEffect } from "react";
import { FiUser, FiCode, FiTarget, FiCoffee } from "react-icons/fi";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Personal traits/values to highlight
  const personalTraits = [
    {
      icon: <FiUser />,
      title: "Passionate Creator",
      description: "Dedicated to crafting elegant solutions with attention to detail and user experience."
    },
    {
      icon: <FiCode />,
      title: "Modern Tech Stack",
      description: "Proficient in AngularJS, ReactJS, TypeScript, and modern frontend technologies."
    },
    {
      icon: <FiTarget />,
      title: "Goal-Oriented",
      description: "Focused on delivering responsive designs that solve real business problems."
    },
    {
      icon: <FiCoffee />,
      title: "Collaborative",
      description: "Team player who thrives in dynamic environments with diverse perspectives."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 lg:py-16 bg-white"
    >
      <div 
        id="about-section"
        className="container mx-auto px-6"
      >
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-sm font-medium text-purple-700 uppercase tracking-wider mb-3">Get to know me</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">About Me</h3>
          <div className="w-16 h-1 bg-purple-700 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image with design elements */}
          <div className={`relative transition-all h-full duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative h-[95%] z-10">
              <div className="relative overflow-hidden h-full rounded-2xl shadow-xl">
                <img
                  src="Oluwadare.jpeg"
                  alt="Queensheba Oluwadare"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-60"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-purple-400 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-indigo-400 rounded-lg z-0"></div>
            </div>
          </div>

          {/* About content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <h4 className="text-xl md:text-2xl font-medium text-gray-800">
            Hey there, I'm <span className="text-purple-700">Queensheba Oluwadare</span>
          </h4>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm a passionate frontend developer from Nigeria with a background in Information and Communication Technology and Political Science. Currently, I work as a Lead Software Developer at Centrifuge Information Technology Limited, where I oversee software architecture, development workflows, and code quality.
            </p>

            <p>
              I specialize in building scalable, user-focused solutions with React, TypeScript, Firebase, NestJS, AngularJS, and modern tools like TailwindCSS and Ionic.
            </p>

            <p className="hidden md:block">
            With a strong eye for detail and a love for clean, optimized code, I create dynamic, accessible, and high-performance interfaces. I'm always exploring new technologies to bring fresh, innovative solutions to every project.
            </p>

            <p>
              When I'm not coding, I enjoy designing and making my own clothing - blending creativity into every aspect of my life. Feel free to explore my projects, and let's connect if you're looking for a developer who combines strong technical expertise with a passion for innovation and community development.
            </p>
          </div>


            {/* Personal traits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {personalTraits.map((trait, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 p-2 rounded-lg bg-purple-100 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
                    {trait.icon}
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">{trait.title}</h5>
                    <p className="text-sm text-gray-600">{trait.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;