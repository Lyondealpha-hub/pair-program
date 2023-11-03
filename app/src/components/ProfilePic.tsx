import React from 'react'
import profile from '../assets/profile.jpg';

function ProfilePic() {
  return (
    <div>
      <img src={profile} alt="Your  Alt Text" className="rounded-full h-24 w-24 ml-10 mt-10"  />
    </div>
  )
}

export default ProfilePic
