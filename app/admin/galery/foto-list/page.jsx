import { prisma } from "@/app/lib/db";
import React from "react";
import ButtonDeleteGalery from "@/app/component/clientComponent/buttonDeleteGalery";
import ButtonAddFoto from "@/app/component/clientComponent/buttonAddFoto";
import Link from "next/link";
import { currentUser } from '@clerk/nextjs/server'


const FotoList = async () => {

  const user = await currentUser()
  const role = user.publicMetadata?.role
  
  if (role !== "admin-induk") {
    return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
  }

  let datas;
  try {
    datas = await prisma.galery.findMany({
        where:{
            isFoto:true
        }
    });
  } catch (error) {}

  
  return (
    <div className="h-full">
      <>
        <div className="mb-4 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <div className="font-semibold ">Galety Foto</div>
            <ButtonAddFoto />
          </div>
        </div>
        <div className="h-full overflow-y-auto">
          <table className="table table-xs mb-10">
            <thead>
              <tr>
                <th></th>
                <th className="text-left">Judul</th>
                <th className="text-left">Foto</th>
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
                        <div
                          className="tooltip z-50"
                          data-tip={data.judul.toUpperCase()}
                        >
                          {data.judul.toUpperCase()}
                        </div>
                      </td>

                      <td className="text-center">
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <Link href={'/#galery'} target="_blank" className="mask mask-squircle h-12 w-12">
                              <img
                                src={`/api${data.urlFile}`}
                                alt={data.judul}
                              />
                            </Link>
                          </div>
                          <div>
                            <div className="text-sm opacity-50">
                            {new Date(data.createdAt).toLocaleDateString("id-ID", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" })}
                            </div>
                          </div>
                        </div>
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

export default FotoList;
