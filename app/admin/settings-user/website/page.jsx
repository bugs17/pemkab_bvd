import { Settings2 } from 'lucide-react'
import React from 'react'
import { currentUser } from "@clerk/nextjs/server";
import ButtonAddUserWebsite from '@/app/component/clientComponent/button-user-website';
import { clerkClient } from '@/app/lib/clerk-backend';
import ButtonDeleteUserClerk from '@/app/component/clientComponent/button-hapus-user-clerk';
import ButtonChangePassword from '@/app/component/clientComponent/button-change-password';
import ButtonChangeRole from '@/app/component/clientComponent/button-change-role';


const Website = async () => {

    const user = await currentUser()
    const role = user.publicMetadata?.role
    
    if (role !== "admin-induk") {
        return <div className="h-full w-full text-center justify-center items-center">Maaf anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
    }


    const { data, totalCount } = await clerkClient.users.getUserList({
        orderBy: '-created_at',
        limit: 200,
      })

    // filter userlist agar hanya menampilkan user list tanpa user yang sedang login
    const userList = data.filter((u) => u.id !== user.id);

    function formatToLocalTime(timestamp) {
        if (!timestamp) return "-";
        const date = new Date(timestamp);
        return date.toLocaleString(); // Mengembalikan waktu lokal lengkap
      }

  return (
    <div className="h-full">
      <>
        <div className="mb-4 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <div className="font-semibold ">User admin website</div>
            <ButtonAddUserWebsite />
          </div>
        </div>
        <div className="h-full overflow-y-auto">
          <table className="table table-xs mb-10">
            <thead>
              <tr>
                <th className="text-left">Username</th>
                <th className="text-left">Role</th>
                <th className="text-left">Terakhir aktif</th>
                <th className="text-left">Terakhir login</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody className="">
            {userList.length > 0 && (
                userList.map((user, index) => (
                    <tr key={index}>
                        <td className="text-left">
                        <div
                            className="tooltip z-50"
                            data-tip="username user"
                        >
                            {user.username}
                        </div>
                        </td>

                        <td className="text-left">
                            <div
                                className="tooltip z-50"
                                data-tip="Role user"
                            >
                                {user.publicMetadata.role === "admin-induk" && (
                                    <span className="badge badge-success text-white">
                                        Induk
                                    </span>
                                )}
                                {user.publicMetadata.role === "admin-berita" && (
                                    <span className="badge badge-info text-white">
                                        Berita
                                    </span>
                                )}
                                {user.publicMetadata.role === "admin-dgtv" && (
                                    <span className="badge badge-accent text-white">
                                        Digoel TV
                                    </span>
                                )}
                            </div>
                        </td>

                        <td className="text-left">
                            <div
                                className="tooltip z-50"
                                data-tip="Terakhir aktif"
                            >
                                {formatToLocalTime(user.lastActiveAt)}
                            </div>
                        </td>

                        <td className="text-left">
                            <div
                                className="tooltip z-50"
                                data-tip="Terakhir Login"
                            >
                                {formatToLocalTime(user.lastSignInAt)}
                            </div>
                        </td>


                        <td className="flex  justify-end items-start">
                            <div className="dropdown dropdown-left ">
                                <div tabIndex={0} role="button" className='flex items-center justify-center'>
                                    <Settings2 color='green' size={18} />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <ButtonChangePassword userId={user.id} username={user.username} />
                                    <ButtonChangeRole userId={user.id} username={user.username} role={user.publicMetadata.role} />
                                    <ButtonDeleteUserClerk userId={user.id} username={user.username} />
                                </ul>
                            </div>
                        </td>
                    </tr>
                ))
            )}
                
              </tbody>
          </table>
        </div>
      </>
    </div>
  )
}

export default Website