const initialState={
    count:0
}
function counterReducer(state=initialState,action){
if(action.type==="inc")
{
    return {...state,count:state.count+1}
}
if(action.type==="dec")
{
    return {...state,count:state.count-1}
}
if(action.type==="reset")
{
    return {...state,count:initialState.count}
}
return state
}

export default counterReducer;