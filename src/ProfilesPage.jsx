import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"

const ProfilesPage = () => {

    const profiles = [1, 2, 3, 4, 5]

    return (
        <div className='p-5 col'>
            {profiles.map((profile) => (
                <NavLink className={({isActive}) => {
                    return isActive ? 'text-secondary' : ''
                }} key={profile} to={`/profiles/${profile}`}>
                    Profile: {profile}
                </NavLink>
            ))}
            <Outlet />
        </div>
    )
}

export default ProfilesPage
