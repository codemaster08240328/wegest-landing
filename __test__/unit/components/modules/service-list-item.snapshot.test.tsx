import renderer from 'react-test-renderer'
import ServiceListItem from '@/components/modules/service-list-item'

import { categories as serviceCategories } from '@/__mocks__/service-categories-mock'

const category = serviceCategories[3]

describe('<ServiceListItem> snapshot', () => {
  it('renders properly with all required props', () => {
    expect(
      renderer
        .create(
          <ServiceListItem
            category={category}
            onClick={() => null}
            onSelectService={() => null}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders with a class', () => {
    expect(
      renderer
        .create(
          <ServiceListItem
            className='class-test'
            category={category}
            onClick={() => null}
            onSelectService={() => null}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })
})
