import React from 'react'
import Button from './Button'

const Card = ({player}) => {
  return (
    <div className="card   text-gray-500 border border-2-white">
  <div className="card-body">
    <h2 className="card-title text-white font-bold tracking-wider">{`${player.first_name} ${player.last_name}`}</h2>
    <ul className='player-info text-sm flex flex-col gap-2 mt-3'>
      <li className='font-semibold text-gray-300'>Position: <span className=' text-gray-500'>{player.position}</span></li>
      <li className='font-semibold text-gray-300'>Team: <span className=' text-gray-500'>{player.team.full_name}</span> </li>
      <li className='font-semibold text-gray-300'>Division: <span className=' text-gray-500'>{player.team.division}</span> </li>
      <li className='font-semibold text-gray-300'>City: <span className=' text-gray-500'>{player.team.city}</span> </li>
    </ul>
  </div>
</div>
  )
}

export default Card