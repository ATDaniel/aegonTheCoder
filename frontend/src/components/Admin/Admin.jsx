import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { putGear, } from '../../api/apiService';
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

    console.log(`
    Name: ${name}
    Body: ${body}
    Link: ${link}
    ImageLink: ${imgLink}`);

    const response = putGear({name, body, link, imgLink});
    if (response.status === 200) {
      setMessage('Item successfully added to gear list');
    } else {
      setMessage('Something went wrong');
    }

    setTimeout(() => {}, 3000);
    setMessage('');
  }

  let notification;
  if (message) {
    notification = <p>{ message }</p>
  } else {
    notification = <p></p>
  }

  if (!isAdmin) {
    return <h4>Please Log In</h4>
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
      <div className='admin-messageNotification'>
        { notification }
      </div>
    </div>
  );
};

export default Admin;