import { cleanup, render, screen } from '@testing-library/react'
import ServiceChips from '@/components/modules/service-chips'

const chips = [
  {
    id: 'iron-man',
    title: 'Tony Stark',
  },
  {
    id: 'black-widow',
    title: 'Natasha Romanoff',
  },
  {
    id: 'hulk',
    title: 'Bruce Banner',
  },
]

describe('<ServiceChips> DOM', () => {
  afterEach(cleanup)

  it('renders its contents correctly', () => {
    render(<ServiceChips chips={chips} />)

    expect(screen.getByTestId('chips').childNodes.length).toBe(3)
    expect(
      screen.getByTestId('chips').firstElementChild?.querySelector('span')
        ?.textContent,
    ).toBe(chips[0].title)
    expect(
      screen.getByTestId('chips').children[1]?.querySelector('span')
        ?.textContent,
    ).toBe(chips[1].title)
    expect(
      screen.getByTestId('chips').lastElementChild?.querySelector('span')
        ?.textContent,
    ).toBe(chips[2].title)
  })
})
