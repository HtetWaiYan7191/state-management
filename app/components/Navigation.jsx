import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <ul className='flex navigation-container items-center gap-5 w-[80%] mx-auto my-5 '>
        <Link href="/main" className=' font-semibold text-blue-900 text-lg hover:text-blue-700 hover:underline  p-2  '>Players</Link>
        <Link href="/team" className=' font-semibold text-blue-900 text-lg hover:text-blue-700 hover:underline  p-2  '>Teams</Link>
    </ul>
  )
}

export default Navigation