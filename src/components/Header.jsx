import React from "react";
import logo from "/images/logo.svg";

const Header = () => {
  return (
    <header
      data-aos="flip-left"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="mt-32 flex flex-col items-center"
    >
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
