import React from "react";
import { useState } from "react";

import { BsPlayCircleFill } from "react-icons/bs";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:justify-between">
          <h3
            className="text-2xl font-semibold mb-8 lg:mb-0"
            data-aos="fade-right"
            data-aos-offset="350"
          >
            {" "}
            Awesome experiences with virtual reality world
          </h3>

          {/* video */}
          <div
            className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"
            data-aos="fade-left"
            data-aos-offset="350"
          >
            <div onClick={() => setIsOpen(!isOpen)}>
              <BsPlayCircleFill className="text-4xl text-white/80 hover:text-white hover:scale-110 transition cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
