import React from 'react';
import './LateralBar.css';
import closeIco from '../../imgs/close.png';

function LateralBar({ open, func }) {
  return (
    <ul className={`NavMobile ${open && 'NavMobileView'}`}>
      <li className="li">
        <a className=" navLink " href="/">Inicio</a>
      </li>
      <li className="li">
        <a className=" navLink " href="/">Productos</a>
      </li>
      <li className="li">
        <a className=" navLink " href="/">Marcas</a>
      </li>
      <li className="li">
        <a className=" navLink " href="/">Tiendas</a>
      </li>
      <li className="li">
        <a className=" navLink " href="/">Comprar</a>
      </li>
      <button
        type="button"
        className="btnExit pointer"
        onClick={func}
      >
        <img src={closeIco} alt="close" className="imgCloseIco" />
      </button>
    </ul>
  );
}

export default LateralBar;
