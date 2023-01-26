import {useState} from 'react';


const TaskForm = ({todoList, setTodoList}) => {
    const [task, setTask] = useState({
        id:null,
        task:'',
        completed: false
    })

    const onChangeHandler = (e) => {
        console.log(e)
        setTask({...task, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let id = Math.ceil(Math.random() * 100000)
        console.log(id)
        let newTask =({...task, id:id})
        // console.log(task)


        // setTask({...task, id:Math.ceil(Math.random() * 100000)})
        setTodoList([...todoList, newTask]);

        setTask ({
            id:null,
            task:''
        })
    }



    return (
        <div>
            <div className="row m-5">
                <form onSubmit={handleSubmit} className="col-6 offset-3 bg-secondary rounded p-3">
                    <div className="mb-3 text-white">
                        <label htmlFor="task" className="form-label">Task</label>
                        <input type="text" className="form-control" name="task" value={task.task} onChange={onChangeHandler}/>
                    </div>

                    <button className="btn btn-warning">Add</button>

                </form>
            </div>
        </div>
    );
}

export default TaskForm;