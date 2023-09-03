import React from "react";
import Todolist from "./Todolist"
function App() {
console.log("Im Parent")

var [count,setCount]=React.useState(1)
function inc(){
  console.log("Im Setter function to parent")
  setCount(10)
}
  return(
<div className="mybox">
<h1>Counter:{count}</h1>
<button onClick={()=>{inc()}}>Increment</button>
<Todolist></Todolist>
</div>
  )
}

export default App;
