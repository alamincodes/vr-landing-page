import React from "react";
import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";
const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto mb-6">
        <h2
          className="mb-3 text-3xl font-bold"
          data-aos="fade-down"
          data-aos-offset="300"
        >
          Mixed Reality Headsets
        </h2>
        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-9">
          {/* items */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-offset="300"
          >
            <img src={Headset1} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-lg max-w-[300px] min-h-[150px] p-6">
              <h4 className="mb-2 text-xl font-semibold">Metaverse</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
          {/* items */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-offset="300"
          >
            <img src={Headset2} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-lg max-w-[300px] min-h-[150px] p-6">
              <h4 className="mb-2 text-xl font-semibold">AIoT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
          {/* items */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-offset="300"
          >
            <img src={Headset3} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-lg max-w-[300px] min-h-[150px] p-6">
              <h4 className="mb-2 text-xl font-semibold">HoloLens</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
          {/* items */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-delay="1100"
            data-aos-offset="300"
          >
            <img src={Headset4} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-lg max-w-[300px] min-h-[150px] p-6">
              <h4 className="mb-2 text-xl font-semibold">TPCASTT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
