import React from "react";

import { prisma } from "@/app/lib/db";
import PejabatList from "@/app/component/clientComponent/pejabatList";
import { currentUser } from "@clerk/nextjs/server";

const AdminBupati = async () => {

    const user = await currentUser()
    const role = user.publicMetadata?.role
  
    if (role !== "admin-induk") {
      return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
    }
  
    let pejabats;
    try {
        pejabats = await prisma.pejabat.findMany()
        
    } catch (error) {
        console.log(error)
    }


  return (
    <div className="h-full">
    {pejabats.length > 0 && (
      <PejabatList instancePejabatProps={pejabats}  />
    )}
    </div>
  );
};

export default AdminBupati;
