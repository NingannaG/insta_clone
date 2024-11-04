import React from 'react'
import nature from '../nature.jpg'
import './Post.css'
import { BookmarkIcon, CommentIcon, LikeIcon, sendIocn, ShareIcon } from '../Lib/svg'
const Post = () => {
  return (
    <div className='Postcontainer'>
      <div className='PostUserInfo'>
        <div>
          <img src={nature} className='PostProfileUserImg' />
        </div>
        <div>
          <span className='PostuserName'>Name</span>
          <span className='PostTime'>Time</span>
        </div>
      </div>
      <div className='PostImgContainer'>
        <img src={nature} className='PostImg' />
      </div>
      <div className='postData'>
        <div className='like'>
          <span>{LikeIcon}</span>
          <span>{CommentIcon}</span>
          <span>{ShareIcon}</span>
        </div>
        <span>{BookmarkIcon}</span>
      </div>
      <div className="addComment">
        <input type="text" placeholder="Add a comment" className='addCommentInput'  />
        <span>{sendIocn}</span>
      </div>
    </div>
  )
}

export default Post