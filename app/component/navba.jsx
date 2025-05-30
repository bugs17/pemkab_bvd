"use client"
import React, { useEffect, useState } from "react";
import NavMenu from "./clientComponent/navMenu";
import Image from "next/image";
import LogoBoven from "../asset/img/logo-boven.png";
import DropDownMobile from "./clientComponent/deopDOwnMobile";
import { Facebook, FacebookIcon, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import Link from "next/link";
import { useAtom } from "jotai";
import { isNavMenuOpen } from "../lib/globalState";
import { getKotak } from "../actions/get-kontak";


const Navbar = () => {
  const [closeMenu, setCloseMenu] = useAtom(isNavMenuOpen)
  const [kontak, setKontak] = useState(null)

  useEffect(() => {
    const getDataKontak = async () => {
      const {status, data} = await getKotak()
      if (status) {
        setKontak(data)
      }
    }
    getDataKontak()
  }, [])

  

  return (
    <>
    {kontak !== null && (
      <div onMouseEnter={() => setCloseMenu("")} className="bg-red-500 w-full hidden lg:flex flex-row sticky h-10">
        <div className="h-full w-[25%] flex items-center justify-end pr-6">
          <Link href={`mailto:${kontak.email}`} target="_blank" className="flex items-center flex-row gap-2">
            <Mail size={18} className="text-white" />
            <span className="text-white font-mono text-xs">{kontak.email}</span>
          </Link>
        </div>

        <div className="h-full w-[50%] border-l border-r border-red-300 flex items-center justify-end">
          <div className="flex flex-row justify-end items-center gap-2 pr-6">
            <MapPin size={18} className="text-white" />
            <span className=" text-white ">{kontak.alamat}</span>
          </div>
        </div>

        <div className="h-full w-[25%] flex items-center flex-row pl-6 gap-6">
        <Link href={`${kontak.facebook}`} target="_blank">
          <FacebookIcon size={18} className="text-white hover:text-blue-400" />
        </Link>
        <Link href={`${kontak.twitter}`} target="_blank">
          <Twitter size={18} className="text-white hover:text-black" />
        </Link>
        <Link href={`${kontak.linkedIn}`} target="_blank">
          <Linkedin size={18} className="text-white hover:text-blue-600" />
        </Link>
        <Link href={`${kontak.instagram}`} target="_blank">
          <Instagram size={18} className="text-white hover:text-purple-800" />
        </Link>
        </div>
      </div>
    )}

    <div className="navbar bg-white shadow-sm shadow-slate-400 sticky top-0 z-50">
      <div className="navbar-start ">
        
        <DropDownMobile />

        <Image
          src={LogoBoven}
          alt="logo"
          className="w-28 h-8 cursor-pointer sm:w-40 sm:h-11"
        />
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>

      <div className="navbar-center hidden lg:flex ">
        <NavMenu />
      </div>

      
    </div>
    </>
  );
};

export default Navbar;
