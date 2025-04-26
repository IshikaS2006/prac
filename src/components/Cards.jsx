import React from "react";
import { motion } from "framer-motion";

const Cards = () => {
  // Project data array for easy management
  const additionalProjects = [
    {
      title: "E-Commerce Dashboard",
      category: "UI/UX Design",
      image: "https://cdn.dribbble.com/userupload/18448530/file/original-e12baeae4dffc4ea39a28ed6586c2fd9.png?resize=1504x846&vertical=center",
      color: "#004843",
      tags: ["Figma", "Tailwind CSS", "React"],
    },
    {
      title: "Smart Home Interface",
      category: "IoT Design",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
      color: "#4A3F35",
      tags: ["Arduino", "React", "Node.js"],
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      color: "#1E3A5F",
      tags: ["JavaScript", "GSAP", "Framer Motion"],
    },
    
    {
      title: "Finance Mobile App",
      category: "Web Development",
      image: "https://cdn.dribbble.com/userupload/18448530/file/original-e12baeae4dffc4ea39a28ed6586c2fd9.png?resize=1504x846&vertical=center",
      color: "#192826",
      tags: ["React Native", "Firebase", "UI Design"],
    },
  ];

  return (
    <div className="w-full bg-zinc-900 pb-20">
      <div className="pt-20 pb-8 w-full border-b border-zinc-700 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          <h2 className="text-2xl md:text-5xl font-light tracking-tighter text-white">
            More <span className="font-bold">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-xs  text-sm">
            Explore a selection of my additional works spanning various technologies and design concepts.
          </p>
        </motion.div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 py-16 text-sm">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-sm"
        >
          {additionalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-container h-[40vh] md:h-[50vh] text-sm"
            >
              <motion.div 
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
                className="card relative rounded-xl w-full h-full overflow-hidden text-sm"
                style={{ backgroundColor: project.color }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 text-sm bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                
                {/* Project image */}
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
                
                {/* Project info */}
                <div className="absolute z-20 bottom-0 left-0 p-6 text-sm md:p-8 w-full">
                  <span className="text-sm text-white/70 uppercase text-sm tracking-wider">{project.category}</span>
                  <h3 className="text-2xl md:text-xl text-white mt-2 font-medium">{project.title}</h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs rounded-full text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View more button with hover effect */}
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    className="mt-6 px-6 py-2 border border-white/50 text-white rounded-full flex items-center gap-2 group transition-all duration-300 hover:border-white"
                  >
                    <span>View Project</span>
                    <svg 
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all projects button */}
        <div className="mt-16 flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-3 bg-white text-zinc-900 rounded-full flex items-center gap-3 font-medium text-sm"
          >
            <span className="text-sm">Browse Complete Portfolio</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Cards;