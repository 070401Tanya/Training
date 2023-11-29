// import React, {  useMemo, useState } from "react";

// function UseMemoFunction(number){

//     console.log('Running expensive computation');
//     let result=0;
//     for(let i=0;i<1000000;i++){
//         result+=number;
         
//     } 

//  return result;
// }
//  function ExpensComp(){
//     const [number, setNumber] =useState(1);
//     const [increment, setIncrement]=useState(0);
//     const computerValue = useMemo(()=>
// UseMemoFunction(number), [number]);



//   return (
//     <div>
//       <p>Running usememo fucntion comp{computerValue}</p>
//       <button onClick={()=>setNumber(number+1)}>Increase number </button>
//       <button onClick={()=>setIncrement(increment+1)}>just increase number</button>
//     </div>
//   );
// }


// export default  ExpensComp;



import React, {  useState, useMemo} from "react";

function ExpensComp(){
  
const [count, setCount]=useState(0);
const [doubles, setDoubles] = useState(0);

const doubleCount = useMemo(()=>{
console.log("Count is running fats");
return count+1;


}, [count]);


  return(
<div>
<p> count: {count}</p>
<p> double count: {doubleCount}</p>
<button onClick={()=>setCount(count+1)}>Click me</button>
<button onClick={() => setDoubles(doubles + 1)}>double count</button>


</div>
  );
}

export default ExpensComp;