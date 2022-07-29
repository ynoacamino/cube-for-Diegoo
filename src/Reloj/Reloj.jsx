import './Reloj.css';
import React from 'react';

function Reloj({ stop }) {
  return (
    <span className="Reloj">
      {Math.floor(stop / 100) > 9 ? Math.floor(stop / 100) : `0${Math.floor(stop / 100)}` }
      .
      {' '}
      {stop % 100 > 9 ? stop % 100 : `0${stop % 100}`}
    </span>
  );
}

export default Reloj;
