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

    const signupSubmit = () => {
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
        signupSubmit()
    }

    return (
        <div className="register-form-container">
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
                <input
                    id="market-input" 
                    type='text'
                    name='market'
                    placeholder='Market'
                    onChange={handleChanges}
                    value={formValues.market}
                />
                <br/>
                <button id="register-button">Sign Up!</button>
       </form>
            
        </div>
    )
}

export default SignUpForm