const express = require('express');
const app = express();
const env = require('./configs/envVariables.js');
const connectDB = require('./configs/connectDB.js');

connectDB() // calling connectDB function


// check route to see if the server is running
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1")
})


const UserRouter = require('./routes/users.route.js');
app.use("/api/v1/users", UserRouter);

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`)
})













//config : setup server,connect to database etc.
//controllers : handle request logic
//middlewares : custom functions to handle requests and responses
//models : define data schemas and interact with the database
//routes : define endpoints and their logic
//utils : utility functions and helpers
//.env : environment variables
//app.js : entry point of the application
//package.json : configuration file and dependencies for project