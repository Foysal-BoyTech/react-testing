import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import './Counter.css'

export default function Counter() {
  // const [inputValue, setInputValue] = useState(1)

  const dispatch = useDispatch()
  const { addNumber, subtractNumber, inputChange } = bindActionCreators(
    actionCreators,
    dispatch,
  )

  // const handleChange = (e) => {
  //   setInputValue(parseInt(e.target.value))
  // }

  console.log(inputChange)
  // const addToCounter = () => {
  //   setCounterValue(counterValue + inputValue)
  // }
  // const subtractFromCounter = () => {
  //   setCounterValue(counterValue - inputValue)
  // }
  const counter = useSelector((state) => state.counter)
  const inputValue = useSelector((state) => state.input)

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
        onChange={(e) => inputChange(e)}
        className="text-center"
      />
      <button data-testid="add-btn" onClick={() => addNumber(inputValue)}>
        +
      </button>
    </div>
  )
}
