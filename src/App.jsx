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
    console.log('inicio');
    JSON.parse(localStorage.getItem('dataUser'));
    if (localStorage.getItem('dataUser')) {
      setTimes(JSON.parse(localStorage.getItem('dataUser')));
    } else {
      console.log('a');
      localStorage.setItem('dataUser', JSON.stringify(times));
    }
  }, []);

  const end = (time) => {
    setTimes((oldArray) => [...oldArray, { time, scram }]);
    setScram(desarmador());
  };

  useEffect(() => {
    console.log(times);
  }, [times]);

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
