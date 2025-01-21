import { prisma } from "@/app/lib/db";
import Image from "next/image";
import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { MdSimCardDownload } from "react-icons/md";

import { TbCategoryPlus } from "react-icons/tb";

const DetailBerita = async ({ params }) => {

  const slug = params.slug

  const detailBerita = await prisma.berita.findFirst({
    where:{
      slug:slug
    },
    include:{
      kategori:{
        select:{
          nama:true
        }
      }
    }
  })



  return (
    
    <div className="flex flex-col gap-6 md:mb-8">
                  <div className="badge badge-outline badge-success badge-xs p-2">
                    {detailBerita.kategori.nama.toUpperCase()}
                  </div>
                  <h1 className="text-xl font-semibold">
                    {detailBerita.judul.toUpperCase()}
                  </h1>
                  <span className="flex flex-row items-center text-xs text-slate-400">
                    <FaCalendarDays className="mr-2" />
                    {new Date(detailBerita.createdAt).toLocaleDateString('id-ID', {'weekday':'long', day: '2-digit', month: '2-digit', year: 'numeric'})}
                  </span>
                  <img
                    alt="contoh"
                    src={detailBerita.coverUrl}
                    width="auto" // Ganti dengan ukuran yang diinginkan dalam pixel
                    height="auto" // Menjaga aspek rasio gambar
                    className="rounded-md"
                  />
                  <div dangerouslySetInnerHTML={{ __html: detailBerita.isi }} className="text-justify">
                    
                  </div>
                </div>
  );
};

export default DetailBerita;
