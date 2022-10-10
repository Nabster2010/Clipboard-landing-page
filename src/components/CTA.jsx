import React from "react";

const CTA = ({ header, text }) => {
  return (
    <section
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="mt-14 md:max-w-[550px]  gap-8 flex flex-col w-full "
    >
      <h1 className=" leading-10 font-semibold whitespace-pre-line text-3xl">
        {header}
      </h1>
      <p className="mt-4 text-GrayishBlue text-[16px] ">{text}</p>
      <div className="flex flex-col  md:flex-row gap-6 md:gap-4 md:justify-center">
        <button className="block hover:bg-opacity-80 text-white py-3 rounded-full tracking-wide transition shadow-btnCyan md:px-8 bg-StrongCyan w-full md:w-auto">
          Download for iOS
        </button>
        <button className="block hover:bg-opacity-80 text-white py-3 rounded-full tracking-wide transition shadow-btnBlue md:px-8 bg-LightBlue w-full md:w-auto ">
          Download for Mac
        </button>
      </div>
    </section>
  );
};

export default CTA;
