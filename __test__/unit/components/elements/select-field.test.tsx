import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import SelectField from '@/components/elements/select-field'

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

describe('<SelectField> DOM', () => {
  afterEach(cleanup)

  it('className props changes root class', () => {
    render(<SelectField className='class-1' />)
    expect(screen.getByTestId('class').classList).toContain('class-1')
  })

  it('renders with or without an icon', () => {
    render(<SelectField />)
    expect(screen.queryByTestId('icon')).toBeNull()
    cleanup()
    render(<SelectField icon='icon-1' />)
    expect(screen.queryByTestId('icon')?.textContent).toBe('icon-1')
  })

  it('renders label in select input', () => {
    render(<SelectField label='label-1' />)

    expect(
      screen.getByTestId('class').firstElementChild?.querySelector('label')
        ?.textContent,
    ).toBe('label-1')
  })

  it('onChange prop works correctly', () => {
    const handleChange = jest.fn()
    render(
      <SelectField name='hello' options={currencies} onChange={handleChange} />,
    )

    fireEvent.change(document.querySelector('input[name="hello"]')!, {
      target: { value: 'USD' },
    })
    expect(handleChange).toHaveBeenCalled()
  })

  it('renders helper text', () => {
    render(<SelectField helperText='Some important text' />)
    expect(screen.getByTestId('class')?.querySelector('p')?.textContent).toBe(
      'Some important text',
    )
  })
})
