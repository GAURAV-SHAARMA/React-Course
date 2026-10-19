import React , {useContext} from 'react'

import UserContext from '../Context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)

  if(!user) return <div>Login to see your profile</div>
  return <div>welcome {user.username}</div>
}

export default Profile
