import React, {useState, useEffect} from "react";
import EditTask from "./EditTask";

const ListTask = ()=>{
    const [taskDescription, setTaskDesciption] = useState([]);
    
    const deleteTask = async(id)=>{
        try {
            const deleteTaskResponse = await fetch(`http://localhost:5000/api/v1/tasks/${id}`,{
                method: 'DELETE'
            })
            console.log(deleteTaskResponse);

            setTaskDesciption(taskDescription.filter(task => task.task_id!==id));


        } catch (error) {
            console.error(error.message);
        }
    }
    
   const getTaskList = async()=>{
        try {
            const getTaskListResponse = await fetch('http://localhost:5000/api/v1/tasks');
            const dataTaskList = await getTaskListResponse.json();
            console.log(dataTaskList);
            
            setTaskDesciption(dataTaskList);

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getTaskList();
    },[])

    return(
        <table className="table table-hover mt-4">
    <thead>
      <tr>
        <th>Task</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {/*
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
        </tr>
    */}
    {
        taskDescription.map(task => 
        <tr key={task.task_id}>
            <td>{task.description}</td>
            <td><EditTask task={task}/></td>
            <td><button className="btn btn-danger" onClick={()=>deleteTask(task.task_id)}>Delete</button></td>
        </tr>)
    }  
      
    </tbody>
  </table>
    )
}

export default ListTask