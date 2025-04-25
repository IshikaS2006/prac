import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl p-20">
      <h1 className="text-[3.5vw] leading-[3.5vw] text-black ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, utility with a breakpoint variant sell to the
        end of the cross axis.
      </h1>
      <div className="w-full border-t-[1px] border-[#000] p-10 mt-20 flex gap-5">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex uppercase items-center gap-10 px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] "></div>
      </div>
    </div>
  );
};

export default About;
