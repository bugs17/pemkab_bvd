import React from "react";
import NavMenu from "./clientComponent/navMenu";
import Image from "next/image";
import LogoBoven from "../asset/img/logo-boven.png";
import DropDownMobile from "./clientComponent/deopDOwnMobile";


const Navbar = () => {
  

  return (
    <div className="navbar bg-base-100 shadow-sm shadow-slate-400 sticky top-0 z-50">
      <div className="navbar-start">
        
        <DropDownMobile />

        <Image
          src={LogoBoven}
          alt="logo"
          className="w-28 h-8 cursor-pointer sm:w-40 sm:h-11"
        />
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>

      <div className="navbar-center hidden lg:flex">
        <NavMenu />
      </div>

      
    </div>
  );
};

export default Navbar;
