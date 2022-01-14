import React from 'react';
import reactDOM from 'react-dom';

import '@styles/Modal.scss';

const Modal = ({ children }) => {
  return reactDOM.createPortal((
    <div className='modal'>
      {children}
    </div>
  ), document.getElementById('modal'));

}

export { Modal };