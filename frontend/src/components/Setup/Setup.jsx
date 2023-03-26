import React, { useEffect, useState } from 'react';
import SetupItem from './SetupItem/SetupItem';
import { getGear } from '../../api/apiService';
import './Setup.scss';

const Setup = () => {
  const [gearList, setGearList] = useState([]);

  useEffect(() => {
    getGear().then((gear) => {
      setGearList(gear);
    });
  }, []);

  if (!gearList) {
    return <h2>Loading...</h2>
  }

  return(
    <div className='setup'>
      <div className='setup-title'>
        <h3>Setup</h3>
      </div>
      <div className='setup-gearList'>
        {gearList.map((gearItem) => 
          <SetupItem item={gearItem}/>
        )}
      </div>
    </div>
  )
}

export default Setup;
