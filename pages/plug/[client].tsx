import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { colors, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { blue, pink } from '@material-ui/core/colors'
import Page from '@/components/page'
import Band from '@/components/elements/band'
import ColorButton from '@/components/elements/color-button'
import IconButton from '@/components/elements/icon-button'
import Avatar from '@/components/elements/avatar'
import Icon from '@/components/elements/icon'
import TechNote from '@/components/modules/technical-note'
import TechnoteModal from '@/components/modules/technote-modal'
import ServiceModal from '@/components/modules/service-modal'
import { clientUnderProcessing, TechTypologies } from '@/__mocks__/client-mock'
import { IClient, WGColor } from '@/shared/@types'
import { hash, hashRanged } from '@/lib/helpers'
import theme from '@/theme'

const colorKeys = Object.keys(theme.palette.color || {}) as (keyof WGColor)[]

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.grey[100],
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  header: {
    paddingTop: theme.spacing(2),
  },
  avatar: {
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  name: {
    marginTop: theme.spacing(3),
  },
  band: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    '& > div': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  techNote: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
  noteButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  serviceButton: {
    position: 'fixed',
    bottom: '18vh',
    right: 15,
    height: 55,
    width: 55,
    color: theme.palette.text.secondary,
  },
  subtitle: {
    color: theme.palette.color?.brown,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}))

const Client = () => {
  const router = useRouter()
  const classes = useStyles()
  const { client: clientId } = router.query

  const [client, setClient] = useState<IClient>({
    id: '',
    firstName: '',
    lastName: '',
    gender: '',
  })

  const [openTechnoteModal, setOpenTechnoteModal] = useState(false)
  const [openServiceModal, setOpenServiceModal] = useState(false)

  useEffect(() => {
    setClient(
      clientUnderProcessing.find((item) => item.id === clientId) || {
        id: '',
        firstName: '',
        lastName: '',
        gender: '',
      },
    )
  }, [clientId])

  return (
    <Page className={classes.root}>
      <Box component='div' className={classes.header}>
        <Avatar
          className={classes.avatar}
          name={`${client.firstName} ${client.lastName}`}
          size={100}
          bgcolor={client.gender === 'Male' ? blue[300] : pink[300]}
        />
        <Typography
          className={classes.name}
          variant='h5'
          align='center'
          gutterBottom
        >{`${client.firstName} ${client.lastName}`}</Typography>
        <Typography
          variant='body2'
          align='center'
          color='secondary'
        >{`Frequency: ${client.frequency}`}</Typography>
      </Box>

      {client.serviceHistory?.map((item, idx) => (
        <Band
          className={classes.band}
          bgcolor={colorKeys[hashRanged(hash(item.id), [0, 19])]}
          key={`${item.id}-${idx}`}
        >
          <Typography variant='body1'>{item.name}</Typography>
          <Typography variant='body1'>{`${item.days} days ago`}</Typography>
        </Band>
      ))}

      {client.techNotes?.map((item, idx) => (
        <TechNote
          className={classes.techNote}
          note={item}
          key={`${item.date}-${idx}`}
        />
      ))}

      <Box className={classes.noteButton}>
        <ColorButton
          type='rounded'
          color='steelBlue'
          onClick={() => setOpenTechnoteModal(true)}
        >
          Enter a technical note
        </ColorButton>
        <TechnoteModal
          open={openTechnoteModal}
          onClose={() => setOpenTechnoteModal(false)}
          type={TechTypologies}
        />
      </Box>

      <Typography variant='subtitle1' className={classes.subtitle}>
        Assigned services and products
      </Typography>

      {client.serviceAssigned?.map((item, idx) => (
        <Band
          className={classes.band}
          bgcolor={colorKeys[hashRanged(hash(item.id), [0, 19])]}
          key={`${item.id}-${idx}`}
        >
          <Typography variant='body1' color='textSecondary'>
            {item.name}
          </Typography>
          <Box color='text.secondary'>
            <Icon icon='person' color='inherit' />
            <Typography variant='body1' color='textSecondary' display='inline'>
              {item.operator && item.operatorId}
            </Typography>
          </Box>
        </Band>
      ))}

      <IconButton
        className={classes.serviceButton}
        icon='add_shopping_cart'
        filled
        fillcolor='orange'
        onClick={() => setOpenServiceModal(true)}
      />
      <ServiceModal
        open={openServiceModal}
        onClose={() => setOpenServiceModal(false)}
      />
    </Page>
  )
}

export default Client
