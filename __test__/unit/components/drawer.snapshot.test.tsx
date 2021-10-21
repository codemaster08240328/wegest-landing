import renderer from 'react-test-renderer'
import Drawer from '@/components/layout/drawer'

describe('<Drawer> snapshot', () => {
  it('renders without icon', () => {
    expect(renderer.create(<Drawer />).toJSON()).toMatchSnapshot()
  })

  it('renders with icon', () => {
    expect(renderer.create(<Drawer icon='email' />).toJSON()).toMatchSnapshot()
  })
})
