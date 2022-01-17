import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/LocationList.scss';

const LocationList = ({ children, getNextPage, getPrevPage }) => {


  return (
    <div className='location-list'>
      <h1 className='location-list__title'>Locations</h1>
      <div className='location-list__wrapper'>
        <div className='location-list__header' >
          <span>Name</span>
          <span>Type</span>
          <span>Dimension</span>
          <span></span>
        </div>
        {children}
      </div>
      <div className='location-list__button-wrapper' >
        {getPrevPage() &&
          <Link to={getPrevPage()}>
            <button>Prev Page</button>
          </Link>
        }
        {getNextPage() &&
          <Link to={getNextPage()}>
            <button>Next Page</button>
          </Link>
        }
      </div>
    </div>
  );
}

export { LocationList };