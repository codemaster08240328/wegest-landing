export function shorthandName(fullName: string) {
  if (!fullName) {
    return null
  }

  const letters = fullName
    .replace(/[^\w\s]/g, '')
    .trim()
    .split(' ')
    .filter((t) => t)
    .filter((t, i, ar) => i === 0 || i === ar.length - 1)

  const l = letters?.[0]?.[0].toUpperCase()
  const r = letters?.[1]?.[0].toUpperCase()

  return `${l || ''}${r || ''}` || null
}

export function cashValue(value: number, currency = 'EUR') {
  return new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency,
  }).format(value)
}
