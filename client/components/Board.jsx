import React from 'react'
import { connect } from 'react-redux'

import Wall from './terrain/Wall'
import Door from './terrain/Door'
import Floor from './terrain/Floor'

function Board ({ layout }) {

  const getComponent = (type, x, y) => {
    const props = {
      key: `tile-${x}-${y}`,
      x,
      y
    }

    switch (type) {
      case 'w':
        return <Wall {...props} />
      case 'd':
      case 'd-o':
        return <Door {...props} isOpen={type === 'd-o'} />
      case 'f':
      default:
        return <Floor {...props} />
    }
  }

  const tiles = layout.map((arr, row) => arr.map((type, col) => getComponent(type, col, row)))

  return tiles
}

function mS2P (globalState) {
  return {
    layout: globalState.boardLayout
  }
}

export default connect(mS2P)(Board)
