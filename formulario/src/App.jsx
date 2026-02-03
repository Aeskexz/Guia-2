import Login from './components/Login'
import './App.css'

export default function App() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Formulario de Login</h1>
          <p className="hero-subtitle">Ingresa usuario y contraseña para acceder (demo)</p>
        </div>
      </header>

      <main className="container">
        <section className="card">
          <Login />
        </section>
      </main>

      <footer className="footer">Demo — credenciales: <code>admin</code> / <code>admin123</code></footer>
    </>
  )
}
