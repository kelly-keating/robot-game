import {
  getPosition,
  getCoords,
  getTileType,
  getCoordsBetween,
  checkPosition
} from './index'

test('getPosition works at origin', () => {
  const expected = {
    top: '100px',
    left: '100px'
  }
  const actual = getPosition({ x: 0, y: 0 })
  expect(actual).toEqual(expected)
})

test('getPosition works within board', () => {
  const expected = {
    top: '250px',
    left: '190px'
  }
  const actual = getPosition({ x: 3, y: 5 })
  expect(actual).toEqual(expected)
})

test.todo('getPosition deals with out of bounds')

test('getCoords works at origin', () => {
  const expected = {
    x: 0,
    y: 0
  }
  const actual = getCoords({ top: '100px', left: '100px' })
  expect(actual).toEqual(expected)
})

test('getCoords works within board', () => {
  const expected = {
    x: 7,
    y: 15
  }
  const actual = getCoords({ top: '550px', left: '310px' })
  expect(actual).toEqual(expected)
})

test.todo('getCoords deals with out of bounds')

test('getTileType simple return', () => {
  const board = [
    ['hello', null, null],
    [null, null, null],
    [null, null, null]
  ]
  const expected = 'hello'
  const actual = getTileType(board, { x: 0, y: 0 })
  expect(actual).toEqual(expected)
})

test('getTileType gets correct position', () => {
  const board = [
    [null, null, null],
    [null, null, 'hello'],
    [null, null, null]
  ]
  const expected = 'hello'
  const actual = getTileType(board, { x: 2, y: 1 })
  expect(actual).toEqual(expected)
})

test('getCoordsBetween gives empty array when adjacent (all directions)', () => {
  const expected = []
  const middle = { x: 1, y: 3 }
  const up = { x: 1, y: 2 }
  const down = { x: 1, y: 4 }
  const left = { x: 0, y: 3 }
  const right = { x: 2, y: 3 }
  
  expect(getCoordsBetween(middle, up)).toEqual(expected)
  expect(getCoordsBetween(middle, down)).toEqual(expected)
  expect(getCoordsBetween(middle, left)).toEqual(expected)
  expect(getCoordsBetween(middle, right)).toEqual(expected)
})

test('getCoordsBetween works on x (both directions)', () => {
  const ascending = [{ x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }]
  const descending = [{ x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }]
  const left = { x: 1, y: 3 }
  const right = { x: 5, y: 3 }
  
  expect(getCoordsBetween(left, right)).toEqual(ascending)
  expect(getCoordsBetween(right, left)).toEqual(descending)
})

test('getCoordsBetween works on y (both directions)', () => {
  const ascending = [{ x: 3, y: 7 }, { x: 3, y: 8 }, { x: 3, y: 9 }, { x: 3, y: 10 }]
  const descending = [{ x: 3, y: 10 }, { x: 3, y: 9 }, { x: 3, y: 8 }, { x: 3, y: 7 }]
  const top = { x: 3, y: 6 }
  const bottom = { x: 3, y: 11 }
  
  expect(getCoordsBetween(top, bottom)).toEqual(ascending)
  expect(getCoordsBetween(bottom, top)).toEqual(descending)
})

test('getCoordsBetween recognises one tile between', () => {
  const expected = [{ x: 3, y: 11 }]

  const up = { x: 3, y: 10 }
  const down = { x: 3, y: 12 }
  const left = { x: 2, y: 11 }
  const right = { x: 4, y: 11 }

  expect(getCoordsBetween(left, right)).toEqual(expected)
  expect(getCoordsBetween(right, left)).toEqual(expected)
  expect(getCoordsBetween(up, down)).toEqual(expected)
  expect(getCoordsBetween(down, up)).toEqual(expected)
})
