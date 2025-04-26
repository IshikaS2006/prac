// Eyes.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Featured from "./Featured"; // Adjust path if needed

function Eyes() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Initialize smooth scroll effect
    const initScrollEffect = () => {
      // This creates the parallax scroll effect
      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          y: (i, el) => -parseFloat(el.getAttribute('data-scroll-speed')) * (window.innerHeight * 0.8),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          }
        });
      }
    };

    initScrollEffect();

    // Mouse move effect for cursor
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const cursor = document.querySelector(".custom-cursor");
      if (cursor) {
        cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      className="eyes w-full min-h-screen overflow-hidden relative"
      ref={containerRef}
    >
      {/* Custom animated cursor */}
      <div className="custom-cursor fixed w-6 h-6 rounded-full bg-white mix-blend-difference pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>

      {/* Scroll section with parallax effect */}
      <div
        ref={sectionRef}
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-white overflow-hidden"
      >
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-400 opacity-90 animate-gradient-slow"></div>

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[url('/img/mesh-gradient.png')] bg-cover opacity-20 mix-blend-overlay"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <div className="w-full pt-16 pb-8 px-4 md:px-12 lg:px-20">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-between mb-12"
            >
              <h2 className="text-black text-2xl md:text-3xl font-light uppercase tracking-widest">
                Selected <span className="font-bold">Works</span>
              </h2>
              <p className="text-black/80 max-w-md text-sm md:text-base mt-4 md:mt-0">
                Explore my latest projects that showcase my skills in web
                development, design, and creative problem-solving.
              </p>
            </motion.div>

            <Featured />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mt-16"
            >
              <button className="px-8 py-4 backdrop-blur-md border border-amber-900 text-zinc-900 rounded-full bg-zinc-100 hover:text-zinc-100 hover:bg-white/10 transition-all duration-300 flex items-center gap-3 group">
                <span>View All Projects</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Optional scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-70 animate-pulse">
        <span className="text-xs tracking-widest uppercase text-black mb-2">Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

export default Eyes;

