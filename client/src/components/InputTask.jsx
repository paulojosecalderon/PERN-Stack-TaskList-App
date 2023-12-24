import React, { useState } from "react";

const InputTask = ()=>{
    const [description, setDescription] = useState('');
    
    const handleInputTask = async(e)=>{
        e.preventDefault();
        try {
            const postBody = {description};
            const postInputTask = await fetch('http://localhost:5000/api/v1/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postBody)
            })
            console.log(postInputTask)

        } catch (error) {
            console.error(error.message)
        }
    }

    return(
        <>
            <h1 className="text-center my-5">Task List App</h1>
            <form className="d-flex" onSubmit={handleInputTask}>
                <input className="form-control border border-primary" placeholder="Enter Your Task" 
                    onChange={(e)=>setDescription(e.target.value)} value={description}
                />
                <button className="btn btn-primary">Enter</button>
            </form>
        </>
    )
}

export default InputTask