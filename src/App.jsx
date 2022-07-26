import React, { useState } from 'react';
import './App.css';
import Clock from './Clock';
import Cat from './Cat';

function App() {
  const [count, setCount] = useState(false);
  const [stop, setStop] = useState(0);

  const [live, setLive] = useState(false);
  //  const [save, setSave] = useState(false);

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
    <div className="App">
      <div className="boxImages">
        <Cat live={live} />
      </div>
      <h4>Vite + React</h4>
      <div className="card">
        <button onClick={() => start()} type="button">
          count
        </button>

        <p>
          Edit
          {' '}
          <code>src/App.jsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      {!count
      && (
      <h1>
        {Math.floor(stop / 100) > 9 ? Math.floor(stop / 100) : `0${Math.floor(stop / 100)}` }
        {' '}
        .
        {' '}
        {stop % 100 > 9 ? stop % 100 : `0${stop % 100}`}
      </h1>
      )}
      {count
      && <Clock men={(ee) => handle(ee)} />}
    </div>
  );
}

export default App;
