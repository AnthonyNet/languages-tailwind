import React from 'react'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div>
    <h1>404</h1>
    <p>page not found</p>
    <Link to='/'>back Home</Link>
    </div>
  )
}

export default Error