import React from "react";
import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";
import { currentUser } from "@clerk/nextjs/server";

const AdminDemografi = async () => {

  const user = await currentUser()
  const role = user.publicMetadata?.role

  if (role !== "admin-induk") {
    return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
  }

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
