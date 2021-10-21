import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Page from '@/components/page'
import TargetItem from '@/components/modules/target-item'
import { getRandomColor, randomInteger } from '@/lib/helpers'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(2.5),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    backgroundColor: '#F2F2F2',
  },
  targetDark: {
    background: theme.palette.primary.dark,
    color: 'white',
  },
  targetLight: {
    background: theme.palette.primary.light,
  },
}))

const Targets = () => {
  const classes = useStyles()

  return (
    <Page className={classes.root}>
      {Array.from({ length: 9 }, (v, i) => i).map((target, index) => {
        const key = `target-item-${target}-${index}`
        const color = getRandomColor()
        const total = randomInteger(1, 4)
        const data = {
          title: ['Crease', 'Cut', 'Treatments', 'Various', 'Barber Resale'][
            randomInteger(0, 4)
          ],
          done: randomInteger(0, total),
          total,
        }

        return (
          <TargetItem
            key={key}
            className={classes.targetDark}
            color={color}
            {...data}
          />
        )
      })}
    </Page>
  )
}

export default Targets
