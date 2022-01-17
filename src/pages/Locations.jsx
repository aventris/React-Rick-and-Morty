import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { LocationList } from '@containers/LocationList';
import { LocationItem } from '@components/LocationItem';
import { Loading } from '@components/Loading';
import { NotFound } from '@pages/NotFound';

import '@styles/Locations.scss';

const API = "https://rickandmortyapi.com/api/location"
const Locations = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [locations, setLocations] = React.useState([]);
  const query = useLocation();

  React.useEffect(async () => {
    try {
      setError(false);
      setLoading(true);

      let res = await fetch(API + query.search);
      if (!res.ok) {
        throw new Error();
      }
      let data = await res.json();
      setLocations(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }

  }, [query])

  const getNextPage = () => {
    let pageQuery = '';
    if (locations.info.next) {
      pageQuery = new URL(locations.info.next).search;
    }
    return pageQuery
  }
  const getPrevPage = () => {
    let pageQuery = '';
    if (locations.info.prev) {
      pageQuery = new URL(locations.info.prev).search;
    }
    return pageQuery
  }




  return (
    <div className='locations'>
      {loading && <Loading />}
      {!loading && error && < NotFound />}
      {!loading && !error &&
        <LocationList getNextPage={getNextPage} getPrevPage={getPrevPage} >
          {locations.results.map(location =>
            <LocationItem key={location.id} location={location} />
          )}
        </LocationList>
      }
    </div>
  );
}

export { Locations };