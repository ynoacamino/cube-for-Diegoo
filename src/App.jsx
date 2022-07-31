import './App.css';
import React from 'react';
import Header from './Header/Header';
import Gif from './Gif/Gif';
import ModuleTime from './ModuleTime/ModuleTime';

import Scramble from './Scramble/Scramble';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Gif />
        <Scramble />
        <ModuleTime />
        <span className="instruccionesApp">Presiona spacio</span>
      </div>
    </>
  );
}

export default App;
