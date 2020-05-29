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
            <p className="description"><span className="bold-part">{props.val1.length > 1 ? props.val1  : null}</span>  {props.val2.length > 1 ? props.val2 : null}</p>
    </li>)
}