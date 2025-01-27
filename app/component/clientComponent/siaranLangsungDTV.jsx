import { prisma } from "@/app/lib/db";
import Link from "next/link";
import React from "react";
import { MdLiveTv } from "react-icons/md";

export const revalidate = 0;

const SiaranLangsungDTV = async () => {
  const digoeltvs = await prisma.digoeltv.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const liveCategory = digoeltvs.filter((item) => item.kategori === "live");
  return (
    <div className="">
      <div className="divider divider-success">
        <span className="text-green-700">SIARAN LANGSUNG DIGOEL-TV</span>
      </div>
      <div className="border-[1px] border-violet-200 shadow-md rounded-md h-56 flex flex-col gap-2 w-full overflow-y-scroll p-2">
        
        {liveCategory.length > 0 && (
          liveCategory.map((live, index) => (

          <Link key={index} href={live.url} target="_blank" className="w-full bg-violet-300 rounded-md shadow-sm py-2 px-3 flex flex-row items-center gap-2 cursor-pointer text-slate-700 hover:text-white">
            <MdLiveTv size={32} />
            <span className="text-xs font-mono ">
              {`LIVE : ${live.judul}`}
            </span>
          </Link>
          ))
        )}
        
      </div>
    </div>
  );
};

export default SiaranLangsungDTV;
