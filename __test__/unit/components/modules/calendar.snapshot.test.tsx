import renderer from 'react-test-renderer'
import Calendar from '@/components/modules/calendar'

describe('<Calendar> snapshot', () => {
  it('renders correctly', () => {
    expect(
      renderer.create(<Calendar onChange={() => null} />).toJSON(),
    ).toMatchSnapshot()
  })
})
