import React from 'react'
import nature from '../nature.jpg'
import '../CSS/Profile.css'
import { NewaddgIocn, PostsIcon, ReelsIcon, SavedIcon, SettingIocn } from '../Lib/svg'

const ProfileInfo = () => {
    return (
        <div className='Parentprofile'>
            <div className='userInfo'>
                <div className='PofileImgContainer'>
                    <img src={nature} className='ProfileImg' />
                </div>
                <div>
                    <div className='Username'>ninganna90
                        <button className='Button'>Edit Profile</button>
                        <button className='Button'>View Archive</button>
                        <div className='SettingIocn'>{SettingIocn}</div>
                    </div>
                    <div className='Followers'>
                        <div>11 Post</div>
                        <div>354 Followers</div>
                        <div>352 Following</div>
                    </div>
                    <div className='Ninganna'>Ninganna Gadade</div>
                </div>
            </div>
            <div className='MediaInfo'>
                <div className='NewIcon'>{NewaddgIocn}
                    <h6 className='New'>New</h6><hr />
                    <div className='ProfileIcons'>
                        <div>{PostsIcon}
                            <span>Posts</span>
                        </div>
                        <div>{ReelsIcon}
                            <span>Reels</span>
                        </div>
                        <div>{SavedIcon}
                            <span>Saved</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ProfileInfo