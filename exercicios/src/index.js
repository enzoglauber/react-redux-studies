import React from 'react';
import ReactDom from 'react-dom';
import Hook from './components/Hook';

// import Contador from './components/Contador';
// import FamiliaSilva from './components/FamiliaSilva';
// import Familia from './components/Familia';
// import Membro from './components/Membro';
// import FamiliaSilva from './components/FamiliaSilva';
// import PrimeiroComponente from "./components/PrimeiroComponente";
// import { CompA, CompB as B } from "./components/DoisComponente";
// import ComponenteComFuncao  from "./components/ComponenteComFuncao";
// import Pai  from "./components/Pai";
// import ComponentClasse  from "./components/ComponentClasse";

const elemento = document.getElementById('root')

ReactDom.render(
  <div>
    <Hook></Hook>
    {/* <Contador numero={10}></Contador> */}
    {/* <ComponentClasse valor="Sou um componente de classe!"></ComponentClasse> */}
    {/* <Pai></Pai> */}
    
    {/* <ComponenteComFuncao></ComponenteComFuncao> */}

    {/* <Familia sobrenome="Machado">
      <Membro nome="Enzo Glauber de Lima"></Membro>
      <Membro nome="Mary"></Membro>
    </Familia> */}
    
    {/* <Familia sobrenome="Legal">
      <Membro nome="Jeol"></Membro>
      <Membro nome="Carol"></Membro>
    </Familia> */}

    {/* <FamiliaSilva sobrenome="Legal"></FamiliaSilva> */}
    {/* <CompA valor="Olá eu sou A"></CompA>
    <B valor="Olá eu sou B"></B>
    <PrimeiroComponente valor="Bom dia!"/> */}
  </div>
, elemento)