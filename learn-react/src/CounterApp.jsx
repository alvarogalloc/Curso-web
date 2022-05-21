import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value)
  const handleAdd = () => {
    setCounter(counter + 1)
  }
  const handleReset = () => {
    setCounter(value)
  }
  const handleSubstract = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count is {counter}</h2>
      <button role='add' onClick={handleAdd}>
        +1
      </button>
      <button role='reset' onClick={handleReset}>
        Reset
      </button>
      <button role='substract' onClick={handleSubstract}>
        -1
      </button>
    </>
  )
}
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp
