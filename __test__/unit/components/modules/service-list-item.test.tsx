import { cleanup, render, screen } from '@testing-library/react'
import ServiceListItem from '@/components/modules/service-list-item'

import { categories as serviceCategories } from '@/__mocks__/service-categories-mock'

const category = serviceCategories[0]

describe('<ServiceListItem> DOM', () => {
  afterEach(cleanup)

  const data = {
    category,
    onClick: () => null,
    onSelectService: () => null,
  }

  it('renders its contents correctly', () => {
    render(<ServiceListItem {...data} />)

    expect(screen.getByTestId('el-icon')?.textContent).toBe('arrow_right')
    expect(screen.getByTestId('title')?.textContent).toBe(category.title)
    expect(screen.getByTestId('services').childNodes.length).toBe(13)
    expect(
      screen
        .getByTestId('services')
        .firstElementChild?.querySelector('span.MuiTypography-root')
        ?.textContent,
    ).toBe(category.services[0].title)
    expect(
      screen
        .getByTestId('services')
        .lastElementChild?.querySelector('span.MuiTypography-root')
        ?.textContent,
    ).toBe(category.services[12].title)
  })
})
