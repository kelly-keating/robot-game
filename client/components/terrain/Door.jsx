import React from 'react'
import { connect } from 'react-redux'

import Terrain from './Terrain'

class Door extends Terrain {

  getImg () {
    return `/images/door-${this.props.isOpen ? 'open' : 'closed'}.png`
  }

  handleClick = () => {
    this.props.dispatch({
      type: 'SET_DOOR',
      x: this.props.x,
      y: this.props.y,
      setOpen: !this.props.isOpen
    })
  }

  render(){
    return super.render({ 
      onClick: this.handleClick
    })
  }

}

export default connect()(Door)
