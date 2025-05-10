import React from "react";

import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";
import { currentUser } from "@clerk/nextjs/server";

const AdminApbd = async () => {

  const user = await currentUser()
  const role = user.publicMetadata?.role

  if (role !== "admin-induk") {
    return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
  }
  
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
