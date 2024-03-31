import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Cell({ letter, status }) {
  const className = status ? `${status} cell` : 'cell'
  return <span className={className}>{letter}</span>
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer)
  return (
    <p className='guess'>
      {range(5).map((colIndex) => (
        <Cell
          key={colIndex}
          letter={result ? result[colIndex].letter : undefined}
          status={result ? result[colIndex].status : undefined}
        />
      ))}
    </p>
  )
}

export default Guess
