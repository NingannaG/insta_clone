import React from 'react';
import '../CSS/sidePanel.css'
import { NavLink } from 'react-router-dom';
import { HomeIcon, SearchIcon, HeartIcon, CreateIcon, MoreIcon, ProfileIcon, ExploreIcon, ReelsIcons, MessageIcon, } from '../Lib/svg';
import image from '../nature.jpg'

const SidePanel = () => {
  const text = true;
  const textColor = "white";
  return (
    <div className='sideParent'>
      <div className='logo'>Instagram</div>
      <div className='Toolbar'>
        <div className='sidePanelMenus'>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }}>
            {HomeIcon}
            {text && <div>Home</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {SearchIcon}
            {text && <div>Search</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {ExploreIcon}
            {text && <div>Explore</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {ReelsIcons}
            {text && <div>Reels</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {MessageIcon}
            {text && <div>Message</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {HeartIcon}
            {text && <div>Notifiction</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {CreateIcon}
            {text && <div>Create</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {MoreIcon}
            {text && <div>More</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            <img src={image} className='Sidebarprofileimage' />
            {text && <div>Profile</div>}
          </NavLink>
        </div>
      </div>
    </div>


  )
}

export default SidePanel