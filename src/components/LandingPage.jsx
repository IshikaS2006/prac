import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const containerRef = useRef(null);
  const introRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const ctaButtonRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const photoRef = useRef(null);
  const photoContainerRef = useRef(null);
  
  // Track if image has loaded successfully
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Create timeline for sequential animations
    const tl = gsap.timeline();

    // Photo container reveal first
    tl.fromTo(
      photoContainerRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    // Photo reveal with mask effect
    tl.fromTo(
      photoRef.current,
      {
        y: 20,
        opacity: 0,
        scale: 1.1,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // Intro line animation - fade in with a subtle slide up
    tl.fromTo(
      introRef.current,
      {
        y: -20,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.6"
    );

    // First text line - elegant slide in from right
    tl.fromTo(
      line1Ref.current,
      {
        xPercent: 100,
        opacity: 0,
        scale: 0.9,
      },
      {
        xPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.3"
    );

    // Second text line - elegant slide in from left
    tl.fromTo(
      line2Ref.current,
      {
        xPercent: -100,
        opacity: 0,
        scale: 0.9,
      },
      {
        xPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.7"
    );

    // CTA button animation - fade up
    tl.fromTo(
      ctaButtonRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Scroll indicator animation - continuous loop
    tl.fromTo(
      scrollIndicatorRef.current,
      {
        y: 0,
        opacity: 0.3,
      },
      {
        y: 10,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      },
      "-=0.2"
    );

    return () => {
      // Cleanup animation
      tl.kill();
    };
  }, []);

  // Handle image loading and errors
  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);

  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden"
      ref={containerRef}
    >
      {/* Hero background with gradient overlay for depth */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/69/dd/75/69dd75c8f8f9f95aa4721c5617e16960.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content container with photo and text */}
      <div className="relative z-10 px-6 max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        {/* Photo container with mask effect */}
        <div 
          ref={photoContainerRef} 
          className="opacity-0 relative w-48 md:w-64 h-48 md:h-64 overflow-hidden rounded-full border-2 border-white/20 shadow-lg"
        >
          {/* Photo with fallback */}
          <div ref={photoRef} className="opacity-0 w-full h-full">
            {imageError ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-800">
                <span className="text-white font-light text-lg">IS</span>
              </div>
            ) : (
              <img
                src="./img/WhatsApp Image 2025-04-27 at 01.18.58_3ffd3fb8.jpg"
                alt="Ishika Singh"
                className="w-full h-full object-cover object-center"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            )}
            {/* Subtle overlay for consistency with design */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Text content container */}
        <div className="text-center md:text-left">
          {/* Intro line */}
          <div className="overflow-hidden mb-6">
            <h1
              ref={introRef}
              className="text-sm md:text-md text-white/90 opacity-0 tracking-widest uppercase font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="border-b border-white/40 pb-1">Ishika Singh</span>
            </h1>
          </div>

          {/* First animated line - primary headline */}
          <div className="overflow-hidden mb-8">
            <h2
              ref={line1Ref}
              className="text-4xl md:text-4xl font-bold text-white opacity-0 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="font-bold">Crafting Digital Experiences</span>
            </h2>
          </div>

          {/* Second animated line - supporting text */}
          <div className="overflow-hidden mb-12">
            <h3
              ref={line2Ref}
              className="text-sm md:text-sm text-white/80 opacity-0 font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Web Designer & Developer
            </h3>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button
              ref={ctaButtonRef}
              className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-[10px] tracking-wider uppercase font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator at bottom */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span
            className="text-white/70 text-sm mb-2 tracking-widest uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
