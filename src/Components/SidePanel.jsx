import React from 'react';
import '../CSS/sidePanel.css'
import { NavLink } from 'react-router-dom';
import { HomeIcon, SearchIcon, HeartIcon, CreateIcon, MoreIcon, ProfileIcon, ExploreIcon, ReelsIcons, MessageIcon, } from '../Lib/svg';
import image from '../nature.jpg'

const SidePanel = () => {
  const textColor="white";
  const text=true;
  return (
    <div className='sidePanelParent'>
      <div className='logo'>Instagram</div>
      <div className='panelMenus'>
        <div className='sidePanelMenus'>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }}>
            <div className='sidePanelIcon'>{HomeIcon}</div>
            {text && <div className='sidePanelText'>Home</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/' style={{ textDecoration: "none", color: textColor }} >
          <div className='sidePanelIcon'>{SearchIcon}</div>
          {text && <div className='sidePanelText'>Search</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/explore' style={{ textDecoration: "none", color: textColor }} >
          <div className='sidePanelIcon'>{ExploreIcon}</div>
          {text && <div className='sidePanelText'>Explore</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/reels' style={{ textDecoration: "none", color: textColor }} >
          <div className='sidePanelIcon'>{ReelsIcons}</div>
          {text && <div className='sidePanelText'>Reels</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/message' style={{ textDecoration: "none", color: textColor }} >
          <div className='sidePanelIcon'>{MessageIcon}</div>
          {text && <div className='sidePanelText'>Message</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/notifiction' style={{ textDecoration: "none", color: textColor }} >
          <div className='sidePanelIcon'>{HeartIcon}</div>
          {text && <div className='sidePanelText'>Notifiction</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/create' style={{ textDecoration: "none", color: textColor }} >
          <div className='sidePanelIcon'>{CreateIcon}</div>
          {text && <div className='sidePanelText'>Create</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/more' style={{ textDecoration: "none", color: textColor }} >
          <div className='sidePanelIcon'>{MoreIcon}</div>
          {text && <div className='sidePanelText'>More</div>}
          </NavLink>
        </div>
        <div className='sidePanelMenus'>
          <NavLink to='/Profile' style={{ textDecoration: "none", color: textColor }} >
            <div className='sidePanelIcon'><img src={image} className='Sidebarprofileimage' /></div>
            {text && <div className='sidePanelText'>Profile</div>}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default SidePanel