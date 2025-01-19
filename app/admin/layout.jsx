import Image from "next/image";
import React from "react";
import LogoBoven from "../asset/img/logo-boven.png";
import LeftMenuAdmin from "../component/clientComponent/leftMenuAdmin";

const AdminLayout = ({ children }) => {
  return (
    <div className="h-screen w-full bg-base-300 overflow-hidden flex flex-row">
      <div className="w-[250px] h-screen border-r-[1px] border-slate-400">
        <div className="w-full h-[70px] border-b-[1px] border-slate-400 p-4">
          <Image alt="logo-boven" src={LogoBoven} height={150} width={150} />
        </div>
        <div className="flex-grow h-screen pb-20 overflow-y-auto">
            <LeftMenuAdmin />
        </div>
      </div>

      <div className="flex-1 bg-base-300 flex-col flex">
        <div className="w-full h-[70px]  border-slate-600 flex flex-row justify-end items-center px-10 shadow-sm">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex-1 p-8 h-0 overflow-hidden ">
            {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
