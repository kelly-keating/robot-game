import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosition } from '../../utils'

class Terrain extends Component {

  getImg () {
    return this.img
  }

  render (opt) {
    const { top, left } = getPosition({ x: this.props.x, y: this.props.y })
    const style = {
      position: 'absolute',
      top,
      left,
      width: '30px',
      height: '30px'
    }

    return (
      < >
        <img style={style} src={this.getImg()} {...opt} />
      </>
    )
  } 
}

export default Terrain
