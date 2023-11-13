'use client'
import React, { useEffect } from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPlayers } from '@/redux/features/playerSlice';
import { fetchPlayers } from '@/redux/features/playerSlice';
 const Hero = () => {
  const players = useSelector((state) => state.playerReducer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [dispatch])

  return (
    <main className='hero-container mt-10 w-[80%] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4'>
        {players?.map(player => (
          <Card key={player.id} player={player}/>
        ))}
    </main>
  )
}

export default Hero