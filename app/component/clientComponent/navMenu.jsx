"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavMenu = () => {

    const pathName = usePathname()


  return (
    <ul className="menu menu-horizontal px-1 gap-2 z-50">
                <li><Link href={'/'} className={`hover:bg-red-500 hover:text-white hover:rounded-lg ${pathName === '/' && 'bg-red-500 text-white'}`}>BERANDA</Link></li>
                <li className="group hover:bg-red-500 hover:rounded-lg ">
                    <details className="group-hover:text-inherit " >
                        <summary className={`text-black group-hover:text-white ${(pathName === '/sejarah' || pathName === '/visi-misi' || pathName === '/lambang-daerah' || pathName === '/kondisi-geografis' || pathName === '/demografi' || pathName === '/peta' || pathName === '/politik-hukum-dan-keamanan' || pathName === '/kesejahteraan-sosial' || pathName === '/apbd') && 'bg-red-500 text-white'}`}>PROFIL</summary>
                        <ul className="p-2">
                            <li><Link href={'/sejarah'} className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${pathName === '/sejarah' && 'bg-red-500 text-white'}`}>Sejarah</Link></li>
                            <li><Link href={'/visi-misi'} className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${pathName === '/visi-misi' && 'bg-red-500 text-white'}`}>Visi & Misi</Link></li>
                            <li><Link href={'/lambang-daerah'} className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${pathName === '/lambang-daerah' && 'bg-red-500 text-white'}`}>Lambang Daerah</Link></li>
                            <li><Link href={'/kondisi-geografis'} className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${pathName === '/kondisi-geografis' && 'bg-red-500 text-white'}`}>Kondisi Geografis</Link></li>
                            <li><Link href={'/demografi'} className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${pathName === '/demografi' && 'bg-red-500 text-white'}`}>Demografi</Link></li>
                            <li><Link href={'/peta'} className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${pathName === '/peta' && 'bg-red-500 text-white'}`}>Peta</Link></li>
                            <li><Link href={'/politik-hukum-dan-keamanan'} className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${pathName === '/politik-hukum-dan-keamanan' && 'bg-red-500 text-white'}`}>Politik Hukum & Keamanan</Link></li>
                            <li><Link href={'/kesejahteraan-sosial'} className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${pathName === '/kesejahteraan-sosial' && 'bg-red-500 text-white'}`}>Kesejahteraan Sosial</Link></li>
                            <li><a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">RPJMD Kabupaten Boven Digoel 2021-2025</a></li>
                            <li><Link href={'/apbd'} className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${pathName === '/apbd' && 'bg-red-500 text-white'}`}>APBD Boven Digoel</Link></li>
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