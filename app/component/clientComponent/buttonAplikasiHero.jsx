"use client"
import React from 'react'
import { IoIosApps } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa6";
import { HiPresentationChartLine } from "react-icons/hi";
import LogoLpse from "../../asset/img/lpse2.png"
import { BsDatabaseFillLock } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';

const ButtonAplikasiHero = () => {
  return (
    <>
        <button className="btn bg-red-500 border-red-500 text-white hover:bg-red-700 hover:border-red-700" onMouseEnter={()=>document.getElementById('my_modal_2').showModal()}>Aplikasi Pemerintah <IoIosApps /></button>
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box h-52  gap-5 flex flex-col justify-center items-center bg-slate-800 bg-opacity-80">
            <div className='flex flex-row gap-5'>
                <Link href={'https://www.ppid.bovendigoelkab.go.id/'} target='_blank' className='btn btn-lg text-white flex flex-row rounded-3xl border-cyan-500 bg-cyan-500 hover:bg-cyan-600'>
                    <FaNetworkWired size={32}/>
                    <span className='text-lg'>PPID</span>
                </Link>
                <Link href={'https://etpp.bovendigoelkab.go.id/login/login'} target='_blank' className='btn btn-lg text-white flex flex-row rounded-3xl border-yellow-500 bg-yellow-500 hover:bg-yellow-600'>
                    <HiPresentationChartLine size={32}/>
                    <span className='text-lg'>ETPP</span>
                </Link>
                <Link href={'https://lpse.bovendigoelkab.go.id/eproc4'} target='_blank' className='btn btn-lg text-white flex flex-row rounded-3xl border-slate-400 bg-slate-600'>
                    <Image src={LogoLpse} alt='logoLpse' height={40} width={40} />
                    <span className='text-lg'>LPSE</span>
                </Link>
            </div>
            <div className=''>
                
                <Link href={'https://data.bovendigoelkab.go.id/'} target='_blank' className='btn btn-lg text-white flex flex-row rounded-3xl border-yblue-600 bg-blue-600 hover:bg-blue-800'>
                    <BsDatabaseFillLock size={32}/>
                    <span className='text-lg'>SATU DATA</span>
                </Link>
            </div>

            
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
    </>
  )
}

export default ButtonAplikasiHero