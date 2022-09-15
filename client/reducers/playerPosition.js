
function reducer (state = { x: 1, y: 1 }, action) {
  switch (action.type) {
    case 'MOVE_PLAYER':
      return action.newPos
    default:
      return state
  }
}

export default reducer 
