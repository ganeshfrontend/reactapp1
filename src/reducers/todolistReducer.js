const initialState={
    todos:["come fast","don't late"]
}
function todolistReducer(state=initialState,action){
if(action.type==="addtodo")
{
    return {...state,todos:[...state.todos,action.payload]}
}
if(action.type==="delete")
{
    var temp=[...state.todos]
    temp.splice(action.payload,1)
    return {...state,todos:[...temp]}
}
return state
}
export default todolistReducer;