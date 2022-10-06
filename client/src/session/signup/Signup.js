import React, { useState } from 'react';
import { createAccount } from "/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/To-Do-Tracker/to-do-tracker/client/src/context/user.js";
import '../signup/Signup.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



const Signup = ({ handleCurrentUser }) => {

  const navigate = useNavigate();

  const [state, setState] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    createAccount(state, handleCurrentUser)
    navigate('/to-do')
  }



  return (
        <div>
          <h2> Sign up for free to start listening. </h2>
            <form onSubmit={ handleSubmit } className='form-container'>
                <div>
                    <label htmlFor='username'>Username </label>
                    <input type='text' name='username' id='username' value={ state.username } onChange={ handleChange } />
                </div>
                <div>
                    <label htmlFor='password'>Password </label>
                    <input type='text' name='password' id='password' value={ state.password } onChange={ handleChange } />
                </div>
              <input className='center-submit' type="submit" value='Enter' />
              <div>
                    <h3>Already have an account</h3>
                    <NavLink to="/login"><button className='login'> Login </button></NavLink>
                </div>
            </form>
        </div>
  )
}

export default Signup