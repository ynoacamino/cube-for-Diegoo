import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Gif from './Gif/Gif';
import ModuleTime from './ModuleTime/ModuleTime';
import desarmador from './Scramble/main';

import Scramble from './Scramble/Scramble';

function App() {
  const [scram, setScram] = useState(desarmador());
  const end = (time) => {
    console.log(time, scram);
    setScram(desarmador());
  };
  return (
    <>
      <Header />
      <div className="App">
        <Gif />
        <Scramble scramble={scram} />
        <ModuleTime end={(time) => end(time)} />
        <span className="instruccionesApp">Presiona spacio</span>
      </div>
    </>
  );
}

export default App;
