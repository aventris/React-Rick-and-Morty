import React from 'react';

import '@styles/Loading.scss';

const Loading = () => {
  return (
    <div className='loading' >
      <div className="loading__wrapper">
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
      </div>
    </div>
  );
}

export { Loading };