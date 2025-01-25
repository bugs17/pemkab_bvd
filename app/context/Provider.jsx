'use client'
import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Provider = ({children}) => {
  return (
    <>
        <ProgressBar className="bg-green-800" color={'#166534'} shallowRouting options={{showSpinner:false}} />
        {children}
    </>
  )
}

export default Provider