import React from 'react'
import SidePanel from './Components/SidePanel'
import Body from './Components/Body'
import SuggestedFriends from './Components/SuggestedFriendsList'
import './App.css'

const App = () => {
  return (
    <div className='Parent'>
      <SidePanel />
      <Body />
      <SuggestedFriends />
    </div>
  )
}

export default App