import React from "react";

import icon_google from "/images/logo-google.png";
import icon_ibm from "/images/logo-ibm.png";
import icon_micro from "/images/logo-microsoft.png";
import icon_hp from "/images/logo-hp.png";
import icon_victor from "/images/logo-vector-graphics.png";

const Parteners = () => {
  return (
    <section className="mt-32 gap-14 md:gap-8 lg:gap-14 flex flex-col  items-center md:flex-row  ">
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className=""
      >
        <img src={icon_google} className="max-w-full object-contain" alt="" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className=""
      >
        <img src={icon_ibm} className="max-w-full object-contain" alt="" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className=""
      >
        <img src={icon_micro} className="max-w-full object-contain" alt="" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className=""
      >
        <img src={icon_hp} className="max-w-full object-contain" alt="" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="md:w-[150px]"
      >
        <img src={icon_victor} className="max-w-full object-contain" alt="" />
      </div>
    </section>
  );
};

export default Parteners;
