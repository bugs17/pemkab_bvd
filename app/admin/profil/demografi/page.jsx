import React from "react";

import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";

const AdminDemografi = async () => {
    let demografi;
    try {
      demografi = await prisma.profil.findFirst({
            where:{
                judul:"demografi"
            }
        })
        
    } catch (error) {
        console.log(error)
    }

  return (
    <div className="h-full">
    {demografi && (
      <ProfilList id={demografi.id} judul={demografi.judul} urlFile={demografi.urlFile} urlFrontEnd={'/front/demografi'} />
    )}
    </div>
  );
};

export default AdminDemografi;
