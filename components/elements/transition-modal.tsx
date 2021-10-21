import { makeStyles } from '@material-ui/core/styles'
import { Modal, Fade, Backdrop } from '@material-ui/core'
import clsx from 'clsx'

interface IProps {
  open: boolean
  onClose?: () => void
  children?: React.ReactNode
  className?: string
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'block',
  },
  paper: {
    margin: 20,
    outlineStyle: 'none',
  },
}))

const TransitionModal = ({ children, className, open, onClose }: IProps) => {
  const classes = useStyles()

  return (
    <div>
      <Modal
        closeAfterTransition
        className={classes.modal}
        open={open}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        onClose={onClose}
      >
        <Fade in={open}>
          <div className={clsx(classes.paper, className)}>{children}</div>
        </Fade>
      </Modal>
    </div>
  )
}

export default TransitionModal
