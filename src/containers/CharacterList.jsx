import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/CharacterList.scss';

const CharacterList = ({ children, pagination: { nextPage, prevPage } }) => {

  return (
    <div className='character-list'>
      <div className='character-list__content'>

        {children}
      </div>
      <div className='character-list__button-container'>
        {prevPage &&
          <Link to={prevPage}>
            <button className='character-list__button' >Prev Page</button>
          </Link>
        }
        {nextPage &&
          <Link to={nextPage}>
            <button className='character-list__button'>Next Page</button>
          </Link>
        }
      </div>
    </div>
  );
}

export { CharacterList };