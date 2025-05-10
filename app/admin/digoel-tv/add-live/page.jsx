import FormAddLive from "@/app/component/clientComponent/formAddLive";
import { redirect } from "next/navigation";
import React from "react";
import { currentUser } from '@clerk/nextjs/server'


const AddLive = async () => {

  const user = await currentUser()
  const role = user.publicMetadata?.role
  
  if (role === "admin-berita") {
    return redirect("/admin");
  }


  return (
    <div className="h-full pb-6">
      <FormAddLive />
    </div>
  );
};

export default AddLive;
