import React from 'react';
import { useSelector } from 'react-redux';
import { deleteGear } from '../../../api/apiService';
import deleteIcon from '../../../assets/delete-button.png'
import './SetupItem.scss';


const SetupItem = ({ item, listChange }) => {
  const id = item.id;
  const { name, imageLink, link, body } = item.content;
  
  const isAdmin = useSelector(state => state.auth.isAdmin);
  
  const deleteItem = async (id) => {
    console.log(id);
    try {
      await deleteGear(id);
      listChange(id);
    } catch (e) {
      console.error(e);
    }
  }

  const renderDelete = () => {
    if (isAdmin) {
      return (
        <div className="deleteButton">
            <img src={ deleteIcon } alt='delete' onClick={() => deleteItem(id)} />
        </div>
      )
    }
  }

  return (
    <div className='setupItem'>
      {renderDelete()}
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