import { useState } from 'react'
import './App.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Analizador de Resultados</h1>
          <p className="hero-subtitle">Interfaz moderna y accesible para experimentar con un contador simple</p>
        </div>
      </header> 
      <div className="card">
        <div className="counter">
          <div className="counter-value" aria-live="polite">{count}</div>
          <div className="counter-buttons">
            <button className="decrement" onClick={() => setCount(c => c - 1)}>Decrementar</button>
            <button className="increment" onClick={() => setCount(c => c + 1)}>Incrementar</button>
          </div>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
