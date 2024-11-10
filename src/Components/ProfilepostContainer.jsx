import React from 'react'
import Nature from '../nature.jpg'
import '../CSS/ProfilepostContainer.css'

const Post = () => {
  return (
    <div className="profilePost">
      <img src={Nature} className='profilePostImg'/>
    </div>
  )
}
const ProfilepostContainer = () => {
  return (
    <div className='profilePostContainer'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
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