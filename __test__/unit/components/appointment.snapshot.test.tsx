import renderer from 'react-test-renderer'
import Appointment from '@/components/appointment'

describe('<Appointment> snapshot', () => {
  it('renders correctly without points props', () => {
    expect(renderer.create(<Appointment />).toJSON()).toMatchSnapshot()
  })

  it('renders correctly with points props', () => {
    expect(
      renderer.create(<Appointment points={[3, 2, 4]} />).toJSON()
    ).toMatchSnapshot()
  })
})
