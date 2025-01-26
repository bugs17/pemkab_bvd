"use client"

import React, { useEffect, useState } from 'react'
import { FaCalendarDays } from "react-icons/fa6";
import { getHeadlineNews } from '@/app/actions/getHeadlineNews';
import { truncate } from '@/app/lib/truncKalimat';


const ListHeadlineNews = () => {
    const [beritas, setBeritas] = useState([])

    useEffect(() => {
        const fetchBeritas = async () => {
            const datas = await getHeadlineNews()
            setBeritas(datas)
        }
        fetchBeritas()
    }, [])


  return (
        <div className="flex flex-wrap gap-4 justify-center items-center md:flex-row">
        {beritas.length > 0 ? (
          beritas.map((berita, index) => (

          <div key={index} className="card md:w-1/4 bg-base-100 shadow-xl">
            <figure className="h-48 w-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={`/api${berita.coverUrl}`}
                alt={berita.judul} />
            </figure>
            <div className="card-body">
              <Link href={`/pages/detail-berita/${berita.slug}`} className="card-title cursor-pointer hover:text-red-500">
              {truncate(berita.judul, 50)}
              </Link>
              <div dangerouslySetInnerHTML={{__html: truncate(berita.isi, 100)}} />
              <div className="card-actions justify-start">
                  <div className="badge badge-neutral">
                    <FaCalendarDays className="mr-2" />
                    {new Date(berita.createdAt).toLocaleDateString('id-ID', {'weekday':'long', day: '2-digit', month: '2-digit', year: 'numeric'})}
                  </div>
              </div>
            </div>
          </div>
          ))
        ) : (<p>Memuat berita..</p>) }
          
        </div>
  )
}

export default ListHeadlineNews