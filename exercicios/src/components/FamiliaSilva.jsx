import React from "react"
import Membro from "./Membro";

export default (props) =>
    <div>
        <Membro nome="Enzo" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Mary" sobrenome={props.sobrenome}></Membro>
    </div>