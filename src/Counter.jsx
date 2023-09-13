import React from "react";
import { connect } from "react-redux";
import { incrementCount,decrementCount,resetCount } from "./store/actions";
function Counter(props){
    console.log("counter props:",props)
    return(
    <div>
        <h1>Counter:
            {props.count}
        </h1>
    <button onClick={()=>{props.increment()}}>Increment</button>&nbsp;&nbsp;
    <button onClick={()=>{props.decrement()}}>Decrement</button>&nbsp;&nbsp;
    <button onClick={()=>{props.reset()}}>Reset</button>
    </div>
    )
}
function mapStateToProps(state){return state.c}

function mapDispatchToProps(dispatch)
{
return {
increment:()=>{dispatch(incrementCount())},
decrement:()=>{dispatch(decrementCount())},
reset:()=>{dispatch(resetCount())}
}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);