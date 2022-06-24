import React, { useEffect } from 'react'

const Message = ({ message }) => {
  // Obvious use for cleaner function in useeffect
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      console.log(`x: ${x} y: ${y}`)
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])
  return <div>{message}</div>
}

export default Message
