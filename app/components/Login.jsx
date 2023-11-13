'use client'
import { logIn } from '@/redux/features/authSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [name, setName] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn(name))
        router.push('/main')
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

  return (
    <div className='login-container flex justify-center items-center h-[100vh]'>
        <form action="" onSubmit={handleSubmit} className='border border-2 p-5 rounded-md'>
            <h2 className='text-center my-2 font-semibold text-lg'>LOGIN</h2>
            <input type="text" onChange={handleChange} value={name} placeholder="Enter Name" className="input input-sm lg:input-md input-bordered  w-full max-w-xs mt-4" />

            <button type='submit' className=" px-4 py-2 bg-slate-800 text-white font-semibold rounded-md mt-4 hover:bg-slate-500">
                LogIn
            </button>   


        </form>
    </div>
  )
}

export default Login