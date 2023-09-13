import React,{useState} from "react";
import {connect} from "react-redux"
function Todolist(props){
console.log("todolist props:",props)
var [nt,setNt]=useState("")
    return(
        <div>
            <h1>Todolist:</h1>
            <input type="text" onChange={(e)=>{setNt(e.target.value)}}/>
            <button onClick={()=>{props.addtodoitems(nt)}}>Addtodo</button>
                {props.todos.map(function(a,i){
                    return <li key={i}>{a}
                    <button onClick={()=>{props.deletetodoitems(i)}}>Delete</button>
                    </li>
                })}
            
        </div>
    )
}
function mapStateToProps(state){return state.t}

function mapDispatchToProps(dispatch)
{
    return {
        addtodoitems:(nt)=>{dispatch({type:"addtodo",payload:nt})},
        deletetodoitems:(i)=>{dispatch({type:"delete",payload:i})}
    }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todolist);