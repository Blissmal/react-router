import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"

const ProfilesPage = () => {

    const profiles = [1, 2, 3, 4, 5]

    return (
        <div className='p-5 col'>
            {profiles.map((profile) => (
                <Link className='' key={profile} to={`/profiles/${profile}`}>
                    Profile: {profile}
                </Link>
            ))}
            <Outlet />
        </div>
    )
}

export default ProfilesPage
