import React from 'react'
import renderer from 'react-test-renderer'
import TextField from '@/components/elements/text-field'

describe('<TextField> snapshot', () => {
  it('renders correctly when there are no props', () => {
    expect(renderer.create(<TextField />).toJSON()).toMatchSnapshot()
  })

  it('renders correctly when there is icon', () => {
    expect(
      renderer.create(<TextField icon='email' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there are icon and icolor', () => {
    expect(
      renderer.create(<TextField icon='email' icolor='primary' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is label', () => {
    expect(
      renderer.create(<TextField label='Email' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is className', () => {
    expect(
      renderer.create(<TextField className='class-1' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is value', () => {
    expect(
      renderer.create(<TextField value='Hello' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is helper text', () => {
    expect(
      renderer.create(<TextField helperText='Some important text' />).toJSON(),
    ).toMatchSnapshot()
  })
})
