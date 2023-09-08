import Image from 'next/image'
import React, { FC } from 'react'
import './Tiles.css'

type TilesProps = {
  image?: string
  number: number
}

const Tiles: FC<TilesProps> = ({ image, number }) => {
  return (
    <div className={`tile ${number % 2 === 0 ? 'black-tile' : 'white-tile'}`}>
      <Image src={image ?? ''} alt="Chessboard" width={80} height={80} />
    </div>
  )
}

export default Tiles
