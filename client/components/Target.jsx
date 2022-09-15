import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getPosition } from '../utils'

function Target ({ position, colour }) {
  const {top, left} = getPosition(position)
  const style = {
    position: 'absolute',
    width: '30px',
    height: '30px',
    zIndex: 9999,
    top,
    left
  }

  return (
    <>
      <img src={`/images/x/${colour}.png`} style={style} />
    </>
  )
}

function mS2P (state) {
  return {
    position: state.targetPosition,
    colour: state.targetColour
  }
}

export default connect(mS2P)(Target)
