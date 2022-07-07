import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm)

  const onChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    })
  }
  const onResetForm = (e) => {
    e.preventDefault()
    setFormState(initialForm)
  }
  return { formState, onChange, onResetForm }
}
