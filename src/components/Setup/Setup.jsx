import React from 'react';
import SetupItem from './SetupItem/SetupItem';
import './Setup.scss';

const Setup = () => {
  
  // calls API for gear list. Returns array
  const getGear = () => {
    const testObject = {
      name: 'Lian Li O11 Dynamic',
      body: 'I went with this Lian-Li case because I love the airflow and RGB visability',
      link: 'https://www.amazon.com/gp/product/B07F9TC5W7/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1',
      imageLink: 'https://m.media-amazon.com/images/I/71A4l3VtrbL._AC_SX679_.jpg'
    }
    
    return [testObject];
  }

  const gearList = getGear();

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
