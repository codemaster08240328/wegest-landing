import renderer from 'react-test-renderer'
import ServiceList from '@/components/modules/service-list'

import { categories as serviceCategories } from '@/__mocks__/service-categories-mock'

describe('<ServiceList> snapshot', () => {
  const selectedServiceIDs = [
    '123AD49254',
    '1C38DF9658',
    '2D38DE9559',
    '3638DB9B',
    '343BDC9051',
  ]

  it('renders properly with props', () => {
    expect(
      renderer
        .create(
          <ServiceList
            serviceCategories={serviceCategories.slice(0, 3)}
            onSelectService={() => null}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })

  it('renders properly with selectedServices props', () => {
    expect(
      renderer
        .create(
          <ServiceList
            selectedServices={selectedServiceIDs}
            serviceCategories={serviceCategories.slice(0, 3)}
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
          <ServiceList
            className='class-test'
            serviceCategories={serviceCategories.slice(0, 3)}
            onSelectService={() => null}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot()
  })
})
