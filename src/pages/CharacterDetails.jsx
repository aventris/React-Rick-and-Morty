import React from 'react';
import { useParams } from 'react-router-dom';

import { Loading } from '@components/Loading';

import '@styles/CharacterDetails.scss';

const CharacterDetails = () => {
  const [loading, setLoading] = react.useState(true);
  const [character, setCharacter] = react.useState({})
  const { id: characterId } = useParams();

  react.useEffect(async () => {
    let charInfo = {}
    let res = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
    let data = await res.json();
    charInfo = { ...data }
    if (charInfo.origin.url) {

      res = await fetch(charInfo.origin.url);
      data = await res.json();
      charInfo = { ...charInfo, origin: { ...data } };
    }
    if (charInfo.location.url) {

      res = await fetch(charInfo.location.url);
      data = await res.json();
      charInfo = { ...charInfo, location: { ...data } };
    }
    setCharacter(charInfo);
    setLoading(false);

  }, []);

  return (
    <div className='character'>
      <h1 className='character__title'>{loading ? "Loading..." : character.name}</h1>
      {loading && <Loading />}
      {!loading && (
        <div className='character__info-wrapper'>
          <img className='character__image' src={character.image} alt="" />
          <h2>Character Info</h2>
          <div className='character__line-wrapper'>
            <div className='character__column-wrapper'>
              <span>Status</span>
              <span>{character.status}</span>
            </div>
            <div className='character__column-wrapper'>
              <span>Species</span>
              <span>{character.species}</span>
            </div>
            <div className='character__column-wrapper'>
              <span>Type</span>
              <span>{character.type || "-"}</span>
            </div>
            <div className='character__column-wrapper'>
              <span>Gender</span>
              <span>{character.gender}</span>
            </div>
          </div>
          <h2>Origin Info</h2>
          <div className='character__line-wrapper'>
            <div className='character__column-wrapper'>
              <span>Name</span>
              <span>{character.origin.name || "unknown"}</span>
            </div>
            <div className='character__column-wrapper'>
              <span>Type</span>
              <span>{character.origin.type || "unknown"}</span>
            </div>
            <div className='character__column-wrapper'>
              <span>Dimension</span>
              <span>{character.origin.dimension || "unknown"}</span>
            </div>
          </div>
          <h2>Location Info</h2>
          <div className='character__line-wrapper'>
            <div className='character__column-wrapper'>
              <span>Name</span>
              <span>{character.location.name || "unknown"}</span>
            </div>
            <div className='character__column-wrapper'>
              <span>Type</span>
              <span>{character.location.type || "unknown"}</span>
            </div>
            <div className='character__column-wrapper'>
              <span>Dimension</span>
              <span>{character.location.dimension || "unknown"}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { CharacterDetails };