import renderer from 'react-test-renderer'
import Avatar from '@/components/elements/avatar'

describe('<Avatar> snapshot', () => {
  it('renders without props', () => {
    expect(renderer.create(<Avatar />).toJSON()).toMatchSnapshot()
  })

  it('renders with image', () => {
    expect(
      renderer.create(<Avatar src='/images/avatar-test.jpg' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders with image and name', () => {
    expect(
      renderer
        .create(<Avatar src='/images/avatar-test.jpg' name='John Smith' />)
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders with name', () => {
    expect(
      renderer.create(<Avatar name='John Smith' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders with a class', () => {
    expect(
      renderer.create(<Avatar className='class-test' />).toJSON(),
    ).toMatchSnapshot()
  })
})
