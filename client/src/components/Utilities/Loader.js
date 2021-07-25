import React from 'react';
import { SpinnerStyles } from '../../utilityStyles';
const Loader = () => {
  return (
    <SpinnerStyles>
      <div className='spinner'>
        <div className='dot1'></div>
        <div className='dot2'></div>
      </div>
    </SpinnerStyles>
  );
};

export default Loader;
