import ButtonDeleteGalery from '@/app/component/clientComponent/buttonDeleteGalery'
import { Settings2 } from 'lucide-react'
import React from 'react'

const Website = () => {
  return (
    <div className="h-full">
      <>
        <div className="mb-4 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <div className="font-semibold ">User admin website</div>
            {/* <ButtonAddFoto /> */}
          </div>
        </div>
        <div className="h-full overflow-y-auto">
          <table className="table table-xs mb-10">
            <thead>
              <tr>
                <th className="text-left">Username</th>
                <th className="text-left">Email</th>
                <th className="text-left">Role</th>
                <th className="text-left">Last login</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody className="">
                <tr>
                    <td className="text-left">
                    <div
                        className="tooltip z-50"
                        data-tip="tool-tip"
                    >
                        username
                    </div>
                    </td>

                    <td className="text-left">
                        <div
                            className="tooltip z-50"
                            data-tip="tool-tip"
                        >
                            Haloooo@mail.com
                        </div>
                    </td>

                    <td className="text-left">
                        <div
                            className="tooltip z-50"
                            data-tip="tool-tip"
                        >
                            Admin-induk
                        </div>
                    </td>

                    <td className="text-left">
                        <div
                            className="tooltip z-50"
                            data-tip="tool-tip"
                        >
                            23-12-1994
                        </div>
                    </td>


                    <td className="flex  justify-end items-start">
                    
                        <div className="dropdown dropdown-left ">
                        <div tabIndex={0} role="button" className='flex items-center justify-center'>
                            <Settings2 color='green' size={18} />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                        </div>
                    </td>
                </tr>
              </tbody>
          </table>
        </div>
      </>
    </div>
  )
}

export default Website