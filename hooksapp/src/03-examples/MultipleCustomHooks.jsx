import React from 'react'
import { useFetch } from '../hooks/useFetch'

const MultipleCustomHooks = () => {
  const { data, loading, error } = useFetch(
    'https://gist.githubusercontent.com/inescoelho/4a2e848480d2026121f8d5c600ee3c66/raw/f2d2d3dab0d5aded5686b462dcfad7028116e693/HIMYM_quotes.json'
  )
  const { text, name } = !!data && data.quotes[0]
  return (
    <>
      <h1>How I Met Your Mother Quotes</h1>
      <blockquote className="blockquote text-end">
        <p className="mb-1">{text}</p>
        <footer className="blockquote-footer">- {name}</footer>
      </blockquote>
    </>
  )
}

export default MultipleCustomHooks
