import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex items-center justify-center mt-12 space-x-4">
    <button
      onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      disabled={currentPage === 1}
      className="p-2 rounded-full hover:bg-gray-300 disabled:opacity-50 transition"
    >
      <ChevronLeft size={20} />
    </button>

    <div className="flex space-x-2">
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx}
          onClick={() => onPageChange(idx + 1)}
          className={`w-3 h-3 rounded-full transition ${
            currentPage === idx + 1 ? 'bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'
          }`}
        />
      ))}
    </div>

    <button
      onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="p-2 rounded-full hover:bg-gray-300 disabled:opacity-50 transition"
    >
      <ChevronRight size={20} />
    </button>
  </div>
);

const Projects = () => {
  const projects = [
    { name: "Tic-Tac App", tech: ["React", "Tailwind CSS"], image: "/tic.png", url: "https://satyam0049.github.io/tic-tac/" },
    { name: "Education Detail", tech: ["React", "LocalStorage"], image: "/todo.avif", url: "https://satyam0049.github.io/from/" },
    { name: "E-Commerce Website", tech: ["React", "OpenWeather"], image: "/e-commerce.jpg", url: "https://satyam0049.github.io/satyam/" },
    { name: "Player Form", tech: ["React", "API"], image: "/bussiness1.png", url: "https://cricketauctionbid.netlify.app/form/" },
    { name: "CricketAuction Website", tech: ["Socket.IO", "Node.js"], image: "/cricketauction.png", url: "https://cricketauctionbid.netlify.app" },
    { name: "Blog CMS", tech: ["React", "Firebase"], image: "/bussiness6.webp", url: "http://localhost:5173/blog" },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const cardVariants = {
    offscreen: { opacity: 0, y: 60, scale: 0.95 },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-[#e0eafc] via-[#cfdef3] to-[#a1c4fd] bg-[length:400%_400%] animate-gradientShift"
    >
      <div className="max-w-7xl mx-auto text-center text-gray-900">
        <motion.h2
          className="text-4xl font-extrabold mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
         
        </motion.h2>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {paginatedProjects.map((project, i) => (
            <Tilt key={i} glareEnable={true} glareMaxOpacity={0.2} scale={1.02} transitionSpeed={1000}>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-all duration-500"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <div className="bg-white/50 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="p-6 text-left">
                    <h4 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                      {project.name}
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            </Tilt>
          ))}
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default Projects;
