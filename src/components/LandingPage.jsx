import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const containerRef = useRef(null);
  const introRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const ctaButtonRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Create timeline for sequential animations
    const tl = gsap.timeline();

    // Intro line animation - fade in with a subtle slide up
    tl.fromTo(
      introRef.current,
      { 
        y: -20,
        opacity: 0, 
        scale: 0.95
      },
      { 
        y: 0,
        opacity: 1, 
        scale: 1,
        duration: 1, 
        ease: "power2.out"
      }
    );
    
    // First text line - elegant slide in from right
    tl.fromTo(
      line1Ref.current,
      { 
        xPercent: 100, 
        opacity: 0,
        scale: 0.9 
      },
      { 
        xPercent: 0, 
        opacity: 1, 
        scale: 1,
        duration: 1.2, 
        ease: "power3.out"
      },
      "-=0.3"
    );
    
    // Second text line - elegant slide in from left
    tl.fromTo(
      line2Ref.current,
      { 
        xPercent: -100, 
        opacity: 0,
        scale: 0.9
      },
      { 
        xPercent: 0, 
        opacity: 1, 
        scale: 1,
        duration: 1.2, 
        ease: "power3.out"
      },
      "-=0.7"
    );
    
    // CTA button animation - fade up
    tl.fromTo(
      ctaButtonRef.current,
      { 
        y: 30, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out" 
      },
      "-=0.4"
    );
    
    // Scroll indicator animation - continuous loop
    tl.fromTo(
      scrollIndicatorRef.current,
      { 
        y: 0, 
        opacity: 0.3 
      },
      { 
        y: 10, 
        opacity: 1, 
        duration: 1.5, 
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      },
      "-=0.2"
    );
    
    return () => {
      // Cleanup animation
      tl.kill();
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden" ref={containerRef}>
      {/* Hero background with gradient overlay for depth */}
      <div className="absolute inset-0">
        <img 
          src="/img/lamp-dark-room-spotlight-black-background_159167-123.avif" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Text content container */}
      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        {/* Intro line */}
        <div className="overflow-hidden mb-6">
          <h1 
            ref={introRef} 
            className="text-xl md:text-2xl text-white/90 opacity-0 tracking-widest uppercase font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="border-b border-white/40 pb-1">Ishika Singh</span>
          </h1>
        </div>
        
        {/* First animated line - primary headline */}
        <div className="overflow-hidden mb-8">
          <h2 
            ref={line1Ref} 
            className="text-5xl md:text-7xl font-bold text-white opacity-0 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="font-bold">Crafting Digital Experiences</span>
          </h2>
        </div>
        
        {/* Second animated line - supporting text */}
        <div className="overflow-hidden mb-12">
          <h3 
            ref={line2Ref} 
            className="text-2xl md:text-3xl text-white/80 opacity-0 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Web Designer & Developer 
          </h3>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button
            ref={ctaButtonRef}
            className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-lg tracking-wider uppercase font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Subtle scroll indicator at bottom */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2 tracking-widest uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}