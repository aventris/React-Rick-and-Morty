import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/Header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <ul className='header__list'>
        <li className='header__list-item'><Link to="/">Characters</Link></li>
        <li className='header__list-item'>Locations</li>
        <li className='header__list-item'>Episodes</li>
      </ul>
    </nav>
  );
}

export { Header };