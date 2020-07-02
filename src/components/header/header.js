import React from "react";
import {Link} from "react-router-dom";

import './header.css';

const Header = ({onServiceChange}) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          SWAPI
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">Персонажи</Link>
        </li>
        <li>
          <Link to="/planets/">Планеты</Link>
        </li>
        <li>
          <Link to="/starships/">Звёздные корабли</Link>
        </li>
        <li>
          <Link to="/login">Войти</Link>
        </li>
        <li>
          <Link to="/secret">Серкет</Link>
        </li>
      </ul>

      <button
        onClick={onServiceChange}
      className='btn btn-primary btn-sm'>
        Сменить Сервис
      </button>
    </div>
  );
};

export default Header;