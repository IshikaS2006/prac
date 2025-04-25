import React, { useState } from "react";
import { easeIn, motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-10">
      <div className="pb-20 w-full border-b-[5px] border-zinc-800 px-20">
        <h1 className="text-7xl tracking-tighter">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards flex w-full gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className=" cardconainer relative w-1/2 h-[75vh] "
          >
            <h1 className="leading-none absolute left-full top-1/2 -translate-x-[50%]  -translate-y-[50%] text-[#CDEA68] z-[9] text-8xl flex tracking-tight overflow-hidden uppercase">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card overflow-hidden w-full h-full rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                className="w-full h-full bg-cover"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className=" relative cardcontainer w-1/2 h-[75vh] "
          >
            <div className="card overflow-hidden w-full h-full rounded-xl">
              <h1 className="leading-none flex overflow-hidden absolute right-full top-1/2 translate-x-[50%]  -translate-y-[50%] text-[#CDEA68] z-[9] text-8xl tracking-tight uppercase">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg"
                className="w-full h-full bg-cover"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
