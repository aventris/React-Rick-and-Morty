import React from "react";
import { Link } from "react-router-dom";

import "@styles/Header.scss";

const Header = () => {
  return (
    <nav className="header">
      <ul className="header__list">
        <li className="header__list-item">
          <Link to="/">Characters</Link>
        </li>
        <li className="header__list-item">
          <Link to="/locations">Locations</Link>
        </li>
        <li className="header__list-item">
          <Link to="/episodes">Episodes</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Header };
