import React from "react"
import {mapChildren} from "../utils/map-children"

export default (props) =>
    <div>
        <h1>Familia</h1>
        {mapChildren(props)}
        {/* {React.cloneElement(props.children,  { ...props })} */}
        {/* {React.cloneElement(props.children, 
            {sobrenome: props.sobrenome} 
        )} */}
        {/* {props.children}  */}
    </div>