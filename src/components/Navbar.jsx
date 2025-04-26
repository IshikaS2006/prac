import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 w-full px-8 md:px-16 lg:px-20 ${
        scrolled ? "py-4" : "py-8"
      } flex justify-between items-center backdrop-blur-md ${
        scrolled ? "bg-black/90" : "bg-black/70"
      } transition-all duration-300 shadow-lg`}
    >
      <div className="logo">
        <h1 className="text-1xl md:text-2xl font-semibold tracking-wide uppercase bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          MYPORTFOLIO
        </h1>
      </div>

      <div className="hidden md:flex gap-6 lg:gap-10">
        {["Home", "Projects", "About Me", "Skills", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`relative text-sm lg:text-sm font-light hover:text-blue-400 transition-colors duration-300 ${
                index === 4
                  ? "ml-8 md:ml-16 lg:ml-32 bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-4 rounded-full hover:shadow-lg hover:from-blue-600 hover:to-purple-700 hover:text-white"
                  : "after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>

      <div className="md:hidden">
        <button className="p-2 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
