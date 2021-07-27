import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const NavBar = () => {

    return (
        <div className="navbar">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/add-produce">Add Produce</Link>
            <Link to="/edit-profile">Edit Profile</Link>
            <Link>Logout</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(NavBar)