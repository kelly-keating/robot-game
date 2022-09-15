const layout = [
  ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
  ['w', 'f', 'f', 'f', 'w', 'f', 'f', 'f', 'f', 'd', 'f', 'w'],
  ['w', 'f', 'f', 'f', 'd', 'f', 'w', 'w', 'w', 'w', 'f', 'w'],
  ['w', 'f', 'f', 'f', 'w', 'f', 'w', 'f', 'f', 'f', 'f', 'w'],
  ['w', 'f', 'w', 'w', 'w', 'f', 'w', 'f', 'f', 'f', 'f', 'w'],
  ['w', 'f', 'w', 'f', 'f', 'f', 'w', 'w', 'w', 'w', 'w', 'w'],
  ['w', 'f', 'w', 'f', 'f', 'f', 'w', 'f', 'f', 'f', 'f', 'w'],
  ['w', 'f', 'w', 'f', 'f', 'f', 'w', 'f', 'f', 'f', 'f', 'w'],
  ['w', 'f', 'w', 'f', 'f', 'f', 'w', 'f', 'f', 'f', 'f', 'w'],
  ['w', 'f', 'w', 'w', 'd', 'w', 'w', 'w', 'w', 'w', 'd', 'w'],
  ['w', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'w'],
  ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
]

function reducer (state = layout, action) {
  switch (action.type) {
    case 'SET_DOOR':
      return state.map((row, y) => row.map((tile, x) => (x === action.x && y === action.y) ? (action.setOpen ? 'd-o' : 'd') : tile))
    default:
      return state
  }
}

export default reducer 
