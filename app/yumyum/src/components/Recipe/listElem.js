import React from "react";

export function ULElement(props){
    return(
        <ul>
            {props.children}
        </ul>
    )

}

export function OLElement(props){
    return(
        <ol>
            {props.children}
        </ol>
    )

}

export function LIElement(props){
    return(
    <li>
        <p className="description">{props.val}</p>
    </li>)
}