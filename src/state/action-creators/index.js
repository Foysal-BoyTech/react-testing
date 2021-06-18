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
