import { Box, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { WGColorType } from '@/shared/@types'
import clsx from 'clsx'

interface IProps {
  bgcolor?: 'primary' | 'secondary' | WGColorType
  color?: WGColorType
  size?: 'small' | 'large' | 'medium'
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const useStlyes = makeStyles(({ palette }: Theme) => ({
  root: {
    backgroundColor: ({ bgcolor }: IProps) =>
      bgcolor === undefined
        ? 'inherit'
        : bgcolor === 'primary' || bgcolor === 'secondary'
        ? palette[bgcolor].main
        : palette.color?.[bgcolor],
    height: ({ size }: IProps) =>
      size === 'small' ? 15 : size === 'large' ? 35 : 25,
    borderRadius: 5,

    '& > *': {
      color: ({ color }: IProps) =>
        color === undefined ? '#fff' : palette.color?.[color],
    },
  },
}))

const Band = ({ color, bgcolor, size, className, style, children }: IProps) => {
  const classes = useStlyes({ color, bgcolor, size })

  return (
    <Box
      className={clsx(className, classes.root)}
      style={style}
      component='div'
    >
      {children}
    </Box>
  )
}

Band.defaultProps = {
  size: 'medium',
}

export default Band
