"use client"
import { updateShowValue } from '@/app/actions/update-cheked-ucapan'
import React, { useState, useTransition } from 'react'

const CheckedUcapan = ({show, id}) => {
  const [isChecked, setIsChecked] = useState(show)
  const [isPending, startTransition] = useTransition()

  const handleChange = (e) => {
    setIsChecked(e.target.checked)
    startTransition(() => {
      updateShowValue(id, e.target.checked)
    })
  }


  return (
    <input
    onChange={handleChange}
    checked={isChecked}
    disabled={isPending}
    type="checkbox"
    className="checkbox border-black bg-white checked:border-indigo-600 checked:bg-indigo-500 checked:text-white"
    />
  )
}

export default CheckedUcapan