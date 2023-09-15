import { configureStore } from '@reduxjs/toolkit'
import  AddTaskReducer  from '../features/todoSlice'

export const store = configureStore({
  reducer: {
    addTask : AddTaskReducer
  },
});