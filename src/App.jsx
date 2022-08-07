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
    setTimes((oldArray) => [{
      time, scram, moreTwo: false, dnfInfo: false,
    }, ...oldArray]);
    setScram(desarmador());
  };

  const reset = () => {
    setTimes([]);
  };

  const DNF = (a, b) => {
    const indexTime = times.findIndex((element) => element.scram === b);
    const arrOld = times;
    arrOld[indexTime].dnfInfo = !(arrOld[indexTime].dnfInfo);
    setTimes([...arrOld]);
  };

  const removeSingle = (a, b) => {
    const indexTime = times.findIndex((element) => element.scram === b);
    const arrOld = times;
    arrOld.splice(indexTime, 1);
    setTimes([...arrOld]);
  };

  const moreTwo = (a, b) => {
    const indexTime = times.findIndex((element) => element.scram === b);
    const arrOld = times;
    // eslint-disable-next-line operator-assignment
    if (arrOld[indexTime].moreTwo) {
      arrOld[indexTime].time -= 200;
    } else {
      arrOld[indexTime].time += 200;
    }
    arrOld[indexTime].moreTwo = !arrOld[indexTime].moreTwo;
    setTimes([...arrOld]);
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
        <Times
          times={times}
          reset={reset}
          DNF={(a, b) => DNF(a, b)}
          moreTwo={(a, b) => moreTwo(a, b)}
          removeSingle={(a, b) => removeSingle(a, b)}
        />
      </div>
    </>
  );
}

export default App;
