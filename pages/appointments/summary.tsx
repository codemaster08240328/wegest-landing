import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Page from '@/components/page'
import TextField from '@/components/elements/text-field'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    minHeight: '100vh',
    paddingBottom: theme.spacing(9.5),
  },
  title: {
    textTransform: 'uppercase',
    paddingTop: theme.spacing(4.25),
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 400,
  },
  disclaimer: {
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: theme.spacing(5),
  },
  notes: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    '& > .MuiTextField-root': {
      margin: 0,
      fontWeight: 500,

      '& > .MuiInputLabel-root': {
        left: '50%',
        transform: 'translate(-50%, 24px) scale(1)',
        fontWeight: 500,
        opacity: 0.5,
        fontSize: '1rem',

        '&.MuiInputLabel-shrink': {
          transform: 'translate(-35%, 1.5px) scale(0.75)',
        },
      },

      '& .MuiFormHelperText-root, & .MuiInput-inputMultiline': {
        textAlign: 'center',
        fontWeight: 500,
      },
    },
  },
  button: {
    marginTop: theme.spacing(15),
    width: '50%',
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
  },
}))

const Summary = () => {
  const router = useRouter()
  const classes = useStyles()
  const [notes, setNotes] = useState('')

  const onChangeNotes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotes(event.currentTarget.value)
  }

  const handleBook = () => {
    router.push('/appointments')
  }

  return (
    <Page className={classes.root}>
      <Typography component='h1' className={classes.title}>
        Reservation Summary
      </Typography>
      <Typography component='p' className={classes.disclaimer}>
        By clicking on the button below, you confirm that you want to book
        <strong> Beard Shave </strong>
        for
        <strong> Daniel Jackson </strong>
        for
        <strong> April 20, 2021 </strong>
        at
        <strong> 17:15</strong>
      </Typography>
      <TextField
        multiline
        fullWidth
        name='notes'
        className={classes.notes}
        value={notes}
        label='Notes'
        rowsMax={4}
        helperText='Enter customer notes if needed.'
        onChange={onChangeNotes}
      />
      <Button
        variant='contained'
        color='primary'
        size='large'
        className={classes.button}
        onClick={handleBook}
      >
        Book
      </Button>
    </Page>
  )
}

export default Summary
