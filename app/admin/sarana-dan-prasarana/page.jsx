import React from "react";
import { prisma } from "@/app/lib/db";
import SaranaPrasaranList from "@/app/component/clientComponent/saranaPrasaranList";
import { currentUser } from "@clerk/nextjs/server";

const SaranaPrasarana = async () => {

  const user = await currentUser()
  const role = user.publicMetadata?.role

  if (role !== "admin-induk") {
    return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
  }
  
    let data;
    try {
        data = await prisma.saranaPrasarana.findMany()
        
    } catch (error) {
    }


  return (
    <div className="h-full">
    {data.length > 0 && (
      <SaranaPrasaranList instances={data}  />
    )}
    </div>
  );
};

export default SaranaPrasarana;
