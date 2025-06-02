import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const imageVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  const images = [
    { src: "/bussiness2.webp", alt: "Design Thinking", rotate: "rotate-3", size: "w-40 h-40", delay: 0 },
    { src: "/bussiness3.jpg", alt: "Team Collaboration", rotate: "-rotate-6", size: "w-48 h-48", delay: 0.15 },
    { src: "/bussiness4.png", alt: "Web Development", rotate: "rotate-2 translate-x-6", size: "w-32 h-32", delay: 0.3 },
    { src: "/bussiness1.png", alt: "Project Strategy", rotate: "-rotate-3 translate-y-3", size: "w-36 h-36", delay: 0.45 },
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-indigo-700 to-blue-600 text-white px-8 py-20 overflow-hidden relative">
      {/* TEXT CONTENT */}
      <div className="w-full md:w-1/2 z-20 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Hi, I'm <span className="text-yellow-300">Steven</span>
        </h1>
       

        <p className="text-xl md:text-2xl font-light mb-6 max-w-xl mx-auto md:mx-0">
          A <span className="font-semibold text-pink-200">Fronted Developer</span> crafting scalable digital solutions and immersive experiences using the power of modern web technologies.
        </p>

        <div className="mb-6 space-y-3 text-base md:text-lg leading-relaxed text-white/90 max-w-xl mx-auto md:mx-0">
          <p>
            💡 <strong>Expertise:</strong> React, js, Tailwind CSS, Node.js, MongoDB, Boostrap
          </p>
          <p>
            🧩 <strong>What I do:</strong> UI/UX Design, API Development, Real-time Web Apps, Responsive Design
          </p>
          <p>
            🚀 <strong>Mission:</strong> To deliver seamless, performant, and visually captivating products that solve real-world problems.
          </p>
        </div>

        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <NavLink
            to="/projects"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-100 transition duration-300"
          >
            View Projects
          </NavLink>
          <a
            href="#contact"
            className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-blue-700 transition duration-300"
          >
            Let's Collaborate
          </a>
        </div>
      </div>

      {/* IMAGE GRID WITH ANIMATION */}
      <motion.div
        className="w-full md:w-1/2 mt-14 md:mt-0 relative z-10 flex justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="grid grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              custom={img.delay}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.25}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                transitionSpeed={1500}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`object-cover ${img.size} ${img.rotate} transition-transform duration-500 group-hover:rotate-0`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl" />
                </div>
              </Tilt>
            </motion.div >
          ))}
        </div>
      </motion.div>

     
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-blue-800 opacity-20 z-0 pointer-events-none" />
    </section>
  );
};

export default Hero;
 