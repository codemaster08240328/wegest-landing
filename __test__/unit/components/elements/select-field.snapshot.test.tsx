import React from 'react'
import renderer from 'react-test-renderer'
import SelectField from '@/components/elements/select-field'

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

describe('<SelectField> snapshot', () => {
  it('renders correctly when there are no props', () => {
    expect(renderer.create(<SelectField />).toJSON()).toMatchSnapshot()
  })

  it('renders correctly when there is icon', () => {
    expect(
      renderer
        .create(<SelectField icon='email' options={currencies} />)
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there are icon and icolor', () => {
    expect(
      renderer
        .create(
          <SelectField icon='email' icolor='primary' options={currencies} />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is label', () => {
    expect(
      renderer
        .create(<SelectField label='Email' options={currencies} />)
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is className', () => {
    expect(
      renderer
        .create(<SelectField className='class-1' options={currencies} />)
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is value', () => {
    expect(
      renderer
        .create(<SelectField value='USD' options={currencies} />)
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is helper text', () => {
    expect(
      renderer
        .create(
          <SelectField helperText='Some important text' options={currencies} />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })
})
