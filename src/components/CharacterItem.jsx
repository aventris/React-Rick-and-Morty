import React from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className='character-card'>
      <Link to={`/character/${character.id}`}>
        <img className='character-card__image' src={character.image} alt="" />
      </Link>
      <span className='character-card__name'>{character.name}</span>
      <img className='character-card__status-icon' src={mapCharacterStatus[character.status]} alt="" />
      <span className='character-card__subtitle'>{character.species}</span>
      <span className='character-card__text'>{character.gender}</span>

      <span className='character-card__subtitle'>Orign</span>
      <span className='character-card__text'>{character.origin.name}</span>
      <span className='character-card__subtitle'>Location</span>
      <span className='character-card__text'>{character.location.name}</span>
    </div>
  );
}

export { CharacterItem };