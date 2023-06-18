import React, { useState } from 'react';
import './Login.scss';


const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='login'>
      <h4>Please Log In</h4>
      <form onSubmit={handleSubmit}>
        <div className='login-form'>
          <div className='inputItem'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className='inputItem'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={(event) => setPassword(event.target.value)} />
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login;