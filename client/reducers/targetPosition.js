
function reducer (state = null, action) {
  switch (action.type) {
    case 'TARGET_SQUARE':
      return action.target
    case 'CLEAR_TARGET':
      return null
    default:
      return state
  }
}

export default reducer 
