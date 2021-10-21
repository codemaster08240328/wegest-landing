import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import MuiPhoneInput from 'mui-phone-input-ssr'

export interface IProps {
  className?: string
  value?: string | number | null
  label?: string
  name?: string
  defaultCountry?: string
  fullWidth?: boolean
  helperText?: string
  variant?: 'filled' | 'outlined' | 'standard'
  placeholder?: string
  margin?: 'dense' | 'none' | 'normal'
  regions?: string[] | string
  onChange?: (value: string) => void
}

const useStyles = makeStyles((theme) => ({
  root: {},
}))

const PhoneNumberTextField = ({
  className,
  onChange,
  regions = 'europe',
  defaultCountry = 'it',
  ...textFieldProps
}: IProps) => {
  const classes = useStyles()

  return (
    <MuiPhoneInput
      data-testid='class'
      className={clsx(classes.root, className)}
      defaultCountry={defaultCountry}
      regions={regions}
      onChange={onChange}
      {...textFieldProps}
    />
  )
}

export default PhoneNumberTextField
