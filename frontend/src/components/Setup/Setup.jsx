import { useSelector } from 'react-redux';
import SetupItem from './SetupItem/SetupItem';
import './Setup.scss';

const Setup = () => {
  const gearList = useSelector(state => state.gear.gearList);

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
