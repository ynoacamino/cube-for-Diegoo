/* eslint-disable react-hooks/exhaustive-deps */
import './ModuleTime.css';
import React, { useEffect, useRef, useState } from 'react';
import Clock from './Clock/Clock';
import Reloj from './Reloj/Reloj';

function ModuleTime({ end, isLive }) {
  const [time, setTime] = useState(0);
  const [live, _setLive] = useState(false);
  const liveRef = useRef(false);
  const setLive = (valor) => {
    _setLive(valor);
    liveRef.current = valor;
  };
  const cicle = useRef(0);

  useEffect(() => {
    if (cicle.current === 0 && live === false) {
      cicle.current += 1;
    } else if (cicle.current !== 0 && live === false) {
      end(time);
    }
    isLive();
  }, [live]);

  const go2 = ({ keyCode }) => {
    if (liveRef.current) {
      setLive(false);
    } else if (!liveRef.current && keyCode === 32) {
      setLive(true);
    }
  };

  useEffect(() => {
    const go = ({ keyCode }) => {
      if (liveRef.current) {
        setLive(false);
      } else if (!liveRef.current && keyCode === 32) {
        setLive(true);
      }
    };
    const notScroll = (e) => {
      if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
      }
    };
    window.addEventListener('keyup', go);
    window.addEventListener('keydown', notScroll);
    return () => {
      window.removeEventListener('keyup', go);
      window.removeEventListener('keydown', notScroll);
    };
  }, []);

  const handle = (mSeg) => {
    setTime(mSeg);
  };

  return (
    <div
      className="ModuleTime"
      onTouchEnd={() => go2({ keyCode: 32 })}
    >
      {!live && <Reloj stop={time} />}
      {live && <Clock men={handle} />}
      <span className="instruccionesApp">Presiona spacio</span>
    </div>
  );
}

export default ModuleTime;
