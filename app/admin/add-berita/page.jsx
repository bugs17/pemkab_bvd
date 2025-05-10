
import FormAddBerita from "@/app/component/clientComponent/formAddBerita";
import { prisma } from "@/app/lib/db";
import { redirect } from "next/navigation";
import React from "react";
import { currentUser } from '@clerk/nextjs/server'



const AddBerita = async () => {
  const user = await currentUser()
  const role = user.publicMetadata?.role
  
  if (role === "admin-dgtv") {
    return redirect("/admin/digoel-tv/live-list");
  }

  const listKategoris = await prisma.kategoriBerita.findMany()

  return (
    <div className="h-full">
      <FormAddBerita kategoris={listKategoris} />
    </div>
  );
};

export default AddBerita;
