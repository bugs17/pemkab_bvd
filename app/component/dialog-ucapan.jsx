"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";


const images = [
  "/img/kiheng.png",
  "/img/kiheng2.webp",
  "/img/kiheng3.webp",
  "/img/kiheng4.webp",
];

export default function DialogUcapan() {
  const pathname = usePathname();
  const backdropRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  if (images.length <= 0) {
    return null
  }

  useEffect(() => {
    if (pathname === "/") {
      setVisible(true);
    }
  }, [pathname]);

  const closeDialog = () => {
    setVisible(false);
  };


  // Slideshow otomatis
  useEffect(() => {
    if (visible) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Ganti gambar setiap 3 detik
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [visible]);

  return (
    <>
      {/* Backdrop dan Dialog */}
      <div
        ref={backdropRef}
        onClick={(e) => {
          // Tutup dialog jika klik langsung pada backdrop (bukan anaknya)
          if (e.target === backdropRef.current) {
            closeDialog();
          }
        }}
        className={`fixed inset-0 z-[970] grid h-screen w-screen place-items-center
          bg-[rgba(0,0,0,0.5)] backdrop-blur-sm transition-opacity duration-300
          ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div
          className="relative m-4 p-4 w-full max-w-sm sm:w-2/5 sm:min-w-[40%] sm:max-w-[40%] rounded-lg bg-white shadow-sm"
        >


<div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-lg">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out 
                  ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>

          {/* Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}


          {/*  */}
