import React from "react";
import Child from "./Child";

function Refactoring(){
var [todos,setTodos]=React.useState(["RollsRoyals","HarleyDavidson","Lamborghini","Tata Harrier","Tata Altroz","Tata Nexon"])
function add(){
var input1=document.getElementById("input").value
setTodos([...todos,input1])
}
var dell=React.useCallback(function(i){
    // alert("hi"+i)
    var temp=[...todos]
    temp.splice(i,1)
    setTodos([...temp])
    },[])
return(
   <div className="mybox">
          <img src="/images/1.webp" alt="" width="200px"/>
          <img src="/images/2.jpg" alt="" width="200px"/>
          <img src="/images/3.jpg" alt="" width="200px"/>
          <img src="/images/4.jpg" alt="" width="200px"/>
          <img src="/images/5.webp" alt="" width="200px"/>
          <img src="/images/6.webp" alt="" width="200px"/>

    <h1>Todolist:</h1>
    <input type="text" id="input" />
    <button onClick={add}>Add</button>
    {
    todos.map((a,i)=>{

      return <Child  key={i} c={a} d={dell} i={i} ></Child>


    })
    }
   </div> 
)
}
export default Refactoring;
//error