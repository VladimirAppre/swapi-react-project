import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        Что - то критично пошло  не так
      </span>
      <span>
        (но мы послали дроидов чтоб все починить...)
      </span>
    </div>
  );
};

export default ErrorIndicator;