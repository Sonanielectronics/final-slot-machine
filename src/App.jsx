import React from "react";
import SlotM3 from "./SlotM3.jsx";
import SlotM4 from "./SlotM4"
import SlotM5 from "./SlotM5"
import SlotM6false from "./SlotM6false"

let x = 'smile';
let y = 'smile';
let z = 'smile';  // we are define this is also under side the SlotM

let a = 'sad';
let b = 'smile';
let c = 'sad'; 

let m = 'sad';
let n = 'smile';
let p = 'smile'; 

const SlotM = () => {

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

const SlotM2 = (props) => {

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

const SlotMtrue = (props) => {

        return(
            <>
            <div className="slot_inner">
            <h1> 
                {m} {n} {p} 
            </h1>
            <h1> This is matching </h1>
            <hr/>
            </div>
            </>
        )

}

const SlotMfalse = (props) => {

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

const App = () => {

    return (
        <>
        <h1> welcome to <span style={ { fontWeight : 'bold' }} >slot machine game</span> </h1>
        <SlotM></SlotM>
        <SlotM></SlotM>
        <SlotM2 a="smile" b="sad" c="smile"/>
        <SlotM2 a="smile" b="smile" c="smile"/>
        <SlotM3 m="sad" n="sad" p="sad"/> 
        { (a === b && b === c) ?
            <div className="slot_inner">
            <h1> {a} {b} {c} </h1>
            <h1> This is matching </h1>
            <hr/>
            </div>
            :
            <div className="slot_inner">
            <h1> {a} {b} {c} </h1>
            <h1> This is not matching </h1>
            <hr/>
            </div> }
            { (m === n && n === p) ?
            <SlotMtrue/>:<SlotMfalse/>}
            { (m === n && n === p) ?
            <SlotM6false/>:<SlotM6false/>}
            <SlotM4></SlotM4>
            <SlotM5></SlotM5>
        </>
    );

}

export default App;
