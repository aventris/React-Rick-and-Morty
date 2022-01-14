import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Loading } from '@components/Loading'
import '@styles/Episodes.scss';
import { NotFound } from '@pages/NotFound';

const API = "https://rickandmortyapi.com/api/episode"
const Episodes = () => {
  const [episodes, setEpisodes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const query = useLocation()
  React.useEffect(async () => {
    try {
      setError(false);
      setLoading(true);
      let res = await fetch(API + query.search);
      if (!res.ok)
        throw new HttpException(404, "File Not Found");
      let data = await res.json();
      setEpisodes(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [query])

  const getPrevPage = () => {
    let queryParams = ''
    if (episodes.info.prev) {
      queryParams = new URL(episodes.info.prev).search;
    }
    return queryParams;
  }
  const getNextPage = () => {
    let queryParams = '';
    if (episodes.info.next) {
      queryParams = new URL(episodes.info.next).search;
    }
    return queryParams;
  }

  return (
    <div className='episodes'>
      {loading && <Loading />}
      {!loading && error && <NotFound />}
      {!loading && !error &&
        <>
          <div className='episodes__list-wrapper'>
            <div className='episodes__list-header'>
              <span>Episode</span>
              <span>Name</span>
              <span>Air date</span>
            </div>
            {episodes.results.map(episode => (
              <div key={`episode-${episode.id}`} className='episodes__list-item'>
                <span>{episode.episode}</span>
                <span>{episode.name}</span>
                <span>{episode.air_date}</span>
              </div>
            ))}

          </div>
          <div className='episodes__button-wrapper' >
            {episodes.info.prev &&
              <Link to={`/episodes${getPrevPage()}`}>
                <button className='episodes__button'>Prev Page</button>
              </Link>
            }
            {episodes.info.next &&
              <Link to={`/episodes${getNextPage()}`}>
                <button className='episodes__button'>Next Page</button>
              </Link>
            }
          </div>
        </>
      }
    </div>
  );
}

export { Episodes };