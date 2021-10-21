import { fireEvent, render, screen } from '@testing-library/react'
import BottomNav from '@/components/layout/bottom-nav'

jest.mock('next/router', () => ({
  __esMModule: true,
  useRouter: () => ({
    pathname: '/page1',
    route: '/page1',
    push: jest.fn(),
  }),
}))

const routes = [
  { href: '/page1', label: 'page1', icon: 'looks_one' },
  { href: '/page2', label: 'page2', icon: 'looks_two' },
]

describe('<BottomNav> DOM', () => {
  beforeEach(() => render(<BottomNav routes={routes} />))

  it('renders active link correctly', () => {
    expect(screen.getByText('page1').classList).toContain('Mui-selected')
    expect(screen.getByText('page2').classList).not.toContain('Mui-selected')
  })

  it('navigation works correctly', () => {
    fireEvent.click(screen.getByText('page2'))
    expect(screen.getByText('page2').classList).not.toContain('Mui-selected')
  })
})
