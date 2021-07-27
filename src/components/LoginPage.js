import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialValues  = {
    username: '',
    password: ''
}

const LoginPage = () => {

    const [ formValues, setFormValues ] = useState(initialValues);

    // const history = useHistory();

    const loginSubmit = () => {
        axios.post(`https://buildweekproject.herokuapp.com/api/auth/login`, formValues)
          .then(res => {
            console.log('Here is the data: ', res.data);
            // push('/itemList')
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
        loginSubmit()
    }

    return (
        <div className="login-form-container">
            <h1>Login to access owners page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id="login-username-input" 
                    type="text"
                    name= 'username'
                    placeholder='Username'
                    onChange={handleChanges}
                    value={formValues.username}
                />
                <br/>
                <input
                    id="login-password-input" 
                    type='text'
                    name='password'
                    placeholder='Password'
                    onChange={handleChanges}
                    value={formValues.password}
                />
                <br/>
                <button id="login-button">Login</button>
       </form>
            
        </div>
    )
}

export default LoginPage