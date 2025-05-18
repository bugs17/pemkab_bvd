"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function DialogUcapan() {
  const pathname = usePathname();
  const backdropRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setVisible(true);
    }
  }, [pathname]);

  const closeDialog = () => {
    setVisible(false);
  };

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
          <img className="w-full h-auto" src="/img/kiheng.png" alt="Kiheng" />
        </div>
      </div>
    </>
  );
}
