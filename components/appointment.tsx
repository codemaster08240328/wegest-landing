import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'

interface Props {
  className?: string
  points?: number[]
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },

  title: {
    background: theme.palette.info.light,
    color: 'white',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontSize: '1.6em',
  },

  content: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },

  todayPoint: {
    color: theme.palette.info.light,
  },
}))

const Date = styled('h3')(({ theme }) => ({
  color: theme.palette.secondary.light,
  textTransform: 'uppercase',
  margin: 0,
}))

const Point = styled('p')(({ theme }) => ({
  fontSize: '3em',
  fontWeight: 700,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}))

const Appointment = ({ className, points }: Props) => {
  const classes = useStyles()

  return (
    <Container className={[className, classes.root].join(' ')}>
      <h2 data-testid='appt-title' className={classes.title}>
        YOUR APPOINTMENTS
      </h2>
      <Grid container data-testid='appt-content' className={classes.content}>
        {['Today', 'Tomorrow', '2 days later'].map((item, index) => (
          <Grid key={item} item xs={4}>
            <Date>{item}</Date>
            <Point className={index ? '' : classes.todayPoint}>
              {points?.[index] ? points[index] : 0}
            </Point>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Appointment
