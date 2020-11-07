import React, { ChangeEvent, useEffect, useState } from 'react';


// Create a component with 4 buttons (add, subtract, multiply, and divide) 
// and two inputs (both numbers) and the buttons should perform the calculation on their label to the numbers

export default function Calculator (props:{a:number, b:number}){
    
    const [ number1, setNumber1 ] = useState(props.a);
    const [ number2, setNumber2 ] = useState(props.b);
    const [ res, setRes ] = useState(0);

    function onClickAdd(){
          setRes(number1 + number2);   
    }

    function onClickSubstrat(){
        setRes(number1 - number2);   
    }

    function onClickDivide(){
        setRes(number1 / number2);   
    }

    function onClickmultiply(){
        setRes(number1 * number2);   
    }

    function changeNbr1Handler(event:ChangeEvent<HTMLInputElement>){
        setNumber1( Number(event.target.value)) ;
    }

    function changeNbr2Handler(event:ChangeEvent<HTMLInputElement>){
        setNumber2( Number(event.target.value)) ;
    }

    

    return <> 
        <h1> Calculator </h1>
        <p > { res } </p>
        <input type ="number" onChange = {changeNbr1Handler} value={ number1 }  /> A <br/>
        <input type ="number"  onChange = {changeNbr2Handler}  value={  number2 }  /> B <br/>

        <button onClick = {onClickAdd}>add</button>
        <button onClick = {onClickSubstrat}>Substrat</button>
        <button onClick = {onClickDivide}>Divide</button>
        <button onClick = {onClickmultiply}>Multipl</button>

    </>
}