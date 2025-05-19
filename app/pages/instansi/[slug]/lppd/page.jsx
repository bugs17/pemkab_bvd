"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const LppdInstansi =  () => {

  const params = useParams()
  const slug = params.slug
    
  return (
    <div>Lppd {slug}</div>
  )
}

export default LppdInstansi