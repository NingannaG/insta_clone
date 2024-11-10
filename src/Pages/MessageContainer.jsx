import React from 'react'
import SidePanel from '../Components/SidePanel'
import '../CSS/Message.css'
import MessageSearch from '../Components/MessageSearch'
import MessageBady from '../Components/MessageBady'

const MessageContainer = () => {
    return (
        <div className='messageParent'>
            <SidePanel />
            <div className='messageContainer'>
                <MessageSearch />
                <MessageBady />
            </div>
        </div>
    )
}

export default MessageContainer