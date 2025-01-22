import { prisma } from "@/app/lib/db";
import React from "react";

const Agenda = async () => {
  const kegiatans = await prisma.kegiatan.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="flex flex-col">
      <div className="divider divider-success">
        <span className="text-green-700">AGENDA KEGIATAN</span>
      </div>

      <div className="flex flex-col w-full max-h-28 overflow-y-scroll bg-white p-4 rounded-md">
        {kegiatans.length > 0 ? (
          kegiatans.map((kegiatan, index) => (
            <div
              key={index}
              className="pb-2 border-b-[1px] border-dashed border-slate-700"
            >
              <span className="font-semibold text-xs">{kegiatan.judul}</span>
            </div>
          ))
        ) : (
          <span className="font-mono text-xs text-slate-600">
            Belum ada agenda!
          </span>
        )}
      </div>
    </div>
  );
};

export default Agenda;
