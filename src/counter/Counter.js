import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0)
  const [inputValue, setInputValue] = useState(1)

  const handleChange = (e) => {
    setInputValue(parseInt(e.target.value))
  }
  const addToCounter = () => {
    setCounterValue(counterValue + inputValue)
  }
  const subtractFromCounter = () => {
    setCounterValue(counterValue - inputValue)
  }
  return (
    <div>
      <h2 data-testid="header">My Counter</h2>
      <h2 data-testid="counter">{counterValue}</h2>
      <button data-testid="subtract-btn" onClick={subtractFromCounter}>
        -
      </button>
      <input
        data-testid="input"
        type="number"
        value={inputValue}
        name="input"
        onChange={handleChange}
        className="text-center"
      />
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  )
}
