import React from 'react'
import renderer from 'react-test-renderer'
import RadioGroup from '@/components/elements/radio-group'

const comics = [
  { value: 'dc', label: 'DC' },
  { value: 'marvel', label: 'Marvel' },
]

describe('<RadioGroup> snapshot', () => {
  it('renders correctly when there are no props', () => {
    expect(renderer.create(<RadioGroup />).toJSON()).toMatchSnapshot()
  })

  it('renders correctly when the label is hidden', () => {
    expect(
      renderer.create(<RadioGroup options={comics} />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is className', () => {
    expect(
      renderer
        .create(<RadioGroup label='Studio' className='class-1' />)
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is helper text', () => {
    expect(
      renderer
        .create(
          <RadioGroup
            label='Studio'
            options={comics}
            helperText='Some important text'
          />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is a label', () => {
    expect(
      renderer.create(<RadioGroup label='Studio' options={comics} />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there is value', () => {
    expect(
      renderer
        .create(<RadioGroup label='Studio' value='dc' options={comics} />)
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when the layout is horizontal', () => {
    expect(
      renderer
        .create(
          <RadioGroup label='Studio' options={comics} layout='horizontal' />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })
})
