import React from "react";

let m = 'sad';
let n = 'smile';
let p = 'smile'; 

const SlotM6false = (props) => {

    // let a = props.a ;
    // let b = props.b ;
    // let c = props.c ;

    let{a,b,c} = props // this is object destructuring
    if( a === b && b === c ){
    // if( props.a === props.b && props.b === props.c ){
        // if( (props.a === props.b) && (props.b === props.c) ){
        return(
            <>
            <div className="slot_inner">
            <h1> 
                {a} {b} {c} 
            </h1>
            <h1> This is matching </h1>
            <hr/>
            </div>
            </>
        )
    }else{

        return(
            <>
            <div className="slot_inner">
            <h1> {a} {b} {c} </h1>
            <h1> This is not matching </h1>
            <hr/>
            </div>
            </>
        )

    }

}

export default SlotM6false;