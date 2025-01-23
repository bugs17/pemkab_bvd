import React from "react";

import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";

const AdminKesejahteraanSosial = async () => {
    let kesejahteraan;
    try {
      kesejahteraan = await prisma.profil.findFirst({
            where:{
                judul:"kesejahteraan sosial"
            }
        })
        
    } catch (error) {
        console.log(error)
    }

  return (
    <div className="h-full">
    {kesejahteraan && (
      <ProfilList id={kesejahteraan.id} judul={kesejahteraan.judul} urlFile={kesejahteraan.urlFile} urlFrontEnd={'/front/kesejahteraan-sosial'} />
    )}
    </div>
  );
};

export default AdminKesejahteraanSosial;
