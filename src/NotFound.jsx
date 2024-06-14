import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
      {/* Links are preffered to a tags since they perform client side routing */}
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default NotFound
