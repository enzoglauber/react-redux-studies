import React from 'react'
import ReactDom from 'react-dom'
// import PrimeiroComponente from "./components/PrimeiroComponente";
import { CompA, CompB as B } from "./components/DoisComponente";

const elemento = document.getElementById('root')

ReactDom.render(
  <div>
    <CompA valor="Olá eu sou A"></CompA>
    <B valor="Olá eu sou B"></B>
    {/* <PrimeiroComponente valor="Bom dia!"/> */}
  </div>
, elemento)