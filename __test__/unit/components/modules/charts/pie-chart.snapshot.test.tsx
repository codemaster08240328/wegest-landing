import renderer from 'react-test-renderer'

import PieChart from '@/components/modules/charts/pie-chart'
import { conversions } from '@/__mocks__/charts/conversions'

describe('<PieChart> snapshot', () => {
  it('renders correctly', () => {
    expect(
      renderer
        .create(<PieChart data={conversions} arcLinkLabel='label' />)
        .toJSON(),
    ).toMatchSnapshot()
  })
})
