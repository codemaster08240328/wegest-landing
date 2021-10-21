import { useMemo } from 'react'
import { Box } from '@material-ui/core'
import { pink, blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@/components/elements/avatar'
import Icon from '@/components/elements/icon'
import IconButton from '@/components/elements/icon-button'
import { IClient } from '@/shared/@types'

interface IProps {
  client: IClient
  className?: string
  actionIcon?: string
  onClick?: (clientId: string) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid lightgray',
    padding: theme.spacing(1),
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2rem',

    '& > *': {
      marginRight: 10,
    },
  },
  button: {
    boxSizing: 'border-box',
    marginRight: theme.spacing(1),
  },
}))

const ClientListItem = ({ client, className, actionIcon, onClick }: IProps) => {
  const classes = useStyles()
  const { firstName, lastName, gender, id } = client

  const fullName = useMemo(() => `${firstName} ${lastName}`, [
    firstName,
    lastName,
  ])

  return (
    <Box className={[classes.root, className].join(' ')} component='div'>
      <Box className={classes.avatar}>
        <Avatar
          size={50}
          name={fullName}
          bgcolor={gender === 'Male' ? blue[300] : pink[300]}
        />
        {fullName}
      </Box>
      <IconButton
        icon={actionIcon || <Icon icon='info' type='outlined' />}
        className={classes.button}
        onClick={() => onClick?.(id)}
      />
    </Box>
  )
}

ClientListItem.defaultProps = {
  className: '',
}

export default ClientListItem
