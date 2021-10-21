import { cleanup, render, screen } from '@testing-library/react'
import ServiceList from '@/components/modules/service-list'

import { categories as serviceCategories } from '@/__mocks__/service-categories-mock'

describe('<ServiceList> DOM', () => {
  afterEach(cleanup)

  it('renders its contents correctly', () => {
    render(
      <ServiceList
        serviceCategories={serviceCategories.slice(0, 3)}
        onSelectService={() => null}
      />,
    )

    expect(screen.getByTestId('categories').childNodes.length).toBe(3)
    expect(
      screen
        .getByTestId('categories')
        .firstElementChild?.children[0]?.querySelector('h3')?.textContent,
    ).toBe(serviceCategories[0].title)
    expect(
      screen
        .getByTestId('categories')
        .lastElementChild?.children[0]?.querySelector('h3')?.textContent,
    ).toBe(serviceCategories[2].title)
  })
})
