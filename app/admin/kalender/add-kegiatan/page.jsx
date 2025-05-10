import FormAddKegiatan from "@/app/component/clientComponent/formAddKegiatan";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";

const AddKegiatan = async () => {
  const user = await currentUser()
  const role = user.publicMetadata?.role
  
  if (role !== "admin-induk") {
    return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
  }

  return (
    <div className="h-full pb-6">
      <FormAddKegiatan />
    </div>
  );
};

export default AddKegiatan;
