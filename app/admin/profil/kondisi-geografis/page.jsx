import React from "react";
import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";
import { currentUser } from "@clerk/nextjs/server";

const AdminKondisiGeografis = async () => {

    const user = await currentUser()
    const role = user.publicMetadata?.role

    if (role !== "admin-induk") {
      return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
    }

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
