/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from './Header/Header';
import Gif from './Gif/Gif';
import ModuleTime from './ModuleTime/ModuleTime';
import desarmador from './Scramble/main';
import Times from './Times/Times';
import Scramble from './Scramble/Scramble';

function App() {
  const [scram, setScram] = useState(desarmador());
  const [times, setTimes] = useState([]);
  const [moveGif, setMoveGif] = useState(false);

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
    if (arrOld[indexTime].moreTwo) {
      arrOld[indexTime].time -= 200;
    } else {
      arrOld[indexTime].time += 200;
    }
    arrOld[indexTime].moreTwo = !arrOld[indexTime].moreTwo;
    setTimes([...arrOld]);
  };

  const liveGif = () => setMoveGif(!moveGif);

  useEffect(() => {
    localStorage.setItem('dataUser', JSON.stringify(times));
  }, [times]);

  const animBodyTimer = useAnimation();

  useEffect(() => {
    if (!moveGif) {
      animBodyTimer.start('start');
    } else {
      animBodyTimer.start('end');
    }
  }, [moveGif]);

  const variantes = {
    start: {
      //      y: -70,
      scale: [1, 1.3, 1.25],
      height: 750,
      transition: {
        duration: 0.3,
      },
    },
    end: {
      //      y: 0,
      scale: [1.3, 1],
      transition: {
        duration: 0.2,
      },
      height: 440,
    },
  };
  return (
    <>
      <Header />
      <div className="App">
        <motion.div
          className="bodyTimer"
          animate={animBodyTimer}
          variants={variantes}
        >
          <Gif live={moveGif} />
          <Scramble scramble={scram} />
          <ModuleTime end={(time) => end(time)} isLive={(live) => liveGif(live)} />

        </motion.div>
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
