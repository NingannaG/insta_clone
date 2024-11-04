import React from 'react'
import './Body.css'
import nature from '../nature.jpg'
export const Story = () => {
    return (
        <>
            <div className='storyContainer'>
                <img src={nature} className='storyImg' />
                <span className='storyuserName'>Name</span>
            </div>
        </>)
}

const Stories = () => {
    return (
        <div className='storiesContainer'>
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
            <Story />
            <Story />
        </div>
    )
}

export default Stories