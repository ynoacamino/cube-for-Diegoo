import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Clock from './Clock'

function App() {
  const [count, setCount] = useState(false)
  const [stop, setStop] = useState(0)

  const [live, setLive] = useState(false)
  const [save, setSave] = useState(false)

  const start = () => {
    if(!live) {
      setCount(true)
      setLive(true)
    } else if(live) {
      setCount(false)
      setLive(false)
    }
    
  }

  const handle = (aa) => {
    setStop(aa)
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => start()}>
          count
        </button>

        <p> 
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {!count
      &&
      <h1>{Math.floor(stop / 100) > 9 ? Math.floor(stop / 100) : "0" + Math.floor(stop / 100) } . {stop%100 > 9 ? stop%100 : "0" + stop%100}</h1>}
      {count
      &&
      <Clock men={(ee) => handle(ee)}/>}
    </div>
  )
}

export default App
