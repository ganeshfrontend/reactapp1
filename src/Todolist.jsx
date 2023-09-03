import React from "react";
function Todolist(){
console.log("Im Child")
var [todo,setTodo]=React.useState(["movie tickets","bus tickets","railway tickets","jet tickets"])
function add(){
console.log(" Im  Setter function to child")
var input1 = document.getElementById("input").value
setTodo([...todo,input1])
}
return(
<div>
<h1>Todolist:</h1>
<input type="text" id="input"/>
<button onClick={add}>Add</button>
{
 todo.map((a,i)=>{
 return <li key={i}>{a}</li>

})
}
</div>
)
}
export default Todolist;
// export default React.memo(Todolist);