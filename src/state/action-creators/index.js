export const addNumber = (counter) => {
  return (dispatch) => {
    dispatch({
      type: 'addToCounter',
      payload: counter,
    })
  }
}

export const subtractNumber = (counter) => {
  return (dispatch) => {
    dispatch({
      type: 'subtractFromCounter',
      payload: counter,
    })
  }
}

export const inputChange = (e) => {
  return (dispatch) => {
    dispatch({
      type: 'handleChange',
      payload: parseInt(e.target.value),
    })
  }
}
