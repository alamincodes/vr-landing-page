import React from "react";
import TestimonialSlider from "./TestimonialSlider";
const Testimonial = () => {
  return (
    <section className="mb-64 lg:mb-48 ">
      <div className="container mx-auto">
        <div className="bg-purple-400/10 max-h-[400px] p-12 rounded-lg">
          <div className="text-center ">
            <h2
              className="mb-6 text-3xl font-bold"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-offset="300"
            >
              What our clients say
            </h2>
            <p
              className="max-w-[50ch] mx-auto mb-12 lg:mb-40 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="300"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              ipsum odio. Nostrum eaque voluptatibus, soluta tempora
              dignissimos.
            </p>
          </div>
          {/* slider */}
          <div data-aos="fade-up" data-aos-offset="300">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
