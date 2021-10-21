import { getRandomColor, randomInteger } from '@/lib/helpers'

describe('getRandomColor function unit tests', () => {
  it('truthy', () => {
    expect(getRandomColor).not.toBeNull()
    expect(getRandomColor).toBeTruthy()
  })

  it('functionality', () => {
    expect(getRandomColor()).toContain('#')
    expect(getRandomColor()).not.toBeNull()
    expect(getRandomColor().length === 4 || getRandomColor().length === 7).toBe(
      true,
    )
  })
})

describe('randomInteger function unit tests', () => {
  it('truthy', () => {
    expect(randomInteger).not.toBeNull()
    expect(randomInteger).toBeTruthy()
  })

  it('functionality', () => {
    const randomTnt = randomInteger(3, 8)
    expect(randomTnt).toBeGreaterThanOrEqual(3)
    expect(randomTnt).toBeLessThanOrEqual(8)
  })
})
