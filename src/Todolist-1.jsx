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
temp[i].status=!temp[i].status
setTodo([...temp])
}
function add(){
var input=document.getElementById("input").value
setTodo([...todo,{title:input}])
}
return(
<div className='tarun'>
<h1>Todolist1:</h1>
<input type="text"  id="input"/>
<button onClick={()=>{add()}}>AddTask</button>
{
todo.map((todos,i)=>{
return (
<div className='tarun'>
<li style={(todos.status===true)?{backgroundColor:"blue"}:{backgroundColor:"purple"}}>{todos.title}
<button onClick={()=>{done(i)}}>Done</button>
<button >Undo</button>
</li>
</div>
)
})
}
</div>
)
}
export default Todolist1;