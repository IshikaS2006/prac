import React from "react";
import { motion } from "framer-motion";

const Marque = () => {
  motion;
  return (
    <div
      data-scroll
      data-scroll-speed=".3"
      data-scroll-section
      className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl pt-20 pb-20"
    >
      <div className="border-b-2 text border-t-2 border-zinc-300 flex whitespace-nowrap gap-20 overflow-hidden ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[17vw] leading-none pt-8 -mb-1 uppercase pb-8 pr-18"
        >
          this is ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[17vw] leading-none pt-8 -mb-1 uppercase pb-8 pr-18"
        >
          this is ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
