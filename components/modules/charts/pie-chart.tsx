import React, { useMemo, useState } from 'react'
import { LegendProps, LegendAnchor } from '@nivo/legends'
import { ResponsivePie, PieSvgProps, DefaultRawDatum } from '@nivo/pie'

import { toggleLegendOnClick } from '@/lib/helpers'
import CustomSymbolShape from './custom-symbol-shape'

interface MyResponsivePieProps
  extends Omit<PieSvgProps<DefaultRawDatum>, 'width' | 'height'> {
  legendIsClickable?: boolean
  legendAnchor?: LegendAnchor
  data: Array<
    DefaultRawDatum & {
      hide?: boolean
      originalValue?: number
      color: string
      originalColor?: string
    }
  >
}

const defaultLegends: LegendProps[] = [
  {
    anchor: 'bottom',
    direction: 'row',
    justify: false,
    translateX: 0,
    translateY: 40,
    itemsSpacing: 12,
    itemWidth: 80,
    itemHeight: 20,
    itemTextColor: '#555',
    itemDirection: 'top-to-bottom',
    itemOpacity: 1,
    symbolSize: 24,
  },
]

const MyResponsivePie = ({
  data: initialData,
  margin = { top: 10, right: 10, bottom: 100, left: 10 },
  activeOuterRadiusOffset = 8,
  colors = { datum: 'data.color' },
  borderWidth = 1,
  borderColor = { from: 'color', modifiers: [['darker', 0.6]] },
  enableArcLinkLabels = false,
  arcLinkLabel = 'id',
  arcLinkLabelsSkipAngle = 10,
  arcLinkLabelsTextColor = '#333333',
  arcLinkLabelsThickness = 2,
  arcLinkLabelsColor = { from: 'color' },
  arcLabelsSkipAngle = 10,
  arcLabelsTextColor = '#ffffff',
  legends = defaultLegends,
  legendIsClickable = true,
  legendAnchor,
}: MyResponsivePieProps) => {
  const [data, setData] = useState(initialData)
  const totalValue = useMemo(
    () => data.reduce((sum, item) => sum + item.value, 0),
    [data],
  )
  const arcLabel = (item: any) => {
    return new Intl.NumberFormat('en-US', { style: 'percent' }).format(
      Number(item.value) / totalValue,
    )
  }

  if (legends.length > 0) {
    if (legendIsClickable) {
      legends[0].symbolShape = CustomSymbolShape
      legends[0].onClick = (d) => toggleLegendOnClick(d, setData)
    }

    if (legendAnchor) legends[0].anchor = legendAnchor
  }

  return (
    <ResponsivePie
      data={data}
      margin={margin}
      animate={false}
      activeOuterRadiusOffset={activeOuterRadiusOffset}
      colors={colors}
      borderWidth={borderWidth}
      borderColor={borderColor}
      enableArcLinkLabels={enableArcLinkLabels}
      arcLabel={arcLabel}
      arcLinkLabel={arcLinkLabel}
      arcLinkLabelsSkipAngle={arcLinkLabelsSkipAngle}
      arcLinkLabelsTextColor={arcLinkLabelsTextColor}
      arcLinkLabelsThickness={arcLinkLabelsThickness}
      arcLinkLabelsColor={arcLinkLabelsColor}
      arcLabelsSkipAngle={arcLabelsSkipAngle}
      arcLabelsTextColor={arcLabelsTextColor}
      legends={legends}
    />
  )
}

export default MyResponsivePie
