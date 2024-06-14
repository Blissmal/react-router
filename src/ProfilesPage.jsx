import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"

const ProfilesPage = () => {

    const profiles = [1, 2, 3, 4, 5]

    return (
        <div className='p-5'>
            {profiles.map((profile) => (
                <Link className='row' key={profile} to={`/profiles/${profile}`}>
                    Profile: {profile}
                </Link>
            ))}
        </div>
    )
}

export default ProfilesPage
