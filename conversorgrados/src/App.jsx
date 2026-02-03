import { useEffect, useState } from 'react'
import TemperatureConverter from './components/TemperatureConverter'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  function navigate(to) {
    if (to === path) return
    window.history.pushState({}, '', to)
    setPath(to)
  }

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Conversor de Grados</h1>
          <nav className="nav">
            <button className={path === '/' ? 'active' : ''} onClick={() => navigate('/')}>Inicio</button>
            <button className={path === '/converter' ? 'active' : ''} onClick={() => navigate('/converter')}>Conversor</button>
          </nav>
        </div>
      </header>

      <main className="container">
        {path === '/converter' ? (
          <section className="card">
            <TemperatureConverter />
          </section>
        ) : (
          <section className="card">
            <Counter />
          </section>
        )}
      </main>

      <footer className="footer">Hecho con React + Vite</footer>
    </>
  )
}

export default App
