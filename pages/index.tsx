import { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Page from '@/components/page'
import Appointment from '@/components/appointment'
import Message from '@/components/message'
import Drawer from '@/components/layout/drawer'
import SideMenu from '@/components/layout/side-menu'
import { useAppSelector } from '@/store'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    backgroundImage: `url(${'images/sfondo-wegest.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },

  header: {
    display: 'flex',
    height: '40vh',
    justifyContent: 'center',
    paddingBottom: theme.spacing(7),
  },

  drawer: {
    position: 'absolute',
    top: 'env(safe-area-inset-top, 0)',
    right: 0,
    color: theme.palette.primary.main,

    '& span': {
      fontSize: '1.2em',
    },
  },

  message: {
    background: '#555555',
    color: 'white',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textAlign: 'center',

    '& p': {
      fontSize: '1.1em',
      fontWeight: 600,
      lineHeight: '1.4em',
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
      margin: 0,
    },
  },

  appointment: {
    padding: 0,
  },
}))

const Index = () => {
  const classes = useStyles()
  const router = useRouter()
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  return (
    <Page className={classes.root}>
      <div className={classes.header}>
        <Image
          src='/images/logo_wegest.png'
          height={100}
          width={300}
          objectFit='scale-down'
          alt='Logo'
        />

        <Drawer className={classes.drawer}>
          <SideMenu />
        </Drawer>
      </div>
      <Message className={classes.message}>{message}</Message>
      <Appointment className={classes.appointment} points={points} />
    </Page>
  )
}

export default Index

const points = [3, 2, 4]
const message =
  'Good morning Luca,  Luca  your next appointment will be today at 11.30 with AA.'
