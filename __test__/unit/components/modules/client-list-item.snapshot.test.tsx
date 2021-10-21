import renderer from 'react-test-renderer'
import ClientListItem from '@/components/modules/client-list-item'
import { clientUnderProcessing } from '@/__mocks__/client-mock'

describe('<ClientListItem> snapshot', () => {
  it('renders correclty with props', () => {
    expect(
      renderer
        .create(<ClientListItem client={clientUnderProcessing[2]} />)
        .toJSON(),
    ).toMatchSnapshot()
  })
})
