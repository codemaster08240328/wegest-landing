import { cleanup, render, screen } from '@testing-library/react'
import Calendar from '@/components/modules/calendar'
import { getFormattedDate } from '@/lib/helpers'

describe('<Calendar> DOM', () => {
  afterEach(cleanup)

  it("renders today's date by default", () => {
    render(<Calendar onChange={() => null} />)

    const date = getFormattedDate()

    expect(screen.getByTestId('fullDate').textContent).toBe(date)
  })

  it('renders its contents correctly', () => {
    render(<Calendar onChange={() => null} />)

    const now = new Date()
    const today = now.toString().split(' ')[0]

    const tomorrow = new Date(now.setDate(now.getDate() + 1))
      .toString()
      .split(' ')[0]
    const fourDaysFromToday = new Date(now.setDate(now.getDate() + 3))
      .toString()
      .split(' ')[0]

    expect(
      screen.getByTestId('appointment').children[0]?.querySelector('span')
        ?.textContent,
    ).toBe(today)
    expect(
      screen.getByTestId('appointment').children[1]?.querySelector('span')
        ?.textContent,
    ).toBe(tomorrow)
    expect(
      screen.getByTestId('appointment').children[4]?.querySelector('span')
        ?.textContent,
    ).toBe(fourDaysFromToday)
  })
})
