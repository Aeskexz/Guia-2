import './App.css'

// 👉 importa las imágenes
import bellingham from './assets/jugadores/bellingham.jpg.png'
import vinicius from './assets/jugadores/vinicius.jpg.png'
import mbappe from './assets/jugadores/mbappe.jpg.jpg'
import lewandowski from './assets/jugadores/lewandowski.jpg.webp'
import pedri from './assets/jugadores/pedri.jpg.webp'
import dejong from './assets/jugadores/dejong.jpg.webp'

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
                {/* IMAGEN */}
                <img
                  src={jugador.foto}
                  alt={jugador.nombre}
                  className="player-img"
                />

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
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 1, nombre: "Jude Bellingham", altura: 1.86, peso: 75, foto: bellingham },
        { id: 2, nombre: "Vinicius Júnior", altura: 1.76, peso: 73, foto: vinicius },
        { id: 3, nombre: "Kylian Mbappé", altura: 1.78, peso: 75, foto: mbappe }
      ]
    },
    {
      id: 2,
      nombre: "FC Barcelona",
      plantilla: [
        { id: 4, nombre: "Robert Lewandowski", altura: 1.85, peso: 81, foto: lewandowski },
        { id: 5, nombre: "Pedri", altura: 1.74, peso: 67, foto: pedri },
        { id: 6, nombre: "Frenkie de Jong", altura: 1.88, peso: 74, foto: dejong }
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
