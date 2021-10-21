export function getFutureDates(days = 7, date: Date = new Date()) {
  const dates = []

  for (let i = 0; i < days; i++) {
    dates.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return dates.map((_date) => ({
    date: _date,
    day: _date.toString().split(' ')[0],
  }))
}

export function getWeekDates(date: Date = new Date()) {
  return getFutureDates()
}

export function getMonthDates(date: Date = new Date()) {
  return getFutureDates(30)
}

export function getFormattedDate(date: Date = new Date()) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return date.toLocaleDateString(undefined, dateOptions)
}

export function generateTimeSlots(fullDay = false) {
  const slots = []
  const now = new Date()
  const totalSlots = (fullDay ? 44 : (19 - new Date().getHours()) * 4) || 0

  if (fullDay) {
    now.setHours(9)
    now.setMinutes(0)
  } else {
    now.setMinutes(now.getMinutes() + 30)

    const minutes = now.getMinutes()
    const minuteSteps = [15, 30, 45, 60]
    const additionalMinutes = minuteSteps.find((step) => step > minutes) ?? 0

    now.setMinutes(additionalMinutes)
  }

  for (let i = 0; i < totalSlots; i++) {
    if (i > 0) now.setMinutes(Number(slots[i - 1]?.split(':').pop()) + 15)

    const [time] = now.toTimeString().split(' ')
    const [hours, minutes] = time.split(':')

    slots.push(`${hours}:${minutes}`)
  }

  return slots
}
