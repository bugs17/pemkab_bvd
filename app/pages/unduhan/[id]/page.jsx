import { prisma } from "@/app/lib/db";
import React from "react";
import { FaDownload } from "react-icons/fa6";

export const revalidate = 0;

const page = async ({ params }) => {
  const {id} = await params

  let unduhan;
  try {
    unduhan = await prisma.unduhan.findFirst({
      where:{
        id:parseInt(id)
      }
    })
  } catch (error) {
    console.log("error get unduhan di fronend")
  }

  return (
    <>
      {unduhan ? (
        <div className="flex flex-col gap-3">
          <h2>Unduhan</h2>
          <div className="flex flex-row ">
            <div className="border border-slate-700 w-[20%] p-5">
              <span className="font-semibold text-slate-600 text-xs">
                Nama File
              </span>
            </div>
            <div className="border border-slate-700 border-l-0 w-[80%] p-5 text-end">
              <span className="font-semibold text-slate-600 text-xs">
              {unduhan && unduhan.judul.toUpperCase()}
              </span>
            </div>
          </div>
  
          {unduhan && (
  
          <a href={unduhan.urlFile} download={unduhan.judul} className="btn">
            <FaDownload />
            Download
          </a>
          )}
        </div>
  
      ) : (
        <p>Data yang anda cari tidak di temukan</p>
      )}

    </>
  );
};

export default page;
