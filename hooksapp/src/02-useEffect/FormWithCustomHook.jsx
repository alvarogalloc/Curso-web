import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

const FormWithCustomHook = () => {
  const { formState, onChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = formState
  return (
    <>
      <h1>Formulario Simple</h1>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onChange}
        />
        <input
          type="email"
          className="form-control mt-2"
          placeholder="alvaro@gallo.com"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          className="form-control mt-2"
          placeholder="contraseña"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button onClick={onResetForm} className="btn btn-primary" type="submit">
          Borrar
        </button>
      </form>
    </>
  )
}
export default FormWithCustomHook
