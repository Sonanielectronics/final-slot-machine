import React from "react";

let x = 'smile';
let y = 'smile';
let z = 'smile';  // we are define this is also under side the SlotM

const SlotM4 = (props) => {

// let x = 'smile';
    // let y = 'smile';
    // let z = 'smile';  // we can also define x , y & z here


    // if( (x === y && y === z) ){
    // if( x === y && y === z ){
        if( (x === y) && (y === z) ){ // we are add 3 types to if conddition into and condition 
            return(
                <>
                <div className="slot_inner">
                <h1> 
                    {x} {y} {z} 
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
                <h1> {x} {y} {z} </h1>
                <h1> This is not matching </h1>
                <hr/>
                </div>
                </>
            )
    
        }

}

export default SlotM4;