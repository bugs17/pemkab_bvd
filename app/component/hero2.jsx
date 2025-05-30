"use client"
import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { isNavMenuOpen } from "../lib/globalState";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getHero } from "../actions/get-hero";

const Hero2 = () => {
    const videoRef = useRef(null);
    const [videoHeight, setVideoHeight] = useState(0);
    const [heroFileName, setHeroFileName] = useState(null);
    const [curentOpen, setCurentOpen] = useAtom(isNavMenuOpen)
    const [videoLoaded, setVideoLoaded] = useState(false)

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

    useEffect(() => {
      const getHeroFromAction = async () => {
        const namaFile = await getHero()
        setHeroFileName(namaFile)
      }

      getHeroFromAction()
    }, [])

  if (heroFileName === null) {
    return <span className="lg:loading lg:loading-spinner text-success loading-xl"></span>
  }
    
  return (
    <div className="hidden sm:block relative w-full"  onMouseEnter={() => setCurentOpen('')}>
        <div
          className="hero min-h-screen "
          
        >
        {/* overlay */}
        <div className="hero-overlay absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,rgba(0,0,0,0.5)_40%,#ef4444_100%)]"></div>
        
          <div className="hero-content text-left  h-full w-full flex flex-col items-center gap-5">
            <div className="flex justify-center flex-col items-center">
              <h1 className="font-loritalic text-white text-4xl">Welcome to</h1>
              <h1 className="text-6xl  font-monsans font-extrabold text-white whitespace-pre-line leading-tight text-center">
                {`BOVENDIGOELKAB.GO.ID`}
              </h1>
              
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

        {/* Placeholder thumbnail */}
        {!videoLoaded && (
          <img
            src="/img/overlay.png" // Ganti dengan gambar thumbnail kamu
            alt="hero placeholder"
            className="absolute inset-0 -z-20 object-cover w-full h-full"
          />
        )}
        
          <video onCanPlay={() => setVideoLoaded(true)} ref={videoRef} playsInline autoPlay muted loop className="absolute inset-0 -z-20 object-cover w-full h-auto">
            <source src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/uploads/hero/${heroFileName}`} type="video/mp4" />
          </video>

      </div>
  );
};

export default Hero2;
