import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Checkbox from '@/components/elements/checkbox'

describe('<Checkbox> DOM', () => {
  afterEach(cleanup)

  it('className props changes root class', () => {
    render(<Checkbox className='class-1' />)
    expect(screen.getByTestId('checkboxContainer').classList).toContain(
      'class-1',
    )
  })

  it('renders label in text input', () => {
    render(<Checkbox label='label-1' />)
    expect(
      screen
        .getByTestId('checkboxContainer')
        .firstElementChild?.querySelector('span.MuiTypography-root')
        ?.textContent,
    ).toBe('label-1')
  })

  // It('onChange prop works correctly', () => {
  //   const handleChange = jest.fn()
  //   render(<Checkbox name='hello' onChange={handleChange} />)
  //   fireEvent.change(document.querySelector('input[name="hello"]')!, {
  //     target: { value: 'hello' },
  //   })
  //   expect(handleChange).toHaveBeenCalled()
  // })
})
