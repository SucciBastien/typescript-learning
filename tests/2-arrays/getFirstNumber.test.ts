import { describe, it, expect } from 'vitest'
import { getFirstNumber } from '../../functions/2-arrays'

describe('getFirstNumber', () => {
  it('retourne un nombre', () => {
    expect(typeof getFirstNumber([1, 2])).toBe('number')
    expect(typeof getFirstNumber([1, 2, 4])).toBe('number')
  })

  it('retourne le premier nombre d\'une liste non-vide', () => {
    expect(getFirstNumber([1, 2])).toBe(1)
    expect(getFirstNumber([5, 2])).toBe(5)
  })
  it('retourne -1 si la liste est vide', () => {
      expect(getFirstNumber([])).toBe(-1)
  })
})