"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

const NavMenu = () => {

    const pathName = usePathname()


  return (
    <ul className="menu menu-horizontal px-1 gap-2 z-50">
                <li><a className={`hover:bg-red-500 hover:text-white hover:rounded-lg ${pathName === '/' && 'bg-red-500 text-white'}`}>BERANDA</a></li>
                <li className="group hover:bg-red-500 hover:rounded-lg">
                    <details className="group-hover:text-inherit" >
                        <summary className="text-black group-hover:text-white">PROFIL</summary>
                        <ul className="p-2">
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Sejarah</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Visi & Misi</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Lambang Daerah</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Kondisi Geografis</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Demografi</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Peta</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Politik Hukum & Keamanan</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Kesejahteraan Sosial</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">RPJMD Kabupaten Boven Digoel 2021-2025</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">APBD Boven Digoel</a></li>
                        </ul>
                    </details>
                </li>
                <li className="group hover:bg-red-500 hover:rounded-lg">
                    <details className="group-hover:text-inherit">
                        <summary className="text-black group-hover:text-white">PEJABAT</summary>
                        <ul className="p-2">
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Bupati</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Wakil Bupati</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Sekertaris Daerah</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Asisten Bidang Administrasi Umum</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Asisten Bidang Pemerintahan & Kesejahteraan Rakyat</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Asisten Bidang Perekonomian & Pembangunan</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Staf Ahli 1</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Staf Ahli 2</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Staf Ahli 3</a></li>
                        </ul>
                    </details>
                </li>
                <li className="group hover:bg-red-500 hover:rounded-lg">
                    <details className="group-hover:text-inherit">
                        <summary className="text-black group-hover:text-white">SARANA & PRASARANA</summary>
                        <ul className="p-2">
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Transportasi</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Kesehatan</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Pendidikan</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Tempat Ibadah</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Pos, Telekomunikasi & Telemetika</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Industri & Perdagangan</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Energi</a></li>
                            
                        </ul>
                    </details>
                </li>
                <li className="group hover:bg-red-500 hover:rounded-lg">
                    <details className="group-hover:text-inherit">
                        <summary className="text-black group-hover:text-white">POTENSI DAERAH</summary>
                        <ul className="p-2">
                        
                            <li className=''>
                            <details className="group-hover:text-inherit">
                                <summary className="whitespace-nowrap">Statistik Sektoral</summary>
                                    <ul className="p-2">
                                        <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Buku Pedoman</a></li>
                                        <li>
                                            <details className="group-hover:text-inherit">
                                                <summary className="whitespace-nowrap">Regulasi</summary>
                                                <ul className="p-2">
                                                    <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Satu Data</a></li>
                                                    <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Statistik Sektoral Daerah</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">SK Wali Data</a></li>
                                        <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Publikasi</a></li>
                                        <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">SOP</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Pertanian</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Perkebunan</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Perikanan</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Peternakan</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Kehutanan</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Pariwisata & Kebudayaan</a></li>
                        </ul>
                    </details>
                </li>
                <li className="group hover:bg-red-500 hover:rounded-lg">
                    <details className="group-hover:text-inherit" >
                        <summary className="text-black group-hover:text-white">INTERAKTIF</summary>
                        <ul className="p-2">
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Buku Tamu</a></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">Kontak Kami</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
  )
}

export default NavMenu