import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

interface IProps {
  label?: string
  className?: string
  name?: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  input: {
    flex: 'auto',
    marginLeft: theme.spacing(1),
  },
}))

const CustomCheckBox = (props: IProps) => {
  const classes = useStyles()
  const { className, onChange, checked, name, label, ...rest } = props

  return (
    <div
      data-testid='checkboxContainer'
      className={[classes.root, className].join(' ')}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            name={name}
            data-testid='checkbox'
            onChange={onChange}
            {...rest}
          />
        }
        label={label}
      />
    </div>
  )
}

CustomCheckBox.defaultProps = {}

export default CustomCheckBox
