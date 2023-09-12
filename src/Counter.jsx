import React from "react";
import { connect } from "react-redux";
function Counter(props){
    console.log("counter props:",props)
    return(
    <div>
        <h1>Counter:
            {props.c.count}
        </h1>
    <button onClick={()=>{props.dispatch({type:"inc"})}}>Increment</button>&nbsp;&nbsp;
    <button onClick={()=>{props.dispatch({type:"dec"})}}>Decrement</button>&nbsp;&nbsp;
    <button onClick={()=>{props.dispatch({type:"reset"})}}>Reset</button>
    </div>
    )
}
export default connect(function(store){return store})(Counter);