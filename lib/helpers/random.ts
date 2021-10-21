export function getRandomColor() {
  let color = '#'
  const letters = '0123456789ABCDEF'
  const addDigitToColor = (limit: number) => {
    color += letters[Math.round(Math.random() * limit)]
  }

  addDigitToColor(5)
  for (let i = 0; i < 5; i++) {
    addDigitToColor(15)
  }

  return color
}

export function randomInteger(min: number, max: number): number {
  if (!min && !max) return Math.random()
  if (min && (max === undefined || max === null)) return min
  if (max && (min === undefined || min === null)) return max

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function hash(string: string): number {
  let hash = 0
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i)
    hash += charCode
  }

  return hash
}

type Range = [number, number]

export function hashRanged(hash: number, range: Range): number {
  const distance = Math.abs(range[0] - range[1])
  return hash % distance
}
