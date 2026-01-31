import './App.css'

const element = (
  <>
    <h1>Hola, Mundo!</h1>
    <h2>Son las {new Date().toTimeString()}</h2>
  </>
)

function App() {
  return (
    <main>
      <div className="card">
        {element}
      </div>
    </main>
  )
}

export default App
