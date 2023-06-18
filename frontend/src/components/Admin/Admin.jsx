import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { putGear } from '../../api/apiService';
import Login from '../Login/Login';
import './Admin.scss';

const Admin = () => {
  const isAdmin = useSelector(state => state.auth.isAdmin);

  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [link, setLink] = useState('');
  const [imgLink, setImgLink] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await putGear({name, body, link, imgLink});
      setMessage('Item successfully added to gear list');
    } catch (e) {
      console.log('in catch block');
      setMessage(`Something went wrong: ${e}`);
      console.log(`message: ${message}`);
    }

    setTimeout(() => {
      setMessage('');
    }, 5000);
  }

  if (isAdmin) {
    return <Login />;
  }

  return (
    <div className="admin">
      <form onSubmit={handleSubmit}>
        <div className='admin-form'>
          <div className='inputItem'>
            <label htmlFor='name'>Name: </label>
            <input type='text' id='name' onChange={(event) => setName(event.target.value)}/>
          </div>
          <div className='inputItem'>
            <label htmlFor='link'>Link: </label>
            <input type='text' id='link' onChange={(event) => setLink(event.target.value)} />
          </div>
          <div className='inputItem'>
            <label htmlFor='imageLink'>Image Link: </label>
            <input type='text' id='imageLink' onChange={(event) => setImgLink(event.target.value)} />
          </div>
          <div className='inputItem'>
            <label htmlFor='body'>Body: </label>
            <textarea rows='3' id='body' onChange={(event) => setBody(event.target.value)}/>
          </div>
          
          <button type='submit'>Submit</button>
        </div>
      </form>
      <div className='admin-notification'>
        { message }
      </div>
    </div>
  );
};

export default Admin;