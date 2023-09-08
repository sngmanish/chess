import React, { FC } from 'react'
import './Chessboard.css'
import Tiles from './components/Tiles'

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

interface Piece {
  image: string
  x: number
  y: number
}

const pieces: Piece[] = []

for (let p = 0; p < 2; p++) {
  const type = p === 0 ? 'b' : 'w'
  const y = p === 0 ? 7 : 0

  pieces.push({ image: `pieces/${type}Rook.svg`, x: 0, y })
  pieces.push({ image: `pieces/${type}Rook.svg`, x: 7, y })
  pieces.push({ image: `pieces/${type}Knight.svg`, x: 1, y })
  pieces.push({ image: `pieces/${type}Knight.svg`, x: 6, y })
  pieces.push({ image: `pieces/${type}Bishop.svg`, x: 2, y })
  pieces.push({ image: `pieces/${type}Bishop.svg`, x: 5, y })
  pieces.push({ image: `pieces/${type}Queen.svg`, x: 3, y })
  pieces.push({ image: `pieces/${type}King.svg`, x: 4, y })
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: 'pieces/bPawn.svg', x: i, y: 6 })
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: 'pieces/wPawn.svg', x: i, y: 1 })
}
export interface ChessboardProps {}

const Chessboard: FC<ChessboardProps> = ({}) => {
  const board = []

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2
      let image = undefined

      pieces.forEach(p => {
        if (p.x === i && p.y === j) {
          image = p.image
        }
      })
      board.push(<Tiles key={image} image={image} number={number} />)
    }
  }

  return <div id="chessboard">{board}</div>
  // return <>ChessBoard Init</>
}

export default Chessboard
