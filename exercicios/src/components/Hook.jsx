import React, { useState, useEffect } from 'react';

export default props => {
    const [contador, setContador] = useState(100)
    const [status, setNomeQueEuQuiserPARouIMPAR] = useState('Par')

    useEffect(() => {
        contador % 2 === 0 
        ? setNomeQueEuQuiserPARouIMPAR('Par')
        : setNomeQueEuQuiserPARouIMPAR('Impar')
    }, [contador])

    return (
        <div>
            <h1>{contador} | {status}</h1>
            <button onClick={ () => setContador(contador + 1) }> Inc
            </button>
        </div>
    )
}