import React from "react";

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          SWAPI
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">Персонажи</a>
        </li>
        <li>
          <a href="#">Планеты</a>
        </li>
        <li>
          <a href="#">Звёздные корабли</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;