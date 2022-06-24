import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  })
  const getData = async () => {
    setState({ ...state, loading: true })
    const resp = await fetch(url)
    const data = await resp.json()

    setState({
      data,
      loading: false,
      hasError: null,
    })
  }
  useEffect(() => {
    getData(url)
  }, [url])

  return { data: state.data, loading: state.loading, error: state.error }
}
