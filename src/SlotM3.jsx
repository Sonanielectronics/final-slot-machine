import React from "react";

const SlotM3 = (props) => {

    let m = props.m;  // here variable define here is compulsory 
    let n = props.n;
    let p = props.p;

    if( m === n && n === p ){
        return(
            <>
            <div className="slot_inner">
            <h1> 
                {m} {n} {p} 
            </h1>
            <h1> This is matching </h1>
            <hr/>
            <h1> 
                {m} {n} {p} 
            </h1>
            <h1> This is matching </h1>
            <hr/>
            <h1> 
                {m} {n} {p} 
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
            <h1> {m} {n} {p} </h1>
            <h1> This is not matching </h1>
            <hr/>
            </div>
            </>
        )

    }

}

export default SlotM3;