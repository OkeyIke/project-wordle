import React from 'react'
import { range } from '../../utils'

function Guess({ value }) {
  return (
    <p className='guess'>
      {range(5).map((colIndex) => (
        <span key={colIndex} className='cell'>
          {value ? value[colIndex] : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess
