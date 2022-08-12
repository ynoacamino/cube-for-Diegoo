import './Header.css';
import React, { useState } from 'react';
import LogoCube from '../imgs/logoCube2.svg';
import Settings from '../imgs/settings.png';
import LateralBar from './LateralBar/LateralBar';
import icoGoogle from '../imgs/google.png';
import { useAuth } from '../context/firebaseContext';

function Header() {
  const [open, setOpen] = useState(false);
  const {
    loginWithGoogle, user,
  } = useAuth();

  const clickOpen = () => {
    setOpen(!open);
  };

  const googleSingIn = async () => {
    loginWithGoogle();
  };

  return (
    <div className="Header">
      <div className="rightHeader">
        <img src={LogoCube} alt="LogoCubeforDiegoo" className="logoHeader" />
        <span className="titleHeader">Chronomber Cube</span>
      </div>
      <div className="leftHeader">
        {!user && (
        <button
          className="btnLoginHeader pointer"
          type="button"
          onClick={googleSingIn}
        >
          <img src={icoGoogle} alt="google" className="icoGoogle" />
          Log in
        </button>
        )}
        {user && (
          <div
            className="userBox pointer"
          >
            <img
              referrerPolicy="no-referrer"
              src={user.reloadUserInfo.photoUrl}
              alt="userPhoto"
              className="userPhoto"
            />
            {user.displayName}
          </div>
        )}
        <button
          className="btnSettingsHeader pointer"
          type="button"
          onClick={clickOpen}
        >
          <img
            src={Settings}
            alt="icoSettings"
            className="icoSettingsHeader"
          />
        </button>
      </div>
      <div aria-hidden="true" onClick={clickOpen} className={`boxNormalModal ${open && 'boxShadowModal'}`} />
      <LateralBar open={open} func={clickOpen} />
    </div>
  );
}

export default Header;
