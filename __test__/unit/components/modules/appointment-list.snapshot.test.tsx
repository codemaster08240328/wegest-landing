import renderer from 'react-test-renderer'
import AppointmentList from '@/components/modules/appointment-list'

describe('<AppointmentList> snapshot', () => {
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

  it('renders properly with all required props', () => {
    expect(
      renderer.create(<AppointmentList appointments={appointments} />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders with a class', () => {
    expect(
      renderer
        .create(
          <AppointmentList
            className='class-test'
            appointments={appointments}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })
})
