import React, { useEffect, useRef, useState } from 'react';
import Clock from '../Clock/Clock';
import Reloj from '../Reloj/Reloj';

function ModuleTime() {
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
      console.log('finish scramble');
    }
  }, [live]);

  useEffect(() => {
    const go = ({ keyCode }) => {
      if (liveRef.current && keyCode === 32) {
        setLive(false);
      } else if (!liveRef.current && keyCode === 32) {
        setLive(true);
      }
    };

    window.addEventListener('keyup', go);
    return () => {
      window.removeEventListener('keyup', go);
    };
  }, []);

  const handle = (mSeg) => {
    setTime(mSeg);
  };

  return (
    <>
      {!live && <Reloj stop={time} />}
      {live && <Clock men={(mSeg) => handle(mSeg)} />}
    </>
  );
}

export default ModuleTime;
