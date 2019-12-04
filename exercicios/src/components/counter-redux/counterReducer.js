const INITIAL_STATE = { step: 2, number: 0 }

export default function (state = INITIAL_STATE, action) {
  return switchState(state, action)
}

const switchState = function (state, action) {
  let cases = {
    'INC': () => {
      return { ...state, number: state.number + parseFloat(state.step) }
    },
    'DEC': () => {
      return { ...state, number: state.number - parseFloat(state.step) }
    },
    'STEP_CHANGE': () => {
      return { ...state, step: action.payload }
    },
    'default': () => {
      return state
    }
  };
  
  return (cases[action.type] || cases['default'])();
}