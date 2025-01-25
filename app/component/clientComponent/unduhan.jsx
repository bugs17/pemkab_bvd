import { prisma } from "@/app/lib/db";
import { truncate } from "@/app/lib/truncKalimat";
import Link from "next/link";
import React from "react";
import { MdSimCardDownload } from "react-icons/md";

const Unduhan = async () => {
  let unduhans;
  try {
    unduhans = await prisma.unduhan.findMany({
      orderBy: {
        id: "desc",
      },
    });
  } catch (error) {}
  return (
    <div className="flex flex-col gap-2">
      <div className="divider divider-success">
        <span className="text-green-700">UNDUHAN</span>
      </div>
      {unduhans.length > 0 ? (
        unduhans.map((unduhan, index) => (
          <Link key={index} href={`/pages/unduhan/${unduhan.id}`} className="bg-white py-2 px-4 justify-between rounded-md flex flex-row items-center gap-3 shadow-md cursor-pointer hover:bg-violet-200">
            <span className="font-sans text-xs">
              {truncate(unduhan.judul.toUpperCase(), 40)}
            </span>
            <MdSimCardDownload size={32} className="text-violet-500" />
          </Link>
        ))
      ) : (
        <p>Belum ada unduhan!</p>
      )}
    </div>
  );
};

export default Unduhan;
