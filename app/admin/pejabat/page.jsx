import React from "react";

import { prisma } from "@/app/lib/db";
import PejabatList from "@/app/component/clientComponent/pejabatList";

const AdminBupati = async () => {
  
    let pejabats;
    try {
        pejabats = await prisma.pejabat.findMany()
        
    } catch (error) {
        console.log(error)
    }


    console.log(pejabats)
  return (
    <div className="h-full">
    {pejabats.length > 0 && (
      <PejabatList instancePejabatProps={pejabats}  />
    )}
    </div>
  );
};

export default AdminBupati;
