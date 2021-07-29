import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialValues  = {
    username: '',
    password: ''
}

const SignUpForm = () => {

    const [ formValues, setFormValues ] = useState(initialValues);

    const { push } = useHistory();

    const signupSubmit = () => {
        axios.post(`https://buildweekproject.herokuapp.com/api/auth/register`, formValues)
          .then(res => {
            push('/login')
          })
          .catch(err => {
            console.log('Houston, we have a problem: ', err);
          })
        }

    const handleChanges = (e) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signupSubmit()
    }

    return (
        <div className="login-form-container">
            <div className="login-form-subcontainer">
            <h1>Register to list your produce</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id="register-username-input" 
                    type="text"
                    name= 'username'
                    placeholder='Username'
                    onChange={handleChanges}
                    value={formValues.username}
                />
                <br/>
                <input
                    id="register-password-input" 
                    type='text'
                    name='password'
                    placeholder='Password'
                    onChange={handleChanges}
                    value={formValues.password}
                />
                <br/>
                <button className="login-button">Sign Up!</button>
            </form>
            </div>
        </div>
    )
}

export default SignUpForm