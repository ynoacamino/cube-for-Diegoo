import './App.css';
import React, { useState } from 'react';
import Header from './Header/Header';
import Gif from './Gif/Gif';
import Clock from './Clock/Clock';
import Reloj from './Reloj/Reloj';
import Scramble from './Scramble/Scramble';

function App() {
  const [count, setCount] = useState(false);
  const [stop, setStop] = useState(0);

  const [live, setLive] = useState(false);
  //  const [save, setSave] = useState(false);

  // eslint-disable-next-line no-unused-vars
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
    <>
      <Header />
      <div className="App">
        <Gif />
        <Scramble />
        {!count
        && (
          <Reloj stop={stop} />
        )}
        {count && <Clock men={(ee) => handle(ee)} />}
        <span className="instruccionesApp">
          Presiona spacio
        </span>
      </div>
    </>
  );
}

export default App;
