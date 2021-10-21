import { cleanup, render, screen } from '@testing-library/react'
import Avatar from '@/components/elements/avatar'

describe('<Avatar> DOM', () => {
  afterEach(cleanup)

  it('renders without props', () => {
    render(<Avatar />)
    expect(screen.getByTestId('el-avatar').querySelector('svg')).toBeTruthy()
  })

  it('renders with image and name', () => {
    render(<Avatar src='/images/avatar-test.jpg' name='John Smith' />)
    expect(
      screen.getByTestId('el-avatar').querySelector('img')?.getAttribute('src'),
    ).toBe('/images/avatar-test.jpg')
  })

  it('renders with name', () => {
    render(<Avatar name='John Smith' />)
    expect(screen.getByTestId('el-avatar').textContent).toBe('JS')
  })

  it('renders correctly with a class', () => {
    render(<Avatar className='class-test' />)
    expect(screen.getByTestId('el-avatar').className).toContain('class-test')
  })
})
