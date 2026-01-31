import { useState } from 'react'
import './App.css'

function App() {
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState(null)
  const [resultadoTipo, setResultadoTipo] = useState(null) // 'ok' | 'error'

  const validarNumeros = () => {
    if (numero1 === '' || numero2 === '') {
      setResultado('Por favor ingresa ambos números')
      setResultadoTipo('error')
      return false
    }

    const n1 = parseFloat(numero1)
    const n2 = parseFloat(numero2)

    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Por favor ingresa valores numéricos válidos')
      setResultadoTipo('error')
      return false
    }

    return true
  }

  const sumar = () => {
    if (!validarNumeros()) return
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2)
    setResultado(`Resultado de la suma: ${resultadoSuma}`)
    setResultadoTipo('ok')
  }

  const restar = () => {
    if (!validarNumeros()) return
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2)
    setResultado(`Resultado de la resta: ${resultadoResta}`)
    setResultadoTipo('ok')
  }

  const multiplicar = () => {
    if (!validarNumeros()) return
    const resultadoMult = parseFloat(numero1) * parseFloat(numero2)
    setResultado(`Resultado de la multiplicación: ${resultadoMult}`)
    setResultadoTipo('ok')
  }

  const dividir = () => {
    if (!validarNumeros()) return
    if (parseFloat(numero2) === 0) {
      setResultado('Error: División por 0 no permitida')
      setResultadoTipo('error')
      return
    }
    const resultadoDiv = parseFloat(numero1) / parseFloat(numero2)
    setResultado(`Resultado de la división: ${resultadoDiv}`)
    setResultadoTipo('ok')
  }

  const potenciar = () => {
    if (!validarNumeros()) return
    const resultadoPot = Math.pow(parseFloat(numero1), parseFloat(numero2))
    setResultado(`Resultado de la potenciación: ${resultadoPot}`)
    setResultadoTipo('ok')
  }

  const raizCuadrada = () => {
    if (!validarNumeros()) return
    const n1 = parseFloat(numero1)
    const n2 = parseFloat(numero2)

    const r1 = n1 < 0 ? `Raíz de ${n1}: no es real` : `Raíz de ${n1}: ${Math.sqrt(n1)}`
    const r2 = n2 < 0 ? `Raíz de ${n2}: no es real` : `Raíz de ${n2}: ${Math.sqrt(n2)}`

    setResultado(`${r1} \n ${r2}`)
    // si ambos son negativos, marcamos error, si no, OK
    if (n1 < 0 && n2 < 0) setResultadoTipo('error')
    else setResultadoTipo('ok')
  }

  const reiniciar = () => {
    setNumero1('')
    setNumero2('')
    setResultado(null)
    setResultadoTipo(null)
  }

  return (
    <main>
      <div className="card">
        <div className="calculadora">
          <div className="numeros">
            <label className="text">Número 1:</label>
            <input
              className="inputNum"
              type="number"
              value={numero1}
              onChange={(e) => setNumero1(e.target.value)}
            />
          </div>

          <div className="numeros">
            <label className="text">Número 2:</label>
            <input
              className="inputNum"
              type="number"
              value={numero2}
              onChange={(e) => setNumero2(e.target.value)}
            />
          </div>

          <div className="botones">
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={multiplicar}>Multiplicar</button>
            <button onClick={dividir}>Dividir</button>
            <button onClick={potenciar}>Potenciar</button>
            <button onClick={raizCuadrada}>Raíz cuadrada</button>
            <button className="secondary" onClick={reiniciar}>Reiniciar</button>
          </div>

          {resultado && (
            <div className={`resultado ${resultadoTipo === 'error' ? 'error' : 'ok'}`}>
              {resultado}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default App
