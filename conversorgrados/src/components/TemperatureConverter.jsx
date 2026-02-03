import { useState } from 'react'

export default function TemperatureConverter() {
  const [value, setValue] = useState('')
  const [mode, setMode] = useState('CtoF')

  const parsed = parseFloat(value)
  const isValid = !Number.isNaN(parsed)

  let result = ''
  if (isValid) {
    if (mode === 'CtoF') {
      result = (parsed * 9 / 5 + 32).toFixed(2) + ' °F'
    } else {
      result = ((parsed - 32) * 5 / 9).toFixed(2) + ' °C'
    }
  }

  return (
    <section className="converter">
      <h2>Conversor de Temperatura</h2>

      <div className="converter-row">
        <label className="converter-label">
          Temperatura
          <input
            className="converter-input"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ej. 25"
          />
        </label>

        <label className="converter-label">
          Conversión
          <select
            className="converter-select"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="CtoF">Celsius → Fahrenheit</option>
            <option value="FtoC">Fahrenheit → Celsius</option>
          </select>
        </label>
      </div>

      <div className="converter-result" aria-live="polite">
        {value === '' ? 'Introduce una temperatura' : isValid ? `Resultado: ${result}` : 'Valor no válido'}
      </div>
    </section>
  )
}
