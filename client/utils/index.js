export function getPosition ({ x, y }){
  return {
    top: `${y * 30 + 100}px`,
    left: `${x * 30 + 100}px`
  }
}

export function getCoords ({ top, left }) {
  return {
    x: (Number(left.replace('px', '')) - 100)/30,
    y: (Number(top.replace('px', '')) - 100)/30
  }
}

export function getTileType (board, coords) {
  return board[coords.y][coords.x]
}

export function getCoordsBetween (start, end) {
  const movePlane = start.x === end.x ? 'y' : 'x'
  const ascending = start[movePlane] < end[movePlane]
  const min = Math.min(start[movePlane], end[movePlane])
  const max = Math.max(start[movePlane], end[movePlane])

  const nums = []
  for (let i = min + 1; i < max; i++) {
    nums.push(i)
  }
  if (!ascending) nums.reverse()

  const coords = []
  nums.forEach((num) => {
    const constPlane = movePlane === 'x' ? 'y' : 'x'
    coords.push({ [movePlane]: num, [constPlane]: start[constPlane] })
  })
  return coords
}

export function checkPosition (target, player, board) {
  const xEqual = target.x === player.x
  const yEqual = target.y === player.y
  if (xEqual || yEqual) {
    const tilesBetween = getCoordsBetween(player, target)
    let allGood = true
    tilesBetween.forEach(tile => {
      const letter = getTileType(board, tile)
      if (letter !== 'f' && letter !== 'd-o') allGood = false
    })
    return allGood
  } else {
    return false
  }
}
