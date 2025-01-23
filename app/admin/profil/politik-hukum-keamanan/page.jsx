import React from "react";

import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";

const AdminPolitikHukumKeamanan = async () => {
    let politik;
    try {
      politik = await prisma.profil.findFirst({
            where:{
                judul:"politik hukum & keamanan"
            }
        })
        
    } catch (error) {
        console.log(error)
    }

  return (
    <div className="h-full">
    {politik && (
      <ProfilList id={politik.id} judul={politik.judul} urlFile={politik.urlFile} urlFrontEnd={'/front/politik-hukum-dan-keamanan'} />
    )}
    </div>
  );
};

export default AdminPolitikHukumKeamanan;
