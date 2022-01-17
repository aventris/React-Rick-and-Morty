import React from 'react'

import { Loading } from '@components/Loading'
import { DropdownItem } from '@components/DropdownItem';

import '@styles/DropdownList.scss'

const DropdownList = ({ children, characters }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(async () => {
    let characterList = [];
    try {
      let i = 0;
      while (i < characters.length) {
        let res = await fetch(characters[i]);
        if (!res.ok) {
          throw new Error();
        }
        let data = await res.json();
        characterList.push(data);
        i++;
      }
      setLoading(false);
      setCharacterList(characterList);
    } catch (error) {

    }
  }, []);

  console.log(characterList)

  return (
    <div className='dropdown-list'>
      {loading && <Loading />}
      {!loading && !error &&
        <div className='dropdown-list__wrapper'>
          {/* {children} */}
          {characterList.map(character => (
            <DropdownItem key={`dropdown-item-${character.id}`} character={character} />
          ))}
        </div>
      }
    </div>
  );
}

export { DropdownList };