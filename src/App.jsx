import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [doubleMode, setDoubleMode] = useState(false)
  const [autoModeActive, setAutoModeActive] = useState(false)

  const startAutoCookies = () => {
    setAutoModeActive(true)
    setInterval(() => {
      setCount((c) => c + 1)
    }, 2000)
  }

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((c) => c + (doubleMode ? 2 : 1))}>
          <p><b>Cookies {count}</b></p>
        </button>
      </div>

      <br />

      {count >= 20 && !doubleMode && (
        <button onClick={() => setDoubleMode(true)}>
          <p>Multiplicateur de Cookies</p>
        </button>
      )}

      <br></br>
      <br></br>

      {count >= 50 && !autoModeActive && (
        <button onClick={startAutoCookies}>
          <p>Auto-Cookies (1 toutes les 2 sec)</p>
        </button>
      )}
    </>
  )
}

export default App
