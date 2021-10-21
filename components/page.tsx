import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'

import BottomNavigation from '@/components/layout/bottom-nav'

interface Props {
  className?: string
  children: NonNullable<React.ReactNode>
  appBarContent?: NonNullable<React.ReactNode>
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    paddingTop: 'env(safe-area-inset-top)',
    paddingLeft: 'env(safe-area-inset-left)',
    paddingRight: 'env(safe-area-inset-right)',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    paddingTop: 'env(safe-area-inset-top)',
  },
  page: {
    padding: 0,
    paddingBottom: 'calc(76px + env(safe-area-inset-bottom))',
    minHeight:
      'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
  },
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    minHeight: 'calc(56px + env(safe-area-inset-bottom, 0))',
    paddingBottom: 'env(safe-area-inset-bottom, 0)',
  },
}))

const Page = ({ className, appBarContent, children }: Props) => {
  const classes = useStyles()

  return (
    <>
      <AppBar className={classes.appBar} color='secondary'>
        {appBarContent}
      </AppBar>
      <main className={classes.content}>
        <Container
          className={clsx(className, classes.page)}
          component='main'
          maxWidth='sm'
        >
          {children}
        </Container>
      </main>

      <BottomNavigation className={classes.bottomNav} routes={routes} />
    </>
  )
}

export default Page

const routes = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Plug', href: '/plug', icon: 'content_paste' },
  { label: 'Appunt.', href: '/appointments', icon: 'event_available' },
  { label: 'Targets', href: '/targets', icon: 'show_chart' },
]
