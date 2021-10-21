import React, { useReducer } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Page from '@/components/page'
import TextField from '@/components/elements/text-field'
import PhoneNumberTextField from '@/components/elements/phone-number-text-field'

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
}

function formReducer(state: FormState, action: any) {
  if (action.type)
    return {
      ...state,
      [action.type]: action.payload,
    }

  return state
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(9.5),
    backgroundColor: 'rgb(240, 240, 240)',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontWeight: 'normal',
    lineHeight: 1.7,
    fontSize: '1rem',
    marginBottom: theme.spacing(1),
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}))

const Profile = () => {
  const router = useRouter()
  const classes = useStyles()
  const [state, dispatch] = useReducer(formReducer, initialState)
  const { firstName, lastName, email, phone } = state

  const onProfile = () => {
    router.push('/')
  }

  return (
    <Page className={classes.root}>
      <Typography component='h1' className={classes.title}>
        Profile
      </Typography>
      <Typography component='p' className={classes.subtitle}>
        Update your data, if necessary, and then click on the Save button to
        save the changes
      </Typography>
      <TextField
        fullWidth
        name='firstName'
        className={classes.input}
        value={firstName}
        label='First Name'
        onChange={(event) =>
          dispatch({
            type: 'firstName',
            payload: event.currentTarget.value,
          })
        }
      />
      <TextField
        fullWidth
        name='lastName'
        className={classes.input}
        value={lastName}
        label='Last Name'
        onChange={(event) =>
          dispatch({
            type: 'lastName',
            payload: event.currentTarget.value,
          })
        }
      />
      <TextField
        fullWidth
        name='email'
        className={classes.input}
        value={email}
        label='Email'
        type='email'
        onChange={(event) =>
          dispatch({
            type: 'email',
            payload: event.currentTarget.value,
          })
        }
      />
      <PhoneNumberTextField
        fullWidth
        name='phone'
        className={classes.input}
        value={phone}
        label='Phone Number'
        onChange={(value) =>
          dispatch({
            type: 'phone',
            payload: value,
          })
        }
      />

      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        size='large'
        onClick={onProfile}
      >
        SAVE
      </Button>
    </Page>
  )
}

export default Profile
