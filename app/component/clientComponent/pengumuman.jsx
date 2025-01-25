import { prisma } from "@/app/lib/db";
import { truncate } from "@/app/lib/truncKalimat";
import Link from "next/link";
import React from "react";

const Pengumuman = async () => {
  let pengumumans;
  try {
    pengumumans = await prisma.pengumuman.findMany({
      orderBy: {
        id: "desc",
      },
    });
  } catch (error) {}
  return (
    <div className="flex flex-col gap-2 max-h-64 ">
      <div className="divider divider-success">
        <span className="text-green-700">PENGUMUMAN</span>
      </div>
      <div className="h-full overflow-y-scroll flex flex-col gap-2">
        {pengumumans.length > 0 ? (
          pengumumans.map((pengumuman, index) => (
            <div key={index} className="">
              <Link href={`/pages/pengumuman/${pengumuman.slug}`} className="bg-white shadow-md py-5 px-3 rounded-md cursor-pointer hover:bg-green-100 hover:shadow-lg flex flex-col gap-2">
                <span className="font-mono text-xs text-gray-400">
                {new Date(pengumuman.createdAt).toLocaleDateString('id-ID', {'weekday':'long', day: '2-digit', month: '2-digit', year: 'numeric'})}
                </span>
                <p className="text-black text-sm font-bold">
                  {truncate(pengumuman.judul.toUpperCase(),40)}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <p>Belum ada Pengumuman!</p>
        )}
      </div>
    </div>
  );
};

export default Pengumuman;

