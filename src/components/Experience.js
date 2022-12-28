import React from "react";
import img1 from "../assets/img/exp-img1.png";
import img2 from "../assets/img/exp-img2.png";
const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          {/* images */}
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
            <div
              className="self-start"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <img src={img1} alt="" />
            </div>
            <div className="self-end" data-aos="fade-up" >
              <img src={img2} alt="" />
            </div>
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col items-start justify-center lg:mt-0 mt-6"
           data-aos="fade-left"
           data-aos-delay="700"
          >
            <h2 className="capitalize text-3xl font-bold mb-6">
              new experience in playing games
            </h2>
            <p className="font-secondary mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus quis velit cum illum consequuntur tempore labore
              commodi saepe dignissimos illo?
            </p>
            <button className="btn capitalize">get it now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
