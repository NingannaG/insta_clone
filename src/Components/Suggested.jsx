import React from 'react'
import './suggestedFriends.css'
import nature from '../nature.jpg'

const Suggested = () => {
  return (
   
      <div className="SuggestedFriendDeatils">
         
      <div className="SuggestedFriend">
        <img src={nature} alt="" className='SuggestedFriendImg'/>
        <h6 className='SuggestedFriendName'>Naame</h6>
      </div>
      <h6 className='fallow'>Fallow</h6>
      </div>
  )
}

export default Suggested