/* eslint-disable react-hooks/exhaustive-deps */
// haciendo git add commit push desde termix and vim
import './App.css';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from './Header/Header';
import Gif from './Gif/Gif';
import ModuleTime from './ModuleTime/ModuleTime';
import desarmador from './Scramble/main';
import Times from './Times/Times';
import Average from './Average/Average';
import { useAuth } from './context/firebaseContext';

function App() {
  const [scram, setScram] = useState(desarmador());
  const [times, setTimes] = useState([]);
  const [moveGif, setMoveGif] = useState(false);
  const [statistics, setStatistics] = useState({
    media: '--', best: '--', count: '--', ao5: '--', ao12: '--',
  });
  const [theme, setTheme] = useState('');
  const {
    saveTimes, user, getTimes, loading,
  } = useAuth();

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('dataUser')) && JSON.parse(localStorage.getItem('dataUser')).length > 0) {
      setTimes(JSON.parse(localStorage.getItem('dataUser')));
    } else {
      localStorage.setItem('dataUser', times);
    }
    if (localStorage.getItem('themeUser') && localStorage.getItem('themeUser').length > 0) {
      setTheme(localStorage.getItem('themeUser'));
    } else {
      localStorage.setItem('themeUser', theme);
    }
  }, []);

  useEffect(() => {
    const asincrono = async () => {
      if (!loading) {
        const timesUserGoogle = await getTimes(user.uid);

        if (timesUserGoogle.data().times === 0) {
          saveTimes(times, user.uid);
        } else {
          setTimes(timesUserGoogle.data().times);
        }
      }
    };
    asincrono();
  }, [loading]);

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
    const tempArr5 = times.slice(0, 5)
      .reduce((preObj, currentObj) => currentObj.time + preObj, 0) / 5;
    const tempArr12 = times.slice(0, 12)
      .reduce((preObj, currentObj) => currentObj.time + preObj, 0) / 12;
    const tempMedia = times
      .reduce((preObj, currentObj) => currentObj.time + preObj, 0) / times.length;
    const best = times
      .reduce((preObj, currentObj) => (preObj.time <= currentObj.time
        ? preObj : currentObj), { time: 999999 }).time;
    setStatistics({
      media: Math.round(tempMedia),
      best,
      count: times.length,
      ao5: times.length >= 5 ? Math.round(tempArr5) : '- -',
      ao12: times.length >= 12 ? Math.round(tempArr12) : '- -',
    });
    if (user) saveTimes(times, user.uid);
  }, [times]);

  useEffect(() => {
    localStorage.setItem('themeUser', theme);
  }, [theme]);

  const animBodyTimer = useAnimation();
  const animScrmble = useAnimation();

  useEffect(() => {
    if (!moveGif) {
      animBodyTimer.start('start');
      animScrmble.start('min');
    } else {
      animBodyTimer.start('end');
      animScrmble.start('normal');
    }
  }, [moveGif]);

  const variantes = {
    start: {
      scale: [1, 1.3, 1.25],
      height: window.innerHeight > 800 ? window.innerHeight - 260 : window.innerHeight * (7.5 / 10),
      transition: {
        duration: 0.3,
      },
    },
    end: {
      scale: [1.3, 1],
      transition: {
        duration: 0.2,
      },
      height: 520,
    },
    min: {
      scale: 0,
      transition: {
        duration: 0.3,
      },
    },
    normal: {
      scale: 1,
    },
  };
  return (
    <div id="body" data-theme={theme}>
      <Header changeTheme={(newTheme) => changeTheme(newTheme)} theme={theme} />
      <div className="App">
        <motion.div
          className="bodyTimer"
          animate={animBodyTimer}
          variants={variantes}
        >
          <Gif live={moveGif} />
          <motion.div
            className="Scramble"
            animate={animScrmble}
            variants={variantes}
          >
            {scram}
          </motion.div>
          <ModuleTime end={(time) => end(time)} isLive={(live) => liveGif(live)} />
        </motion.div>
        <Average statistics={statistics} />
        <Times
          times={times}
          reset={reset}
          DNF={(a, b) => DNF(a, b)}
          moreTwo={(a, b) => moreTwo(a, b)}
          removeSingle={(a, b) => removeSingle(a, b)}
        />
      </div>
    </div>
  );
}

export default App;
