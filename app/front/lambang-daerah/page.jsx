import Image from "next/image";
import React from "react";
import Logo from "../../asset/img/logoBvd.png";
import { prisma } from "@/app/lib/db";

export const revalidate = 0;

const LambangDaerah = async () => {
  let lambang;
  try {
    lambang = await prisma.lambangDaerah.findFirst();
  } catch (error) {}
  return (
    <div className=" md:w-[70%] md:p-10 flex flex-col items-center">
      <h1 className="text-center font-bold text-3xl">Lambang Daerah</h1>

      <Image src={Logo} alt="logo" width={100} height={100} />

      <span className="font-semibold flex pt-4 pb-4">
        Arti Lambang/Logo Daerah
      </span>
      {lambang && (
        <div
          dangerouslySetInnerHTML={{ __html: lambang.isi }}
          className="text-justify"
        />
      )}
    </div>
  );
};

export default LambangDaerah;
