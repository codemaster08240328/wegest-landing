import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'

import TextField, {
  IProps as TextFieldProps,
} from '@/components/elements/text-field'

interface IOptions {
  value: string | number
  label: string
}

interface SelectProps extends TextFieldProps {
  options?: IOptions[]
  value?: string | number
}

const defaultProps: SelectProps = {
  options: [],
  value: '',
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}))

const CustomSelect = (props: SelectProps) => {
  const classes = useStyles()
  const { className, options, ...rest } = props

  return (
    <TextField select className={clsx(classes.root, className)} {...rest}>
      {options?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

CustomSelect.defaultProps = defaultProps

export default CustomSelect
