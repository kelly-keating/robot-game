import React from 'react'

import Terrain from './Terrain'

class Wall extends Terrain {
  // setup - this style enabled by "@babel/plugin-proposal-class-properties"
  img = '/images/wall.png'
}

export default Wall
