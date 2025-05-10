import React from "react";
import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";
import { currentUser } from "@clerk/nextjs/server";

const AdminKesejahteraanSosial = async () => {

    const user = await currentUser()
    const role = user.publicMetadata?.role

    if (role !== "admin-induk") {
      return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
    }

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
