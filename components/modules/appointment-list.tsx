import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import AppointmentListItem from '@/components/modules/appointment-list-item'

interface AppointmentListProps {
  className?: string
  appointments?: any[]
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    padding: theme.spacing(3),

    '& > p': {
      textAlign: 'center',
    },
  },
}))

const AppointmentList = ({
  className,
  appointments,
  ...rest
}: AppointmentListProps) => {
  const classes = useStyles()
  // Const isClosed = false
  const isEmpty = appointments?.length === 0

  const isEmptyMessage =
    'You currently have no appointments on your agenda for this day'
  // Const isClosedMsg = 'We are closed on this day'

  return (
    <div
      className={[classes.root, className].join(' ')}
      data-testid='appointments'
    >
      {isEmpty ? (
        <div className={classes.empty}>
          <p>{isEmptyMessage}</p>
        </div>
      ) : (
        appointments?.map((item) => {
          return <AppointmentListItem key={item.id} {...item} />
        })
      )}
    </div>
  )
}

AppointmentList.defaultProps = {
  appointments: [],
}

export default AppointmentList
