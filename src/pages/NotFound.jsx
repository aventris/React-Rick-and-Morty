import React from 'react';

import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className='notfound'>
      <div className='notfound__tittle-wrapper'>
        <span className='notfound__tittle'>4</span>
        <img className='notfound__image' src="https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png" alt="" />
        <span className='notfound__tittle'>4</span>
      </div>
      <span className='notfound__text'>The page you were looking for doesn't exists. Verify your url and try again</span>
    </div>
  );
}

export { NotFound };