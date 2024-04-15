import React from 'react'

function UserProfile({name,email,phone}) {
  return (
    <div>
      <div>
        name:{name}
      </div>

      <div>
        email:{email}
      </div>

      <div>
        phone:{phone}
      </div>
    </div>
  )
}

export default UserProfile
