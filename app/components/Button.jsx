'use client'
import React from 'react'

const Button = ({title, handleClick}) => {
  return (
    
    <button type='submit' onClick={handleClick} className=" px-4 py-2 bg-slate-800 text-white font-semibold rounded-md hover:bg-slate-600">
        {title}
    </button>  
  )
}

export default Button