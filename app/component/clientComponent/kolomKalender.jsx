import React from "react";
import Calendar from "./calendar";
import { prisma } from "@/app/lib/db";

export const revalidate = 0;


const KolomKalender = async () => {

  const kegiatans = await prisma.kegiatan.findMany()
  console.log(kegiatans)

  return (
    <>
      <div className="divider divider-success">
        <span className="text-green-700">KALENDER KEGIATAN</span>
      </div>
      <Calendar instances={kegiatans} />
    </>
  );
};

export default KolomKalender;
