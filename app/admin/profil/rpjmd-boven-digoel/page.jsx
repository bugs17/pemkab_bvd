import React from "react";

import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";

const AdminRpjmd = async () => {
  
    let rpjmd;
    try {
      rpjmd = await prisma.profil.findFirst({
            where:{
                judul:"rpjmd kabupaten boven digoel 2021-2025"
            }
        })
        
    } catch (error) {
        console.log(error)
    }

  return (
    <div className="h-full">
    {rpjmd && (
      <ProfilList id={rpjmd.id} judul={rpjmd.judul} urlFile={rpjmd.urlFile} urlFrontEnd={'/front/rpjmd-2021-2025'} />
    )}
    </div>
  );
};

export default AdminRpjmd;
