import { useMemo } from 'react'
import { useRouter } from 'next/router'
import {
  BottomNavigation,
  BottomNavigationAction,
  Icon,
} from '@material-ui/core'

interface Route {
  href: string
  label: string
  icon: string
}

interface Props {
  className?: string
  routes: Route[]
}

const BottomNav = ({ className, routes }: Props) => {
  const router = useRouter()

  const navActions = useMemo(
    () =>
      routes.map((route) => (
        <BottomNavigationAction
          key={route.label}
          label={route.label}
          icon={<Icon>{route.icon}</Icon>}
          value={route.href}
        />
      )),
    [routes],
  )

  const rootPath = useMemo(() => `/${router.pathname.split('/')[1]}`, [router])

  return (
    <BottomNavigation
      showLabels
      className={className}
      value={rootPath}
      onChange={async (_, value) => router.push(value)}
    >
      {navActions}
    </BottomNavigation>
  )
}

export default BottomNav
