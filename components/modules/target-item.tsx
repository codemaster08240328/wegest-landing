import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { PropTypes, Card, Typography } from '@material-ui/core'

import Icon from '@/components/elements/icon'

interface GoalItemProps {
  title?: string
  done?: number
  total?: number
  color?: PropTypes.Color | string
  className?: string
}

const defaultProps: GoalItemProps = {
  color: 'primary',
  title: '',
  total: 0,
  done: 0,
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: '100%',
    marginTop: theme.spacing(2.5),
    overflow: 'visible',
    padding: theme.spacing(0.625),

    '&:first-of-type': {
      marginTop: 0,
    },
  },
  targetInfo: {
    display: 'flex',
  },
  targetName: {
    width: '75%',
    padding: `0 ${theme.spacing(1.3125)}px`,

    '& h4': {
      fontSize: 24,
      fontWeight: '700',
    },
  },
  targetNumbers: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '25%',
    padding: `0 ${theme.spacing(1.3125)}px`,

    '& h3': {
      fontSize: 30,
      fontWeight: '700',
      marginRight: theme.spacing(1),
      opacity: 0.8,
    },
    '& h6': {
      height: 45,
      display: 'flex',
      alignItems: 'center',
    },
  },
  targetMeta: {
    display: 'flex',
  },
  targetIcon: {
    width: '25%',
    height: 21,
    padding: `0 ${theme.spacing(1.3125)}px`,

    '& span': {
      opacity: 0.6,
      fontSize: 20,
    },
  },
  targetDone: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '75%',
    fontSize: 14,
    opacity: 0.6,
    padding: `0 ${theme.spacing(1.3125)}px`,
  },
}))

const TargetItem = ({
  title,
  done,
  total,
  color,
  className,
  ...rest
}: GoalItemProps) => {
  const classes = useStyles({ color })

  return (
    <Card
      data-testid='card'
      className={[classes.root, className].join(' ')}
      style={{ background: color }}
      {...rest}
    >
      <div className={classes.targetInfo}>
        <div className={classes.targetName}>
          <Typography data-testid='title' component='h4'>
            {title}
          </Typography>
        </div>
        <div className={classes.targetNumbers}>
          <Typography data-testid='done' component='h3'>
            {done}
          </Typography>
          <Typography data-testid='total' component='h6'>
            /{total}
          </Typography>
        </div>
      </div>
      <div className={classes.targetMeta}>
        <div className={classes.targetIcon}>
          <Icon icon='trending_up' />
        </div>
        <div className={classes.targetDone}>
          <Typography data-testid='weekly-stats' component='p'>
            1/1 this week
          </Typography>
        </div>
      </div>
    </Card>
  )
}

TargetItem.defaultProps = defaultProps

export default TargetItem
