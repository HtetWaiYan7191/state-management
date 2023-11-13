'use client'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import { logOut } from '@/redux/features/authSlice';
const Main = () => {
    const currentUser =  useSelector((state) => state.authReducer.value.username);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleOnClick = (e) => {
      e.preventDefault();
      dispatch(logOut());
      router.push('/')
    }
  return (
    <section className='main-page flex justify-center'>
      <header className='flex gap-5 items-center mt-10'>
          <h2 className='text-white capitalize font-bold text-2xl'>{currentUser}</h2>
          <Button title={"LogOut"} handleClick={handleOnClick}/>
      </header>
       
    </section>
  )
}

export default Main