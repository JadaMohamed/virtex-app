import React from "react";
import logo from "../visuals/virtex-logo.svg";

function Hero() {
  return (
    <div className="hero justify-center flex">
      <div className="md:py-24 py-14 md:px-20 px-3 h-full w-full pt-[160px] max-w-7xl m-a ">
        <img className="h-6 mb-20" src={logo} alt="Virtex" />
        <h1 className="text-[#EEF5FF] text-6xl font-bold">
          Discover <br /> Virtex.
        </h1>
        <p className="text-lg text-[#b7cae5] font-light max-w-[480px] leading-6 mt-8 mb-12">
          Education and meetings reach new heights in the metaverse. Learning
          becomes an adventure, meetings become memorable. Welcome to the
          future, welcome to VIRTEX.
        </p>
        <a
          href="www.google.com"
          className="py-3 px-5 bg-[#CE7AF6] rounded-full leading-none font-semibold text-[000034]"
        >
          GET STARTED
        </a>
      </div>
    </div>
  );
}

export default Hero;
