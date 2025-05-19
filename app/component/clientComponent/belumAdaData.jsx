import React from 'react'

const BelumAdaData = ({data}) => {
  return (
    <div className='h-80 w-full flex flex-row justify-center items-center'>
        <img src='/kosong2.png' className='h-80 w-auto' draggable={false} alt='data-masih-kosong' />
        <div className='-ml-14'>
            <span className='font-monsans font-extrabold text-yellow-600 text-4xl'>Belum ada data {data}.</span>
            <p className='text-center'>Hubungi admin segera!</p>
        </div>
    </div>
  )
}

export default BelumAdaData