import React from "react";
function Child(props){
console.log("Im Child")
return(
<div>
<ul className="mybox">
{
 <li> {props.c}
    <button onClick={()=>{props.d(props.i)}}>Delete</button>
    <button>Done</button>
    <button>Undo</button>
</li>
}
</ul>
</div>

)
}
export default Child;