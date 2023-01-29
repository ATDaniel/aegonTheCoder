import React from 'react';
import './Links.scss';

const Links = () => {

  return(
    <div className='links'>
      <div className='links-title'>
        <h3>Links</h3>
      </div>
      <div className='links-body'>
        <a href='https://twitch.tv/aegonthecoder' target='_blank' rel='noreferrer'>Twitch <br/></a>

        <a href='https://www.youtube.com/@aegonthecoder7232/featured' target='_blank' rel='noreferrer'>Youtube</a>
      </div>
    </div>
  )
}

export default Links;
