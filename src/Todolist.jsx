import React,{useState} from "react";
import {connect} from "react-redux"
function Todolist(props){
console.log("todolist props:",props)
var [nt,setNt]=useState("")
    return(
        <div>
            <h1>Todolist:</h1>
            <input type="text" onChange={(e)=>{setNt(e.target.value)}}/>
            <button onClick={()=>{props.dispatch({type:"addtodo",payload:nt})}}>Addtodo</button>
                {props.t.todos.map(function(a,i){
                    return <li key={i}>{a}
                    <button onClick={()=>{props.dispatch({type:"delete",payload:i})}}>Delete</button>
                    </li>
                })}
            
        </div>
    )
}
export default connect(function(store){return store})(Todolist);