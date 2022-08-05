import './SingleTime.css';
import React from 'react';
import trash from '../../imgs/trash-bin.png';
import dnf from '../../imgs/DNF.svg';
import two from '../../imgs/moreTwo.svg';

function SingleTime({
  num, time, scramble, removeSingle, moreTwo, DNF,
}) {
  return (
    <div className="SingleTime">
      <div className="rigthTime">
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
        <button className="btnTime pointer btnMoreTwo" type="button" onClick={() => moreTwo(time, scramble)}>
          <img className="icoBtnTime" src={two} alt="moreTwo" />
        </button>
        <button className="btnTime pointer" type="button" onClick={() => DNF(time, scramble)}>
          <img className="icoBtnTime" src={dnf} alt="DNF" />
        </button>
        <button className="btnTime pointer" type="button" onClick={() => removeSingle(time, scramble)}>
          <img className="icoBtnTime" src={trash} alt="remove" />
        </button>
      </div>
    </div>
  );
}

export default SingleTime;
