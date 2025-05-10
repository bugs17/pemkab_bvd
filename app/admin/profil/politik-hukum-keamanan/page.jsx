import React from "react";
import { prisma } from "@/app/lib/db";
import ProfilList from "@/app/component/clientComponent/profilList";
import { currentUser } from "@clerk/nextjs/server";

const AdminPolitikHukumKeamanan = async () => {

  const user = await currentUser()
  const role = user.publicMetadata?.role

  if (role !== "admin-induk") {
    return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
  }

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
