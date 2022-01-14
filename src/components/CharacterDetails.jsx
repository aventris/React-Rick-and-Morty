import React from 'react';

import { Loading } from '@components/Loading';
import { Modal } from '@containers/Modal'

import closeIcon from '@icons/close.png';
import '@styles/CharacterDetails.scss';


const CharacterDetails = ({ id: characterId, handleToggleDetails }) => {
  const [loading, setLoading] = React.useState(true);
  const [character, setCharacter] = React.useState({})
  const ref = React.useRef();


  React.useEffect(() => {
    const checkClick = event => {
      if (ref.current && !ref.current.contains(event.target))
        handleToggleDetails(false);
    };


    document.addEventListener('mousedown', checkClick);
    return () => { document.removeEventListener('mousedown', checkClick) };
  }, [])

  React.useEffect(async () => {
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
    <Modal>

      <div className='character' ref={ref}>
        {loading && <Loading />}
        {!loading && (
          <>
            <h1 className='character__title'>{character.name}</h1>
            <div className='character__info-wrapper'>
              <img className='character__close-icon' src={closeIcon} alt="" onClick={handleToggleDetails} />
              <img className='character__image' src={character.image} alt="" />
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
              <h3>Origin</h3>
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
              <h3>Location</h3>
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
          </>
        )}
      </div>
    </Modal>
  );
}

export { CharacterDetails };