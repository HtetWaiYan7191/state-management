import React from 'react'
import Navigation from '../components/Navigation'
import AddTeam from '../components/AddTeam'

const Team = () => {
  return (
    <section className='team-page p-5'>
        <h2 className="text-white capitalize font-bold text-2xl text-center">
            Teams
        </h2>
        <Navigation/>
        <AddTeam/>
    </section>
  )
}

export default Team