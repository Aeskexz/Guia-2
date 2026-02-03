import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    // Credenciales de ejemplo (demo)
    const validUser = 'admin'
    const validPass = 'admin123'

    if (!username || !password) {
      setMessage({ type: 'error', text: 'Por favor completa ambos campos.' })
      return
    }

    if (username === validUser && password === validPass) {
      setMessage({ type: 'success', text: `Bienvenido, ${username}!` })
    } else {
      setMessage({ type: 'error', text: 'Credenciales incorrectas.' })
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit} aria-live="polite">
      <label className="form-row">
        <span className="form-label">Usuario</span>
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Tu usuario"
          autoComplete="username"
        />
      </label>

      <label className="form-row">
        <span className="form-label">Contraseña</span>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Tu contraseña"
          autoComplete="current-password"
        />
      </label>

      <div className="form-actions">
        <button type="submit" className="btn-primary">Iniciar sesión</button>
      </div>

      {message && (
        <div className={"form-message " + (message.type === 'success' ? 'success' : 'error')}>
          {message.text}
        </div>
      )}
    </form>
  )
}
