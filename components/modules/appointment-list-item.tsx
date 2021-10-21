import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, PropTypes } from '@material-ui/core'

import IconButton from '@/components/elements/icon-button'

interface AppointmentListItemProps {
  className?: string
  color?: PropTypes.Color | string
  onClick: (appointment: any) => void
  start: string
  end: string
  customer: string
  service: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    marginTop: -1,
    borderBottom: '1px solid #ddd',
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    padding: '0 .75rem',

    '&:last-of-type': {
      border: 'none',
    },
  },
  timeSlot: {
    display: 'flex',
    height: 60,
    background: '#03A9F4',
    borderRadius: '50%',
    maxWidth: 60,
    width: '16.6666666667%',
    boxSizing: 'border-box',
    padding: '0 .75rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',

    '& > p': {
      fontSize: 13,
      fontWeight: '700',
      margin: 0,
      lineHeight: 1,
    },

    '& > span': {
      fontSize: 12,
      marginLeft: 3,
      lineHeight: 1,
    },
  },
  appointment: {
    width: '66.6666666667%',
    boxSizing: 'border-box',
    padding: '0 .75rem',

    '& > p, & > span': {
      fontSize: 14,
      color: 'rgba(0,0,0,0.87)',
    },

    '& > span': {
      opacity: 0.4,
    },
  },
  action: {
    width: '16.6666666667%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}))

const AppointmentListItem = ({
  className,
  start,
  end,
  customer,
  service,
  color,
  onClick,
  ...rest
}: AppointmentListItemProps) => {
  const classes = useStyles()

  const _onClick = (data: any) => {
    console.log('AppointmentListItem ==> Handle onClick', data)
    onClick(data)
    return null
  }

  return (
    <div className={[classes.root, className].join(' ')}>
      <div
        data-testid='timeSlot'
        className={classes.timeSlot}
        style={{ background: color }}
      >
        <Typography component='p'>{start}</Typography>
        <Typography component='span'>{end}</Typography>
      </div>
      <div data-testid='appointment' className={classes.appointment}>
        <Typography component='p'>{customer}</Typography>
        <Typography component='span'>{service}</Typography>
      </div>
      <div className={classes.action}>
        <IconButton icon='info' type='outlined' onClick={_onClick} />
      </div>
    </div>
  )
}

AppointmentListItem.defaultProps = {}

export default AppointmentListItem
