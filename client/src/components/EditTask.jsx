import React, {useState} from "react";

const EditTask = ({task})=>{
    const updateTask = async(id)=>{
        try {
            const putBody = {description};
            const putTask = await fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(putBody)
            })
            console.log(putTask)
            window.location = '/';
        } catch (error) {
            console.error(error.message);
        }
    }

    const [description, setDescription] = useState(task.description);
    return(
        <>
           
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${task.task_id}`}>
            Edit
            </button>

            {/*id = #id${some unique id} */}

            <div className="modal fade" id={`id${task.task_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={()=>setDescription(task.description)}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Your Task</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={()=>setDescription(task.description)}></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className="form-control" onChange={e=>setDescription(e.target.value)} value={description}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" onClick={()=>updateTask(task.task_id)}>Edit</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                        onClick={()=>setDescription(task.description)}>Close</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default EditTask;