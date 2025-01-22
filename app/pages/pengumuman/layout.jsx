import { prisma } from "@/app/lib/db";
import { truncate } from "@/app/lib/truncKalimat";
import Link from "next/link";
import { FaCalendarDays } from "react-icons/fa6";
import { MdSimCardDownload } from "react-icons/md";


const PagesPengumumanLayout = async ({children}) => {

  let pengumumans;
  let unduhans;
  let agendas;
  try {
    pengumumans = await prisma.pengumuman.findMany({
      orderBy:{
        createdAt:"desc"
      }
    })

    unduhans = await prisma.unduhan.findMany({
      orderBy:{
        createdAt:"desc"
      }
    })
    
    agendas = await prisma.kegiatan.findMany({
      orderBy:{
        createdAt:"desc"
      }
    })
    
  } catch (error) {
    
  }

  return (
    <div className="flex flex-col md:flex-row gap-2 mb-7">
          <div className="md:w-[70%] w-full p-8">
            {children}
          </div>
    
          <div className="md:w-[30%] w-full pt-12 pr-4 ">
            
    
            <div className="shadow-md px-4 pb-4 rounded-md  mt-4">
              <div className="divider divider-success">
                <span className="text-green-700">PENGUMUMAN LAINNYA</span>
              </div>
              <div className="flex flex-col gap-3 overflow-y-scroll max-h-96">
              {pengumumans.length > 0 ? (
                pengumumans.map((pengumuman, index) => (

                  <div key={index}>
                    <span className="flex flex-row items-center text-xs text-slate-400">
                      <FaCalendarDays className="mr-2" />
                      {new Date(pengumuman.createdAt).toLocaleDateString('id-ID', {'weekday':'long', day: '2-digit', month: '2-digit', year: 'numeric'})}
                    </span>
                    <Link href={`/pages/pengumuman/${pengumuman.slug}`} className="text-xs font-mono text-green-700 cursor-pointer hover:text-green-900">
                      {pengumuman.judul.toUpperCase()}
                    </Link>
                  </div>
                ))

              ) : (
                <p>Belum ada pengumuman...</p>
              ) }
                
              </div>
            </div>
    
            <div className="shadow-md px-4 pb-4 max-h-60 overflow-y-scroll rounded-md">
              <div className="divider divider-success">
                <span className="text-green-700">UNDUHAN</span>
              </div>
              <div className="flex flex-col gap-3">
              {unduhans.length > 0 ? (
                unduhans.map((unduhan, index) => (
                  <Link href={`/pages/unduhan/${unduhan.id}`} className="py-2 justify-between px-4 rounded-md flex flex-row items-center gap-3 hover:shadow-md cursor-pointer hover:bg-violet-200">
                    <span className="font-sans text-xs">
                      {truncate(unduhan.judul.toUpperCase(), 40)}
                    </span>
                    <MdSimCardDownload size={32} className="text-violet-500" />
                  </Link>

                ))
              ):(
                <p>Belum ada unduhan!</p>
              )}
              </div>
            </div>


            <div className="shadow-md px-4 pb-4 rounded-md max-h-48 overflow-y-scroll">
          <div className="divider divider-success">
            <span className="text-green-700">AGENDA KEGIATAN</span>
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
          </div>
        </div>
  )
}

export default PagesPengumumanLayout