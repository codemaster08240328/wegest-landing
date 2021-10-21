import renderer from 'react-test-renderer'
import Card from '@/components/elements/card'

describe('<Card> snapshot', () => {
  it('renders with props', () => {
    expect(
      renderer.create(
        <Card
          raised
          icon='email'
          className='class-name'
          title='card test'
          date='2021-04-09'
        >
          Hello World!
        </Card>,
      ),
    ).toMatchSnapshot()
  })
})
