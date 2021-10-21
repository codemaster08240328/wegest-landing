import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import TextField from '@/components/elements/text-field'

describe('<TextField> DOM', () => {
  afterEach(cleanup)

  it('className props changes root class', () => {
    render(<TextField className='class-1' />)
    expect(screen.getByTestId('class').classList).toContain('class-1')
  })

  it('renders with or without an icon', () => {
    render(<TextField />)
    expect(screen.queryByTestId('icon')).toBeNull()
    cleanup()
    render(<TextField icon='icon-1' />)
    expect(screen.queryByTestId('icon')?.textContent).toBe('icon-1')
  })

  it('renders label in text input', () => {
    render(<TextField label='label-1' />)
    expect(screen.getByTestId('text').firstElementChild?.textContent).toBe(
      'label-1',
    )
  })

  it('onChange prop works correctly', () => {
    const handleChange = jest.fn()
    render(<TextField name='hello' onChange={handleChange} />)
    fireEvent.change(document.querySelector('input[name="hello"]')!, {
      target: { value: 'hello' },
    })
    expect(handleChange).toHaveBeenCalled()
  })

  it('renders helper text', () => {
    render(<TextField helperText='Some important text' />)
    expect(screen.getByTestId('text').lastElementChild?.textContent).toBe(
      'Some important text',
    )
  })
})
