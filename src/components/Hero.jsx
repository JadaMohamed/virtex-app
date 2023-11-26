import React from "react";
import logo from "../visuals/virtex-logo.svg";

function Hero() {
  return (
    <div className="hero justify-center flex">
      <div className="md:py-24 py-14 md:px-20 px-5 h-full w-full pt-[160px] max-w-7xl m-a ">
        <img className="h-6 mb-20" src={logo} alt="Virtex" />
        <h1 className="text-[#EEF5FF] text-6xl font-bold">
          Découvrir <br /> Virtex.
        </h1>
        <p className="text-lg text-[#b7cae5] font-light max-w-[480px] leading-6 mt-8 mb-12">
          l'éducation et les réunions atteignent de nouveaux sommets dans le
          metaverse. L'apprentissage devient une aventure, les réunions
          deviennent mémorables. Bienvenue dans le futur, bienvenue chez VIRTEX.
        </p>
        <a
          href="www.google.com"
          className="py-3 px-5 bg-[#CE7AF6] rounded-full leading-none font-semibold text-[000034]"
        >
          Commencer
        </a>
      </div>
    </div>
  );
}

export default Hero;
