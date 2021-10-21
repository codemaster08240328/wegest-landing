import renderer from 'react-test-renderer'

import BarChart from '@/components/modules/charts/bar-chart'
import { revenue } from '@/__mocks__/charts/revenue'
import { departments } from '@/__mocks__/charts/departments'

describe('<BarChart> snapshot', () => {
  it('renders vertical bar graph', () => {
    expect(
      renderer
        .create(
          <BarChart
            data={revenue}
            indexBy='month'
            keys={['2019', '2020', '2021']}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders horizontal bar graph', () => {
    expect(
      renderer
        .create(
          <BarChart
            data={departments}
            layout='horizontal'
            indexBy='department'
            keys={['value']}
            margin={{ top: 10, right: 10, bottom: 100, left: 80 }}
            padding={0.85}
            legends={[]}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendPosition: 'middle',
              legendOffset: -80,
            }}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })
})
