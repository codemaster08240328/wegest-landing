import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

interface ServiceChipsProps {
  className?: string
  chips?: any[]
  onChange?: (service: any) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    overflowX: 'scroll',
    minHeight: theme.spacing(6.25),
  },
  empty: {},
  chips: {
    height: '100%',
    padding: `0 ${theme.spacing(1)}px`,
    whiteSpace: 'nowrap',
    overflowY: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

const ServiceChips = ({
  className,
  chips,
  onChange = () => null,
  ...rest
}: ServiceChipsProps) => {
  const classes = useStyles()

  return (
    <div
      className={[classes.root, className].join(' ')}
      data-testid='chipsContainer'
    >
      {chips?.length === 0 ? (
        <div className={classes.empty} />
      ) : (
        <div data-testid='chips' className={classes.chips}>
          {chips?.map((chip) => {
            return (
              <Chip
                key={chip.id}
                className={classes.chip}
                size='small'
                color='secondary'
                label={chip.title}
                onDelete={() => onChange(chip)}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

ServiceChips.defaultProps = {
  chips: [],
  onChange: () => null,
}

export default ServiceChips
