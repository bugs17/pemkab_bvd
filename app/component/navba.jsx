import React from 'react'
import NavMenu from './clientComponent/navMenu'
import Image from 'next/image'
import LogoBoven from "../asset/img/logo-boven.png"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm shadow-slate-400 sticky top-0 z-50">

        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                <a>Parent</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            </div>
            <Image src={LogoBoven} alt='logo' className="w-28 h-8 cursor-pointer sm:w-40 sm:h-11"   />
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
  )
}

export default Navbar