//@ts-nocheck
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";

const projects = [
  {
    title: "ApnaTenant",
    category: "Here you can find properties, create and manage properties",
    tools:
      "React.js, Express.js, Node.js, Framer-motion, MongoDB, Mongoose, Figma",
    image: "/images/ApnaTenant.png",
    path: "https://apnatenant.com/",
  },
  {
    title: "TRACKIFY",
    category: "Funds tracker with Graph",
    tools: "ExpressJs, NodeJs, ReactJs, MongoDB, RestAPIs, MaterialUI",
    image: "/images/trackify.png",
    path: "https://trackify-by-himanshu2k4.onrender.com/",
  },
  {
    title: "BLOG4U",
    category: "Blog platform with AI features",
    tools:
      "Gemini 3.0 API, ReactJs, NodeJs, ExpressJs, MongoDB, TailwindCSS, Cloudinary, Multer",
    image: "/images/Blog.png",
    path: "https://blog4u-by-himanshu2k4.onrender.com/",
  },
  {
    title: "Face-2-Face",
    category: "Real-time video calling with chat features",
    tools:
      "React.js, Express.js, Node.js, Web-Sockits,Web-RTC, MongoDB, Mongoose",
    image: "/images/Face2Face.png",
    path: "https://face-2-face-2-by-himanshu2k4.onrender.com/",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.92,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.92,
    transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
  }),
};

const Work = () => {
  const [[currentIndex, direction], setCurrent] = useState<[number, number]>([
    0, 0,
  ]);

  const paginate = useCallback((newDirection: number) => {
    setCurrent(([prev]) => {
      let next = prev + newDirection;
      if (next < 0) next = projects.length - 1;
      if (next >= projects.length) next = 0;
      return [next, newDirection];
    });
  }, []);

  const activeProject = projects[currentIndex];

  const handleViewProject = () => {
    window.open(activeProject.path, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          Featured <span>Projects</span>
        </motion.h2>

        <div className="carousel-wrapper">
          {/* Arrows */}
          <button
            className="carousel-arrow left"
            onClick={() => paginate(-1)}
            aria-label="Previous"
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow right"
            onClick={() => paginate(1)}
            aria-label="Next"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-viewport">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="carousel-slide"
              >
                <div className="project-content">
                  {/* Image – clickable to open in new tab */}
                  <motion.div
                    className="project-image-wrapper"
                    whileHover={{ scale: 1.04, y: -12 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={handleViewProject}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="project-image"
                      loading="lazy"
                    />

                    <div className="image-overlay" onClick={handleViewProject}>
                      <div className="view-project">
                        View Project <MdArrowOutward />
                      </div>
                    </div>
                  </motion.div>

                  {/* Info */}
                  <motion.div
                    className="project-info"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    <div className="project-number">0{currentIndex + 1}</div>
                    <h3>{activeProject.title}</h3>
                    <p className="category">{activeProject.category}</p>
                    <div className="tools">
                      <span className="tools-label">Built with</span>
                      <p>{activeProject.tools}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="carousel-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => {
                  const dir = i > currentIndex ? 1 : -1;
                  setCurrent([i, dir]);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
 