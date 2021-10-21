import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Icon from '@/components/elements/icon'
import { getMonthDates, getFormattedDate } from '@/lib/helpers'

interface CalendarProps {
  className?: string
  onChange: (appointment: any) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#21a1e0',
  },
  appointment: {
    display: 'flex',
    width: '100%',
    overflowX: 'scroll',
  },
  day: {
    color: 'white',
    width: `${100 / 6}%`,
    minHeight: 38,
    padding: '7px 21px',
    borderRight: '1px solid rgba(0,0,0,0.03)',
    borderLeft: '1px solid #4fb5e6',
    borderBottom: '1px solid #4fb5e6',
    cursor: 'pointer',
    boxSizing: 'content-box',

    '&:first-of-type': {
      border: 'none',
    },
  },
  dayContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 40,
    position: 'relative',

    '& > p': {
      color: 'white',
      zIndex: 2,
      fontSize: 15,
      margin: 0,
      width: 24,
      height: 24,
      textAlign: 'center',
      fontWeight: '700',

      '&.selected': {
        border: '2px solid #6ec2ea',
        borderRadius: 15,
        background: '#6ec2ea',
      },
    },
    '& > span': {
      zIndex: 2,
      fontSize: 8,
      width: '100%',
      textAlign: 'center',
      textTransform: 'uppercase',
      position: 'absolute',
      bottom: 0,
      fontWeight: '700',
    },
  },
  selectedDate: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    minHeight: 150,
    backgroundImage: 'linear-gradient(#04668b, #0888b5)',
    width: '100%',
    borderBottom: '30px solid #21a1e0',

    '& > span': {
      flex: 1,
      fontSize: '10vh',
      marginLeft: 10.5,
    },

    '& > h4': {
      flex: 2,
      fontSize: '4vh',
      marginRight: 10.5,
      fontWeight: '700',
    },
  },
}))

const Calendar = ({ className, onChange, ...rest }: CalendarProps) => {
  const classes = useStyles()
  const appointments = getMonthDates()
  const [date, setDate] = useState(new Date())

  const onClick = (appointment: any) => {
    onChange(appointment)
    setDate(appointment.date)
  }

  return (
    <div className={[classes.root, className].join(' ')}>
      <div data-testid='appointment' className={classes.appointment}>
        {appointments.map((appointment, i) => {
          const key = JSON.stringify(appointment.date)
          const isSelected =
            appointment.date.toDateString() === date.toDateString()

          return (
            <div
              key={key}
              className={[classes.day, 'day'].join(' ')}
              onClick={() => {
                onClick(appointment)
              }}
            >
              <div className={classes.dayContent}>
                <Typography
                  className={isSelected ? 'selected' : ''}
                  component='p'
                >
                  {appointment.date.getDate()}
                </Typography>
                <Typography component='span'>{appointment.day}</Typography>
              </div>
            </div>
          )
        })}
      </div>
      <div className={classes.selectedDate}>
        <Icon icon='date_range' />
        <Typography data-testid='fullDate' component='h4'>
          {getFormattedDate(date)}
        </Typography>
      </div>
    </div>
  )
}

Calendar.defaultProps = {}

export default Calendar
