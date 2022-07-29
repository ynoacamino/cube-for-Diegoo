import React from 'react';
import one from '../imgs/one.gif';
import cero from '../imgs/logoCube2.svg';
import './Gif.css';

function Cat({ live }) {
  return (
    <div>
      <img
        className="imgCat"
        style={{ display: !live && 'none' }}
        src={one}
        alt="catGif"
      />
      <img
        className="imgCat"
        style={{ display: live && 'none' }}
        src={cero}
        alt="catGif"
      />
    </div>
  );
}

export default Cat;
