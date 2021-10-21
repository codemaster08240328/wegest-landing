import React from 'react'
import { AxisProps } from '@nivo/axes'
import { ResponsiveHeatMapCanvas, HeatMapCanvasProps } from '@nivo/heatmap'

interface MyResponsiveHeatMapProps extends HeatMapCanvasProps {}

type Axis = AxisProps & {
  renderTick?: null
  orient?: 'top' | 'right' | 'bottom' | 'left'
}

const defaultLeftAxis: Axis = {
  orient: 'left',
  tickSize: 0,
  tickPadding: 5,
  tickRotation: 0,
  legend: '',
  legendPosition: 'middle',
  legendOffset: 0,
}

const defaultTopAxis: Axis = {
  orient: 'top',
  tickSize: 0,
  tickPadding: 5,
  tickRotation: -70,
  legend: '',
  legendOffset: 36,
}

const MyResponsiveHeatMap = ({
  data,
  keys,
  indexBy,
  margin = { top: 20, right: 0, bottom: 0, left: 30 },
  padding = 2,
  axisTop = defaultTopAxis,
  axisLeft = defaultLeftAxis,
}: MyResponsiveHeatMapProps) => (
  <div style={{ width: '100%', height: 120 }}>
    <ResponsiveHeatMapCanvas
      forceSquare
      data={data}
      keys={keys}
      indexBy={indexBy}
      margin={margin}
      padding={padding}
      axisTop={axisTop}
      axisLeft={axisLeft}
      cellOpacity={1}
      labelTextColor='transparent'
      hoverTarget='cell'
      cellHoverOthersOpacity={0.6}
    />
  </div>
)

export default MyResponsiveHeatMap
