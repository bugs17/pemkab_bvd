import React from "react";
import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";
import { currentUser } from "@clerk/nextjs/server";

const AdminPeta = async () => {

  const user = await currentUser()
  const role = user.publicMetadata?.role

  if (role !== "admin-induk") {
    return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
  }

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
