import { cleanup, render, screen } from '@testing-library/react'
import Drawer from '@/components/layout/drawer'

describe('<Drawer> DOM', () => {
  afterEach(cleanup)

  it('renders without icon', () => {
    render(<Drawer />)
    expect(screen.getByTestId('el-icon').textContent).toBe('menu')
  })

  it('renders with icon', () => {
    render(<Drawer icon='email' />)
    expect(screen.getByTestId('el-icon').textContent).toBe('email')
  })
})
