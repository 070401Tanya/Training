import React from "react";

function MasterPage({children}){
    return(
<div>
<header>This is my header</header>
<main> 
    {children}
</main>
<footer>This is my foo6ter </footer>
</div>
    );
}
export default MasterPage;
