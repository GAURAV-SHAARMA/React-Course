import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div className='text-center text-2xl sm:text-5xl py-10 font-medium bg-green-200'>
      User : {userid}
    </div>
  )
}

export default User
User : {}