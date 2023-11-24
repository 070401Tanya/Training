import React, {useState} from "react";

function PractiseState(){
const [count, setCount] = useState (0);
const handleClick = (event) =>{
    console.log("count has incremented" , event);
    setCount(count+1);
}
const handleDec = (event) =>{
    alert("count has decremented", event);
    setCount(count-1);
}
return(
<div>
    <h6>Increment and decrement counter button</h6>
<p>This is increment and decrement counter button using useState hook </p>
<p>Count is {count}</p>
<button onClick={handleClick}>Increment</button>
<button onClick={handleDec}>Decrement</button>

</div>
);
}
export default PractiseState;