import React from 'react'
import clsx from 'clsx'
import { Icon, PropTypes, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export interface IProps {
  icon?: string
  icolor?: PropTypes.Color
  type?: string
  label?: string
  className?: string
  select?: boolean
  fullWidth?: boolean
  multiline?: boolean
  value?: string | number | null
  name?: string
  helperText?: string
  variant?: 'filled' | 'outlined' | 'standard'
  placeholder?: string
  margin?: 'dense' | 'none' | 'normal'
  rowsMax?: number
  children?: React.ReactNode
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const defaultProps: IProps = {
  icolor: 'primary',
  type: 'text',
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  icon: {
    flex: 'initial',
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(1),
  },
  input: {
    flex: 'auto',
  },
}))

const CustomText = (props: IProps) => {
  const classes = useStyles()
  const {
    icon,
    icolor,
    className,
    onChange,
    value,
    name,
    children,
    ...others
  } = props

  return (
    <div data-testid='class' className={clsx(classes.root, className)}>
      {icon && (
        <Icon data-testid='icon' className={classes.icon} color={icolor}>
          {icon}
        </Icon>
      )}
      <TextField
        data-testid='text'
        name={name}
        className={classes.input}
        value={value}
        onChange={onChange}
        {...others}
      >
        {children}
      </TextField>
    </div>
  )
}

CustomText.defaultProps = defaultProps

export default CustomText
