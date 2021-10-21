import React from 'react'
import renderer from 'react-test-renderer'
import PhoneNumberTextField from '@/components/elements/phone-number-text-field'

describe('<PhoneNumberTextField> snapshot', () => {
  it('renders correctly when there are no props', () => {
    expect(renderer.create(<PhoneNumberTextField />).toJSON()).toMatchSnapshot()
  })

  it('renders correctly when defaultCountry is passed', () => {
    expect(
      renderer.create(<PhoneNumberTextField defaultCountry='se' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is label', () => {
    expect(
      renderer.create(<PhoneNumberTextField label='Phone' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is className', () => {
    expect(
      renderer.create(<PhoneNumberTextField className='class-1' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is value', () => {
    expect(
      renderer.create(<PhoneNumberTextField value='123454578' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is helper text', () => {
    expect(
      renderer
        .create(<PhoneNumberTextField helperText='Some important text' />)
        .toJSON(),
    ).toMatchSnapshot()
  })
})
