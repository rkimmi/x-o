const things = (state = [], action) => {
  switch (action.type) {
    case 'ADD_THING':
      return [
        ...state,
        {
          thing: action.thing
        }
      ]

    default:
      return state
  }
}

export default things
