import { prisma } from "@/app/lib/db";
import React from "react";
import ButtonDeleteGalery from "@/app/component/clientComponent/buttonDeleteGalery";
import Link from "next/link";
import ButtonAddVideo from "@/app/component/clientComponent/buttonAddVideoGalery";

const VideoList = async () => {
  let datas;
  try {
    datas = await prisma.galery.findMany({
        where:{
            isFoto:false
        }
    });
  } catch (error) {}

  
  return (
    <div className="h-full">
      <>
        <div className="mb-4 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <div className="font-semibold ">Galety Video</div>
            <ButtonAddVideo />
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
                {datas.length > 0 &&
                  datas.map((data, index) => (
                    <tr key={index}>
                      <th>-</th>
                      <td className="text-left">
                        <Link href={'/#galery'}
                        target="_blank"
                          className="tooltip z-50"
                          data-tip={data.judul.toUpperCase()}
                        >
                          {data.judul.toUpperCase()}
                        </Link>
                      </td>


                      <td className="text-right flex flex-row justify-end gap-2 pt-6 items-center">
                        
                        <ButtonDeleteGalery
                          id={data.id}
                          judul={data.judul}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            )}
          </table>
        </div>
      </>
    </div>
  );
};

export default VideoList;
