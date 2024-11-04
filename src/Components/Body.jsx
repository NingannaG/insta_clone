import React from 'react'
import './Body.css'
import Stories from './Stories'
import Feed from './Post'

const Body = () => {
  return (
    <div className='bodyParent'>
      <Stories />
      <div className='postsContainers'>
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </div>
    </div>
  )
}

export default Body