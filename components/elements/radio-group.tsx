import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

interface IOptions {
  value: string | number
  label: string
  disabled?: boolean
}

interface RadioGroupProps {
  className?: string
  options?: IOptions[]
  value?: string | number | null
  label?: string
  name?: string
  layout?: 'horizontal' | 'vertical'
  helperText?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}))

const CustomRadioGroup = ({
  className,
  label,
  value,
  name = 'radiogroup',
  layout = 'vertical',
  onChange,
  options = [],
  helperText,
}: RadioGroupProps) => {
  const classes = useStyles()

  return (
    <FormControl
      data-testid='class'
      component='fieldset'
      className={clsx(classes.root, className)}
    >
      {label && (
        <FormLabel data-testid='legend' component='legend'>
          {label}
        </FormLabel>
      )}
      <RadioGroup
        data-testid='radio-group'
        row={layout === 'horizontal'}
        aria-label={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option: IOptions) => (
          <FormControlLabel
            key={option.value}
            disabled={option.disabled}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      {helperText && (
        <FormHelperText data-testid='text'>{helperText}</FormHelperText>
      )}
    </FormControl>
  )
}

export default CustomRadioGroup
