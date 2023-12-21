const pool = require('../db');

const postTask = async(req,res)=>{
    try {
        const { description } = req.body;
        const createTask = await pool.query('INSERT INTO tasks(description) VALUES($1) RETURNING *;', [description]);
    
        res.json('Task posted!');
    } catch (err) {
        console.error(err.message)
    }
};

const getTasks = async(req,res)=>{
    const readTasks = await pool.query('SELECT * FROM tasks;');
    res.json(readTasks.rows);
}

const getTask = async(req,res)=>{
    try {
        const {id} = req.params;
        const readOneTask = await pool.query('SELECT * FROM tasks WHERE task_id = $1;', [id]); 
        
        res.json(readOneTask.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}

const deleteTask = async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteOneTask = await pool.query('DELETE FROM tasks WHERE task_id = $1 RETURNING *;', [id]);
        res.json('Task deleted!');

    } catch (err) {
        console.error(err.message);
    }
}

const putTask = async(req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;

        const updateTask = await pool.query('UPDATE tasks SET description = $1 WHERE task_id = $2 RETURNING *', [description, id]);

        res.json('Task updated!');

    } catch (err) {
        console.error(err.message);
    }
}

module.exports = {
    postTask,
    getTasks,
    getTask,
    deleteTask,
    putTask
}