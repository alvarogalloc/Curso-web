import React, { useEffect } from 'react'
import Message from './Message'

const SimpleForm = () => {
  const [formState, setFormState] = React.useState({
    username: 'alvaro',
    email: 'galloalvaro@gmail.com',
  })
  const { username, email } = formState
  const onChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    })
  }
  useEffect(() => {
    //   console.log("se llamo el useEffect");
  }, [])

  useEffect(() => {
    //   console.log("se cambio el formState");
  }, [formState])

  useEffect(() => {
    //   console.log("se cambio el email");
  }, [email])

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
      </form>
      {username === 'alvaro' && <Message message={'el usuario ya existe'} />}
    </>
  )
}
export default SimpleForm
