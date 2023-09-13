import {createSlice} from "@reduxjs/toolkit";
const initialState={
    todos:["come fast","take bike"]
}
export const todolistSlice=createSlice(
    {
        name:"todolist",
        initialState,
        reducers:{
            addtodo:(state,action)=>{state.todos.push(action.payload)},
            deletetodo:(state,action)=>{state.todos.splice(action.payload,1)}
        }
    }
)
export var {addtodo,deletetodo} = todolistSlice.actions
export default todolistSlice.reducer;