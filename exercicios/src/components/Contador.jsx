import React from 'react';

export default class Contador extends React.Component {
    maisUm = () => {
        this.props.numero++
    }

    render () {
        return (
            <div>
                <div>Número : {this.props.numero}</div>
                <button onClick={ this.maisUm }>Incrementar</button>
                <button>Decrementar</button>
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