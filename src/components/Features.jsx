import React from "react";
import icon_preview from "/images/icon-preview.svg";
import icon_blackList from "/images/icon-blacklist.svg";
import icon_text from "/images/icon-text.svg";
const Features = () => {
  return (
    <section className="mt-20  flex gap-12  md:gap-8 flex-col items-center md:flex-row md:justify-between md:items-start md:px-12 lg:px-26">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col  items-center md:flex-1 "
      >
        <img src={icon_blackList} alt="" />
        <h1 className="mt-8 text-2xl font-semibold">Create blacklists</h1>
        <p className="mt-4 text-GrayishBlue text-[16px] t">
          Ensure sensitive information never makes its way to your clipboard by
          excluding certain sources.
        </p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col  items-center md:flex-1"
      >
        <img src={icon_text} alt="" />
        <h1 className="mt-8 text-2xl font-semibold">Plain text snippets</h1>
        <p className="mt-4 text-GrayishBlue text-[16px] t">
          Remove unwanted formatting from copied text for a consistent look.
        </p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col  items-center md:flex-1"
      >
        <img src={icon_preview} alt="" />
        <h1 className="mt-8 text-2xl font-semibold">Sneak preview</h1>
        <p className="mt-4 text-GrayishBlue text-[16px] t">
          Quick preview of all snippets on your Clipboard for easy access.
        </p>
      </div>
    </section>
  );
};

export default Features;
