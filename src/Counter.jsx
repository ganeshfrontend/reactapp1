import React from 'react';
function Counter(props){
    var [count,setCount]=React.useState(props.start)
function inc(start,i){
setCount(count+props.i)
}
function dec(start,i){
    setCount(count-props.i)
    }
    
return(
<div className="tarun">
<h1>Counter:{count}</h1>

<button onClick={inc}>Increment</button>
<button onClick={dec}>Decrement</button>
</div>
)
}
export default Counter;