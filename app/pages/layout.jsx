import React from 'react'
import Navbar from '../component/navba'
import Footer from '../component/footer'

const LayoutPagesRoot = ({children}) => {
  return (
    <>
    <Navbar />
        {children}
    <Footer />
    </>
  )
}

export default LayoutPagesRoot