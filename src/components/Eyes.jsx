import React, { useEffect, useRef } from "react";
import { useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
      >
        <div className=" absolute flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10">
          <div className="bg-zinc-100 flex items-center justify-center w-[15vw] h-[15vw] rounded-full">
            <div className="bg-zinc-900 w-2/3 h-2/3 relative rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full top-1/2 left-1/2  h-10 "
              >
                <div className="bg-zinc-100 w-10 h-10 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-100 flex items-center justify-center w-[15vw] h-[15vw] rounded-full">
            <div className="bg-zinc-900 w-2/3 h-2/3 relative rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full top-1/2 left-1/2  h-10 "
              >
                <div className="bg-zinc-100 w-10 h-10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
