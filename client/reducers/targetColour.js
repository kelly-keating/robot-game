
function reducer (state = 'blue', action) {
  switch (action.type) {
    case 'TARGET_SQUARE':
      return 'blue'
    case 'REACH_TARGET':
      return 'purple'
    default:
      return state
  }
}

export default reducer 
