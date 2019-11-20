import React from 'react'


export default props => {
    const APROVADOS = ['Enzo', 'Glauber', 'Lindo']
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(APROVADOS)}
        </ul>
    )
}