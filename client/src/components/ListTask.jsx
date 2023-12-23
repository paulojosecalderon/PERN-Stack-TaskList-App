import React, {useEffect, useState} from "react";

const ListTask = ()=>{
    const [taskList, setTaskList] = useState([]);
    
    const getTasks = async()=>{
        try {
            const response = await fetch('http://localhost:5000/api/v1/tasks/');
            const data = await response.json();

            console.log(data);
            setTaskList(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getTasks();
    }, [])

    return(
        <>
            {" "}
            <table className="table table-hover my-5">
                <thead>
                <tr>
                    <th>Description</th>
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
                        taskList.map(task => 
                            <tr key={task.task_id}>
                                <td>{task.description}</td>
                                <td><button className="btn btn-primary">Edit</button></td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                            )
                     }
                
                </tbody>
            </table>
        </>
    )
};

export default ListTask;