"use client";

import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // 3 detik

    return () => clearTimeout(timer);
  }, []);


  if (!visible) return null;

  return (
    <div className="h-screen w-screen top-0 left-0 right-0 bottom-0 fixed  overflow-hidden py-20 z-[980] bg-slate-100 bg-[linear-gradient(to_right,#fca5a50a_1px,transparent_4px),linear-gradient(to_bottom,#fca5a50a_1px,transparent_4px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-red-200 opacity-20 blur-[100px]"></div>
      <div className="absolute w-full inset-0 flex items-center justify-center">
        {/* Gambar profil */}
        <div
          className="absolute animate-ripple rounded-full z-20 bg-cover bg-no-repeat bg-center 
          bg-[url('/icon.png')] 
          outline outline-offset-2 outline-red-300
          shadow-xl border border-solid w-[20px] h-[20px] 
          top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 scale-100"
        ></div>

        {/* Ripple layers */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            key={i}
            className="absolute animate-ripple rounded-full bg-red-400 shadow-xl border border-solid 
            top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 scale-100"
            style={{
              width: `${20 + 20 * i}px`,
              height: `${20 + 20 * i}px`,
              opacity: 1 - i * 0.05,
              animationDelay: `${0.05 * i}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;

