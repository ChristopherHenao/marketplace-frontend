import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logOut } from '../actions/actions';
import { useHistory } from 'react-router';


const NavBar = (props) => {
const { isLoggedIn } = props;
const { push } = useHistory();

const handleLogout = () => {
    props.dispatch(logOut())
    localStorage.removeItem('token')
    push('/');
}

    return (
        <div>
        {isLoggedIn ? 
            <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/add-produce">Add Produce</Link>
            <Link to="/edit-profile">Edit Profile</Link>
            <Link onClick={handleLogout}>Logout</Link>
            </div> 
            : 
            <div className="navbar">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            </div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(NavBar)