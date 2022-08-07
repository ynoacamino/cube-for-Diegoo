import React from 'react';
import cero from '../imgs/gif012.gif';
import one from '../imgs/newGif12.gif';
import './Gif.css';

function Cat({ live }) {
  return (
    <div>
      <img
        className="imgCat"
        style={{ display: live && 'none' }}
        src={one}
        alt="catGif"
      />
      <img
        className="imgCat"
        style={{ display: !live && 'none' }}
        src={cero}
        alt="catGif"
      />
    </div>
  );
}

export default Cat;
