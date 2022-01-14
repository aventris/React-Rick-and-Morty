import React from 'react';
import { Link } from 'react-router-dom';

import { CharacterDetails } from '@components/CharacterDetails'

import '@styles/CharacterItem.scss';
import heartIcon from '@icons/heart.png';
import skullIcon from '@icons/skull.png';
import unknowIcon from '@icons/unknown.png';

const mapCharacterStatus = {
  'Alive': heartIcon,
  'Dead': skullIcon,
  'unknown': unknowIcon
}

const CharacterItem = ({ character }) => {
  const [toggleDetails, setToggleDetails] = React.useState(false);

  const handleToggleDetails = () => {
    setToggleDetails(!toggleDetails);
  }
  return (
    <>
      <div className='character-item' onClick={handleToggleDetails}>
        <img className='character-item__image' src={character.image} alt="" />
        <span className='character-item__name'>{character.name}</span>
        <img className='character-item__status-icon' src={mapCharacterStatus[character.status]} alt="" />
        <span className='character-item__subtitle'>{character.species}</span>
        <span className='character-item__text'>{character.gender}</span>
        <span className='character-item__subtitle'>Orign</span>
        <span className='character-item__text'>{character.origin.name}</span>
        <span className='character-item__subtitle'>Location</span>
        <span className='character-item__text'>{character.location.name}</span>
      </div>
      {toggleDetails && <CharacterDetails id={character.id} toggleDetails={toggleDetails} handleToggleDetails={handleToggleDetails} />}
    </>
  );
}

export { CharacterItem };