// Implement a React component (UserProfile) that displays user profile information such as name, email, and phone number. Write tests to ensure that the user profile information is correctly displayed when the component receives user data as props.
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
