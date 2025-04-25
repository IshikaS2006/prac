import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full h-screen bg-zinc-900 pt-1 "
    >
      <div className="textstructure mt-40 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => (
          <div className="masker h-[6vw] ">
            <div className="w-fit flex items-enter ">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "7.9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-[.5vw] w-[9vw]  rounded-md bg-ambinline-flex items-center  h-auto -bottom-[12px] 
                pb-[15px] relative inline-block align-middle bg-amber-500 "
                ></motion.div>
              )}
              <h1 className="uppercase leading-[5vw] font-semibold text-[6.4vw]">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-42 flex justify-between items-center py-5 px-20">
        {[
          "for  public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-y-zinc-500 rounded-full font-light text-md uppercase">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-y-zinc-400 rounded-full ">
            <span className="rotate-[45deg]">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
