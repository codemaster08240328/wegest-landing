import { IconButton } from '@material-ui/core'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import Icon from './icon'
import { WGColorType } from '@/shared/@types'

interface IProps {
  icon: React.ReactNode
  children?: React.ReactNode
  className?: string
  color?: WGColorType
  edge?: 'start' | 'end' | false
  size?: 'small' | 'medium'
  type?: 'outlined' | 'round' | 'sharp' | 'two-tone'
  filled?: boolean
  fillcolor?: WGColorType
  onClick?: (data?: any) => void
}

const styles = ({ palette }: Theme) =>
  createStyles({
    root: {
      backgroundColor: ({ filled, fillcolor }: IProps) =>
        filled && fillcolor ? palette.color?.[fillcolor] : 'inherit',
      color: ({ color }: IProps) =>
        (color && palette.color?.[color]) || palette.text.secondary,

      '&:focus': {
        backgroundColor: ({ filled, fillcolor }: IProps) =>
          filled && fillcolor ? palette.color?.[fillcolor] : 'inherit',
      },

      '&:hover': {
        backgroundColor: ({ filled, fillcolor }: IProps) =>
          filled && fillcolor ? palette.color?.[fillcolor] : 'inherit',
        opacity: 0.95,
      },
    },
  })

const CustomIconButton = withStyles(styles)(
  ({
    icon,
    edge,
    type,
    children,
    color,
    filled,
    fillcolor,
    ...rest
  }: IProps) => (
    <IconButton {...rest} data-testid='el-icon-button'>
      {edge === 'end' && children}
      <Icon icon={icon} type={type} />
      {edge === 'start' && children}
    </IconButton>
  ),
)

CustomIconButton.defaultProps = {
  edge: false,
  size: 'medium',
}

export default CustomIconButton
