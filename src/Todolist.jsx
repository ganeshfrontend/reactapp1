import React from 'react';
function Todolist(){
var [todo,setTodo]=React.useState(["Ganesh","Rolls-Royals","Lamborghini"])
return(
<div className='mybox'>
<h1>Todolist</h1>

<ul>
{
todo.map((todos)=>{
return <li>{todos}</li>
})
}
</ul>
</div>
)
}
export default Todolist;