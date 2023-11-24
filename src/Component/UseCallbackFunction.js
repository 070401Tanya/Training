import React, { useState, useCallback } from "react";
import Count from "./Count";

function ChildComp({onClick}){
    console.log('child rendered');
    return(

<button onClick={onClick}>click me</button>
    );
}
function ParentComp(){

    const [count, setCount] = useState(0);
    const handleClick =useCallback(()=>{
        setCount  ((prevCount)=>prevCount+1);
    }, []);

return(
    <div>
        <ChildComp onClick={handleClick}/>
        <p>Count: {count}</p>
    </div>
    );
}
export default ParentComp;