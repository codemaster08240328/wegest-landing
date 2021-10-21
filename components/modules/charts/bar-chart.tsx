import React, { useState } from 'react'
import { AxisProps } from '@nivo/axes'
import { LegendProps, LegendAnchor } from '@nivo/legends'
import {
  ResponsiveBar,
  ResponsiveBarCanvas,
  BarSvgProps,
  BarCanvasProps,
} from '@nivo/bar'

import { toggleLegendOnClick } from '@/lib/helpers'
import CustomSymbolShape from './custom-symbol-shape'

type DataFrom = 'indexes' | 'keys'
type BarProps = BarSvgProps & BarCanvasProps
interface MyResponsiveBarProps extends BarProps {
  type?: 'svg' | 'canvas'
  legendIsClickable?: boolean
  legendAnchor?: LegendAnchor
  legendDataFrom?: DataFrom
}

type Axis = AxisProps & {
  renderTick?: null
}

const defaultLeftAxis: Axis = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: -60,
  legend: '',
  legendPosition: 'middle',
  legendOffset: -40,
}

const defaultBottomAxis: Axis = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: '',
  legendPosition: 'middle',
  legendOffset: 32,
}

const defaultLegends: Array<{ dataFrom: DataFrom } & LegendProps> = [
  {
    dataFrom: 'keys',
    anchor: 'bottom',
    direction: 'row',
    justify: false,
    translateX: 0,
    translateY: 55,
    itemsSpacing: 10,
    itemWidth: 65,
    itemHeight: 20,
    itemDirection: 'left-to-right',
    itemOpacity: 0.85,
    symbolSize: 15,
    effects: [
      {
        on: 'hover',
        style: {
          itemOpacity: 1,
        },
      },
    ],
  },
]

const BarChart = ({ type, ...props }: MyResponsiveBarProps) => {
  if (type === 'svg') return <ResponsiveBar {...props} />

  return <ResponsiveBarCanvas {...props} />
}

const MyResponsiveBar = ({
  data: initialData,
  keys,
  type,
  indexBy,
  layout = 'vertical',
  colors = { scheme: 'nivo' },
  margin = { top: 10, right: 10, bottom: 70, left: 30 },
  padding = 0.2,
  innerPadding = 3,
  groupMode = 'grouped',
  axisLeft = defaultLeftAxis,
  axisBottom = defaultBottomAxis,
  legends = defaultLegends,
  legendIsClickable = false,
  legendAnchor,
  legendDataFrom,
}: MyResponsiveBarProps) => {
  const [data, setData] = useState(initialData)

  if (legends.length > 0) {
    if (legendIsClickable) {
      legends[0].symbolShape = CustomSymbolShape
      legends[0].onClick = (d) => toggleLegendOnClick(d, setData)
    }

    if (legendAnchor) legends[0].anchor = legendAnchor
    if (legendDataFrom) legends[0].dataFrom = legendDataFrom
  }

  return (
    <BarChart
      enableGridX
      data={data}
      minValue={0}
      type={type}
      layout={layout}
      keys={keys}
      indexBy={indexBy}
      margin={margin}
      padding={padding}
      innerPadding={innerPadding}
      groupMode={groupMode}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={colors}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={axisBottom}
      axisLeft={axisLeft}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={legends}
    />
  )
}

export default MyResponsiveBar
