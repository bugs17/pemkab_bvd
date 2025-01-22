import React from "react";

import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";

const AdminVisiMisi = async () => {
    let visimisi;
    try {
        visimisi = await prisma.profil.findFirst({
            where:{
                judul:"visi-misi"
            }
        })
        
    } catch (error) {
        
    }

  return (
    <div className="h-full">
    {visimisi && (
      <ProfilList id={visimisi.id} judul={visimisi.judul} urlFile={visimisi.urlFile} urlFrontEnd={'/front/visi-misi'} />
    )}
    </div>
  );
};

export default AdminVisiMisi;
