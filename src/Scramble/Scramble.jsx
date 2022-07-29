import './Scramble.css';
import React from 'react';
import desarmador from './main';

function Scramble() {
  return (
    <div className="Scramble">
      {desarmador()}
    </div>
  );
}

export default Scramble;
