import FormAddTunda from "@/app/component/clientComponent/formAddTunda";
import React from "react";
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";


const AddTunda = async () => {
  const user = await currentUser()
  const role = user.publicMetadata?.role
  
  if (role === "admin-berita") {
    return redirect("/admin");
  }

  return (
    <div className="h-full pb-6">
      <FormAddTunda />
    </div>
  );
};

export default AddTunda;
