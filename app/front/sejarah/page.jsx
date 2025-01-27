import { prisma } from "@/app/lib/db";
import React from "react";

export const revalidate = 0;

const Sejarah = async () => {
  let sejarah;
  try {
    sejarah = await prisma.sejarah.findFirst()
  } catch (error) {
    
  }

  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-3xl">SEJARAH</h1>
      <span className="font-semibold flex justify-center md:justify-start">
        SEJARAH BOVEN DIGOEL
      </span>

      {sejarah && (

        <div className="text-justify pt-3" dangerouslySetInnerHTML={{ __html: sejarah.isi }} />
      )}
      
    </div>
  );
};

export default Sejarah;
