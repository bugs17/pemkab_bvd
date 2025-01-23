import React from "react";

import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";

const AdminApbd = async () => {
  
    let apbd;
    try {
      apbd = await prisma.profil.findFirst({
            where:{
                judul:"apbd boven digoel"
            }
        })
        
    } catch (error) {
        console.log(error)
    }

  return (
    <div className="h-full">
    {apbd && (
      <ProfilList id={apbd.id} judul={apbd.judul} urlFile={apbd.urlFile} urlFrontEnd={'/front/apbd'} />
    )}
    </div>
  );
};

export default AdminApbd;
