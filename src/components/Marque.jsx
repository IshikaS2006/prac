import React from "react";
import { motion } from "framer-motion";

const Marque = () => {
  motion;
  return (
    <div
      data-scroll
      data-scroll-speed=".3"
      data-scroll-section
      className="w-full bg-[#004D43] rounded-tr-3xl "
    >
      <div className="border-b-2 text border-t-2 border-zinc-300 flex whitespace-nowrap overflow-hidden ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[1vw] leading-none  uppercase "
        >
          this is ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[1vw] leading-none uppercase "
        >
          this is ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
