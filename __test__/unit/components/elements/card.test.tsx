import { cleanup, render, screen } from '@testing-library/react'
import Card from '@/components/elements/card'

describe('<Card> DOM', () => {
  afterEach(cleanup)

  it('renders with class', () => {
    render(<Card className='test-class' />)
    expect(screen.getByTestId('el-card').classList).toContain('test-class')
  })

  it('renders with header', () => {
    render(<Card icon='email' title='Hello test' date='2021-04-09' />)
    expect(screen.getByTestId('el-icon').textContent).toBe('email')
    expect(screen.getByTestId('el-icon').nextSibling?.textContent).toBe(
      'Hello test',
    )
  })

  it('renders with child', () => {
    render(<Card>Hello test</Card>)
    expect(
      screen.getByTestId('el-card').firstChild?.lastChild?.textContent,
    ).toBe('Hello test')
  })
})
