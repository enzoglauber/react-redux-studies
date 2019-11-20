import React from "react"

export function mapChildren(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child,  { ...props })
    })
}