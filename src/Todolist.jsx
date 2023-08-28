import React from 'react';
function Todolist(){
var [todo,setTodo]=React.useState(["Ganesh","Rolls-Royals","Lamborghini"])
function del(i){
var temp=[...todo]
temp.splice(i,1)
setTodo([...temp])
}
return(
<div className='tarun'>
<h1>Todolist:</h1>

<ul>
{
todo.map((todos,i)=>{
return <li className='tarun'>
    {todos}
    <button onClick={()=>{del(i)}}>Delete</button>
</li>
})
}
</ul>
</div>
)
}
export default Todolist;