import React from 'react';
import "./Footing.css";

const Footing = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footing'>
      <p className='footing-text'>
        © 2022{currentYear > 2022 ? ` - ${currentYear}` : ''} woahCodes.
      </p>
      <p className='footing-text'>
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footing;
