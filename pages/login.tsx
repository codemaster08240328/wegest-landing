import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Container,
  Button,
  Link as L,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@/components/elements/text-field'
import { useAppSelector, useAppDispatch } from '@/store'
import { actions } from '@/store/auth'

import { signin as signinMock } from '@/__mocks__/auth.mock'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    height: '100vh',
  },
  logo: {
    display: 'flex',
    minHeight: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: theme.spacing(3),
    marginBottom: theme.spacing(1),
    width: '90%',
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
  link: {
    textAlign: 'center',
    color: theme.palette.primary.light,
    marginTop: theme.spacing(4),
    fontSize: 14,
  },
  check: {
    marginTop: theme.spacing(3),
    justifyContent: 'center',
    fontSize: 14,
  },
}))

const Login = () => {
  const classes = useStyles()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.name === 'email') {
      setEmail(event.currentTarget.value)
    } else if ((event.currentTarget.name = 'password')) {
      setPassword(event.currentTarget.value)
    }
  }

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.name === 'remember') {
      setRemember(event.currentTarget.checked)
    }
  }

  const onLogin = async () => {
    const result = await signinMock({ email, password })
    if (result !== 'invalid') {
      dispatch(actions.signin(result.user))
    }
  }

  return (
    <Container className={classes.root} maxWidth='sm'>
      <div className={classes.logo}>
        <Image
          src='/images/logo_wegest.png'
          height={100}
          width={300}
          objectFit='scale-down'
          alt='Logo'
        />
      </div>

      <TextField
        fullWidth
        name='email'
        className={classes.input}
        value={email}
        icon='email'
        label='Email'
        onChange={onChangeInput}
      />
      <TextField
        name='password'
        className={classes.input}
        value={password}
        icon='lock'
        label='Password'
        type='password'
        onChange={onChangeInput}
      />

      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        onClick={onLogin}
      >
        LOGIN
      </Button>

      <Link href='/signup'>
        <L className={classes.link}>Don&apos;t have an account? Register</L>
      </Link>

      <FormControlLabel
        className={classes.check}
        control={
          <Checkbox
            name='remember'
            value={remember}
            color='primary'
            onChange={onChangeCheckbox}
          />
        }
        label='Remember password'
        color='secondary'
      />
    </Container>
  )
}

export default Login
