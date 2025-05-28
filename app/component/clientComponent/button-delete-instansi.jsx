"use client"
import { deleteInstansi } from '@/app/actions/delete-instansi'
import { Trash2 } from 'lucide-react'

const ButtonDeleteInstansi = ({instansi, id}) => {

    const handleSubmit = async () => {
        const res = confirm(`Apakah anda yakin akan menghapus ${instansi}`)
        if (res) {
            await deleteInstansi(id)
            return
        }
    }

  return (
    <div onClick={handleSubmit} className="tooltip tooltip-left" data-tip={`hapus ${instansi}`}>
        <Trash2 size={12} className='text-error cursor-pointer' />
    </div>
  )
}

export default ButtonDeleteInstansi