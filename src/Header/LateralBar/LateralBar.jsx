/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './LateralBar.css';
import closeIco from '../../imgs/close.svg';
import { useAuth } from '../../context/firebaseContext';

function LateralBar({
  open, func, changeTheme, theme,
}) {
  const {
    user, logout,
  } = useAuth();
  return (
    <div className={`NavMobile ${open && 'NavMobileView'}`}>
      <div className="boxSettings">
        <span>Theme:</span>
        <div className="optionsTheme">
          <label htmlFor="white">
            {theme !== 'light' && <input type="radio" name="theme" id="white" onInput={() => changeTheme('light')} />}
            {theme === 'light' && <input type="radio" name="theme" id="white" onInput={() => changeTheme('light')} defaultChecked />}
            Light theme
          </label>

          <label htmlFor="dark">
            {theme === 'dark' && <input type="radio" name="theme" id="dark" onInput={() => changeTheme('dark')} defaultChecked />}
            {theme !== 'dark' && <input type="radio" name="theme" id="dark" onInput={() => changeTheme('dark')} />}
            Dark theme
          </label>

          <label htmlFor="default">
            {theme === 'default' && <input type="radio" name="theme" id="default" onInput={() => changeTheme('default')} defaultChecked />}
            {theme !== 'default' && <input type="radio" name="theme" id="default" onInput={() => changeTheme('default')} />}
            Device default
          </label>
        </div>
        <hr />
        <span>Cube:</span>
        <div className="optionsCube">

          <label htmlFor="2x2x2">
            <input type="radio" name="cube" id="2x2x2" />
            2x2x2 cube
          </label>

          <label htmlFor="3x3x3">
            <input type="radio" name="cube" id="3x3x3" defaultChecked />
            3x3x3 cube
          </label>

          <label htmlFor="4x4x4">
            <input type="radio" name="cube" id="4x4x4" />
            4x4x4 cube
          </label>
        </div>
        <hr />
        {user && (
        <button
          className="btnLogOut pointer"
          type="button"
          onClick={() => { logout(); func(); }}
        >
          Log Out
        </button>
        )}
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
