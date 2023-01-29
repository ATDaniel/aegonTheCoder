import React from 'react';
import './SetupItem.scss';

const SetupItem = ({ item }) => {

  return (
    <div className='setupItem'>
      <div className='setupItem-image'>
        <img id='gearImage' src={item.imageLink} alt="missing"/>
      </div>
      <div className='setupItem-details'>
        <div className='setupItem-title'>
          <a href={item.link} target='_blank' rel='noreferrer'>{item.name}</a>
        </div>
        <div className='setupItem-body'>
          <p>{item.body}</p>
        </div>
      </div>
    </div>
  );
};

export default SetupItem;