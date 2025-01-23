import React from "react";

import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";

const AdminPeta = async () => {
    let peta;
    try {
      peta = await prisma.profil.findFirst({
            where:{
                judul:"peta"
            }
        })
        
    } catch (error) {
        console.log(error)
    }

  return (
    <div className="h-full">
    {peta && (
      <ProfilList id={peta.id} judul={peta.judul} urlFile={peta.urlFile} urlFrontEnd={'/front/peta'} />
    )}
    </div>
  );
};

export default AdminPeta;
