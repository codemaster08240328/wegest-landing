import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import RadioGroup from '@/components/elements/radio-group'

describe('<RadioGroup> DOM', () => {
  afterEach(cleanup)

  const comics = [
    { value: 'dc', label: 'DC' },
    { value: 'marvel', label: 'Marvel' },
  ]

  it('className props changes root class', () => {
    render(<RadioGroup className='class-1' />)
    expect(screen.getByTestId('class').classList).toContain('class-1')
  })

  it('renders default value as checked', () => {
    render(<RadioGroup value='no_options' />)
    expect(screen.getByTestId('radio-group').children.length).toBe(0)
    cleanup()
    render(<RadioGroup options={comics} value='dc' />)
    expect(
      screen
        .getByRole('radio', { name: 'DC' })
        ?.nextElementSibling?.classList.toString(),
    ).toContain('checked')
  })

  it('renders or hides label', () => {
    render(<RadioGroup label='label-1' options={comics} value='marvel' />)
    expect(screen.getByTestId('legend')?.textContent).toBe('label-1')
    cleanup()
    render(<RadioGroup options={comics} value='dc' />)
    expect(screen.queryByTestId('legend')).toBeNull()
  })

  it('renders helper text', () => {
    render(<RadioGroup helperText='Some important text' />)
    expect(screen.getByTestId('text')?.textContent).toBe('Some important text')
  })
})
