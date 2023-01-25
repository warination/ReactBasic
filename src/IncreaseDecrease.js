import React, { useState } from 'react'

export const IncreaseDecrease = () => {
    const[count, setCount] = useState(0)
  return (
    <div className='container'>
        <h1>{count}</h1>
        <button className='btn' onClick={()=> setCount(count+1)}>Increase</button>
        <button className='btn' onClick={()=> setCount(0)}>Rest</button>
        <button className='btn' onClick={()=> setCount(count-1)}>Decrease</button>

    </div>
  )
}
