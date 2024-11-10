import React from 'react'
import { EditIcon } from '../Lib/svg'
import '../CSS/Message.css'
import nature from '../nature.jpg'

export const Story = () => {
  return (
    <>
      <div className='messageSearchNote'>
        <span className='messageSearchNoteText'>Name</span>
        <img src={nature} className='messageSearchNoteImg' />
        <span className='messageSearchNoteUser'>Name</span>
      </div>
    </>)
}

export const MessageUser = () => {
  return (
    <>
      <div className='messageUser'>
        <img src={nature} className='messageUserProfile' />
        <div className='messageUserProfileUserDetails'>
          <span className='messageUserProfileUser'>Name</span>
          <span className='messageUserProfileUserLastActive'>Time</span>
        </div>
      </div>
    </>)
}

const MessageSearch = () => {
  return (
    <div className='messageSearchParent'>
      <div className='userDetails'>
        <span>ningana90</span>
        <span>{EditIcon}</span>
      </div>
      <div className='messageSesrchNotes'>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      <div className='messageUsersInput'>
        <input type="text" name="" id="" placeholder='Search Friends' className='searchFriends'/>
      </div>
      <div className='messageUserHeader'>
        <span>Message</span>
        <span>Request</span>
      </div>
      <div className='messageUsers'>
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
        <MessageUser />
      </div>
    </div>
  )
}


export default MessageSearch