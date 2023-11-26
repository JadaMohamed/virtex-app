import React from "react";
import logo from "../visuals/virtex-logo.svg";

const NavBar = () => {
  return (
    <div className="fixed top-0 flex w-screen justify-center">
      <div className="py-8 md:px-20 px-5 max-w-7xl m-a w-full">
        <img className="h-6" src={logo} alt="Virtex" />
      </div>
    </div>
  );
};

export default NavBar;
