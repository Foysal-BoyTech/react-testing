import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import './Counter.css'

export default function Counter() {
  const [inputValue, setInputValue] = useState(1)

  const dispatch = useDispatch()
  const { addNumber, subtractNumber } = bindActionCreators(
    actionCreators,
    dispatch,
  )

  const handleChange = (e) => {
    setInputValue(parseInt(e.target.value))
  }
  // const addToCounter = () => {
  //   setCounterValue(counterValue + inputValue)
  // }
  // const subtractFromCounter = () => {
  //   setCounterValue(counterValue - inputValue)
  // }
  const counter = useSelector((state) => state.counter)

  return (
    <div>
      <h2 data-testid="header">My Counter</h2>
      <h2
        data-testid="counter"
        className={`${counter >= 100 ? 'green' : ''} ${
          counter <= -100 ? 'red' : ''
        }`}
      >
        {counter}
      </h2>

      <button
        data-testid="subtract-btn"
        onClick={() => subtractNumber(inputValue)}
      >
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
      <button data-testid="add-btn" onClick={() => addNumber(inputValue)}>
        +
      </button>
    </div>
  )
}
