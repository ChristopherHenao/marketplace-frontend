import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialValues  = {
    username: '',
    password: '',
    market: ''
}

const SignUpForm = () => {

    const [ formValues, setFormValues ] = useState(initialValues);

    // const history = useHistory();

    const loginSubmit = () => {
        axios.post(`https://buildweekproject.herokuapp.com/api/auth/register`, formValues)
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

                <input
                    id="market" 
                    type='text'
                    name='market'
                    placeholder='market'
                    onChange={handleChanges}
                    value={formValues.market}
                />

                <button>Sign Up!</button>
       </form>
            
        </div>
    )
}

export default SignUpForm