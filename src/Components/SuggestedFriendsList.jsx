import React from 'react'
import Suggested from './Suggested'
import '../CSS/suggestedFriends.css'

const SuggestedFriendsList = () => {
  return (
    <div className='parent'>
      <div className='headerText'>
        <h6>Suggested For You</h6>
        <h6>Sea All</h6>
      </div>
      <Suggested />
      <Suggested />
      <Suggested />
      <Suggested />
      <Suggested />
    </div>
    
  )
}

export default SuggestedFriendsList