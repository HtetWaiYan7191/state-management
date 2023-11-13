'use client'
import React from 'react'
import {useSelector} from 'react-redux' 
const Main = () => {
    const currentUser =  useSelector((state) => state.authReducer.value.username);
  return (
    <div>
       <h2 className='text-white'>{currentUser}</h2>
    </div>
  )
}

export default Main