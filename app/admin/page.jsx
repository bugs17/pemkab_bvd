import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import Link from "next/link";

import ListBeritaAdmin from "../component/clientComponent/listBeritaAdmin";
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";

const Berita = async () => {
  
  
  const user = await currentUser()
  const role = user.publicMetadata?.role

  if (role === "admin-dgtv") {
    return redirect("/admin/digoel-tv/live-list");
  }




  return (
    <div className="h-full">
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <HiPencilSquare size={30} className="text-green-950" />
          <Link
            href={"/admin/add-berita"}
            className="font-semibold cursor-pointer hover:text-green-950"
          >
            Tambah Berita
          </Link>
        </div>
        <div className="flex flex-row items-center gap-1">
          
        </div>
      </div>
        <ListBeritaAdmin />
    </div>
  );
};

export default Berita;
