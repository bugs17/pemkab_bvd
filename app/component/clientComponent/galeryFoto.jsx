import { prisma } from "@/app/lib/db";
import React from "react";

const GaleryFoto = async () => {
  let datas;
  try {
    datas = await prisma.galery.findMany({
        where:{
            isFoto:true
        }
    });
    console.log(datas)
  } catch (error) {}
  return (
    <div className="carousel carousel-center bg-slate-100 rounded-box max-w-full space-x-4 p-4 shadow-md">
      {datas.length > 0 && (
        datas.map((data, index) => (
        <div key={index} className="carousel-item">
          <img
            src={`/api${data.urlFile}`}
            className="rounded-box"
          />
        </div>
        ))
      )}
      
      
      
    </div>
  );
};

export default GaleryFoto;
