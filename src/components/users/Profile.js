import React from 'react'
import { useParams }   from 'react-router-dom'
// import userService from '../../services/users'

const User = () => {
  const id = useParams().id
  // const user = await userService.getUser( id )
  console.log(id)

  return (
    <div>
      Hi!
    </div>
  )
}

export default User