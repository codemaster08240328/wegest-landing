import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  Container,
  FormControlLabel,
  Radio,
  Button,
  IconButton,
  RadioGroup,
  Icon,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@/components/elements/text-field'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    height: '100vh',

    '& > p': {
      textAlign: 'center',
      maxWidth: '80%',
      fontSize: '1.3em',
      color: theme.palette.secondary.main,
      marginBottom: 0,
      marginTop: theme.spacing(1),
    },
  },

  icon: {
    position: 'absolute',
    left: theme.spacing(3),
    color: theme.palette.primary.light,

    '& *': {
      fontSize: '1.3em',
      fontWeight: 700,
    },
  },

  logo: {
    textAlign: 'center',
    marginTop: theme.spacing(1),

    '& img': {
      borderRadius: '50%',
    },
  },

  button: {
    borderRadius: '50vh',
    fontSize: 16,
    margin: theme.spacing(2),
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: '90%',
  },

  input: {
    width: '90%',
    marginTop: theme.spacing(2),
  },

  radioGroup: {
    width: '90%',
    flexDirection: 'row',
    marginTop: theme.spacing(4),
    paddingLeft: theme.spacing(1),
  },
}))

const Signup = () => {
  const classes = useStyles()
  const router = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const setValue: Record<
    string,
    React.Dispatch<React.SetStateAction<string>>
  > = {
    first_name: setFirstName,
    last_name: setLastName,
    gender: setGender,
    email: setEmail,
    phone: setPhone,
    code: setCode,
    password: setPassword,
    confirm_password: setConfirm,
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    if (Object.keys(setValue).includes(name)) setValue[name](value)
  }

  const onRegister = () => {
    console.log('Register triggered')
    router.push('/home')
  }

  return (
    <Container className={classes.root} maxWidth='sm'>
      <div className={classes.logo}>
        <Image
          src='/images/logo-mywegest.png'
          height={70}
          width={70}
          alt='my-logo'
        />
      </div>

      <IconButton
        aria-label='back to login'
        className={classes.icon}
        onClick={() => {
          router.back()
        }}
      >
        <Icon>arrow_back_ios</Icon>
      </IconButton>

      <p>Welcome</p>
      <p>Fill in the fields below to access all the features of the app.</p>

      <TextField
        className={classes.input}
        value={firstName}
        name='first_name'
        label='First Name'
        onChange={onChangeInput}
      />
      <TextField
        className={classes.input}
        value={lastName}
        name='last_name'
        label='Last Name'
        onChange={onChangeInput}
      />
      <RadioGroup
        className={classes.radioGroup}
        value={gender}
        name='gender'
        onChange={onChangeInput}
      >
        <FormControlLabel
          value='male'
          control={<Radio color='primary' />}
          label='Male'
          color='secondary'
        />
        <FormControlLabel
          value='female'
          control={<Radio color='primary' />}
          label='Female'
          color='secondary'
        />
      </RadioGroup>
      <TextField
        className={classes.input}
        value={email}
        name='email'
        label='Email'
        onChange={onChangeInput}
      />
      <TextField
        className={classes.input}
        value={phone}
        name='phone'
        label='Phone Number'
        onChange={onChangeInput}
      />
      <TextField
        className={classes.input}
        value={code}
        name='code'
        label='Code'
        onChange={onChangeInput}
      />
      <TextField
        className={classes.input}
        value={password}
        name='password'
        label='Password'
        type='password'
        onChange={onChangeInput}
      />
      <TextField
        className={classes.input}
        value={confirm}
        name='confirm_password'
        label='Confirm Password'
        type='password'
        onChange={onChangeInput}
      />
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        onClick={onRegister}
      >
        REGISTER
      </Button>
    </Container>
  )
}

export default Signup
