import React from "react";
import ButtonAplikasiHero from "./clientComponent/buttonAplikasiHero";
import { FaNetworkWired } from "react-icons/fa6";
import { HiPresentationChartLine } from "react-icons/hi";
import LogoLpse from "../asset/img/lpse2.png"
import { BsDatabaseFillLock } from "react-icons/bs";
import Image from "next/image";

const Hero = () => {
  return (
    <div>

      <div className="hidden sm:block">
        <div
          className="hero min-h-screen"
          style={{
            // backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            backgroundImage: `url(/img/kiheng4.webp)`,
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md flex justify-center flex-col items-center">
              <h1 className="mb-5 text-5xl font-bold whitespace-nowrap hover:text-green-500">
                NUB BAGEN NGGUP BAGENEP,
              </h1>
              <h1 className="mb-5 text-5xl font-bold whitespace-nowrap hover:text-green-500">
                NGGUP BAGENEP NUP BAGEN
              </h1>
              <p className="mb-5 hover:text-green-500">
                Selamat Datang di Website Resmi Pemerintah Kabupaten Boven Digoel.
              </p>
              <ButtonAplikasiHero />
            </div>
          </div>
        </div>

      </div>

      <div className="block sm:hidden bg-white p-4">
        <div className="flex flex-row items-center overflow-x-scroll">
          <div className="flex flex-row gap-5">
            <button className="btn btn-lg text-white flex flex-row rounded-3xl border-cyan-500 bg-cyan-500 hover:bg-cyan-600">
              <FaNetworkWired size={32} />
              <span className="text-lg">PPID</span>
            </button>
            <button className="btn btn-lg text-white flex flex-row rounded-3xl border-yellow-500 bg-yellow-500 hover:bg-yellow-600">
              <HiPresentationChartLine size={32} />
              <span className="text-lg">ETPP</span>
            </button>
            <button className="btn btn-lg text-white flex flex-row rounded-3xl border-slate-400 bg-slate-600">
              <Image src={LogoLpse} alt="logoLpse" height={40} width={40} />
              <span className="text-lg">LPSE</span>
            </button>
            <button className="btn btn-lg text-white flex flex-row rounded-3xl border-yblue-600 bg-blue-600 hover:bg-blue-800">
              <BsDatabaseFillLock size={32} />
              <span className="text-lg">SATU DATA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
