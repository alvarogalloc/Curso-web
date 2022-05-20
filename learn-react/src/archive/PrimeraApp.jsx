import propTypes from 'prop-types'
import React from 'react'

const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  )
}

PrimeraApp.propTypes = {
  saludo: propTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
  saludo: 'Hola soy Goku',
  subtitulo: 'Soy un subtitulo',
}

export default PrimeraApp
