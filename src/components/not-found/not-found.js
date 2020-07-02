import React from "react";
import notFoundPageImg from '../not-found/images/not-found-page.jpg';

import './not-found.css';

const NotFound = () => {
  return (
    <div className='img-container'>
      <img src={notFoundPageImg} className='imgNotFound'/>
    </div>)
}

export default NotFound;