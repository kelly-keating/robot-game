import React from 'react'
import { connect } from 'react-redux'

import Terrain from './Terrain'

class Floor extends Terrain {
  // setup - this style enabled by "@babel/plugin-proposal-class-properties"
  img = '/images/floor.png'

  handleClick = () => {
    this.props.dispatch({ type: 'TARGET_SQUARE', target: { x: this.props.x, y: this.props.y } })
  }

  render() {
    return super.render({ onClick: this.handleClick })
  }
}

export default connect()(Floor)
