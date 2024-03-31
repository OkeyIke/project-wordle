import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ value, answer }) {
  const result = checkGuess(value, answer)
  console.log(result)
  return (
    <p className='guess'>
      {range(5).map((colIndex) => (
        <span key={colIndex} className={`${result ? result[colIndex].status: undefined} cell`}>
          {value ? value[colIndex] : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess
