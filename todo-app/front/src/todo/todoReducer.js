const STATE = {
  description: 'Ler livro',
  list: [{
    _id: 1,
    description: "Pagar fatura do cartão",
    done: true
  }, {
    _id: 2,
    description: "Reunião com a equipe às 10:00",
    done: false
  }, {
    _id: 3,
    description: "Consulta médicas na terça depois do almoço",
    done: false
  }]
}

export default (state = STATE, action) => {
  return switchState(state, action)
}

const switchState = (state, action) => {
  let cases = {
    'DESCRIPTION_CHANGED': () => ({ ...state, description: action.payload }),
    'default': () => (state)
  };

  return (cases[action.type] || cases['default'])();
}