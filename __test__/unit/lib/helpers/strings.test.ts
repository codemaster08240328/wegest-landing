import { shorthandName } from '@/lib/helpers'

describe('shorthandName function unit tests', () => {
  it('truthy', () => {
    expect(shorthandName).not.toBeNull()
    expect(shorthandName).toBeTruthy()
  })

  it('functionality', () => {
    expect(shorthandName('')).toBeNull()
    expect(shorthandName('$')).toBeNull()
    expect(shorthandName('john smith')).toBe('JS')
    expect(shorthandName('johnsmith')).toBe('J')
  })
})
