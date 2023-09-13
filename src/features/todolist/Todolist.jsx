import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addtodo,deletetodo} from "./todolistSlice";
function Todolist(){
//  var x=   useSelector((state)=>{return state})
//  console.log(x)
var [nt,setNt]=React.useState("");
var {todos}=useSelector((state)=>{return state.t})
var dispatch =useDispatch()
    return(
        <div className="mybox">
            <h1>Todolist:</h1>
            <input type="text" onChange={(e)=>{setNt(e.target.value)}}/>
            <button onClick={()=>{dispatch(addtodo(nt))}}>Addtodo</button>
            <ul>
                {
                    todos.map(function(a,i){
                        return <li>{a}
                        <button onClick={()=>{dispatch(deletetodo(i))}}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;