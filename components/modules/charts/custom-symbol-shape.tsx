interface CustomSymbolShapeProps {
  x: number
  y: number
  size: number
  fill: string
  borderWidth: number
  borderColor: string
}

const CustomSymbolShape = ({
  x,
  y,
  size,
  fill,
  borderWidth,
  borderColor,
}: CustomSymbolShapeProps) => {
  const hidden = fill === 'transparent'

  return (
    <rect
      x={x}
      y={y}
      fill={hidden ? 'transparent' : fill}
      strokeWidth={hidden ? 2 : borderWidth}
      stroke={hidden ? '#AAA' : borderColor}
      width={size}
      height={size}
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default CustomSymbolShape
