import React from "react";

import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";

const AdminKondisiGeografis = async () => {
    let geografis;
    try {
        geografis = await prisma.profil.findFirst({
            where:{
                judul:"kondisi geografis"
            }
        })
        
    } catch (error) {
        console.log(error)
    }

  return (
    <div className="h-full">
    {geografis && (
      <ProfilList id={geografis.id} judul={geografis.judul} urlFile={geografis.urlFile} urlFrontEnd={'/front/kondisi-geografis'} />
    )}
    </div>
  );
};

export default AdminKondisiGeografis;
