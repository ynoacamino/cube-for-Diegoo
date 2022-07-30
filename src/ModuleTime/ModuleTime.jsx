import React, { useEffect, useState } from 'react';
import Clock from '../Clock/Clock';
import Reloj from '../Reloj/Reloj';

function ModuleTime() {
  const [count, setCount] = useState(false);
  const [stop, setStop] = useState(0);
  const [live, setLive] = useState(false);

  const start = (key) => {
    if (!live && key === 32) {
      setCount(true);
      setLive(true);
    } else if (live && key === 32) {
      setCount(false);
      setLive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', ({ keyCode }) => start(keyCode));
    return () => {
      window.removeEventListener('keydown', ({ keyCode }) => start(keyCode));
    };
  }, []);

  const handle = (time) => {
    setStop(time);
  };

  return (
    <>
      <button onClick={() => start(32)} type="button">
        count
      </button>
      {!count
      && (
        <Reloj stop={stop} />
      )}
      {count && <Clock men={(ee) => handle(ee)} />}
    </>
  );
}

export default ModuleTime;
