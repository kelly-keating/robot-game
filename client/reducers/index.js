import { combineReducers } from 'redux'

import playerPosition from './playerPosition'
import targetPosition from './targetPosition'
import targetColour from './targetColour'
import boardLayout from './boardLayout'
import playerMoves from './playerMoves'

export default combineReducers({
  playerPosition,
  targetPosition,
  targetColour,
  boardLayout,
  playerMoves
})
