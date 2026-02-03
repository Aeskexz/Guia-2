import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="counter">
      <div className="counter-value" aria-live="polite">{count}</div>
      <div className="counter-buttons">
        <button className="decrement" onClick={() => setCount(c => c - 1)}>Decrementar</button>
        <button className="increment" onClick={() => setCount(c => c + 1)}>Incrementar</button>
      </div>
    </div>
  )
}
