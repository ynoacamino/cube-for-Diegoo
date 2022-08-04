/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './LateralBar.css';
import closeIco from '../../imgs/close.png';

function LateralBar({ open, func }) {
  return (
    <div className={`NavMobile ${open && 'NavMobileView'}`}>
      <div className="boxSettings">
        <span>Theme:</span>
        <div className="optionsTheme">
          <label htmlFor="white">
            <input type="radio" name="theme" id="white" />
            Light theme
          </label>

          <label htmlFor="dark">
            <input type="radio" name="theme" id="dark" />
            Dark theme
          </label>
        </div>
        <hr />
        <span>Cube:</span>
        <div className="optionsCube">

          <label htmlFor="2x2x2">
            <input type="radio" name="theme" id="2x2x2" />
            2x2x2 cube
          </label>

          <label htmlFor="3x3x3">
            <input type="radio" name="theme" id="3x3x3" />
            3x3x3 cube
          </label>

          <label htmlFor="4x4x4">
            <input type="radio" name="theme" id="4x4x4" />
            4x4x4 cube
          </label>
        </div>
      </div>
      <button
        type="button"
        className="btnExit pointer"
        onClick={func}
      >
        <img src={closeIco} alt="close" className="imgCloseIco" />
      </button>
    </div>
  );
}

export default LateralBar;
