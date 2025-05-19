'use client'
import React, { useEffect, useRef } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';
import { useAtom } from 'jotai';
import { isNavMenuOpen } from '../lib/globalState';

const Provider = ({children}) => {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useAtom(isNavMenuOpen)

  const prevPathName = useRef(pathName)

  useEffect(() => {
    if (prevPathName.current !== pathName) {
      setIsMenuOpen("")
      prevPathName.current = pathName // update prevPathName
    }
  }, [pathName])

  return (
    <>
        <ProgressBar  className="bg-red-200" color={'rgb(254 202 202)'} shallowRouting options={{showSpinner:false }} />
        {children}
    </>
  )
}

export default Provider