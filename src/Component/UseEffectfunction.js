import React, { useEffect, useState } from "react";

function UseEffectFunction(){

  const [count, setCount] = useState(0);

 const handleClick = () =>{
    setCount(count+1);
 }
useEffect (()=>{
document.title = `your click is ${count}`;
});


 

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}


export default UseEffectFunction;