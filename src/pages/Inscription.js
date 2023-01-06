import { useState } from 'react'
import ConnectInscript from './style/ConnectInscript.css'

function FormInscri() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = evt => setEmail(evt.target.value)
  const handlePassword = evt => setPassword(evt.target.value)

  const handleSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Inscription</h1>

      <div id="inputE">
        <input
          class="email border"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <i></i>
      </div>
      <div id="inputP">
        <input
          class="password border"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <i></i>
      </div>

      <button>S'inscrire</button>

      <p class="text">
        Vous avez dèja un compte ?<br></br>Connéctez-vous
      </p>
    </form>
  )
}

export default FormInscri
