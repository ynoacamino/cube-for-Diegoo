import './Header.css';
import React from 'react';
import LogoCube from '../imgs/logoCube.png';
import Settings from '../imgs/settings.png';

function Header() {
  return (
    <div className="Header">
      <div className="rightHeader">
        <img src={LogoCube} alt="LogoCubeforDiegoo" className="logoHeader" />
        <span className="titleHeader">Chronomber Cube</span>
      </div>
      <div className="leftHeader">
        <button
          className="btnSettingsHeader pointer"
          type="button"
        >
          <img
            src={Settings}
            alt="icoSettings"
            className="icoSettingsHeader"
          />
        </button>
        <button
          className="btnLoginHeader pointer"
          type="button"
        >
          Log in
        </button>
      </div>
    </div>
  );
}

export default Header;
