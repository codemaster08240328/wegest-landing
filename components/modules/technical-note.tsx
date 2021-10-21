import { makeStyles, Typography } from '@material-ui/core'
import Card from '@/components/elements/card'
import { ITechNote } from '@/shared/@types'

interface IProps {
  note?: ITechNote
  className?: string
}

const useStyles = makeStyles((theme) => ({
  note: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}))

const TechnicalNote = ({ note, className }: IProps) => {
  const classes = useStyles()

  return (
    <Card raised className={className} title='Technical Note' date={note?.date}>
      {note?.notes?.map((item) => (
        <Typography
          key={item.id}
          variant='body1'
          className={classes.note}
        >{`${item.type}: ${item.note}`}</Typography>
      ))}
    </Card>
  )
}

export default TechnicalNote
