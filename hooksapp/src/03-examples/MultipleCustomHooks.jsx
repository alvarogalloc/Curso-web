import React from 'react'
import { useFetch, useCounter } from '../hooks'
import LoadingQuote from './LoadingQuote'
import Quote from './Quote'

const MultipleCustomHooks = () => {
  const { data, loading } = useFetch(
    'https://gist.githubusercontent.com/inescoelho/4a2e848480d2026121f8d5c600ee3c66/raw/f2d2d3dab0d5aded5686b462dcfad7028116e693/HIMYM_quotes.json'
  )
  const { counter, increment } = useCounter(1)
  const { text, name } = !!data && data.quotes[counter]
  return (
    <>
      <h1>How I Met Your Mother Quotes</h1>
      <hr />
      {loading ? <LoadingQuote /> : <Quote text={text} author={name} />}
      <button
        disabled={loading}
        onClick={() => increment()}
        className='btn btn-primary'>
        Next quote
      </button>
    </>
  )
}

export default MultipleCustomHooks
