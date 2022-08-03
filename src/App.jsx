/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Gif from './Gif/Gif';
import ModuleTime from './ModuleTime/ModuleTime';
import desarmador from './Scramble/main';
import Times from './Times/Times';
import Scramble from './Scramble/Scramble';

function App() {
  localStorage.setItem('data', 'dddd');

  const [scram, setScram] = useState(desarmador());
  const [times, setTimes] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('dataUser')) && JSON.parse(localStorage.getItem('dataUser')).length > 0) {
      setTimes(JSON.parse(localStorage.getItem('dataUser')));
    } else {
      localStorage.setItem('dataUser', times);
    }
  }, []);

  const end = (time) => {
    console.log(times);
    setTimes((oldArray) => [{ time, scram }, ...oldArray]);
    setScram(desarmador());
  };

  const reset = () => {
    setTimes([]);
  };

  useEffect(() => {
    localStorage.setItem('dataUser', JSON.stringify(times));
  }, [times]);

  return (
    <>
      <Header />
      <div className="App">
        <Gif />
        <Scramble scramble={scram} />
        <ModuleTime end={(time) => end(time)} />
        <span className="instruccionesApp">Presiona spacio</span>
        <Times times={times} reset={reset} />
      </div>
    </>
  );
}

export default App;
