import renderer from 'react-test-renderer'
import ClientList from '@/components/modules/client-list'
import { clientUnderProcessing } from '@/__mocks__/client-mock'

describe('<ClientList> snapshot', () => {
  it('renders correctly with props', () => {
    expect(
      renderer.create(<ClientList clients={clientUnderProcessing} />).toJSON(),
    ).toMatchSnapshot()
  })
})
