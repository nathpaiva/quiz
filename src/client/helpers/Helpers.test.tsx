import { shuffle, spliceArray } from '.'

describe('Helpers', () => {
  test('should shuffle array', () => {
    const arr = [1, 2, 3]
    const newArr = shuffle(arr)
    expect(newArr).not.toBe(arr)
  })
  test('should shuffle array', () => {
    const arr = ['1', '2', '3', '4', '5', '6']
    // TODO: change this code to have the correct type
    const newArr = spliceArray(arr as any, 2)
    expect(newArr.length).toBe(3)
  })
})
