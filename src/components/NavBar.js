import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div className="navbar">
            <Link>Login</Link>
            <Link>Add Produce</Link>
            <Link>Edit Profile</Link>
            <Link>Logout</Link>
        </div>
    )
}

export default NavBar