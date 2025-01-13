import React from 'react'
import GaleryFoto from './clientComponent/galeryFoto'
import GaleryVideo from './clientComponent/galeryVideo'

const GalerySections = () => {
  return (
    <div className="px-4 py-8 flex md:flex-row flex-col-reverse gap-8 bg-white">
        {/* galery foto */}
        <div className='md:w-[50%]'>
            <div className="divider divider-success">
                <span className="text-green-700">Galery Foto</span>
            </div>
            <GaleryFoto />
        </div>

        <div className='md:w-[50%]'>
            <div className="divider divider-success">
                <span className="text-green-700">Galery Video</span>
            </div>
            <GaleryVideo />
        </div>
    </div>
  )
}

export default GalerySections