import renderer from 'react-test-renderer'

import HeatmapGraph from '@/components/modules/charts/heatmap-matrix'
import { revenueTable } from '@/__mocks__/charts/revenue'

describe('<HeatmapGraph> snapshot', () => {
  it('renders correctly', () => {
    expect(
      renderer
        .create(
          <HeatmapGraph
            data={revenueTable}
            indexBy='year'
            keys={[
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'Total',
            ]}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })
})
