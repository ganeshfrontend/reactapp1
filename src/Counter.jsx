import React from "react";
function Counter(props){
var [count,setCount]=React.useState(props.s)
function inc(){
    setCount(count+props.i)
}
function dec(){
    setCount(count-props.i)
}

return(
<div className="mybox">

<h1>Counter:{count}</h1>
<button onClick={()=>{inc()}}>Increment</button>
<button onClick={()=>{dec()}}>Decrement</button>

</div>
)
}
export default Counter;