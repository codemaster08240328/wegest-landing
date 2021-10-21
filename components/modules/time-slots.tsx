import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { generateTimeSlots } from '@/lib/helpers'

interface TimeSlotsProps {
  className?: string
  selectedDate?: Date
  onSelect?: (time: any) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  empty: {},
  slots: {},
  slot: {
    width: '100%',
    lineHeight: '22px',
    textAlign: 'center',
    backgroundColor: theme.palette.background.default,
  },
}))

const TimeSlots = ({
  className,
  selectedDate,
  onSelect = () => null,
}: TimeSlotsProps) => {
  const classes = useStyles()
  const isToday = selectedDate
    ? selectedDate.toDateString() === new Date().toDateString()
    : true

  const slots = generateTimeSlots(!isToday)
  const isEmpty = slots?.length === 0

  return (
    <Container
      className={clsx(classes.root, className)}
      data-testid='slotsContainer'
    >
      {isEmpty && <Typography className={classes.empty} component='p' />}

      {!isEmpty && (
        <Grid
          container
          spacing={2}
          data-testid='slots'
          className={classes.slots}
        >
          {slots?.map((slot) => (
            <Grid key={slot} item xs={4}>
              <Button
                className={classes.slot}
                variant='contained'
                size='small'
                onClick={() => onSelect(slot)}
              >
                {slot}
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

TimeSlots.defaultProps = {
  selectedDate: new Date(),
  onSelect: () => null,
}

export default TimeSlots
