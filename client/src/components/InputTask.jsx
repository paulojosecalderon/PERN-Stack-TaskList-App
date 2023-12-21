import React,{useState} from "react";

const InputTask = ()=>{
    const [description, setDescription] = useState('');

    const onSubmitForm = async(e)=>{
        e.preventDefault();

        try {
            const postBody = {description};
            const postReq = await fetch('http://localhost:5000/api/v1/tasks',{
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(postBody)
            })

            console.log(postReq);
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <>
            <h1 className="text-center my-5">Task List</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input type="text" placeholder="Enter Task" className="form-control border border-primary"
                    value={description} onChange={(e)=>setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </>
    )
};

export default InputTask