import React from 'react';
function Counter(){
    var [count,setCount]=React.useState(0)
return(
<div className="mybox">
<h1>Counter:{count}</h1>
</div>
)
}
export default Counter;