import { useState, useEffect } from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Tech stack data
  const techStack = [
    {
      name: "HTML",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      name: "CSS",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      name: "JavaScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      name: "TailwindCSS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMAgy_XeSr2CmOITAysaZtDxsVUSTSYtSM2EKE5ivhg&s",
    },
    {
      name: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      name: "Angular",
      image: "https://brandlogos.net/wp-content/uploads/2025/04/angular_icon-logo_brandlogos.net_jn7wi-512x542.png",
    },
    {
      name: "TypeScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
    },
    // {
    //   name: "Firebase",
    //   image: "https://www.svgrepo.com/show/303670/firebase-1-logo.svg",
    // },
    {
      name: "Ionic",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJZuk231xDvLafBXK6I47B32mywaPb-4GBw&s",
    },
    {
      name: "Nextjs",
      image: "https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png",
    },
    // {
    //   name: "Ionic",
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJZuk231xDvLafBXK6I47B32mywaPb-4GBw&s",
    // },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gradient-to-b from-white to-purple-100 lg:px-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-indigo-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-purple-300 rounded-full opacity-10"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 py-12 md:py-32 relative z-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-12 md:gap-8">
          
          {/* Left side - Text content */}
          <div className={`flex-1 max-w-2xl items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4 mb-8">
              <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-800 font-medium text-sm mb-2">
                Frontend Developer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Hi, I'm <span className="text-purple-700">Oluwadare Queensheba</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                I craft beautiful, responsive web experiences with modern technologies that solve real problems.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-5 mb-12">
              <a 
                href="https://github.com/Queen-in-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-700 transition-colors duration-300"
                aria-label="GitHub"
              >
                <BsGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/Queenofsheba0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-700 transition-colors duration-300"
                aria-label="Twitter"
              >
                <BsTwitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/oluwadare-queensheba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <BsLinkedin className="w-6 h-6" />
              </a>
            </div>

            {/* Tech stack */}
            <div className="space-y-4 mt-8">
              <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2 mb-4">
                Tech Stack
                <span className="h-px w-12 bg-gray-300"></span>
              </h2>
              <div className="flex flex-wrap gap-5 md:gap-6">
                {techStack.map((tech) => (
                  <div 
                    key={tech.name}
                    className="group relative flex flex-col items-center md:mb-4"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300">
                      <img 
                        src={tech.image} 
                        alt={tech.name} 
                        className="w-8 h-8 object-contain" 
                      />
                    </div>
                    <span className="absolute -bottom-8 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className={`flex-1 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 opacity-10 blur-xl"></div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="Oluwadare.jpeg"
                  alt="Oluwadare Queensheba"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
        <FiArrowDown className="text-purple-700 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;