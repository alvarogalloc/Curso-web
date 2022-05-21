import { describe, expect, it } from 'vitest'
import { render, screen, userEvent } from '../test-utils'
import CounterApp from './CounterApp'
import React from 'react'

describe('The app should: ', () => {
  it('sum one on pressed +1 button', async () => {
    const user = userEvent.setup()
    render(<CounterApp value={10}/>)
    await user.click(screen.getByRole('add'))
    expect(await screen.findByText(/Count is 11/i)).toBeInTheDocument
  })
  it('reset the counter', async () => {
    const user = userEvent.setup()
    render(<CounterApp value={100}/>)
    await user.click(screen.getByRole('reset'))
    expect(await screen.findByText(/Count is 100/i)).toBeInTheDocument
  })
})
