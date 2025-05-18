"use client"
import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { isNavMenuOpen } from "../lib/globalState";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero2 = () => {
    const videoRef = useRef(null);
    const [videoHeight, setVideoHeight] = useState(0);
    const [curentOpen, setCurentOpen] = useAtom(isNavMenuOpen)

    useEffect(() => {
        const updateHeight = () => {
        if (videoRef.current) {
            setVideoHeight(videoRef.current.offsetHeight);
        }
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);
    
  return (
    <div className="hidden sm:block relative w-full" style={{ height: videoHeight }} onMouseEnter={() => setCurentOpen('')}>
        <div
          className="hero min-h-screen "
          
        >
        {/* overlay */}
        <div className="hero-overlay absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,rgba(0,0,0,0.5)_40%,#ef4444_100%)]"></div>
        {/* <div class="hero-overlay absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,rgba(0,0,0,0.5)_40%,#63e_100%)]"></div> */}
          {/* <div className="hero-overlay bg-blue-900 bg-opacity-60" style={{ height: videoHeight }}></div> */}
          <div className="hero-content text-left  h-full w-full flex flex-col items-center gap-5">
            <div className="flex justify-center flex-col items-center">
              <h1 className="font-loritalic text-white text-4xl">Welcome to</h1>
              <h1 className="text-6xl  font-monsans font-extrabold text-white whitespace-pre-line leading-tight text-center">
                {`BOVENDIGOELKAB.GO.ID`}
              </h1>
              {/* <h1 className="text-6xl font-extrabold text-white whitespace-pre-line leading-tight text-center">
                {`NUB BAGEN NGGUP BAGENEP\nNGGUP BAGENEP NUP BAGEN`}
              </h1> */}
              {/* <h1 className="mb-5 text-5xl  py-3 font-bold whitespace-nowrap text-green-500">
                NGGUP BAGENEP NUP BAGEN
              </h1>
              <p className="mb-5 text-white">
                Selamat Datang di Website Resmi Pemerintah Kabupaten Boven Digoel.
              </p> */}
            </div>
            <img draggable={false} className="h-52 w-52" src="/logo-boven.png" />
            <Link href={'/pages/berita'} className="max-w-[30%] py-1 flex flex-row items-center px-3 bg-black border border-white cursor-pointer rounded-full">
              <span className="font-mono text-sm text-white">Berita terbaru ⚡️</span>
              
              <span className="flex flex-row items-center gap-1 pl-2">
                <span className="font-semibold text-sm text-white">Lihat </span>
                <ArrowRight size={12} className="text-white"/>
              </span>

            </Link>
                
          </div>
        </div>
        <video ref={videoRef} playsInline autoPlay muted loop className="absolute inset-0 -z-20 object-cover w-full h-auto">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

      </div>
  );
};

export default Hero2;
