import renderer from 'react-test-renderer'
import IconButton from '@/components/elements/icon-button'

describe('<IconButton> snapshot', () => {
  it('renders correclty', () => {
    expect(
      renderer.create(<IconButton icon='add' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders with edge', () => {
    expect(
      renderer
        .create(
          <IconButton icon='add' edge='start'>
            Hello!
          </IconButton>,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders with a class', () => {
    expect(
      renderer
        .create(<IconButton icon='add' className='class-test' />)
        .toJSON(),
    ).toMatchSnapshot()
  })
})
