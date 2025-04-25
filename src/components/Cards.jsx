import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 items-center px-32 gap-5 flex">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004843] flex items-center justify-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            hrey
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[50vh] w-1/2 gap-5 flex">
        <div className="card rounded-xl w-1/2 h-full bg-[#192826] flex items-center relative   justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            hrey
          </button>
        </div>
        <div className="card rounded-xl w-1/2 h-full bg-[#192826] flex items-center relative justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            hrey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
