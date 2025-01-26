import { prisma } from "@/app/lib/db";
import { truncate } from "@/app/lib/truncKalimat";
import Link from "next/link";
import { FaCalendarDays } from "react-icons/fa6";
import { MdSimCardDownload } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";


const PagesBeritaLayout = async ({children}) => {

  const beritas = await prisma.berita.findMany({
    orderBy:{
      createdAt:"desc"
    },
    take:4,
    where:{
      isDraft:false
    }
  })

  const kategoris = await prisma.kategoriBerita.findMany({
    include:{
      berita:true
    }
  })

  const pengumumans = await prisma.pengumuman.findMany({
    orderBy:{
      id:"desc"
    }
  })
  
  const agendas = await prisma.kegiatan.findMany({
    orderBy:{
      id:"desc"
    }
  })
  
  const unduhans = await prisma.unduhan.findMany({
    orderBy:{
      id:"desc"
    }
  })


  return (
    <div className="flex flex-col md:flex-row gap-2 mb-7">
          <div className="md:w-[70%] w-full p-8">
            {children}
          </div>
    
          <div className="md:w-[30%] w-full pt-12 pr-4 ">
            <div className="shadow-md px-4 pb-4 rounded-md">
              <div className="divider divider-success">
                <span className="text-green-700">BERITA LAINNYA</span>
              </div>
              <div className="flex flex-col gap-3">
              {beritas.length > 0 ?
                beritas.map((berita, index) => (
                  <div key={index} className="flex flex-col gap-2 border-b border-dashed border-gray-500 pb-4 ">
                    <span className="flex flex-row items-center text-xs text-slate-400">
                      <FaCalendarDays className="mr-2" />
                      {new Date(berita.createdAt).toLocaleDateString('id-ID', {'weekday':'long', day: '2-digit', month: '2-digit', year: 'numeric'})}
                    </span>
                    <Link href={`/pages/detail-berita/${berita.slug}`} className="font-sans font-semibold text-xs hover:text-red-300 cursor-pointer">
                      {truncate(berita.judul, 70)}
                    </Link>
                  </div>
                )) 
                : 
                (
                  <span>Belum ada berita</span>
                )}
                
              </div>
            </div>
    
            <div className="shadow-md px-4 pb-4 rounded-md">
              <div className="divider divider-success">
                <span className="text-green-700">KATEGORI BERITA</span>
              </div>
              <div className="flex flex-col gap-3">
                {kategoris.length > 0 && (
                  kategoris.map((kategori, index) => (

                  <div key={index} className="flex flex-row justify-between items-center ">
                    <span className="flex flex-row gap-3 items-center">
                      <TbCategoryPlus className="text-slate-500" />
                      <span className="font-semibold hover:text-green-600 cursor-pointer">
                        {kategori.nama}
                      </span>
                    </span>
                    <div className="badge badge-success text-slate-200 hover:badge-ghost hover:text-green-600 cursor-pointer">
                      {kategori.berita.length}
                    </div>
                  </div>
                  ))
                )}

              </div>
            </div>
    
            <div className="shadow-md px-4 pb-4 rounded-md">
              <div className="divider divider-success">
                <span className="text-green-700">AGENDA</span>
              </div>
              {agendas.length > 0 ? (
              agendas.map((agenda, index) => (
                <div
                  key={index}
                  className="pb-2 border-b-[1px] border-dashed border-slate-700"
                >
                  <Link href={'/#agenda'} className="font-semibold text-xs">
                    {agenda.judul}
                  </Link>
                </div>
              ))
            ) : (
              <span className="font-mono text-xs text-slate-600">
                Belum ada agenda!
              </span>
            )}
            </div>
    
            <div className="shadow-md px-4 pb-4 rounded-md  mt-4">
              <div className="divider divider-success">
                <span className="text-green-700">PENGUMUMAN</span>
              </div>
              <div className="flex flex-col gap-3 overflow-y-scroll h-96">
              {pengumumans.length > 0 && (
                pengumumans.map((pengumuman, index) => (

                <div key={index}>
                  <span className="flex flex-row items-center text-xs text-slate-400">
                    <FaCalendarDays className="mr-2" />
                    {new Date(pengumuman.createdAt).toLocaleDateString('id-ID', {'weekday':'long', day: '2-digit', month: '2-digit', year: 'numeric'})}
                  </span>
                  <Link
                    href={`/pages/pengumuman/${pengumuman.slug}`}
                    className="text-xs font-mono text-green-700 cursor-pointer hover:text-green-900"
                  >
                    {truncate(pengumuman.judul.toUpperCase(), 40)}
                  </Link>
                </div>
                ))
              )}
                
              </div>
            </div>
    
            <div className="shadow-md px-4 pb-4 rounded-md">
              <div className="divider divider-success">
                <span className="text-green-700">UNDUHAN</span>
              </div>
              <div className="flex flex-col gap-3">
              {unduhans.length > 0 ? (
                unduhans.map((unduhan, index) => (

                <div key={index} className="py-2 px-4 rounded-md flex flex-row items-center gap-3 hover:shadow-md cursor-pointer hover:bg-violet-200">
                  <Link href={`/pages/unduhan/${unduhan.id}`} className="font-sans text-xs">
                    {unduhan.judul.toUpperCase()}
                  </Link>
                  <MdSimCardDownload size={32} className="text-violet-500" />
                </div>
                ))
              ):(
                <p>Belum ada unduhan!</p>
              )}
              </div>
            </div>
          </div>
        </div>
  )
}

export default PagesBeritaLayout