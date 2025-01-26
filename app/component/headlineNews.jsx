import React from 'react'
import Link from 'next/link';
import ListHeadlineNews from './clientComponent/listHeadlineNews';




const HeadlineNews = () => {

  
  return (
    <div className="px-4 py-8 bg-white flex flex-col">
        <div className="divider divider-success">
          <span className="text-green-700">BERITA UTAMA</span>
        </div>
        <ListHeadlineNews />

        <div className="flex justify-center items-center py-10">
          <Link href={'/pages/berita'} className="btn btn-outline hover:text-slate-100 btn-success btn-sm">Lainnya</Link>
        </div>
      </div>
  )
}

export default HeadlineNews