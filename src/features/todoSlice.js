import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'addTask',
    initialState:[],
    reducers:{
        Add:(state,action)=>{
            state.push(action.payload)
        },
        Remove:(state,action)=>{
            return state.filter((idx)=> idx.id !== action.payload)
        },
        DeleteAll: (state) => {
            state.splice(0, state.length);
          },
        Update: (state, action) => {
            const updatedTodo = action.payload;
            const todoToUpdate = state.find((todo) => todo.id === updatedTodo.id);
            if (todoToUpdate) {
              todoToUpdate.todo = updatedTodo.todo;
              todoToUpdate.completed = updatedTodo.completed;
            }
          },
        UpdateCheckbox:(state, action) => {
            const todoToUpdate = state.find((todo) => todo.id === action.payload);
            if (todoToUpdate) {
              todoToUpdate.completed = !todoToUpdate.completed;
            }
          },
    }
})

export const {Add,Remove,DeleteAll,Update,UpdateCheckbox}= todoSlice.actions

export default todoSlice.reducer