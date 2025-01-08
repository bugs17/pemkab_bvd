import React from 'react'
import ButtonAplikasiHero from './clientComponent/buttonAplikasiHero'
const Hero = () => {
    
  return (
    <div
  className="hero min-h-screen"
  style={{
    // backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    backgroundImage: `url(/img/kiheng4.webp)`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md flex justify-center flex-col items-center">
      <h1 className="mb-5 text-5xl font-bold whitespace-nowrap hover:text-green-500">NUB BAGEN NGGUP BAGENEP,</h1>
      <h1 className="mb-5 text-5xl font-bold whitespace-nowrap hover:text-green-500">NGGUP BAGENEP NUP BAGEN</h1>
      <p className="mb-5 hover:text-green-500">
        Selamat Datang di Website Resmi Pemerintah Kabupaten Boven Digoel.
      </p>
      <ButtonAplikasiHero />
    </div>
  </div>
</div>
  )
}

export default Hero