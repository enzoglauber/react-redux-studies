import React from 'react';
import ReactDom from 'react-dom';

// import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
import Membro from './components/Membro';

// import PrimeiroComponente from "./components/PrimeiroComponente";
// import { CompA, CompB as B } from "./components/DoisComponente";
const elemento = document.getElementById('root')

ReactDom.render(
  <div>
    <Familia sobrenome="Machado">
      <Membro nome="Enzo Glauber de Lima" ></Membro>
      <Membro nome="Mary"></Membro>
    </Familia>
    
    <Familia sobrenome="Legal">
      <Membro nome="Jeol"></Membro>
      <Membro nome="Carol"></Membro>
    </Familia>
    {/* <CompA valor="Olá eu sou A"></CompA>
    <B valor="Olá eu sou B"></B>
    <PrimeiroComponente valor="Bom dia!"/> */}
  </div>
, elemento)