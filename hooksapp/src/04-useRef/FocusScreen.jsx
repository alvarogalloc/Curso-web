import { useRef } from 'react'

export const FocusScreen = () => {
  const inputRef = useRef(null)

  const onClick = () => {
    inputRef.current.select()
  }
  return (
    <>
      <h1>Input Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type='text'
        placeholder='Ingresa tu nombre'
        className='form-control'
      />
      <button className='btn btn-primary mt-2' onClick={onClick}>
        Focus
      </button>
    </>
  )
}
