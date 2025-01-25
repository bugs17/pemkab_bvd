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

      <div className="navbar-end gap-2">
        {/* <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 h-8 md:w-auto" />
            </div>
            <button className="btn btn-ghost btn-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </button> */}
      </div>
    </div>
  );
};

export default Navbar;
