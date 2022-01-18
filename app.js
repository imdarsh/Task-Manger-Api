const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB =  require('./db/connect');
const notfound = require('./middleware/404'); 
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();


// Middleware
app.use(express.static('./public'));
app.use(express.json());


// Routes
app.use('/api/v1/tasks',tasks);
app.use(errorHandlerMiddleware);
app.use(notfound);



const port = 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on ${port}...`));
    }
    catch(error) {
        console.log(error);
    }
}

start();