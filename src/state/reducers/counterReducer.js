const reducer = (state = 0, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'addToCounter':
      return state + action.payload
    case 'subtractFromCounter':
      return state - action.payload
    default:
      return state
  }
}

export default reducer
