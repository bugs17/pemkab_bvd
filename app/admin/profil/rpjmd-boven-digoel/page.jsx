import React from "react";
import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";
import { currentUser } from "@clerk/nextjs/server";

const AdminRpjmd = async () => {

    const user = await currentUser()
    const role = user.publicMetadata?.role

    if (role !== "admin-induk") {
      return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
    }
  
    let rpjmd;
    try {
      rpjmd = await prisma.profil.findFirst({
            where:{
                judul:"rpjmd kabupaten boven digoel 2021-2025"
            }
        })
        
    } catch (error) {
        console.log(error)
    }

  return (
    <div className="h-full">
    {rpjmd && (
      <ProfilList id={rpjmd.id} judul={rpjmd.judul} urlFile={rpjmd.urlFile} urlFrontEnd={'/front/rpjmd-2021-2025'} />
    )}
    </div>
  );
};

export default AdminRpjmd;
