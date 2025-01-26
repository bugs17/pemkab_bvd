import React from 'react'
import { FaCalendarDays } from "react-icons/fa6";
import Link from 'next/link';
import { prisma } from '../lib/db';
import { truncate } from '../lib/truncKalimat';




const HeadlineNews = async () => {

  let beritas = []
  try {
    beritas = await prisma.berita.findMany({
      where:{
        isDraft:false
      },
      orderBy:{
        createdAt:"desc"
      },
      take:6
    })
  } catch (error) {
    console.log(error.message)
  }
  
  return (
    <div className="px-4 py-8 bg-white flex flex-col">
        <div className="divider divider-success">
          <span className="text-green-700">BERITA UTAMA</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center md:flex-row">
        {beritas.length > 0 && (
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
        )}
          
        </div>

        <div className="flex justify-center items-center py-10">
          <Link href={'/pages/berita'} className="btn btn-outline hover:text-slate-100 btn-success btn-sm">Lainnya</Link>
        </div>
      </div>
  )
}

export default HeadlineNews