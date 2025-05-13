"use client"
import React from 'react'
import LeftMenuAdmin from './leftMenuAdmin'
import { useUser } from '@clerk/nextjs';
import LeftMenuDigoelTv from './leftMenuDigoelTv';
import LeftMenuAdminBerita from './leftMenuAdminBerita';

const LeftSideBar = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;


  return (
    <div className="flex-grow h-screen pb-20 overflow-y-auto bg-gradient-to-l from-zinc-400 to-green-100">
        {user.publicMetadata?.role === 'admin-induk' && (<LeftMenuAdmin />)}
        {user.publicMetadata?.role === 'admin-dgtv' && (<LeftMenuDigoelTv />)}
        {user.publicMetadata?.role === 'admin-berita' && (<LeftMenuAdminBerita />)}

    </div>
  )
}

export default LeftSideBar