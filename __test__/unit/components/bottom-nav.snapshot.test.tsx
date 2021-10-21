import renderer from 'react-test-renderer'
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

describe('<BottomNav> snapshot', () => {
  it('renders correctly', () => {
    expect(
      renderer.create(<BottomNav routes={routes} />).toJSON(),
    ).toMatchSnapshot()
  })
})
