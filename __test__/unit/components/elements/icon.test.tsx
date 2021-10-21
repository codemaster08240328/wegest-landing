import { cleanup, render, screen } from '@testing-library/react'
import Icon from '@/components/elements/icon'

describe('<Icon> DOM', () => {
  beforeEach(cleanup)

  it('renders correclty', () => {
    render(<Icon icon='add' />)
    expect(screen.getByTestId('el-icon').textContent).toBe('add')
  })

  it('renders with type', () => {
    render(<Icon icon='add' type='round' />)
    expect(screen.getByTestId('el-icon').className).toContain(
      'material-icons-round',
    )
  })

  it('renders with a class', () => {
    render(<Icon icon='add' className='class-test' />)
    expect(screen.getByTestId('el-icon').className).toContain('class-test')
  })
})
