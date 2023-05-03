import React from 'react';
import Skype from './Skype.gif';

const Spinner=()=> {
  
    return (
      <div className='text-center my-3'>
        <img src={Skype} alt="Loading" />
      </div>
    )
  
}
export default Spinner;