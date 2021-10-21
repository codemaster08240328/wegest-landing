import { cleanup, render, screen } from '@testing-library/react'
import AppointmentListItem from '@/components/modules/appointment-list-item'

describe('<AppointmentListItem> DOM', () => {
  afterEach(cleanup)

  const data = {
    start: '08:25',
    end: '08:50',
    customer: 'Tony Stark',
    service: 'Hair Cut',
    color: 'darkgreen',
    onClick: () => null,
  }

  it('renders its contents correctly', () => {
    render(<AppointmentListItem {...data} />)

    expect(
      screen.getByTestId('timeSlot')?.querySelector('p')?.textContent,
    ).toBe(data.start)
    expect(
      screen.getByTestId('timeSlot')?.querySelector('span')?.textContent,
    ).toBe(data.end)
    expect(
      screen.getByTestId('appointment')?.querySelector('p')?.textContent,
    ).toBe(data.customer)
    expect(
      screen.getByTestId('appointment')?.querySelector('span')?.textContent,
    ).toBe(data.service)
  })
})
