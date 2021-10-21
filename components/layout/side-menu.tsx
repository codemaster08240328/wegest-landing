import {
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Avatar from '@/components/elements/avatar'
import Icon from '@/components/elements/icon'
import { useAppSelector } from '@/store'

interface Props {
  className?: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },

  top: {
    display: 'flex',
    height: 100,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
    alignItems: 'center',
    paddingLeft: theme.spacing(3),
  },

  avatar: {
    marginRight: theme.spacing(2),
  },
}))

const SideMenu = ({ className }: Props) => {
  const classes = useStyles()
  const user = useAppSelector((state) => state.auth.user)

  return (
    <Box className={clsx(className, classes.root)}>
      <Box className={classes.top}>
        <Avatar
          bgcolor='grey'
          name='John Smith'
          size={60}
          className={classes.avatar}
        />
        <Typography variant='subtitle2'>John Smith</Typography>
      </Box>
      <List>
        <ListItem button component='a' href='/profile'>
          <ListItemIcon>
            <Icon icon='person' color='primary' />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant='subtitle1'>Profile</Typography>}
          />
        </ListItem>
        <ListItem button component='a' href='/plug/add-client'>
          <ListItemIcon>
            <Icon icon='add' color='primary' />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant='subtitle1'>Add Customer</Typography>}
          />
        </ListItem>
        {user?.role === 'operator' && (
          <ListItem button component='a' href='/stats'>
            <ListItemIcon>
              <Icon icon='pie_chart' color='primary' />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant='subtitle1'>Stats</Typography>}
            />
          </ListItem>
        )}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Icon icon='exit_to_app' color='primary' />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant='subtitle1'>Sign Out</Typography>}
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default SideMenu
