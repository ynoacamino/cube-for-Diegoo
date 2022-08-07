import './SingleTime.css';
import React from 'react';
import trash from '../../imgs/trash-bin.png';

function SingleTime({
  num, time, dnfInfo, scramble, removeSingle, moreTwo, DNF, twoSeg,
}) {
  return (
    <div className="SingleTime">
      <div className={`rigthTime ${dnfInfo && 'dnfStyles'}`}>
        <span className="numSingleTime">
          {num}
          :
        </span>
        <span className="timeSingleTime">
          <span className="partTime">{Math.floor(time / 100) > 9 ? Math.floor(time / 100) : `0${Math.floor(time / 100)}` }</span>
          .
          <span className="partTime">
            {time % 100 > 9 ? time % 100 : `0${time % 100}`}
          </span>
        </span>
        <span className="scrambleSingleTime">{scramble}</span>
      </div>
      <div className="leftTime">
        <button className={`btnTime pointer btnMoreTwo ${twoSeg && 'btnOn'}`} type="button" onClick={() => moreTwo(time, scramble)}>
          +2
        </button>
        <button className={`btnTime pointer ${dnfInfo && 'btnOn'}`} type="button" onClick={() => DNF(time, scramble)}>
          DNF
        </button>
        <button className="btnTime pointer" type="button" onClick={() => removeSingle(time, scramble)}>
          <img className="icoBtnTime" src={trash} alt="remove" />
        </button>
      </div>
    </div>
  );
}

export default SingleTime;
