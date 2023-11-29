import { useRef, useEffect } from "react";

function useRefFunction(){
const   inputref = useRef(null);

useEffect(()=>{
    inputref.current.focus();
}, [])


    return(
<div>
    <form>
        <label>Enter your name</label>
    <input ref= {inputref} type="text"></input>
    <button onClick={()=>inputref.current.focus()}>Click me </button>
    </form>
</div>
    );
}
export default useRefFunction;