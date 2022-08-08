import './Reloj.css';
import React, { useEffect, useState } from 'react';

function Reloj({ stop }) {
  const [press, setPress] = useState('nulo');

  const colorDown = (key) => { if (key === 32) { setPress('pressReloj'); } };

  const colorUp = (key) => { if (key === 32) { setPress('nulo'); } };

  useEffect(() => {
    window.addEventListener('keydown', ({ keyCode }) => colorDown(keyCode));
    window.addEventListener('keyup', ({ keyCode }) => colorUp(keyCode));
    return () => {
      window.removeEventListener('keydown', ({ keyCode }) => colorDown(keyCode));
      window.removeEventListener('keyup', ({ keyCode }) => colorUp(keyCode));
    };
  }, []);
  return (
    <span className={`Reloj ${press}`}>
      {Math.floor(stop / 100) > 9 ? Math.floor(stop / 100) : `0${Math.floor(stop / 100)}` }
      .
      {stop % 100 > 9 ? stop % 100 : `0${stop % 100}`}
    </span>
  );
}

export default Reloj;
