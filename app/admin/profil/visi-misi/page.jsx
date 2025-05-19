import React from "react";
import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";
import { currentUser } from "@clerk/nextjs/server";

const AdminVisiMisi = async () => {

    // const user = await currentUser()
    // const role = user.publicMetadata?.role

    // if (role !== "admin-induk") {
    //   return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
    // }

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
