import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

import styled, { keyframes } from 'styled-components'

import './Counter.css'

const Wrapper = styled.section`
  background: papayawhip;
  height: 20em;
  width: 30em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Button = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: 'number',

  // or we can define dynamic ones
  size: props.size || '.3em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 5s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

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

  // const addToCounter = () => {
  //   setCounterValue(counterValue + inputValue)
  // }
  // const subtractFromCounter = () => {
  //   setCounterValue(counterValue - inputValue)
  // }
  const counter = useSelector((state) => state.counter)
  const inputValue = useSelector((state) => state.input)

  return (
    <Wrapper>
      <Title data-testid="header">My Counter</Title>
      <Title
        data-testid="counter"
        className={`${counter >= 100 ? 'green' : ''} ${
          counter <= -100 ? 'red' : ''
        }`}
      >
        {counter}
      </Title>

      <Button
        data-testid="subtract-btn"
        onClick={() => subtractNumber(inputValue)}
      >
        -
      </Button>
      <Input
        data-testid="input"
        type="number"
        value={inputValue}
        name="input"
        onChange={(e) => inputChange(e)}
        className="text-center"
      />
      <Button
        primary
        data-testid="add-btn"
        onClick={() => addNumber(inputValue)}
      >
        +
      </Button>
      <Rotate>&lt; 🤣🤣 &gt;</Rotate>
    </Wrapper>
  )
}
