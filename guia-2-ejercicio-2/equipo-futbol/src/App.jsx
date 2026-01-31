import './App.css'

const Equipos = ({ equipos }) => {
  return (
    <div className="containerList">
      <h2 className="title">Equipos de Fútbol</h2>

      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className="nameClub">{equipo.nombre}</h3>

          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className="player" key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                <p>
                  Altura: {jugador.altura} m <br />
                  Peso: {jugador.peso} kg
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function App() {
  // Simula datos desde un JSON
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 1, nombre: "Jude Bellingham", altura: 1.86, peso: 75 },
        { id: 2, nombre: "Vinicius Júnior", altura: 1.76, peso: 73 },
        { id: 3, nombre: "Kylian Mbappé", altura: 1.78, peso: 75 }
      ]
    },
    {
      id: 2,
      nombre: "FC Barcelona",
      plantilla: [
        { id: 4, nombre: "Robert Lewandowski", altura: 1.85, peso: 81 },
        { id: 5, nombre: "Pedri", altura: 1.74, peso: 67 },
        { id: 6, nombre: "Frenkie de Jong", altura: 1.88, peso: 74 }
      ]
    }
  ]

  return (
    <main>
      <div className="card">
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  )
}

export default App
