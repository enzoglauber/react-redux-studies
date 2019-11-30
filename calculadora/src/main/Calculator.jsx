import './Calculator.css';

import React, { Component } from 'react';

import Button from '../componets/Button';
import Display from '../componets/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
}

export default class Calculator extends Component {
    state = { ...initialState }

    clearMemory () {
        console.log('limpar')
        this.setState({ ...initialState })
    }

    setOperation (operation) {
        console.log('operation', operation)
    }

    addDigit (digit) {
        if ( digit === '.' && this.state.displayValue.includes('.') ) { 
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        
        const currentValue = clearDisplay
                            ? ''
                            : this.state.displayValue
                            
        const displayValue = currentValue + digit

        this.setState({ displayValue, clearDisplay: false })

        if (digit !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }
    }

    render() {
        const addDigit = digit => this.addDigit(digit)
        const setOperation = operation => this.setOperation(operation)
        const clearMemory = () => this.clearMemory()

        return (
            <div className="calculator">
                <Display value={this.state.displayValue}></Display>
                <Button label="AC" click={clearMemory} triple></Button>
                <Button label="/" click={setOperation} operation></Button>
                <Button label="7" click={addDigit}></Button>
                <Button label="8" click={addDigit}></Button>
                <Button label="9" click={addDigit}></Button>
                <Button label="*" click={setOperation} operation></Button>
                <Button label="4" click={addDigit}></Button>
                <Button label="5" click={addDigit}></Button>
                <Button label="6" click={addDigit}></Button>
                <Button label="-" click={setOperation} operation></Button>
                <Button label="1" click={addDigit}></Button>
                <Button label="2" click={addDigit}></Button>
                <Button label="3" click={addDigit}></Button>
                <Button label="+" click={setOperation} operation></Button>
                <Button label="0" click={addDigit} double></Button>
                <Button label="." click={addDigit}></Button>
                <Button label="=" click={setOperation} operation></Button>
            </div>
        )
    }
}