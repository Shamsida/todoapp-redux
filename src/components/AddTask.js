import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { Remove , UpdateCheckbox} from '../features/todoSlice';

export const AddTask = ({handleEditClick, editFormVisibility}) => {

  const dispatch = useDispatch();
  const removeItem = (id) => {
    console.log(id);
    dispatch(Remove(id))
  }

  const todos = useSelector((state)=>state.addTask);

  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(UpdateCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span onClick={()=>handleEditClick(todo)}><Icon icon={edit2}/></span>
                  <span  onClick={()=> removeItem(todo.id)} ><Icon icon={trash}/></span>
                </>
              )}
        </div>
    </div>
  ))
}