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
            <Link className={`${pathName === `/pages/instansi/${createSlug(instansi)}` ? 'bg-red-500 text-white' : ''}`} href={`/pages/instansi/${createSlug(instansi)}`}>Profil</Link>
        </li>

        <li>
            <details >
            <summary>LPPD</summary>
            <ul>
            {data.lppd.length > 0 && (
                data.lppd.map((item, index) => (
                <li><a>{item.tahunAnggaran}</a></li>
                ))
            )}
            </ul>
            </details>
        </li>

        {data?.kategoriInstansi?.nama !== 'lembaga teknis' && (
            <li>
            <details >
                <summary>DPA</summary>
                <ul>
                {data.dpa.length > 0 && (
                    data.dpa.map((item, index) => (
                    <li key={index}><a>{item.tahunAnggaran}</a></li>
                    ))
                )}
                </ul>
            </details>
            </li>
        )}

        <li>
            <details >
            <summary>RENSTRA</summary>
            <ul>
                {data.renstra.length > 0 && (
                data.renstra.map((item, index) => (
                    <li key={index} className='whitespace-nowrap'><a className='whitespace-nowrap w-full'>{item.periode}</a></li>
                ))
                )}
            </ul>
            </details>
        </li>

        <li>
            <details >
            <summary>LAKIP</summary>
            <ul>
                {data.lakip.length > 0 && (
                data.lakip.map((item, index) => (
                    <li key={index} className='whitespace-nowrap'><a className='whitespace-nowrap w-full'>{item.tahunAnggaran}</a></li>
                ))
                )}
            </ul>
            </details>
        </li>
    </>
  )
}

export default ListMenuInstansi