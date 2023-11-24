import React, {  useMemo, useState } from "react";

function UseMemoFunction(number){

    console.log('Running expensive computation');
    let result=0;
    for(let i=0;i<1000000;i++){
        result+=number;
         
    } 

 return result;
}
 function ExpensComp(){
    const [number, setNumber] =useState(1);
    const [increment, setIncrement]=useState(0);
    const computerValue = useMemo(()=>
UseMemoFunction(number), [number]);



  return (
    <div>
      <p>Running usememo fucntion comp{computerValue}</p>
      <button onClick={()=>setNumber(number+1)}>Increase number </button>
      <button onClick={()=>setIncrement(increment+1)}>just increase number</button>
    </div>
  );
}


export default  ExpensComp;