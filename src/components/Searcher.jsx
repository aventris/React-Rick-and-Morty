import React from 'react';

import '@styles/Searcher.scss';

const Searcher = ({ children, input, handleInput, handleSearch }) => {

  return (
    <div className='searcher'>
      <input
        className='searcher__input'
        type="text"
        placeholder='Enter character name'
        value={input}
        onChange={handleInput}
      />
      {children}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export { Searcher };