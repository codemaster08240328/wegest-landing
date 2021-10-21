import renderer from 'react-test-renderer'
import AppointmentListItem from '@/components/modules/appointment-list-item'

describe('<AppointmentListItem> snapshot', () => {
  it('renders properly with all required props', () => {
    expect(
      renderer
        .create(
          <AppointmentListItem
            start='08:25'
            end='08:50'
            customer='Tony Stark'
            service='Hair Cut'
            color='darkgreen'
            onClick={() => null}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders with a class', () => {
    expect(
      renderer
        .create(
          <AppointmentListItem
            className='class-test'
            start='08:25'
            end='08:50'
            customer='Tony Stark'
            service='Hair Cut'
            color='darkgreen'
            onClick={() => null}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })
})
