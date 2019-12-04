import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { dec, inc, stepChange } from './counterActions';

const Counter = props => (
  <div>
    <h1>{props.counter.number}</h1>
    <input onChange={props.stepChange}
      value={props.counter.step} type="number" />
    <button onClick={props.inc}>INC</button>
    <button onClick={props.dec}>DEC</button>
  </div>
)

const mapStateToProps = state => ({ counter: state.counter })

//mapeia a referencia do redux pra dentro do escopo do react via props
const mapDispatchToProps = dispatch => bindActionCreators({inc, dec, stepChange}, dispatch)

//decorator
export default connect(mapStateToProps, mapDispatchToProps)(Counter)