import React, {useEffect, useState} from "react";

const InputTask = ()=>{
    const [description, setDescription] = useState('');

    const handleSubmitForm = async(e)=>{
        e.preventDefault();
        try {
            const postBody = {description};

            const inputTask = await fetch('http://localhost:5000/api/v1/tasks/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postBody)
            })

            console.log(inputTask);

        } catch (error) {
            console.error(error.message);
        }

    }


    return(
        <>
            <h1 className="text-center my-5">Task App</h1>
            <form className="d-flex" onSubmit={handleSubmitForm}>
                <input placeholder="Enter your task" className="form-control border border-success rounded-pill"
                    value={description} onChange={e=> setDescription(e.target.value)}
                />
                <button className="btn btn-success">Submit</button>
            </form>
        </>
    )
}

export default InputTask;