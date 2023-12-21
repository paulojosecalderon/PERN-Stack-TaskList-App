const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

//Routes
app.use('/api/v1/tasks', require('../server/routes/taskRoutes'));

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})