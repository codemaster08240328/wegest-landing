import {
  getFutureDates,
  getWeekDates,
  getMonthDates,
  getFormattedDate,
} from '@/lib/helpers'

describe('getFutureDates function unit tests', () => {
  it('truthy', () => {
    expect(getFutureDates).not.toBeNull()
    expect(getFutureDates).toBeTruthy()
  })

  it('functionality', () => {
    expect(getFutureDates()).toHaveLength(7)
    expect(getFutureDates(3)).toHaveLength(3)
    expect(getFutureDates(9)).toHaveLength(9)
    expect(getFutureDates(17)).toHaveLength(17)

    const today = new Date()
    const tomorrow = new Date(today.setDate(today.getDate() + 1))
    const dayAfterTomorrow = new Date(tomorrow.setDate(tomorrow.getDate() + 1))
    const twoDaysAfterTomorrow = new Date(
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1),
    )

    expect(getFutureDates()[0].date.toDateString()).toBe(
      new Date().toDateString(),
    )
    expect(getFutureDates(5, new Date())[3].date.toDateString()).toBe(
      twoDaysAfterTomorrow.toDateString(),
    )
  })
})

describe('getWeekDates function unit tests', () => {
  it('truthy', () => {
    expect(getWeekDates).not.toBeNull()
    expect(getWeekDates).toBeTruthy()
  })

  it('functionality', () => {
    const today = new Date()
    expect(getWeekDates()).toHaveLength(7)
    expect(getWeekDates()[0].date.toDateString()).toBe(today.toDateString())
  })
})

describe('getMonthDates function unit tests', () => {
  it('truthy', () => {
    expect(getMonthDates).not.toBeNull()
    expect(getMonthDates).toBeTruthy()
  })

  it('functionality', () => {
    const today = new Date()
    expect(getMonthDates()).toHaveLength(30)
    expect(getMonthDates()[0].date.toDateString()).toBe(today.toDateString())
  })
})

describe('getFormattedDate function unit tests', () => {
  it('truthy', () => {
    expect(getFormattedDate).not.toBeNull()
    expect(getFormattedDate).toBeTruthy()
  })

  it('functionality', () => {
    const date = new Date('1999-05-05')
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: undefined,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    expect(getFormattedDate(date)).toBe(
      date.toLocaleDateString(undefined, dateOptions),
    )
  })
})
