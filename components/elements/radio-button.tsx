import { createContext, useContext } from 'react'
import { Button, ButtonProps, Box } from '@material-ui/core'

interface IRadioGroupProps {
  value: string
  onChange: (newValue: string) => void
  children: React.ReactNode
  className?: string
}

interface IRadioButtonProps {
  value: string
  label?: string
}

interface IContext {
  value?: string
  onChange?: (newValue: string) => void
}

const RadioContext = createContext<IContext>({})

const RadioButtonGroup = ({
  value,
  onChange,
  children,
  className,
}: IRadioGroupProps) => {
  return (
    <Box className={className}>
      <RadioContext.Provider value={{ value, onChange }}>
        {children}
      </RadioContext.Provider>
    </Box>
  )
}

const RadioButton = ({
  label,
  value,
  ...rest
}: IRadioButtonProps & ButtonProps) => {
  const { value: v, onChange } = useContext(RadioContext)

  return (
    <Button
      variant={value === v ? 'contained' : 'outlined'}
      {...rest}
      onClick={() => onChange?.(value)}
    >
      {label}
    </Button>
  )
}

RadioButtonGroup.Button = RadioButton
export default RadioButtonGroup
