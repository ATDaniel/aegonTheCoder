import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/actions/auth';
import { login } from '../../api/auth';
import './Login.scss';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login({ email, password });
    if (!response.match) {
      setMessage(response.message);

      setTimeout(() => {
        setMessage('');
      }, 10000);
    } else {
      dispatch(setLogin());
    }
  }

  return (
    <div className='login'>
      <h4>Please Log In</h4>
      <div className='login-notification'>
        { message }
      </div>
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