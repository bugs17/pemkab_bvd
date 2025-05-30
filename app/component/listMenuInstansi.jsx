"use client";

import Link from 'next/link';
import React from 'react'
import { createSlug } from '../lib/slugify';
import { usePathname } from 'next/navigation';

const ListMenuInstansi = ({data, instansi}) => {

    const pathName = usePathname()

  return (
    <>
        <li className=''>
            <Link className={`px-2 py-1 lg:px-4 lg:py-2 ${pathName === `/pages/instansi/${createSlug(instansi)}` ? 'bg-red-500 text-white' : ''}`} href={`/pages/instansi/${createSlug(instansi)}`}>Profil</Link>
        </li>

        <li>
            <details >
            <summary className={`px-2 py-1 lg:px-4 lg:py-2 ${pathName.includes(`/${createSlug(instansi)}/lppd`)  && 'bg-red-500 text-white'}`}>LPPD</summary>
            <ul>
            {data.lppd.length > 0 && (
                data.lppd.map((item, index) => (
                <li  key={index} className='px-2 py-1 lg:px-4 lg:py-2'>
                    <Link className='px-2 py-1 lg:px-4 lg:py-2' href={`/pages/instansi/${createSlug(instansi)}/lppd/${item.tahunAnggaran}`}>{item.tahunAnggaran}</Link>
                </li>
                ))
            )}
            </ul>
            </details>
        </li>

        {data?.kategoriInstansi?.nama !== 'lembaga teknis' && (
            <li>
            <details >
                <summary className={`px-2 py-1 lg:px-4 lg:py-2 ${pathName.includes(`/${createSlug(instansi)}/dpa`)  && 'bg-red-500 text-white'}`}>DPA</summary>
                <ul>
                {data.dpa.length > 0 && (
                    data.dpa.map((item, index) => (
                    <li key={index} className='px-2 py-1 lg:px-4 lg:py-2'>
                        <Link className='px-2 py-1 lg:px-4 lg:py-2' href={`/pages/instansi/${createSlug(instansi)}/dpa/${item.tahunAnggaran}`}>{item.tahunAnggaran}</Link>
                    </li>
                    ))
                )}
                </ul>
            </details>
            </li>
        )}

        <li>
            <details >
            <summary className={`px-2 py-1 lg:px-4 lg:py-2 ${pathName.includes(`/${createSlug(instansi)}/renstra`)  && 'bg-red-500 text-white'}`}>RENSTRA</summary>
            <ul>
                {data.renstra.length > 0 && (
                data.renstra.map((item, index) => (
                    <li key={index} className='px-2 py-1 lg:px-4 lg:py-2 whitespace-nowrap'>
                        <Link className='px-2 py-1 lg:px-4 lg:py-2' href={`/pages/instansi/${createSlug(instansi)}/renstra/${item.periode}`}>{item.periode}</Link>
                    </li>
                ))
                )}
            </ul>
            </details>
        </li>

        <li>
            <details >
            <summary className={`px-2 py-1 lg:px-4 lg:py-2 ${pathName.includes(`/${createSlug(instansi)}/lakip`)  && 'bg-red-500 text-white'}`}>LAKIP</summary>
            <ul>
                {data.lakip.length > 0 && (
                data.lakip.map((item, index) => (
                    <li key={index} className='whitespace-nowrap px-2 py-1 lg:px-4 lg:py-2'>
                        <Link href={`/pages/instansi/${createSlug(instansi)}/lakip/${item.tahunAnggaran}`} className='whitespace-nowrap w-full'>{item.tahunAnggaran}</Link>
                    </li>
                ))
                )}
            </ul>
            </details>
        </li>
    </>
  )
}

export default ListMenuInstansi