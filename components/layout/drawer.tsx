import { useState } from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import IconButton from '@/components/elements/icon-button'

interface IProps {
  className?: string
  icon?: string
  children?: React.ReactNode
  anchor?: 'left' | 'right' | 'top' | 'bottom'
}

const defaultProps: IProps = {
  icon: 'menu',
  anchor: 'left',
}

const Drawer = ({ className, icon, children, anchor }: IProps) => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <IconButton
        icon={icon}
        className={className}
        onClick={() => setToggle(true)}
      />

      <SwipeableDrawer
        anchor={anchor}
        open={toggle}
        onOpen={() => setToggle(true)}
        onClose={() => setToggle(false)}
      >
        {children}
      </SwipeableDrawer>
    </>
  )
}

Drawer.defaultProps = defaultProps

export default Drawer
