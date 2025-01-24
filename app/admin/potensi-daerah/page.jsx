import ButtonEditPotensiDaerah from '@/app/component/clientComponent/buttonEditPotensiDaerah';
import { prisma } from '@/app/lib/db';
import Link from 'next/link';
import React from 'react'
import { FaEye } from "react-icons/fa";


const PotensiDaerah = async () => {
  
    let datas;
    try {
        datas = await prisma.potensiDaerah.findMany()
        
    } catch (error) {
    }


  return (
    <div className="h-full">
        <>
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <div className="font-semibold ">
            Potensi Daerah
          </div>
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        <table className="table table-xs mb-10">
          <thead>
            <tr>
              <th></th>
              <th className="text-left">Judul</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          {datas && (

            <tbody className="">
                {datas.length > 0 && (
                    datas.map((data, index) => (

                <tr key={index}>
                    <th>-</th>
                    <td className="text-left">
                    <div className="tooltip z-50" data-tip={data.judul.toUpperCase()}>
                        {data.judul.toUpperCase()}
                    </div>
                    </td>
                    
                    

                    <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                    <div
                        className="tooltip z-50"
                        data-tip={`Lihat ${data.judul}`}
                    >
                        <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`${data.urlFrontEnd}`}
                        passHref
                        >
                        <FaEye
                            size={20}
                            className="text-orange-500 cursor-pointer"
                        />
                        </Link>
                    </div>
                    <ButtonEditPotensiDaerah id={data.id} judul={data.judul} />
                    </td>
                </tr>
                ))
                )}
            </tbody>
          )}
        </table>
      </div>

      
    </>
    </div>
  );
};

export default PotensiDaerah