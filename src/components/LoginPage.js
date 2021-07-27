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
            console.log('Here is the data: ', res.data.payload);
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username" 
                    type="text"
                    name= 'username'
                    placeholder='Username'
                    onChange={handleChanges}
                    value={formValues.username}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password" 
                    type='text'
                    name='password'
                    placeholder='Password'
                    onChange={handleChanges}
                    value={formValues.password}
                />
                <button>Login</button>
       </form>
            
        </div>
    )
}

export default LoginPage