import React from "react";

import { prisma } from "@/app/lib/db";
import SaranaPrasaranList from "@/app/component/clientComponent/saranaPrasaranList";

const SaranaPrasarana = async () => {
  
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
