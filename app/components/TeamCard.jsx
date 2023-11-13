'use client'
import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { deleteTeam } from '@/redux/features/playerSlice'
const TeamCard = ({team}) => {
    const dispatch = useDispatch();

    const handleClick = (id) => { 
        dispatch(deleteTeam(id))
    }

  return (
    <div className="card   text-gray-500 border border-2-white">
    <div className="card-body">
      <h2 className="card-title capitalize text-white font-bold tracking-wider">{team.name}</h2>
      <ul className='player-info text-sm flex flex-col gap-2 mt-3'>
        <li className='font-semibold text-gray-300'>City: <span className=' text-gray-500 capitalize'>{team.city}</span></li>
        <li className='font-semibold text-gray-300'>Division: <span className=' text-gray-500 capitalize'>{team.division}</span></li>
        <li className='font-semibold text-gray-300'>Players: <span className=' text-gray-500'>{team.players.length}</span></li>
      </ul>
      <button onClick={() => handleClick(team.id)}>Delete</button>
    </div>
  </div>
  )
}

export default TeamCard