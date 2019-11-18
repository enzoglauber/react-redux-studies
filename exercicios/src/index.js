import React from 'react'
import ReactDom from 'react-dom'
import PrimeiroComponente from "./components/PrimeiroComponente";

const elemento = document.getElementById('root')

ReactDom.render(
  <div>
    <PrimeiroComponente valor="Bom dia!"/>
  </div>
, elemento)