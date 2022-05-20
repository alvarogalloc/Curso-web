import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import CounterApp from './CounterApp'

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<CounterApp value={10} />)
