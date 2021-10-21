import { cleanup, render, screen } from '@testing-library/react'
import IconButton from '@/components/elements/icon-button'

describe('<IconButton> DOM', () => {
  beforeEach(cleanup)

  it('renders correclty', () => {
    render(<IconButton icon='add' />)
    expect(
      screen.getByTestId('el-icon-button').querySelector('span.material-icons')
        ?.textContent,
    ).toBe('add')
  })

  it('renders with edge', () => {
    render(
      <IconButton icon='add' edge='start'>
        Hello!
      </IconButton>,
    )
    expect(
      screen.getByTestId('el-icon-button').querySelector('span')
        ?.firstElementChild?.textContent,
    ).toBe('add')
    expect(
      screen.getByTestId('el-icon-button').querySelector('span')
        ?.firstElementChild?.nextSibling?.textContent,
    ).toBe('Hello!')
  })

  it('renders with a class', () => {
    render(<IconButton icon='add' className='class-test' />)
    expect(screen.getByTestId('el-icon-button').className).toContain(
      'class-test',
    )
  })
})
