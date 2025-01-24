import { prisma } from "@/app/lib/db";
import React from "react";

const GaleryVideo = async () => {
  let datas;
  try {
    datas = await prisma.galery.findMany({
      where: {
        isFoto: false,
      },
    });
  } catch (error) {}
  return (
    <div className="carousel carousel-center bg-slate-100 rounded-box max-w-full space-x-4 p-4 shadow-md">
      {datas.length > 0 &&
        datas.map((data, index) => (
          <div key={index} className="carousel-item">
            <iframe
              className="rounded-box"
              width="560"
              height="315"
              src={data.urlFile}
              title={data.judul}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
    </div>
  );
};

export default GaleryVideo;
