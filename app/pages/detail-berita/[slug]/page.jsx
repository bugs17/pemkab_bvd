import { prisma } from "@/app/lib/db";
import React from "react";
import { FaCalendarDays } from "react-icons/fa6";


const DetailBerita = async ({ params }) => {
  const { slug } = await params;

  const detailBerita = await prisma.berita.findFirst({
    where: {
      slug: slug,
    },
    include: {
      kategori: {
        select: {
          nama: true,
        },
      },
    },
  });

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
        {new Date(detailBerita.createdAt).toLocaleDateString("id-ID", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </span>
      <img
        alt="contoh"
        src={`/api/${detailBerita.coverUrl}`}
        width="auto" // Ganti dengan ukuran yang diinginkan dalam pixel
        height="auto" // Menjaga aspek rasio gambar
        className="rounded-md"
      />
      <div
        dangerouslySetInnerHTML={{ __html: detailBerita.isi }}
        className="text-justify"
      ></div>
    </div>
  );
};

export default DetailBerita;
