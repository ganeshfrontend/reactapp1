import React from "react";
import Child from "./Child";

function Refactoring(){
var [todos,setTodos]=React.useState(["RollsRoyals","HarleyDavidson","Lamborghini","Tata Harrier","Tata Altroz","Tata Nexon"])
function del(i){
// alert("hi"+i)
var temp=[...todos]
temp.splice(i,1)
setTodos([...temp])
}
return(
   <div className="mybox">
          <img src="/images/1.webp"  width="200px"/>
          <img src="/images/2.jpg"  width="200px"/>
          <img src="/images/3.jpg"  width="200px"/>
          <img src="/images/4.jpg"  width="200px"/>
          <img src="/images/5.webp"  width="200px"/>
          <img src="/images/6.webp"  width="200px"/>

    <h1>Todolist:</h1>
    <input type="text" />

    {
    todos.map((a,i)=>{

      return <Child c={a} d={del} i={i} ></Child>


    })
    }
   </div> 
)
}
export default Refactoring;