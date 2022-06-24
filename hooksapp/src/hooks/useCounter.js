import { useState } from 'react'

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) => setCounter(counter + value)
  const decrement = (value = 1) => setCounter(counter - value)
  const reset = (value) => setCounter(value ? value : initialValue)
  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
