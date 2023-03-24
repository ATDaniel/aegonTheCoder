import React from 'react';
import './SetupItem.scss';

const SetupItem = ({ item }) => {
  const id = item.id;
  const { name, imageLink, link, body } = item.content;

  return (
    <div className='setupItem'>
      <div className='setupItem-image'>
        <img id='gearImage' src={imageLink} alt="missing"/>
      </div>
      <div className='setupItem-details'>
        <div className='setupItem-title'>
          <a href={link} target='_blank' rel='noreferrer'>{name}</a>
        </div>
        <div className='setupItem-body'>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default SetupItem;