import renderer from 'react-test-renderer'
import Icon from '@/components/elements/icon'

describe('<Icon> snapshot', () => {
  it('renders correclty', () => {
    expect(renderer.create(<Icon icon='add' />).toJSON()).toMatchSnapshot()
  })

  it('renders with type', () => {
    expect(
      renderer.create(<Icon icon='add' type='outlined' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders with a class', () => {
    expect(
      renderer.create(<Icon icon='add' className='class-test' />).toJSON(),
    ).toMatchSnapshot()
  })
})
