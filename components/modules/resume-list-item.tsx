import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@/components/elements/icon'
import clsx from 'clsx'

interface IProps {
  icon: string
  iconType?: 'outlined' | 'round' | 'sharp' | 'two-tone'
  value: string | number
  label?: string
  className?: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: 'none',
    display: 'flex',
    color: theme.palette.background.default,
    marginBottom: theme.spacing(0.5),
  },

  icon: {
    flex: '40%',
    fontSize: '3rem',
    fontWeight: 700,
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1.5),
  },

  value: {
    flex: '60%',
    backgroundColor: theme.palette.primary.light,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(1.5),
  },

  label: {
    textTransform: 'uppercase',
  },
}))

const ResumeListItem = ({
  icon,
  value,
  label,
  className,
  iconType,
}: IProps) => {
  const classes = useStyles()

  return (
    <li className={clsx(classes.root, className)}>
      <Box className={classes.icon}>
        <Icon icon={icon} fontSize='inherit' type={iconType} />
      </Box>
      <Box className={classes.value}>
        <div>
          <Typography variant='h4'>{value}</Typography>
          <Typography variant='body1' className={classes.label}>
            {label}
          </Typography>
        </div>
      </Box>
    </li>
  )
}

export default ResumeListItem
