import React from 'react';
import { useLocation, Link } from 'react-router-dom';

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
        <>
          <h1 className='locations__title'>Locations</h1>
          <div className='locations__list-wrapper'>
            <div className='locations__list-header' >
              <span>Name</span>
              <span>Type</span>
              <span>Dimension</span>
            </div>
            {locations.results.map(location => (
              <div key={`location-${location.id}`} className='locations__list-item' >
                <span>{location.name}</span>
                <span>{location.type}</span>
                <span>{location.dimension}</span>
              </div>
            ))}
          </div>
          <div className='locations__button-wrapper' >
            {locations.info.prev &&
              <Link to={getPrevPage()}>
                <button>Prev Page</button>
              </Link>
            }
            {locations.info.next &&
              <Link to={getNextPage()}>
                <button>Next Page</button>
              </Link>
            }
          </div>
        </>
      }
    </div>
  );
}

export { Locations };