const STATE = { description: '', list: [] }

export default (state = STATE, action) => {
  return switchState(state, action)
}

const switchState = (state, action) => {
  let cases = {
    'DESCRIPTION_CHANGED': () => ({ ...state, description: action.payload }),
    'TODO_SEARCHED': () => ({ ...state, list: action.payload.data }),
    'TODO_ADDED': () => ({ ...state, description: '' }),
    'default': () => (state)
  };

  return (cases[action.type] || cases['default'])();
}