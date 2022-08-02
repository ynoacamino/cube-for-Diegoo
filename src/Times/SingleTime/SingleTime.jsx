import './SingleTime.css';
import React from 'react';

function SingleTime({ num, time, scramble }) {
  return (
    <div className="SingleTime">
      <span className="numSingleTime">
        {num}
        :
      </span>
      <span className="timeSingleTime">{time}</span>
      <span className="scrambleSingleTime">{scramble}</span>
    </div>
  );
}

export default SingleTime;
