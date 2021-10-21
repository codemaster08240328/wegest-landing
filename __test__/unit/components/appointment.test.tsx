import { cleanup, render, screen } from '@testing-library/react'
import Appointment from '@/components/appointment'

describe('<Appointment> DOM', () => {
  afterEach(cleanup)

  it('renders correctly title', () => {
    render(<Appointment />)
    expect(screen.getByTestId('appt-title').textContent).toBe(
      'YOUR APPOINTMENTS'
    )
  })

  it('renders correctly contents', () => {
    render(<Appointment />)
    expect(
      screen.getByTestId('appt-content').firstElementChild?.querySelector('h3')
        ?.textContent
    ).toBe('Today')
    expect(
      screen.getByTestId('appt-content').lastElementChild?.querySelector('h3')
        ?.textContent
    ).toBe('2 days later')
  })

  it('renders correctly without points props', () => {
    render(<Appointment />)
    expect(
      screen.getByTestId('appt-content').firstElementChild?.querySelector('p')
        ?.textContent
    ).toBe('0')
    expect(
      screen.getByTestId('appt-content').lastElementChild?.querySelector('p')
        ?.textContent
    ).toBe('0')
  })

  it('renders correctly with points props', () => {
    render(<Appointment points={[3, 2, 4]} />)
    expect(
      screen.getByTestId('appt-content').firstElementChild?.querySelector('p')
        ?.textContent
    ).toBe('3')
    expect(
      screen.getByTestId('appt-content').lastElementChild?.querySelector('p')
        ?.textContent
    ).toBe('4')
  })
})
