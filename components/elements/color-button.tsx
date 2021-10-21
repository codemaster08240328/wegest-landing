import { Button, withStyles } from '@material-ui/core'
import { WGColorType } from '@/shared/@types/index'
import { createStyles, Theme } from '@material-ui/core/styles'

interface IProps {
  type?: 'rounded' | 'default'
  color?: WGColorType | 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  children?: React.ReactNode
  className?: string
  onClick?: (data?: any) => void
}

const styles = ({ palette }: Theme) =>
  createStyles({
    root: {
      borderRadius: ({ type }: IProps) => (type === 'rounded' ? 9999 : 0),
      backgroundColor: ({ color }: IProps) =>
        color === undefined
          ? 'inherit'
          : color === 'primary' || color === 'secondary'
          ? palette[color].main
          : palette.color?.[color],
      color: '#fff',
      fontWeight: 600,

      '&:focus': {
        backgroundColor: ({ color }: IProps) =>
          color === undefined
            ? 'inherit'
            : color === 'primary' || color === 'secondary'
            ? palette[color].main
            : palette.color?.[color],
      },

      '&:hover': {
        backgroundColor: ({ color }: IProps) =>
          color === undefined
            ? 'inherit'
            : color === 'primary' || color === 'secondary'
            ? palette[color].main
            : palette.color?.[color],
        opacity: 0.95,
      },
    },
  })

export default withStyles(styles)((props: IProps) => {
  const { type, color, children, ...rest } = props

  return (
    <Button variant='contained' {...rest}>
      {children}
    </Button>
  )
})
