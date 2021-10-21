import { Box, Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'
import Icon from './icon'
import clsx from 'clsx'

interface IProps {
  icon?: string
  title?: string
  date?: string
  children?: React.ReactNode
  className?: string
  raised?: boolean
}

const CustomCardContent = withStyles({
  root: {
    padding: 0,

    '&:last-child': {
      padding: 0,
    },
  },
})(CardContent)

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },

  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0.5),

    '& > span:first-child': {
      display: 'flex',
      alignItems: 'center',
    },
  },
}))

const CustomCard = ({
  className,
  icon,
  title,
  date,
  children,
  raised,
}: IProps) => {
  const classes = useStyles()

  return (
    <Card
      className={clsx(classes.root, className)}
      raised={raised}
      data-testid='el-card'
    >
      <CustomCardContent>
        {title && (
          <Box className={classes.title} component='div'>
            <Box component='span'>
              <Icon icon={icon} />
              <Typography variant='body1' color='secondary'>
                {title}
              </Typography>
            </Box>
            <Typography variant='body1' color='secondary'>
              {date}
            </Typography>
          </Box>
        )}
        <Box component='div' bgcolor={colors.grey[100]}>
          {children}
        </Box>
      </CustomCardContent>
    </Card>
  )
}

CustomCard.defaultProps = {
  icon: 'menu',
  raised: false,
}

export default CustomCard
