import React, { useEffect, useState, Component } from 'react'
import { connect } from 'react-redux'

import Board from './Board'
import Player from './Player'
import Target from './Target'

import { checkPosition, getCoordsBetween } from '../utils'

function App (props) {

  console.log(Component)
  
  const { dispatch, target, player, board, moves } = props

  const [tick, setTick] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setTick(tick => !tick)
    }, 500)

    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (moves?.length) {
      const next = moves[0]
      dispatch({ type: 'MOVE_PLAYER', newPos: next })
    }
  }, [tick])

  useEffect(() => {
    if (moves?.length === 0) {
      dispatch({ type: 'REACH_TARGET' })
    }

    const t = setTimeout(() => {
      dispatch({ type: 'CLEAR_TARGET' })
    }, 500)

    return () => clearTimeout(t)
  }, [moves])

  useEffect(() => {
    dispatch({ type: 'SET_MOVES', moves: [] })
    if (target){
      const canMove = checkPosition(target, player, board)
      console.log()
      if (canMove) {
        const arr = [...getCoordsBetween(player, target), {...target}]
        dispatch({ type: 'SET_MOVES', moves: arr })
      } else {
        dispatch({ type: 'INVALID_TARGET' })
      }
    }
  }, [target])

  return (
    <>
      <h1>Game!</h1>
      <p>{tick}</p>
      <Board />
      <Player />

      {props.target && <Target />}
    </>
  )
}

function mS2P (state) {
  return {
    target: state.targetPosition,
    player: state.playerPosition,
    board: state.boardLayout,
    moves: state.playerMoves
  }
}

export default connect(mS2P)(App)
