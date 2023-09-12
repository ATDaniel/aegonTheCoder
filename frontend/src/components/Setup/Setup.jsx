import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGear } from '../../redux/actions/gear';
import { getGear } from '../../api/apiService';
import SetupItem from './SetupItem/SetupItem';
import './Setup.scss';

const Setup = () => {
  const dispatch = useDispatch();
  // const gearList = useSelector(state => state.gear.gearList);
  const [gearList, setGearList ] = useState([]);

  useEffect(() => {
    getGear().then((gear) => {
      setGearList(gear);
    });
  }, []);

  const removeGear = (gearId) => {
    const newList = gearList.filter((item) => item.id !== gearId);
    setGearList(newList);
  }
  

  if (!gearList.length) {
    return <h2>Loading...</h2>
  }

  return(
    <div className='setup'>
      <div className='setup-title'>
        <h3>Setup</h3>
      </div>
      <div className='setup-gearList'>
        {gearList.map((gearItem) => 
          <SetupItem item={gearItem} listChange={removeGear}/>
        )}
      </div>
    </div>
  )
}

export default Setup;
