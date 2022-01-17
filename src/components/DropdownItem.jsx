import React from 'react';

import { CharacterDetails } from '@components/CharacterDetails';
import '@styles/DropdownItem.scss'

const DropdownItem = ({ character }) => {
  const [toggleDetails, setToggleDetails] = React.useState(false);

  const handleToggleDetails = () => {
    setToggleDetails(!toggleDetails)
  }
  return (
    <div className='dropdown-item' >
      <img className='dropdown-item__image' src={character.image} alt="" onClick={handleToggleDetails} />
      <span className='dropdown-item__name'>{character.name}</span>
      {toggleDetails &&
        <CharacterDetails id={character.id} handleToggleDetails={handleToggleDetails} />
      }
    </div>

  );
}

export { DropdownItem };