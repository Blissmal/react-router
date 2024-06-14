import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to={'/profiles'}>Profiles</Link>
    </div>
  )
}

export default App

