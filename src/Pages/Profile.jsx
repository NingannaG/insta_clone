import React from 'react'
import '../CSS/Profile.css'
import SidePanel from '../Components/SidePanel'
import ProfilepostContainer from '../Components/ProfilepostContainer'
import ProfileInfo from '../Components/ProfileInfo'

const Profile = () => {
    return (
        <>

            <div className='profileParent'>
            <SidePanel />
                <div className='profileContainers'>
                    <ProfileInfo />
                    <ProfilepostContainer />
                </div>
            </div>
        </>

    )
}

export default Profile