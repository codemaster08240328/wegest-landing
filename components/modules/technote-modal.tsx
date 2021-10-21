import {
  Typography,
  FormControl,
  FormControlLabel,
  Checkbox,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@/components/elements/transition-modal'
import TextField from '@/components/elements/text-field'
import ColorButton from '@/components/elements/color-button'
import { ITypology } from '@/shared/@types'

interface IProps {
  open: boolean
  onClose?: () => void
  onAdd?: () => void
  type?: ITypology[]
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1.5),
    borderRadius: 10,
  },

  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
}))

const TechnoteModal = ({ open, onClose, onAdd, type }: IProps) => {
  const classes = useStyles()

  return (
    <Modal open={open} className={classes.root} onClose={onClose}>
      <Typography variant='subtitle1' align='center'>
        Add Technical Note
      </Typography>
      <FormControl>
        <FormControlLabel control={<Checkbox />} label='Print in Plug always' />
        {type?.map((item) => (
          <TextField
            key={item.id}
            placeholder={item.type}
            variant='outlined'
            margin='dense'
          />
        ))}
      </FormControl>
      <Box className={classes.actions}>
        <ColorButton color='indianRed' onClick={onClose}>
          Close
        </ColorButton>
        <ColorButton color='seaGreen' onClick={onAdd}>
          Add
        </ColorButton>
      </Box>
    </Modal>
  )
}

export default TechnoteModal
