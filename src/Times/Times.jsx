import './Times.css';
import React from 'react';
import trashBin from '../imgs/trash-bin.png';
import SingleTime from './SingleTime/SingleTime';

function Times({ times, reset }) {
  return (
    <div className="Times">
      <div className="headerTimes">
        <span className="titleTimes">Times</span>
        <button
          type="button"
          className="btnRemoveTimes pointer"
          onClick={reset}
        >
          <img src={trashBin} alt="icoTrash" className="icoBtnRemove" />
        </button>
      </div>
      {times.length !== 0
      && times.map((single, index) => (
        <SingleTime
          key={single.scram}
          num={times.length - (index)}
          time={single.time}
          scramble={single.scram}
        />
      ))}
      {times.length === 0 && <span>Aun no hay datos</span>}
    </div>
  );
}

export default Times;
