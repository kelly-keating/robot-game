
function reducer (state = [], action) {
  switch (action.type) {
    case 'SET_MOVES':
      return action.moves
    case 'MOVE_PLAYER':
      state.shift()
      return [...state]
    default:
      return state
  }
}

export default reducer 
