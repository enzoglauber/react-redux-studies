import React from 'react';

export default class Contador extends React.Component {
    state =  {
        numero: this.props.numero
    }

    maisUm = () => {
        this.alterarNumero(1)
        // this.setState( { numero: this.state.numero+1 } )
        // this.state.numero++
    }
    
    menosUm = () => {
        this.alterarNumero(-1)
        // this.setState({ numero: this.state.numero-1 })
    }

    alterarNumero = diferenca => {
        this.setState( { numero: this.state.numero + diferenca } )
    }

    render () {
        return (
            <div>
                <div>Número : {this.state.numero}</div>
                <button onClick={ this.maisUm }>Incrementar</button>
                <button onClick={ this.menosUm }>Decrementar</button>
                <hr/>
                <button onClick={ () => this.alterarNumero(10) }>Incrementar10</button>
                <button onClick={ () => this.alterarNumero(-10)  }>Decrementar10</button>
            </div>
        )
    }
    // 1° Solução usando contrutor - Bind
    // constructor (props) {
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this )
    // }

    // 2° Solução - Função Arrow (onClick)
    // <button onClick={() => this.maisUm()}>Incrementar</button>

    // 3° Solução - Função Arrow
    // maisUm = () => {
    //     this.props.numero++
    //     console.log(this);
    // }
}