import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import TargetItem from '@/components/modules/target-item'

describe('<TargetItem> DOM', () => {
  afterEach(cleanup)

  it('className props changes root class', () => {
    render(<TargetItem className='class-1' />)
    expect(screen.getByTestId('card').classList).toContain('class-1')
  })

  it('renders with correct title', () => {
    render(<TargetItem title='Hairdresser' />)
    expect(screen.queryByTestId('title')?.textContent).toBe('Hairdresser')
  })

  it('renders with correct stats', () => {
    render(<TargetItem title='Cut' total={5} done={3} />)
    expect(screen.queryByTestId('done')?.textContent).toBe('3')
    expect(screen.queryByTestId('total')?.textContent).toBe('/5')
  })

  it('renders the chart icon', () => {
    render(<TargetItem />)
    expect(screen.queryByTestId('el-icon')?.nodeName).toBe('SPAN')
    expect(screen.queryByTestId('el-icon')?.className).toContain(
      'material-icons',
    )
  })

  it('renders weekly stats', () => {
    render(<TargetItem title='Cut' total={5} done={3} />)
    expect(screen.queryByTestId('weekly-stats')?.textContent).toContain(
      'this week',
    )
  })
})
