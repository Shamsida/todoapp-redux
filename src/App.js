import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteAll} from './features/todoSlice';
import { Task } from './components/Task';
import { AddTask } from './components/AddTask';

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.addTask);

  const [editFormVisibility, setEditFormVisibility]=useState(false);

  const [editTodo, setEditTodo]=useState('');

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Task editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <AddTask handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 1 && (
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(DeleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;
