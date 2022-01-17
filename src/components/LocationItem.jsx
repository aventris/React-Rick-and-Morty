import React from 'react';

import { DropdownList } from '@containers/DropdownList';
import '@styles/LocationItem.scss'

import downArrow from '@icons/arrow-down.png';
import upArrow from '@icons/arrow-up.png';

const LocationItem = ({ location }) => {
  const [toggleResidents, setToggleResidents] = React.useState(false);
  const handleToggleResidents = () => {
    setToggleResidents(!toggleResidents);
  }
  return (
    <div className='location-item' >
      <div
        className=
        {`location-item__wrapper ${location.residents.length === 0 ?
          'location-item__wrapper--nohover'
          : ""}`
        }
        onClick={location.residents.length > 0 ? handleToggleResidents : null}
      >

        <div>{location.name}</div>
        <div>{location.type}</div>
        <div>{location.dimension}</div>
        <div>
          {location.residents.length > 0 &&
            <img src={toggleResidents ? upArrow : downArrow} alt="" />
          }
        </div>
      </div>
      {toggleResidents &&
        <DropdownList characters={location.residents} />
      }
    </div>
  );
}

export { LocationItem }