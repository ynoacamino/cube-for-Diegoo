import React, { useState } from 'react';
import './App.css';
import Clock from './Clock/Clock';
import Reloj from './Reloj/Reloj';

function AAA() {
  const [count, setCount] = useState(false);
  const [stop, setStop] = useState(0);
  const [live, setLive] = useState(false);

  const start = () => {
    if (!live) {
      setCount(true);
      setLive(true);
    } else if (live) {
      setCount(false);
      setLive(false);
    }
  };

  const handle = (aa) => {
    setStop(aa);
  };

  return (
    <div className="AAA">
      <div className="card">
        <button onClick={() => start()} type="button">
          count
        </button>
      </div>
      {!count
      && (
      <Reloj stop={stop} />
      )}
      {count && <Clock men={(ee) => handle(ee)} />}
    </div>
  );
}

export default AAA;
