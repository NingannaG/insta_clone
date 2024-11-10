import React from 'react'
import nature from '../nature.jpg'
import '../CSS/MessageBady.css'
import { CallIcon, FowrwdrdIcon, HeartIcon, IIcon, sendIocn, SmileIcon, VideoIcon } from '../Lib/svg'

const ChatBady = () => {
  return (
    <div className='messageUserChatForward'>
      <div className='messageUserChatForwardImage'><img src={nature} /> </div>
      <div className='messageUserChatForwardIcons'>
        <div > {SmileIcon}</div>
        <div>{FowrwdrdIcon}</div>
      </div>
    </div>
  )
}
export const MessageBady = () => {
  return (
    <div>
      <div className='messageUserChat'>
        <img src={nature} className='messageUserProfileChat' />
        <div className='messageUserProfileUserDetailsChat'>
          <span className='messageUserProfileUserChat'>Name</span>
          <span className='messageUserProfileUserLastActiveChat'>Time</span>
        </div>

        <div className='messageUserChatIcons'>
          <div className='messageUserChatlIcon'>{CallIcon}</div>
          <div className='messageUserChatIcon'>{VideoIcon}</div>
          <div className='messageUserChatIcon'>{IIcon}</div>
        </div>
      </div>
      <div className='chatContainer'>
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
        <ChatBady />
      </div>
      <div className='input'>
        <span className='eMoji'>{SmileIcon}</span>
        <input type="text" name="" id="" placeholder=' Message ' className='inputSearch'/>
        <span className='HeartIcons'>{HeartIcon}</span>
        <span className='upLoadImgIcon'>{HeartIcon}</span>
        <span className='sendIcon'>{sendIocn}</span>
      </div>
    </div>
  )
}

export default MessageBady