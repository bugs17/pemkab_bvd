"use client"
import React, { useEffect, useRef, useState } from "react";

const Hero2 = () => {
    const videoRef = useRef(null);
    const [videoHeight, setVideoHeight] = useState(0);

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
    <div className="hidden sm:block relative w-full" style={{ height: videoHeight }}>
        <div
          className="hero min-h-screen "
          
        >
        {/* overlay */}
          <div className="hero-overlay bg-opacity-20" style={{ height: videoHeight }}></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md flex justify-center flex-col items-center">
              <h1 className="mb-5 text-5xl text-green-500 font-bold whitespace-nowrap ">
                NUB BAGEN NGGUP BAGENEP,
              </h1>
              <h1 className="mb-5 text-5xl font-bold whitespace-nowrap text-green-500">
                NGGUP BAGENEP NUP BAGEN
              </h1>
              <p className="mb-5 text-white">
                Selamat Datang di Website Resmi Pemerintah Kabupaten Boven Digoel.
              </p>
            </div>
          </div>
        </div>
        <video ref={videoRef} playsInline autoPlay muted loop className="absolute inset-0 -z-20 object-cover w-full h-auto">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

      </div>
  );
};

export default Hero2;
