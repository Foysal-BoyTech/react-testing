const reducer = (state = 1, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'handleChange':
      return (state = action.payload)
    default:
      return state
  }
}

export default reducer
