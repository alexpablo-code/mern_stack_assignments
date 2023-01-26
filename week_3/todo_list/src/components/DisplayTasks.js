const DisplayTasks = ({todoList, setTodoList}) => {

    const onChangeHandler = (id) => {
        let updatedList = todoList.map((task) => {
            if(task.id == id) {
                if(task.completed == false){
                    task.completed= true;
                }else{
                    task.completed =false
                }
            }
            return task;
        } )
        setTodoList(updatedList)
    }

    const deleteHandler = (id) => {
        let updatedList = todoList.filter((task) => task.id !== id)
        setTodoList(updatedList)
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-8 offset-2">
                        <h1 className="text-center">All Tasks</h1>
                    
                        {todoList.map((task) => (
                            <div key={task.id} className="bg-secondary mb-3 p-2 rounded">
                                <div className=" d-flex justify-content-between text-white ">
                                    {
                                        task.completed?
                                        <p style={{textDecoration: "line-through"}} >{task.task}</p> :
                                        <p style={{textDecoration: "none"}} >{task.task}</p>
                                    }
                                    {/* <p style={{textDecoration: "line-through"}} >{task.task}</p> */}
                                    <input type="checkbox" onChange={() => onChangeHandler(task.id)}/>
                                </div>
                                <div>
                                    <button className="btn btn-danger btn-sm" onClick={()=> deleteHandler(task.id)} >Delete</button>
                                </div>
                            </div>
                            
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayTasks;