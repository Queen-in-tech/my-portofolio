import { useState, useRef, useEffect } from "react";
import { FiExternalLink, FiChevronRight, FiX, FiChevronLeft } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

// Type definitions
interface Project {
  id: number;
  photo: string;
  title: string;
  category: string; // e.g., "Web App", "Mobile", "UI/UX", etc.
  featured: boolean;
}

interface ProjectDetail {
  id: number;
  title: string;
  details: string;
  features: string[];
  images: string[];
  stacks: string;
  category: string;
  live: string;
  gitHub: string;
  featured: boolean;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isVisible, setIsVisible] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectsData: ProjectDetail[] = [
    {
      id: 1,
      title: "Liberation Note",
      details:
        "Liberation Notes is a modern and responsive social media web application built with React, Tailwind CSS, and Firebase.",
      features: [
        "User Authentication with Firebase",
        "User Profile Management",
        "Create and Edit Posts",
        "Like and Comment functionality",
        "Private and Public Posts",
        "Private Messaging",
        "Mood Tracker",
      ],
      images: [
        "liberation/Liberation-Note dashboard.png",
        "liberation/Liberation-Note home page.png",
        "liberation/Liberation-Note renewed.png",
        "liberation/Liberation-Note-dairyPage.png",
        "liberation/Liberation-Note.png",
        " liberation/Liberation-Note(1) edit mobile.png",
        " liberation/Liberation-Note(1) mobile chat.png",
        " liberation/Liberation-Note(1) mobile comment.png",
        " liberation/Liberation-Note(1) mobile dairy.png",
        "liberation/Liberation-Note(1) mobile deactivate.png", 
        "liberation/Liberation-Note(1) mobile home.png",
        "liberation/Liberation-Note(1) mobile make post.png",
        "liberation/Liberation-Note(1) mobile msg.png",
        "liberation/Liberation-Note(1) mobile option.png",
        "liberation/Liberation-Note(1) mobile update.png",
        "liberation/Liberation-Note(1) mobile mood.png",
         "liberation/Liberation-Note(1) mobile username.png",
        "liberation/Liberation-Note(1) update.png",
        " liberation/Liberation-Note(1) mood.png"
      ],
      stacks: "React, TailwindCSS, Firebase, React-toastify",
      category: "Web App",
      live: "https://my-dairy-app-1683d.web.app/",
      gitHub: "https://github.com/Queen-in-tech/Liberstion-note",
      featured: true,
    },
    {
      id: 2,
      title: "Musica App",
      details:
        "Musica is a sleek and responsive music player app built with react that integrates with the Spotify API.",
      features: [
        "Spotify API Authentication",
        "Play, Pause, Shuffle controls",
        "Search Music & Artists",
        "Add to Favorites",
        "Remove from Favorites",
      ],
      images: [
        "musica/Musica album track full view.png",
        "musica/Musica favourites.png",
        "musica/Musica full view.png",
        "musica/Musica mobile album track.png",
        "musica/Musica mobile full view.png",
        "musica/Musica mobile music player.png",
        "musica/Musica mobile nav.png",
        "musica/Musica mobile search.png",
        "musica/Musica moile favourite.png",
         "musica/Musica search.png",
        "musica/Screen Shot 2023-07-22 at 22.15.37.png  "  
      ],
      stacks: "React, TailwindCSS, Spotify API, Local Storage",
      category: "Web App",
      live: "https://musica-web-app.netlify.app/",
      gitHub: "https://github.com/Queen-in-tech/Musica-app",
      featured: true,
    },
    {
      id: 3,
      title: "Food Recipe App",
      details:
        "A recipe discovery application for finding delicious recipes based on ingredients.",
      features: [
        "Search for Recipes",
        "Get Detailed Information",
        "Direct Recipe Access",
        "Responsive Design",
        "Pagination",
      ],
      images: [
        "food/food001-netlify-app-trendy-page fet recipe.png",
        "food/food001-netlify-app-trendy-page home.png",
        "food/food001-netlify-app-trendy-page full view.png",
        "food/food001-netlify-app-trendy-page mobile nav.png",
        "food/food001-netlify-app-trendy-page mobile recipe.png",
        "food/food001-netlify-app-trendy-page mobile search full view.png",
        "food/food001-netlify-app-trendy-page mobile search.png",
        "food/food001-netlify-app-trendy-page mobile.png",
        "food/food001-netlify-app-trendy-page search.png",
        "food/food001-netlify-app-trendy-page show details.png"
      ],
      stacks: "Javascript, HTML, TailwindCSS, Spoonacular API",
      category: "Web App",
      live: "https://food001.netlify.app/",
      gitHub: "https://github.com/Queen-in-tech/food_app",
      featured: true,
    },
    {
      id: 4,
      title: "e-Governance Advancement Network (e-Gan)",
      details:
        "A modern, responsive website for e-GAN (e-Governance Advancement Network), an NGO focused on promoting digital literacy, transparent governance, and citizen empowerment through technology-driven solutions.",
      features: [
        "Homepage showcasing mission and vision",
        "About Us and Objectives section",
        "Programs and Initiatives display",
        "Contact Us form integration",
        "Responsive Design (Mobile and Desktop)",
        "Social Media Links and Integration",
        "Clean and Accessible Layout",
        "Optimized Performance and SEO"
      ],
      images: [
         "digiGov/Screen Shot 2025-04-29 at 00.24.50.png",
          "digiGov/Screen Shot 2025-04-29 at 00.24.55.png",
        "digiGov/Screen Shot 2025-04-29 at 00.25.03.png",
        "digiGov/Screen Shot 2025-04-29 at 00.25.12.png",
        "digiGov/Screen Shot 2025-04-29 at 00.25.19.png",
        "digiGov/Screen Shot 2025-04-29 at 00.25.30.png",
        "digiGov/Screenshot 2025-04-29 at 00-21-28 Ngo.png",
         "digiGov/Screenshot 2025-04-29 at 00-21-44 Ngo.png",
        "digiGov/Screenshot 2025-04-29 at 00-21-59 Ngo.png",
         "digiGov/Screenshot 2025-04-29 at 00-22-13 Ngo.png",
          "digiGov/Screenshot 2025-04-29 at 00-22-26 Ngo.png",
          "digiGov/Screenshot 2025-04-29 at 00-22-40 Ngo.png",
         "digiGov/Screenshot 2025-04-29 at 00-23-10 Ngo.png",
         "digiGov/Screenshot 2025-04-29 at 00-23-17 Ngo.png",
          "digiGov/Screenshot 2025-04-29 at 00-23-31 Ngo.png",
          "digiGov/Screenshot 2025-04-29 at 00-23-44 Ngo.png",
          "digiGov/Screenshot 2025-04-29 at 00-23-56 Ngo.png",
          "digiGov/Screenshot 2025-04-29 at 00-24-19 Ngo.png",
        "digiGov/Screenshot 2025-04-29 at 00-24-29 Ngo.png"
      ],
      stacks: "TailwindCSS, Angular",
      category: "Landing Page",
      live: "https://e-gan.vercel.app/",
      gitHub: "https://github.com/Queen-in-tech/NGO",
      featured: true,
    },
    {
      id: 5,
      title: "JAMB Admissions Chatbot",
      details:
        "An AI-powered chatbot designed to assist Nigerian university aspirants with real-time admission guidance and answers using ChatGPT.",
      features: [
        "Instant Admission Queries",
        "Interactive Chat Interface",
        "Smart Response Generation",
        "Secure Form Handling",
        "Mobile-Responsive Design",
        "Integrated OpenAI API",
      ],
      images: [
       "jambot/Screen Shot 2025-04-29 at 02.03.18.png",
        "jambot/Screen Shot 2025-04-29 at 02.03.23.png",
       "jambot/Screen Shot 2025-04-29 at 02.03.26.png",
      "jambot/Screenshot 2025-04-29 at 02-02-13 Sable Technology.png",
       "jambot/Screenshot 2025-04-29 at 02-02-21 Sable Technology.png",
      "jambot/Screenshot 2025-04-29 at 02-02-44 Sable Technology.png",
      "jambot/Screenshot 2025-04-29 at 02-03-02 Sable Technology.png"
      ],
      stacks: "Angular, NestJS, OpenAI API, TailwindCSS",
      category: "Web App",
      live: "https://jamb-bot.netlify.app",
      gitHub: "https://github.com/Queen-in-tech/jamb-bot",
      featured: true,
    },
    
  ];

  // Derive the simplified project data for the grid
  const projects: Project[] = projectsData.map((project) => ({
    id: project.id,
    photo: `screenshots/${project.title.toLowerCase().replace(/\s+/g, "-")}.png`,
    title: project.title,
    category: project.category,
    featured: project.featured,
  }));

  const nextImage = () => {
    if (selectedProject) {
      const project = getProjectDetails(selectedProject);
      if (project && project.images.length > 0) {
        setCurrentImageIndex((prev) => 
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }
    }
  };
  const prevImage = () => {
    if (selectedProject) {
      const project = getProjectDetails(selectedProject);
      if (project && project.images.length > 0) {
        setCurrentImageIndex((prev) => 
          prev === 0 ? project.images.length - 1 : prev - 1
        );
      }
    }
  };

  // Get unique categories
  const categories = ["All", ...new Set(projects.map((project) => project.category))];

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);


  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Find project details by ID
  const getProjectDetails = (id: number) => {
    return projectsData.find(project => project.id === id);
  };

  const handleProjectClick = (id: number) => {
    setIsAnimating(true);
    setSelectedProject(id);
    
    setTimeout(() => {
      setShowDetails(true);
      setIsAnimating(false);
      
      if (detailsRef.current) {
        detailsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  const handleCloseDetails = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      setShowDetails(false);
      setIsAnimating(false);
    }, 300);
  };

  // Function to get tech stack as array
  const getTechStackArray = (stacks: string) => {
    return stacks.split(',').map(tech => tech.trim());
  };

  return (
    <section 
      id="project" 
      className="py-20 lg:py-16 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container md:mx-auto md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-sm font-medium text-purple-700 uppercase tracking-wider mb-3">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Featured Projects</h3>
          <div className="w-16 h-1 bg-purple-700 mt-4 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-700 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${showDetails ? 'mb-12' : ''}`}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                selectedProject === project.id && showDetails ? 'ring-2 ring-purple-500' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onClick={() => handleProjectClick(project.id)}
              style={{ transitionDelay: `${(project.id % 5) * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.photo}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs px-2 py-1 rounded">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-gray-800">{project.title}</h4>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showDetails && selectedProject && (() => {
  const project = getProjectDetails(selectedProject);
  if (!project) return null;

  return (
    <div 
      ref={detailsRef}
      className={`bg-white rounded-xl shadow-lg mt-12 transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative p-6 md:p-8">
        {/* Now you can safely access project.title, project.images, etc. */}
        <button 
          onClick={handleCloseDetails} 
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <FiX className="text-gray-700" />
        </button>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 pr-10">
          {project.title}
        </h3>

        {/* Image gallery */}
        {project.images.length > 0 && (
          <div className="mb-8 relative">
            <div className="rounded-lg overflow-hidden h-64 md:h-96">
              <img 
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain object-top"
              />
            </div>

            {/* Navigation arrows */}
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <FiChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image indicator dots */}
            {project.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentImageIndex === index ? 'bg-purple-700' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main content */}
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 mb-6">
                        {getProjectDetails(selectedProject)?.details}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                        <ul className="space-y-3 grid grid-cols-2">
                          {getProjectDetails(selectedProject)?.features.map((feature, index) => (
                            <li 
                              key={index} 
                              className="flex items-start gap-2 text-gray-600"
                            >
                              <span className="inline-block w-1 h-1 bg-purple-700 rounded-full mt-2.5"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Side panel */}
                    <div className="lg:col-span-1">
                      {/* Tech Stack */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {getTechStackArray(getProjectDetails(selectedProject)?.stacks || "").map((tech, index) => (
                            <span 
                              key={index}
                              className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Project Links */}
                      <div className="flex flex-col gap-3">
                        <a 
                          href={getProjectDetails(selectedProject)?.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex justify-center items-center gap-2 bg-gradient-to-r from-purple-700 to-purple-900 text-white px-5 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                        >
                          Live Preview
                          <FiExternalLink />
                        </a>
                        
                        <a 
                          href={getProjectDetails(selectedProject)?.gitHub} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex justify-center items-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300"
                        >
                          View Code
                          <AiFillGithub className="text-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
      </div>
    </div>
  );
})()}


      </div>
    </section>
  );
};

export default Projects;