import React from 'react';
import './sidePanel.css'
import { Link, NavLink } from 'react-router-dom';
import { HomeIcon, SearchIcon, HeartIcon, CreateIcon, MoreIcon, ProfileIcon, ExploreIcon, ReelsIcons, MessageIcon, } from '../Lib/svg';
import image from '../nature.jpg'
const SidePanel = () => {
  const text = true;
  const Background = "Black";
  const textColor = "white";
  return (

    <div className='sideParent'>
      <div className='logo'>Instagram</div>
      <div className='Toolbar'>
        <div>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }}>
            {HomeIcon}
            {text && <span>Home</span>}
          </NavLink>
        </div>
        <div>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {SearchIcon}
            {text && <span>Search</span>}
          </NavLink>
        </div>
        <div>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {ExploreIcon}
            {text && <span>Explore</span>}
          </NavLink>
        </div>
        <div>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {ReelsIcons}
            {text && <span>Reels</span>}
          </NavLink>
        </div>
        <div>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {MessageIcon}
            {text && <span>Message</span>}
          </NavLink>
        </div>
        <div>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {HeartIcon}
            {text && <span>Notifiction</span>}
          </NavLink>
        </div>
        <div>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {CreateIcon}
            {text && <span>Create</span>}
          </NavLink>
        </div>
        <div>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            {MoreIcon}
            {text && <span>More</span>}
          </NavLink>
        </div>
        <div>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
            <img src={image} className='Sidebarprofileimage' />
            {text && <span>Profile</span>}
          </NavLink>
        </div>

      </div>
    </div>


  )
}

export default SidePanel