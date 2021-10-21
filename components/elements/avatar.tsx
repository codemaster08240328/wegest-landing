import { Avatar, Theme } from '@material-ui/core'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { shorthandName } from '@/lib/helpers'

interface IProps {
  src?: string
  name?: string
  size?: number
  color?: string
  bgcolor?: string
  className?: string
  variant?: 'circular' | 'rounded' | 'square'
  style?: React.CSSProperties
}

const styles = ({ palette }: Theme) =>
  createStyles({
    root: {
      width: ({ size }: IProps) => size || 40,
      height: ({ size }: IProps) => size || 40,
      fontSize: ({ size }: IProps) => size && `${size / 40}rem`,
    },
    colorDefault: {
      color: ({ color }: IProps) => color || 'white',
      backgroundColor: ({ bgcolor }: IProps) =>
        bgcolor || palette.background.default,
    },
  })

export default withStyles(styles)(({ name, ...rest }: IProps) => (
  <Avatar alt={name} {...rest} data-testid='el-avatar'>
    {name && shorthandName(name)}
  </Avatar>
))
