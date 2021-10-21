import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import PhoneNumberTextField from '@/components/elements/phone-number-text-field'

describe('<PhoneNumberTextField> DOM', () => {
  afterEach(cleanup)

  it('className props changes root class', () => {
    render(<PhoneNumberTextField className='class-1' />)
    expect(screen.getByTestId('class').classList).toContain('class-1')
  })

  it('renders with or without defaultCountry', () => {
    const { container: italy } = render(<PhoneNumberTextField />)
    expect(italy.querySelectorAll('.flag')[0]?.classList).toContain('it')
    cleanup()
    const { container: se } = render(
      <PhoneNumberTextField defaultCountry='se' />,
    )
    expect(se.querySelectorAll('.flag')[0]?.classList).toContain('se')
  })

  it('renders label', () => {
    render(<PhoneNumberTextField label='label-1' />)
    expect(screen.getByTestId('class').firstElementChild?.textContent).toBe(
      'label-1',
    )
  })

  it('onChange prop works correctly', () => {
    const handleChange = jest.fn()
    render(<PhoneNumberTextField name='phone' onChange={handleChange} />)
    fireEvent.change(document.querySelector('input[name="phone"]')!, {
      target: { value: 'phone' },
    })
    expect(handleChange).toHaveBeenCalled()
  })

  it('renders helper text', () => {
    render(<PhoneNumberTextField helperText='Some important text' />)
    expect(screen.getByTestId('class').lastElementChild?.textContent).toBe(
      'Some important text',
    )
  })
})
