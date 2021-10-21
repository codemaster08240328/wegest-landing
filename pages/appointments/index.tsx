import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'

import Page from '@/components/page'
import Icon from '@/components/elements/icon'
import Calendar from '@/components/modules/calendar'
import AppointmentList from '@/components/modules/appointment-list'
import TimeSlots from '@/components/modules/time-slots'
import { getRandomColor, generateTimeSlots } from '@/lib/helpers'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  fab: {
    position: 'fixed',
    bottom: 'calc(80px + env(safe-area-inset-bottom))',
    right: theme.spacing(2),
    backgroundColor: '#F44336',

    '&:hover, &:active': {
      backgroundColor: '#F44345',
    },
  },
}))

const Appointments = () => {
  const router = useRouter()
  const classes = useStyles()
  const { stage } = router.query
  const [selectedDate, setSelectedDate] = useState()
  const [showTimeSlots] = useState(stage === '4')

  const handleFabClick = () => {
    router.push(`appointments/clients`)
  }

  const handleDateClick = (appointment: any) => {
    setSelectedDate(appointment.date)
  }

  const handleAppointmentClick = (data: any) => {
    console.log('Appointments ==> Handle onClick', data)
    return null
  }

  const onSelectTime = () => {
    router.push(`appointments/summary`)
  }

  const timeSlots = generateTimeSlots(true)
  const appointments = new Array(9).fill(null).map((appointment, i) => {
    const id = `appointment-${i}`
    const color = getRandomColor()
    const service = i % 2 === 0 ? 'Shaving' : 'Hair Treatment'
    const customer = i % 2 === 0 ? "John Mc'Doe" : 'Jane Doe'

    return {
      id,
      start: timeSlots.shift(),
      end: timeSlots[0],
      color,
      customer,
      service,
      onClick: handleAppointmentClick,
    }
  })

  return (
    <Page className={classes.root}>
      <Calendar className='calendar' onChange={handleDateClick} />
      {showTimeSlots && (
        <TimeSlots selectedDate={selectedDate} onSelect={onSelectTime} />
      )}

      {!showTimeSlots && (
        <>
          <AppointmentList
            appointments={appointments}
            className='appointments'
          />
          <Fab
            color='primary'
            aria-label='add'
            className={classes.fab}
            onClick={handleFabClick}
          >
            <Icon icon='add' />
          </Fab>
        </>
      )}
    </Page>
  )
}

export default Appointments
