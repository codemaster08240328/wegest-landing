import React from 'react'
import renderer from 'react-test-renderer'
import TargetItem from '@/components/modules/target-item'

describe('<TargetItem> snapshot', () => {
  it('renders correctly when there are no props', () => {
    expect(renderer.create(<TargetItem />).toJSON()).toMatchSnapshot()
  })

  it('renders correctly when there title is passed', () => {
    expect(
      renderer.create(<TargetItem title='Shave' />).toJSON(),
    ).toMatchSnapshot()
  })

  it('renders correctly when there stats are passed', () => {
    expect(renderer.create(<TargetItem total={3} />).toJSON()).toMatchSnapshot()
  })

  it('renders correctly when there are title and stats', () => {
    expect(
      renderer
        .create(<TargetItem title='Pedicure' done={1} total={4} />)
        .toJSON(),
    ).toMatchSnapshot()
  })
})
