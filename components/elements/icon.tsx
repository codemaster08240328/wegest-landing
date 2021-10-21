import { Icon, PropTypes } from '@material-ui/core'
import clsx from 'clsx'

interface IProps {
  icon: React.ReactNode
  className?: string
  fontSize?: 'inherit' | 'default' | 'small' | 'large'
  color?: PropTypes.Color | 'action' | 'error' | 'disabled'
  type?: 'outlined' | 'round' | 'sharp' | 'two-tone'
}

const CustomIcon = ({ icon, fontSize, className, color, type }: IProps) => (
  <Icon
    className={clsx(className, type && `material-icons-${type}`)}
    color={color}
    fontSize={fontSize}
    data-testid='el-icon'
  >
    {icon}
  </Icon>
)

CustomIcon.defaultProps = {
  fontSize: 'default',
  color: 'inherit',
}

export default CustomIcon
