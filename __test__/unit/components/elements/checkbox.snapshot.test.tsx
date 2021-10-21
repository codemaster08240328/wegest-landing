import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from '@/components/elements/checkbox'

describe('<Checkbox> snapshot', () => {
  it('renders correctly when there are no props', () => {
    expect(renderer.create(<Checkbox />).toJSON()).toMatchSnapshot()
  })

  it('renders correctly when there is label', () => {
    expect(
      renderer.create(<Checkbox label='Select Me' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is className', () => {
    expect(
      renderer.create(<Checkbox className='class-1' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when it is checked', () => {
    expect(renderer.create(<Checkbox checked />).toJSON()).toMatchSnapshot()
  })
})
