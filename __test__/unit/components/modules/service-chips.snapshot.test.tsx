import React from 'react'
import renderer from 'react-test-renderer'
import ServiceChips from '@/components/modules/service-chips'

const chips: any = [
  {
    id: 'chip0',
    title: 'Testing chips',
  },
]

describe('<ServiceChips> snapshot', () => {
  it('renders correctly when there are no props', () => {
    expect(renderer.create(<ServiceChips />).toJSON()).toMatchSnapshot()
  })

  it('renders correctly when there is className', () => {
    expect(
      renderer.create(<ServiceChips className='class-1' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when chips are passed', () => {
    expect(
      renderer.create(<ServiceChips chips={chips} />).toJSON(),
    ).toMatchSnapshot()
  })
})
