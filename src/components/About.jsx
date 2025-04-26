import React from "react";

const About = () => {
  return (
    <div className="w-full bg-zinc-900 rounded-tl-3xl rounded-tr-3xl p-6 md:p-20">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl md:text-5xl text-white uppercase tracking-wider font-light">
          About Me
        </h1>
        <div className="h-px bg-amber-50/30 flex-grow ml-4"></div>
      </div>
      
      <div className="w-full border-t-[1px] border-zinc-700 p-4 md:p-10 mt-10 md:mt-20 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/3">
          <div className="relative">
            <span className="text-6xl text-amber-50/10 absolute -top-10 -left-6">"</span>
            <p className="text-xl md:text-2xl lg:text-3xl text-zinc-100 leading-relaxed font-light">
              Hi, I'm <span className="text-amber-50 font-normal">Ishika</span>. A curiosity-driven problem solver passionate about innovation and lifelong learning.
            </p>
            
            <div className="mt-6 text-lg text-zinc-300 leading-loose">
              <p className="mb-4">
                I began my journey with HTML and CSS, then moved into the world of JavaScript and Front-End Development.
                Now, I'm expanding my skill set by exploring modern frameworks like React, Vue.js, and Three.js to build 
                dynamic, user-centric applications.
              </p>
              
              <p>
                At the same time, I'm diving into backend development to become a well-rounded 
                Full Stack Developer. For me, coding isn't just a job; it's a journey of growth, creativity, and constant exploration. 
                Each line of code is an opportunity to learn, adapt, and make a meaningful impact through technology.
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300">React</div>
            <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300">JavaScript</div>
            <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300">Three.js</div>
            <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300">Vue.js</div>
            <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300">Node.js</div>
            <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300">HTML/CSS</div>
          </div>
          
          <button className="flex uppercase items-center gap-4 px-8 py-4 mt-10 rounded-full text-amber-50 border-amber-50/60 border-2 transition-all duration-300 ease-in-out hover:bg-amber-50 hover:text-zinc-900 group">
            <span>Read More</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        
        <div className="w-full md:w-1/3 h-[40vh] md:h-[50vh] rounded-3xl bg-zinc-800 ml-auto overflow-hidden relative shadow-2xl group">
          {/* Image container with overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
          
          <img
            src="img/IMG-20240211-WA0104.jpg"
            alt="Ishika Sharma"
            className="w-full h-full object-cover rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
          
          {/* Photo credit tag */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white/70">
            Madhya Pradesh, 2025
          </div>
        </div>
      </div>
      
      {/* Experience and Education Section */}
      <div className="mt-16 border-t-[1px] border-zinc-800 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-xl text-amber-50/80 mb-6 uppercase tracking-wide font-light">Experience</h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-zinc-700">
                <span className="absolute w-3 h-3 bg-amber-50 rounded-full -left-[7px] top-1"></span>
                <h4 className="text-zinc-100 text-lg">Frontend Developer</h4>
                <p className="text-zinc-400 text-sm mb-2">NIIT University Teach Lead • 2025 - Present</p>
                
              </div>
              
              <div className="relative pl-6 border-l border-zinc-700">
                <span className="absolute w-3 h-3 bg-amber-50 rounded-full -left-[7px] top-1"></span>
                <h4 className="text-zinc-100 text-lg">Web Design </h4>
                <p className="text-zinc-400 text-sm mb-2">NWS Tech Head • 2021 - 2022</p>
                <p className="text-zinc-300 text-base">Created UI designs and implemented frontend solutions.</p>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-xl text-amber-50/80 mb-6 uppercase tracking-wide font-light">Education</h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-zinc-700">
                <span className="absolute w-3 h-3 bg-amber-50 rounded-full -left-[7px] top-1"></span>
                <h4 className="text-zinc-100 text-lg">Bachelor in Computer Science</h4>
                <p className="text-zinc-400 text-sm mb-2">NIIT University • 2024 - 2028</p>
              </div>
              
              <div className="relative pl-6 border-l border-zinc-700">
                <span className="absolute w-3 h-3 bg-amber-50 rounded-full -left-[7px] top-1"></span>
                <h4 className="text-zinc-100 text-lg">Frontend Development Certification</h4>
                <p className="text-zinc-400 text-sm mb-2">KG Coding • 2024</p>
                <p className="text-zinc-300 text-base">Advanced JavaScript and Frontend frameworks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;