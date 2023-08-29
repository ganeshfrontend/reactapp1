import React from 'react';
function Todolist1(){
var [todo,setTodo]=React.useState([
    {
    title:"CurrentBill",
    status:true
    },
{
title:"HouseRent",
status:false
},
{
 title:"MilkBill",
 status:false
},
{
title:"DTHBill",
status:true
},
{
title:"PaperBill",
status:true
}
                   
])
function done(i){
var temp=[...todo]
temp.splice(i,1)
setTodo([...temp])
}
return(
<div className='tarun'>
<h1>Todolist1:</h1>
{
todo.map((todos,i)=>{
return <li className='tarun'>{todos.title} {todos.status}
<button onClick={done(i)}>Done</button>
</li>
})
}
</div>
)
}
export default Todolist1;