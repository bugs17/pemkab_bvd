"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { getListUcapan } from "../actions/get-list-ucapan";

export default function DialogUcapan() {
  const [imageUrls, setImageUrls] = useState([]);
  const pathname = usePathname();
  const backdropRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Ambil daftar ucapan
  useEffect(() => {
    const getListImageUrls = async () => {
      const { status, data } = await getListUcapan();
      if (status && data.length > 0) {
        setImageUrls(data);
      } else {
        // Tidak ada gambar? pastikan dialog disembunyikan
        setVisible(false);
      }
    };
    getListImageUrls();
  }, []);

  // Atur visible berdasarkan pathname
  useEffect(() => {
    if (pathname === "/" && imageUrls.length > 0) {
      setVisible(true);
    }
  }, [pathname, imageUrls]);

  // Auto slideshow
  useEffect(() => {
    if (visible) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [visible, imageUrls.length]);

  const closeDialog = () => {
    setVisible(false);
  };

  // ⛔ Letakkan return null di sini, setelah semua hook
  if (imageUrls.length === 0) {
    return null;
  }

  return (
    <div
      ref={backdropRef}
      onClick={(e) => {
        if (e.target === backdropRef.current) {
          closeDialog();
        }
      }}
      className={`fixed inset-0 z-[970] grid h-screen w-screen place-items-center
        bg-[rgba(0,0,0,0.5)] backdrop-blur-sm transition-opacity duration-300
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="relative m-4 p-4 w-full max-w-sm sm:w-2/5 sm:min-w-[40%] sm:max-w-[40%] rounded-lg bg-white shadow-sm">
        <div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-lg">
          {imageUrls.map((src, index) => (
            <img
              key={index}
              src={`/api/uploads/ucapan/${src.urlFile}`}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out 
                ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {imageUrls.map((_, index) => (
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
  );
}
