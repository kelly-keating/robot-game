import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getPosition } from '../utils'

function Player ({ position }) {
  const {top, left} = getPosition(position)
  const style = {
    position: 'absolute',
    width: '30px',
    height: '30px',
    zIndex: 99999,
    top,
    left
  }

  return (
    <>
      <img src='/images/robot.png' style={style} />
    </>
  )
}

function mS2P (state) {
  return {
    position: state.playerPosition
  }
}

export default connect(mS2P)(Player)
