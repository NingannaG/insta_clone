import React from 'react'
import Nature from '../nature.jpg'
import '../CSS/ProfilepostContainer.css'

const Post = () => {
  return (
    <div className="post">
      <img src={Nature} />
    </div>
  )
}
const ProfilepostContainer = () => {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default ProfilepostContainer