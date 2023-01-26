import {useState} from  'react';
import './App.css';
import TaskForm from './components/TaskForm';
import DisplayTasks from './components/DisplayTasks';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id:123,
      task:"First Task",
      completed: false
    }
  ])


  return (
    <div className="App">
      <div className="title border-bottom border-warning pb-2">
        <div className="container mt-3">
          <h2 className='text-warning'>Task App</h2>
        </div>
      </div>
      <DisplayTasks todoList={todoList} setTodoList={setTodoList}/>
      <TaskForm todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
