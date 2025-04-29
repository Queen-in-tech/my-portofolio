import { FiExternalLink } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience" className=" bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-sm font-medium text-purple-700 uppercase tracking-wider mb-3">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Professional Journey</h3>
          <div className="w-16 h-1 bg-purple-700 mt-4 rounded-full"></div>
        </div>

        <div className="space-x-12 flex">
          
          {/* Lead Software Developer - Centrifuge */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-2">Lead Software Developer</h4>
            <p className="text-gray-600 mb-1">Centrifuge Information Technology Limited — Abuja, Nigeria</p>
            <p className="text-gray-500 text-sm mb-4">Jun 2024 - Present</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Oversaw software architecture, modularization (Git Subtrees), and CI/CD pipeline improvements.</li>
              <li>Led the implementation of an ERP system to streamline internal operations and improve client servicing.</li>
              <li>Led the development of iTelestream - a live event streaming app with offline access.</li>
              <li>Contributed to a virtual court hearing system enhancing remote legal proceedings in Nigeria.</li>
            </ul>
            <a 
              href="https://www.centrifugegroup.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 mt-4 text-purple-700 hover:underline"
            >
              Company Website <FiExternalLink />
            </a>
            <a 
                href="https://www.optimaxsuites.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 mt-4 ml-4 text-purple-700 hover:underline"
            >
                View ERP Project <FiExternalLink />
            </a>
            <a 
                href="https://www.itelestream.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 mt-4 ml-4 text-purple-700 hover:underline"
            >
                View iTelestream Project <FiExternalLink />
            </a>
            <p className="text-gray-500 text-sm mt-3">*Note: This links directs to the projects' website, not the software itself.*</p>
          </div>

          {/* Software Developer - Manaknight Digital */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-2">Software Developer</h4>
            <p className="text-gray-600 mb-1">Manaknight Digital Solutions — Remote, Canada</p>
            <p className="text-gray-500 text-sm mb-4">Oct 2023 - Jan 2024</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Developed key features for a wireframe tool enabling rapid mobile/web app design.</li>
              <li>Enhanced UI performance by 10% and optimized Android project generation.</li>
              <li>Integrated secure authentication and streamlined project delivery workflows.</li>
            </ul>
            <a 
              href="https://manaknightdigital.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 mt-4 text-purple-700 hover:underline"
            >
              Company Website <FiExternalLink />
            </a>
          </div>

         

        </div>
      </div>
    </section>
  );
};

export default Experience;
