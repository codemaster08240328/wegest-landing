import { cleanup, render, screen } from '@testing-library/react'
import AppointmentList from '@/components/modules/appointment-list'

describe('<AppointmentList> DOM', () => {
  afterEach(cleanup)

  const appointments = [
    {
      id: 'iron-man',
      start: '08:25',
      end: '08:50',
      customer: 'Tony Stark',
      service: 'Hair Cut',
      color: 'darkgreen',
      onClick: () => null,
    },
    {
      id: 'black-widow',
      start: '08:55',
      end: '09:20',
      customer: 'Natasha Romanoff',
      service: 'Hair Treatment',
      color: 'darkgray',
      onClick: () => null,
    },
    {
      id: 'hulk',
      start: '09:20',
      end: '09:45',
      customer: 'Bruce Banner',
      service: 'Beard Trim',
      color: 'slategray',
      onClick: () => null,
    },
  ]

  it('renders its contents correctly', () => {
    render(<AppointmentList appointments={appointments} />)

    expect(screen.getByTestId('appointments').childNodes.length).toBe(3)
    expect(
      screen
        .getByTestId('appointments')
        .firstElementChild?.children[0]?.querySelector('p')?.textContent,
    ).toBe(appointments[0].start)
    expect(
      screen
        .getByTestId('appointments')
        .firstElementChild?.children[0]?.querySelector('span')?.textContent,
    ).toBe(appointments[0].end)
    expect(
      screen
        .getByTestId('appointments')
        .firstElementChild?.children[1]?.querySelector('p')?.textContent,
    ).toBe(appointments[0].customer)
    expect(
      screen
        .getByTestId('appointments')
        .firstElementChild?.children[1]?.querySelector('span')?.textContent,
    ).toBe(appointments[0].service)
    expect(
      screen
        .getByTestId('appointments')
        .lastElementChild?.children[0]?.querySelector('p')?.textContent,
    ).toBe(appointments[appointments.length - 1].start)
    expect(
      screen
        .getByTestId('appointments')
        .lastElementChild?.children[0]?.querySelector('span')?.textContent,
    ).toBe(appointments[appointments.length - 1].end)
    expect(
      screen
        .getByTestId('appointments')
        .lastElementChild?.children[1]?.querySelector('p')?.textContent,
    ).toBe(appointments[appointments.length - 1].customer)
    expect(
      screen
        .getByTestId('appointments')
        .lastElementChild?.children[1]?.querySelector('span')?.textContent,
    ).toBe(appointments[appointments.length - 1].service)
  })
})
